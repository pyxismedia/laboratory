import { IDivision, SequenceTuple, Sequence, DerivatedDivision, DerivatedDivisionPairs } from './types';

export abstract class DivisionAbstract implements IDivision {
  protected abstract max: number;
  protected readonly sequence: SequenceTuple = [
    Sequence.ONE,
    Sequence.TWO,
    Sequence.THREE,
    Sequence.FOUR,
    Sequence.FIVE,
    Sequence.SIX
  ];
  protected abstract get straight(): DerivatedDivision;
  protected abstract get reverse(): DerivatedDivision;

  public abstract get scale(): DerivatedDivision;
}