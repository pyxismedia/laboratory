import { BehaviorSubject, Observable } from "rxjs";
import {
  StoreAbstract,
  State,
  DeepPartial
} from "./StoreAbstract";
import { distinctUntilChanged } from "rxjs/operators";

const { assign } = Object;

type ValueOf<T> = T[keyof T];

export class Store<S extends State, P = DeepPartial<S>> extends StoreAbstract<
  S,
  P
> {
  protected subject: BehaviorSubject<S>;

  constructor(private state: S) {
    super();
    this.subject = new BehaviorSubject(state);
  }

  protected get state$(): Observable<S> {
    return this.subject.pipe(distinctUntilChanged());
  }

  public next(update: P | ValueOf<P>, level?: keyof S): void {
    const current = this.subject.getValue();

    if (typeof level === "string") {
      const result = assign({}, current[level], update);
      const next = assign(current, { [level]: result });
      this.subject.next(next);
      return;
    }

    this.subject.next(assign<{}, S, P>({}, current, <P>update));
  }

  public select<K extends keyof S>(key: K): Observable<S[K]>;
  public select<K extends keyof S, L extends keyof S[K]>(
    key1: K,
    key2: L
  ): Observable<S[K][L]>;
  public select<
    K extends keyof S,
    L extends keyof S[K],
    I extends keyof S[K][L]
  >(arg1: K, arg2: L, arg3: I): Observable<S[K][L][I]>;
  public select(...args: any[]) {
    return this.subject.pipe(
      map(state => args.reduce((data, key) => data[key], state)),
      distinctUntilChanged(),
    );
  }

  public snapshot(): S;
  public snapshot<K extends keyof S>(key: K): S[K];
  public snapshot<K extends keyof S, L extends keyof S[K]>(
    key1: K,
    key2: L
  ): S[K][L];
  public snapshot<
    K extends keyof S,
    L extends keyof S[K],
    I extends keyof S[K][L]
  >(arg1: K, arg2: L, arg3: I): S[K][L][I];
  public snapshot(...args: any[]): any {
    const snapshot = this.subject.getValue();
    if (args !== undefined && args.length > 0) {
      return args.reduce((data, key) => data[key], snapshot);
    }
    return snapshot;
  }

  public reset() {
    this.subject.next(this.state);
  }
}
