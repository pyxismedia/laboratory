
/**
 * @description x and y coordinates
 * @author Petr Juna
 * @example
 * [1, 2] // Corner has x = 1 and y = 2
 */
export type Coordinates = [number, number];

/**
 * @description contains min corner of x, y and and max corner of x, y which makes possible to render square on area particular area
 * @author Petr Juna
 * @example
 * [[1, 2], [6, 5]] // min corner x = 1, y = 2 and max corner x = 6, y = 5
 */
export type Square = [Coordinates, Coordinates];

/**
 * @description interface for Square class
 */
export interface ISquares {
  /**
   * @returns Array of coordinates x,y of 4 square corners
   * @description Coordinates based description of the square on matrix using 4 corners
   */
  squares: Square[];
  /**
   * @returns Array of left top corners of square with width and height
   * @description Can be constructed square from this using canvas rect on matrix
   */
  sizes: Square[];
  /**
   * @returns Array of left and top edges and right and bottom edges of square
   * @description For checking whether some point is in between these edges on matrix
   */
  edges: Square[];
  safeArea: Square;
}

/**
 * @description represent area where is safe to render text.
 * It is usually area of rectangle around center of the image. 
 * Area around safe area is thus not safe as there is not enough space to render anything.
 * @author Petr Juna
 */
export enum SafeArea {
  MIN = 32,
  MAX = 67,
}