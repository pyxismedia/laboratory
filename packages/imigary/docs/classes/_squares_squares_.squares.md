[@pyxis/imigary](../README.md) > ["Squares/Squares"](../modules/_squares_squares_.md) > [Squares](../classes/_squares_squares_.squares.md)

# Class: Squares

## Hierarchy

 [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md)

**↳ Squares**

↳  [ActiveSquares](_activesquares_activesquares_.activesquares.md)

## Implements

* [ISquares](../interfaces/_squares_types_.isquares.md)

## Index

### Constructors

* [constructor](_squares_squares_.squares.md#constructor)

### Properties

* [dimension](_squares_squares_.squares.md#dimension)
* [SAFE_MAX](_squares_squares_.squares.md#safe_max)
* [SAFE_MIN](_squares_squares_.squares.md#safe_min)

### Accessors

* [edges](_squares_squares_.squares.md#edges)
* [safeArea](_squares_squares_.squares.md#safearea)
* [sizes](_squares_squares_.squares.md#sizes)
* [squares](_squares_squares_.squares.md#squares)
* [xPairsEdges](_squares_squares_.squares.md#xpairsedges)
* [yPairsEdges](_squares_squares_.squares.md#ypairsedges)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Squares**(dimension: *[DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md)*): [Squares](_squares_squares_.squares.md)

*Defined in [Squares/Squares.ts:12](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/Squares.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| dimension | [DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md) |

**Returns:** [Squares](_squares_squares_.squares.md)

___

## Properties

<a id="dimension"></a>

### `<Protected>` dimension

**● dimension**: *[DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md)*

*Defined in [Squares/Squares.ts:15](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/Squares.ts#L15)*

___
<a id="safe_max"></a>

### `<Static>``<Protected>` SAFE_MAX

**● SAFE_MAX**: *[SafeArea](../enums/_squares_types_.safearea.md)* =  SafeArea.MAX

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[SAFE_MAX](_squares_squaresabstract_.squaresabstract.md#safe_max)*

*Defined in [Squares/Squares.ts:12](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/Squares.ts#L12)*

___
<a id="safe_min"></a>

### `<Static>``<Protected>` SAFE_MIN

**● SAFE_MIN**: *[SafeArea](../enums/_squares_types_.safearea.md)* =  SafeArea.MIN

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[SAFE_MIN](_squares_squaresabstract_.squaresabstract.md#safe_min)*

*Defined in [Squares/Squares.ts:11](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/Squares.ts#L11)*

___

## Accessors

<a id="edges"></a>

###  edges

getedges(): [Square](../modules/_squares_types_.md#square)[]

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[edges](_squares_squaresabstract_.squaresabstract.md#edges)*

*Defined in [Squares/Squares.ts:61](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/Squares.ts#L61)*

*__description__*: For checking whether some point is in between these edges on matrix. [What are edges?](./../../src/Squares/Edges.md)

**Returns:** [Square](../modules/_squares_types_.md#square)[]
Array of left and top edges and right and bottom edges of square

___
<a id="safearea"></a>

###  safeArea

getsafeArea(): [Square](../modules/_squares_types_.md#square)

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[safeArea](_squares_squaresabstract_.squaresabstract.md#safearea)*

*Defined in [Squares/Squares.ts:74](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/Squares.ts#L74)*

*__description__*: Safe Area for rendering text

**Returns:** [Square](../modules/_squares_types_.md#square)

___
<a id="sizes"></a>

###  sizes

getsizes(): [Square](../modules/_squares_types_.md#square)[]

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[sizes](_squares_squaresabstract_.squaresabstract.md#sizes)*

*Defined in [Squares/Squares.ts:46](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/Squares.ts#L46)*

*__description__*: Can be constructed square from this using canvas rect on matrix

**Returns:** [Square](../modules/_squares_types_.md#square)[]
Array of left top corner of square with width and height

___
<a id="squares"></a>

###  squares

getsquares(): [Square](../modules/_squares_types_.md#square)[]

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[squares](_squares_squaresabstract_.squaresabstract.md#squares)*

*Defined in [Squares/Squares.ts:32](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/Squares.ts#L32)*

*__description__*: Coordinates based description of the square on matrix using 4 corners

**Returns:** [Square](../modules/_squares_types_.md#square)[]
Array of coordinates x,y of 4 corners of square

___
<a id="xpairsedges"></a>

### `<Protected>` xPairsEdges

getxPairsEdges(): [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[xPairsEdges](_squares_squaresabstract_.squaresabstract.md#xpairsedges)*

*Defined in [Squares/Squares.ts:20](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/Squares.ts#L20)*

**Returns:** [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

___
<a id="ypairsedges"></a>

### `<Protected>` yPairsEdges

getyPairsEdges(): [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[yPairsEdges](_squares_squaresabstract_.squaresabstract.md#ypairsedges)*

*Defined in [Squares/Squares.ts:24](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/Squares.ts#L24)*

**Returns:** [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

___

