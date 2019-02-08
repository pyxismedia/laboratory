import {
  TrackerAbstract,
  Coordinates,
  DimensionAbstract,
  IActiveSquares,
} from '@pyxis/imigary/build';
import { StoreState, IStore } from './types';

export abstract class StoreAbstract implements IStore {
  protected abstract tracker: TrackerAbstract;
  public abstract state: StoreState;
  public abstract image: HTMLImageElement;
  public abstract corners: Coordinates[];
  public abstract get dimension(): DimensionAbstract;
  public abstract get squares(): IActiveSquares;
  protected abstract get exists(): boolean;
  public abstract get width(): number;
  public abstract get height(): number;
  public abstract setImage(image: HTMLImageElement): void;
  protected abstract setState(state: StoreState): void;
  protected abstract async setCorners(image: HTMLImageElement): Promise<void>;
}