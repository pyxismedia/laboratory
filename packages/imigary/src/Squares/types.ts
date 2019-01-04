
export type Coordinates = [number, number];

export type Square = [Coordinates, Coordinates];

export type SafeAreaTuple = [Coordinates, Coordinates];

export interface ISquares {
  squares: Square[];
  sizes: Square[];
  edges: Square[];
  safeArea: SafeAreaTuple;
}

export enum SafeArea {
  MIN = 32,
  MAX = 67,
}