[@pyxis/imigary](../README.md) > ["Squares/types"](../modules/_squares_types_.md) > [ISquares](../interfaces/_squares_types_.isquares.md)

# Interface: ISquares

*__description__*: interface for Square class

## Hierarchy

**ISquares**

↳  [IActiveSquares](_activesquares_types_.iactivesquares.md)

## Implemented by

* [ActiveSquares](../classes/_activesquares_activesquares_.activesquares.md)
* [ActiveSquaresAbstract](../classes/_activesquares_activesquaresabstract_.activesquaresabstract.md)
* [Squares](../classes/_squares_squares_.squares.md)
* [Squares](../classes/_activesquares_spec_.squares.md)
* [SquaresAbstract](../classes/_squares_squaresabstract_.squaresabstract.md)

## Index

### Properties

* [edges](_squares_types_.isquares.md#edges)
* [safeArea](_squares_types_.isquares.md#safearea)
* [sizes](_squares_types_.isquares.md#sizes)
* [squares](_squares_types_.isquares.md#squares)

---

## Properties

<a id="edges"></a>

###  edges

**● edges**: *[Square](../modules/_squares_types_.md#square)[]*

*Defined in [Squares/types.ts:36](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/types.ts#L36)*

*__returns__*: Array of left and top edges and right and bottom edges of square

*__description__*: For checking whether some point is in between these edges on matrix

___
<a id="safearea"></a>

###  safeArea

**● safeArea**: *[Square](../modules/_squares_types_.md#square)*

*Defined in [Squares/types.ts:37](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/types.ts#L37)*

___
<a id="sizes"></a>

###  sizes

**● sizes**: *[Square](../modules/_squares_types_.md#square)[]*

*Defined in [Squares/types.ts:31](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/types.ts#L31)*

*__returns__*: Array of left top corners of square with width and height

*__description__*: Can be constructed square from this using canvas rect on matrix

___
<a id="squares"></a>

###  squares

**● squares**: *[Square](../modules/_squares_types_.md#square)[]*

*Defined in [Squares/types.ts:26](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/types.ts#L26)*

*__returns__*: Array of coordinates x,y of 4 square corners

*__description__*: Coordinates based description of the square on matrix using 4 corners

___

