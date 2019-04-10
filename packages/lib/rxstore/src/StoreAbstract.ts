import { BehaviorSubject, Observable } from "rxjs";

export type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> };

export interface State {
  [key: string]: any;
}

export abstract class StoreAbstract<T extends State, P = DeepPartial<T>> {
  protected abstract subject: BehaviorSubject<T>;
  protected abstract get state$(): Observable<T>;
  public abstract next(state: P): void;
  public abstract reset(): void;
}
