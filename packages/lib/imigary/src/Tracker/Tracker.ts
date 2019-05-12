
import 'tracking';
import compose from 'lodash/fp/compose';
import { TrackerAbstract } from './TrackerAbstract';
import { Coordinates } from '../Squares/types';

const { tracking } = (window as any);

export function CustomTracker() {

  // Constructor
  CustomTracker.prototype.track = function(pixels: number, width: number, height: number) {
    // @ts-ignore
    tracking.Fast.THRESHOLD = 6;
  
    const corners = compose<number[], number[], number[], number[], number[]>(
      this.corners(width, height),
      this.depth4ToDepth1,
      this.blur(width, height),
      this.grayscale(width, height),
    )(pixels);

    const pairs = this.getPairs(corners);
  
    this.emit('track', pairs);
  }
  // /Constructor
  
  CustomTracker.prototype.grayscale = (width: number, height: number) => (pixels: number[]): number[] => {
    // @ts-ignore
    return tracking.Image.grayscale(pixels, width, height, true);
  }
  
  CustomTracker.prototype.blur = (width: number, height: number) => (pixels: number[]): number[] => {
    // @ts-ignore
    return tracking.Image.blur(pixels, width, height, 3);
  }
  
  CustomTracker.prototype.corners = (width: number, height: number) => (pixels: number[]): number[] => {
    // @ts-ignore
    return tracking.Fast.findCorners(pixels, width, height)
  }
  
  CustomTracker.prototype.depth4ToDepth1 = (depth4: number[]): number[] => {
    const depth1 = new Array(depth4.length / 4);
    for (let i = 0, j = 0; i < depth4.length; i+= 4, ++j) {
      depth1[j] = depth4[i];
    }
    return depth1;
  }

  CustomTracker.prototype.getPairs = (data: number[]) => {
    return data.reduce<number[][]>((result: number[][], value: any, index: number, array: number[]) => {
      if (index % 2 === 0) {
        result.push(array.slice(index, index + 2));
      }
      return result;
    }, []);
  }
}

tracking.inherits(CustomTracker, tracking.Tracker);

// export class Tracker extends TrackerAbstract {
//   public track(pixels: number[], width: number, height: number) {
//     // @ts-ignore
//     tracking.Fast.THRESHOLD = 6;
  
//     const corners = compose<number[], number[], number[], number[], number[]>(
//       this.corners(width, height),
//       this.depth4ToDepth1,
//       this.blur(width, height),
//       this.grayscale(width, height),
//     )(pixels);

//     const pairs = this.getPairs(corners as Coordinates);
  
//     this.emit('track', new TrackModel(pairs));
//   }
//   // /Constructor
  
//   protected grayscale(width: number, height: number) { 
//     return (pixels: number[]): number[] => {
//       return tracking.Image.grayscale(pixels, width, height, true);
//     }
//   }
  
//   protected blur(width: number, height: number) { 
//     return (pixels: number[]): number[] => {
//       return tracking.Image.blur(pixels, width, height, 3);
//     }
//   }
  
//   protected corners(width: number, height: number) {
//     return (pixels: number[]): number[] => {
//       return tracking.Fast.findCorners(pixels, width, height)
//     }
//   }
  
//   protected depth4ToDepth1(depth4: number[]): number[] {
//     const depth1 = new Array(depth4.length / 4);
//     for (let i = 0, j = 0; i < depth4.length; i+= 4, ++j) {
//       depth1[j] = depth4[i];
//     }
//     return depth1;
//   }

//   protected getPairs(data: Coordinates): Coordinates[] {
//     return data.reduce<Coordinates[]>((result: Coordinates[], value: any, index: number) => {
//       if (index % 2 === 0) {
//         result.push(data.slice(index, index + 2) as Coordinates);
//       }
//       return result;
//     }, []);
//   }
// }