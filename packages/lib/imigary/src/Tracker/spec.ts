import ava from 'ava';
import prequire from 'proxyquire';
import { spy, stub } from 'sinon';

interface IWindowTracking extends Window {
  tracking: {
    inherits: () => void,
    Fast: {
      findCorners: (pixels: number[], width: number, height: number) => string,
      THRESHOLD: number | null
    },
    Image: {
      blur: (pixels: number[], width: number, height: number, count: number) => string,
      grayscale: (pixels: number[], width: number, height: number, truthy: boolean) => string,
    }
  }
}

(window as IWindowTracking).tracking = {
  inherits: () => {},
  Fast: {
    findCorners: (pixels: number[], width: number, height: number) => 'corners',
    THRESHOLD: null,
  },
  Image: {
    blur: (pixels: number[], width: number, height: number, count: number) => 'blur',
    grayscale: (pixels: number[], width: number, height: number, truthy: boolean) => 'grayscale'
  }
};

const inheritsSPY = spy((window as IWindowTracking).tracking, 'inherits');

const findCornersSPY = stub<IWindowTracking['tracking']['Fast'], 'findCorners'>(
  (window as IWindowTracking).tracking.Fast,
  'findCorners',
).returns('corners');

const blurSPY = stub<IWindowTracking['tracking']['Image'], 'blur'>(
  (window as IWindowTracking).tracking.Image,
  'blur',
).returns('blur');

const grayscaleSPY = stub<IWindowTracking['tracking']['Image'], 'grayscale'>(
  (window as IWindowTracking).tracking.Image,
  'grayscale',
).returns('grayscale');

const { CustomTracker } = prequire.noCallThru()('./Tracker', {
  tracking: () => null,
  'tracking/build/tracking': () => null,
  'lodash/fp/compose': (...args: string[]) => (pixels: any) => ([...args]),
});

// As it has prototype methods declared after call
// This step is necessary to initiate
const tracker = new CustomTracker();
tracker.emit = function (name: string, data: object) {}
const emitSPY = spy(tracker, 'emit');
const trackResult = tracker.track([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 100, 100);

ava('should have all methods', (t) => {
  t.is(typeof CustomTracker.prototype.track, 'function');
  t.is(typeof CustomTracker.prototype.grayscale, 'function');
  t.is(typeof CustomTracker.prototype.blur, 'function');
  t.is(typeof CustomTracker.prototype.corners, 'function');
  t.is(typeof CustomTracker.prototype.depth4ToDepth1, 'function');
  t.is(typeof CustomTracker.prototype.getPairs, 'function');
});

ava('should call inherits on import', (t) => {
  t.truthy(inheritsSPY.calledOnce);
});

ava('should return pairs', (t) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const expected = [[1, 2], [3, 4], [5, 6], [7, 8]];
  const result = tracker.getPairs(data);
  t.deepEqual(result, expected);
});

ava('should return error on depth4 to depth1 when array has wrong length', (t) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const expected = [1, 5, 9];;
  t.throws(() => tracker.depth4ToDepth1(data), RangeError, 'Invalid array length');
});

ava('should transform depth4 to depth1', (t) => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const expected = [1, 5, 9];
  const result = tracker.depth4ToDepth1(data);
  t.deepEqual(result, expected);
});

ava('should call findCorners with parameter and required result', (t) => {
  const result = tracker.corners(100, 100)([1, 2]);
  t.truthy(findCornersSPY.calledOnceWith([1, 2], 100, 100));
  t.is(result, 'corners');
});

ava('should call blur with parameters and required result', (t) => {
  const result = tracker.blur(10, 10)([1, 2]);
  t.truthy(blurSPY.calledOnceWith([1, 2], 10, 10, 3));
  t.is(result, 'blur');
});

ava('should call grayscale with parameters and required result', (t) => {
  const result = tracker.grayscale(10, 10)([1, 2]);
  t.truthy(grayscaleSPY.calledOnceWith([1, 2], 10, 10, true));
  t.is(result, 'grayscale');
});

ava('should assign THRESHOLD', (t) => {
  t.is((window as IWindowTracking).tracking.Fast.THRESHOLD, 6);
});