import { Coordinates, Square, ISquares } from '../Squares';

export interface IActiveSquares extends ISquares {
 getInactive: (square: Square) => (pair: Coordinates) => boolean;
 inactiveEdges: Square[];
 safeAreaInactiveSquares: boolean[];
 safeAreaActiveSquares: boolean[];
}