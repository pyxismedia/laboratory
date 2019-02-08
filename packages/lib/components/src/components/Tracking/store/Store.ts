import 'tracking';
import { configure, observable, computed, action, runInAction, when } from 'mobx';
import { StoreState, IStore } from './types';
import { StoreAbstract } from './StoreAbstract';
import {
  DimensionAbstract,
  ActiveSquares,
  ActiveSquaresAbstract,
  TrackerAbstract,
  Coordinates,
  CustomTracker,
  Dimension,
  IActiveSquares,
} from '@pyxis/imigary/build';

export class Store extends StoreAbstract implements IStore {
  protected tracker: TrackerAbstract;
  @observable.ref public state: StoreState = StoreState.PENDING;
  @observable.ref public image: HTMLImageElement = {};
  @observable.ref public corners: Coordinates[] = [[0, 0], [0, 0]];
  @observable.ref title = {
    width: 0,
    height: 0,
  }

  @action public setTitle(width: number, height: number) {
    this.title = { width, height};
  }

  constructor() {
    super();
    // @ts-ignore
    this.tracker = new CustomTracker();
    // Since image exists then set corners
    when(() => this.exists, () => this.setCorners(this.image));
  }

  @computed public get dimension(): DimensionAbstract {
    return new Dimension(this.width, this.height)
  };
  @computed public get squares(): IActiveSquares {
    return new ActiveSquares(this.dimension, this.corners);
  }

  @computed protected get exists(): boolean {
    // Property complete is boolean since image exists
    if (this.image) {
      return (this.image as any).complete !== undefined;
    }
    return false;
  }

  @computed public get width() {
    return (this.image as any).width;
  }

  @computed public get height() {
    return (this.image as any).height;
  }

  @action public setImage(image: HTMLImageElement): void {
    this.image = image;
  }

  @action protected setState(state: StoreState): void {
    this.state = state;
  }

  /**
   * @description setCorners from image
   */
  @action
  protected async setCorners(image: HTMLImageElement): Promise<void> {
    this.setState(StoreState.PENDING);

    try {
      const corners = await new Promise(resolve => {
        this.tracker.once('track', (pairs) => {
          resolve(pairs);
        });
        tracking.track(image, this.tracker);
      }) as Coordinates[];

      runInAction(() => {
        this.setState(StoreState.DONE);
        this.corners = corners;
      });

    } catch(error) {
      this.setState(StoreState.ERROR);
    }
  }
}

export const store = new Store();

// Configure MobX
configure({ enforceActions: 'observed' });