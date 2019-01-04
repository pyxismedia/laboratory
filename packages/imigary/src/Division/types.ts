export enum Sequence {
  ZERO = 0,
  ONE = 1,
  TWO = 3,
  THREE = 5,
  FOUR = 8,
  FIVE = 13,
  SIX = 21,
  SEVEN = 34,
  EIGHT = 55,
};

export type SequenceTuple = [
  Sequence.ONE,
  Sequence.TWO,
  Sequence.THREE,
  Sequence.FOUR,
  Sequence.FIVE,
  Sequence.SIX
]

export type DerivatedDivision = number[];

export type DerivatedDivisionNever = number[] | never[];

export type DerivatedDivisionPairs = DerivatedDivision[];

export interface IDivision {
  scale: DerivatedDivision;
}