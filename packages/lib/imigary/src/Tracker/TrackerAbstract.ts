import { Coordinates } from '../Squares/types';
import { EventEmitter } from 'events';

export abstract class TrackerAbstract extends EventEmitter {
  public abstract track(pixels: Uint8ClampedArray, width: number, height: number): void;
  protected abstract getPairs(data: Coordinates): Coordinates[];
  protected abstract depth4ToDepth1(depth4: number[]): number[];
  protected abstract corners(width: number, height: number): (pixels: number[]) => number[];
  protected abstract blur(width: number, height: number): (pixels: number[]) => number[];
  protected abstract grayscale(width: number, height: number): (pixels: number[]) => number[];
}