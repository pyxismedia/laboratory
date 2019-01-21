[@pyxis/imigary](../README.md) > ["ActiveSquares/ActiveSquares"](../modules/_activesquares_activesquares_.md) > [ActiveSquares](../classes/_activesquares_activesquares_.activesquares.md)

# Class: ActiveSquares

*__description__*: 

## Hierarchy

↳  [Squares](_squares_squares_.squares.md)

**↳ ActiveSquares**

## Implements

* [ISquares](../interfaces/_squares_types_.isquares.md)
* [IActiveSquares](../interfaces/_activesquares_types_.iactivesquares.md)

## Index

### Constructors

* [constructor](_activesquares_activesquares_.activesquares.md#constructor)

### Properties

* [corners](_activesquares_activesquares_.activesquares.md#corners)
* [dimension](_activesquares_activesquares_.activesquares.md#dimension)
* [SAFE_MAX](_activesquares_activesquares_.activesquares.md#safe_max)
* [SAFE_MIN](_activesquares_activesquares_.activesquares.md#safe_min)

### Accessors

* [edges](_activesquares_activesquares_.activesquares.md#edges)
* [inactive](_activesquares_activesquares_.activesquares.md#inactive)
* [inactiveEdges](_activesquares_activesquares_.activesquares.md#inactiveedges)
* [safeArea](_activesquares_activesquares_.activesquares.md#safearea)
* [safeAreaActiveSquares](_activesquares_activesquares_.activesquares.md#safeareaactivesquares)
* [safeAreaInactiveSquares](_activesquares_activesquares_.activesquares.md#safeareainactivesquares)
* [safeAreaSquares](_activesquares_activesquares_.activesquares.md#safeareasquares)
* [sizes](_activesquares_activesquares_.activesquares.md#sizes)
* [squares](_activesquares_activesquares_.activesquares.md#squares)
* [xPairsEdges](_activesquares_activesquares_.activesquares.md#xpairsedges)
* [yPairsEdges](_activesquares_activesquares_.activesquares.md#ypairsedges)

### Methods

* [getInactive](_activesquares_activesquares_.activesquares.md#getinactive)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new ActiveSquares**(dimension: *[DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md)*, corners: *[Coordinates](../modules/_squares_types_.md#coordinates)[]*): [ActiveSquares](_activesquares_activesquares_.activesquares.md)

*Overrides [Squares](_squares_squares_.squares.md).[constructor](_squares_squares_.squares.md#constructor)*

*Defined in [ActiveSquares/ActiveSquares.ts:12](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquares.ts#L12)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| dimension | [DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md) |
| corners | [Coordinates](../modules/_squares_types_.md#coordinates)[] |

**Returns:** [ActiveSquares](_activesquares_activesquares_.activesquares.md)

___

## Properties

<a id="corners"></a>

### `<Protected>` corners

**● corners**: *[Coordinates](../modules/_squares_types_.md#coordinates)[]*

*Defined in [ActiveSquares/ActiveSquares.ts:15](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquares.ts#L15)*

___
<a id="dimension"></a>

### `<Protected>` dimension

**● dimension**: *[DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md)*

*Overrides [Squares](_squares_squares_.squares.md).[dimension](_squares_squares_.squares.md#dimension)*

*Defined in [ActiveSquares/ActiveSquares.ts:14](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquares.ts#L14)*

___
<a id="safe_max"></a>

### `<Static>``<Protected>` SAFE_MAX

**● SAFE_MAX**: *[SafeArea](../enums/_squares_types_.safearea.md)* =  SafeArea.MAX

*Inherited from [Squares](_squares_squares_.squares.md).[SAFE_MAX](_squares_squares_.squares.md#safe_max)*

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[SAFE_MAX](_squares_squaresabstract_.squaresabstract.md#safe_max)*

*Defined in [Squares/Squares.ts:12](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/Squares.ts#L12)*

___
<a id="safe_min"></a>

### `<Static>``<Protected>` SAFE_MIN

**● SAFE_MIN**: *[SafeArea](../enums/_squares_types_.safearea.md)* =  SafeArea.MIN

*Inherited from [Squares](_squares_squares_.squares.md).[SAFE_MIN](_squares_squares_.squares.md#safe_min)*

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[SAFE_MIN](_squares_squaresabstract_.squaresabstract.md#safe_min)*

*Defined in [Squares/Squares.ts:11](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/Squares.ts#L11)*

___

## Accessors

<a id="edges"></a>

###  edges

getedges(): [Square](../modules/_squares_types_.md#square)[]

*Inherited from [Squares](_squares_squares_.squares.md).[edges](_squares_squares_.squares.md#edges)*

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[edges](_squares_squaresabstract_.squaresabstract.md#edges)*

*Defined in [Squares/Squares.ts:61](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/Squares.ts#L61)*

*__description__*: For checking whether some point is in between these edges on matrix[](./../../src/Squares/Edges.md)

**Returns:** [Square](../modules/_squares_types_.md#square)[]
Array of left and top edges and right and bottom edges of square

___
<a id="inactive"></a>

###  inactive

getinactive(): `boolean`[]

*Defined in [ActiveSquares/ActiveSquares.ts:38](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquares.ts#L38)*

*__description__*: generate all inactive squares

**Returns:** `boolean`[]

___
<a id="inactiveedges"></a>

###  inactiveEdges

getinactiveEdges(): [[`number`, `number`], [`number`, `number`]][]

*Defined in [ActiveSquares/ActiveSquares.ts:48](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquares.ts#L48)*

**Returns:** [[`number`, `number`], [`number`, `number`]][]

___
<a id="safearea"></a>

###  safeArea

getsafeArea(): [Square](../modules/_squares_types_.md#square)

*Inherited from [Squares](_squares_squares_.squares.md).[safeArea](_squares_squares_.squares.md#safearea)*

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[safeArea](_squares_squaresabstract_.squaresabstract.md#safearea)*

*Defined in [Squares/Squares.ts:74](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/Squares.ts#L74)*

*__description__*: Safe Area for rendering text

**Returns:** [Square](../modules/_squares_types_.md#square)

___
<a id="safeareaactivesquares"></a>

###  safeAreaActiveSquares

getsafeAreaActiveSquares(): `boolean`[]

*Defined in [ActiveSquares/ActiveSquares.ts:94](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquares.ts#L94)*

*__description__*: get all active squares in safe area

**Returns:** `boolean`[]

___
<a id="safeareainactivesquares"></a>

###  safeAreaInactiveSquares

getsafeAreaInactiveSquares(): `boolean`[]

*Defined in [ActiveSquares/ActiveSquares.ts:83](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquares.ts#L83)*

*__description__*: get all inactive squares in safe area

**Returns:** `boolean`[]

___
<a id="safeareasquares"></a>

### `<Protected>` safeAreaSquares

getsafeAreaSquares(): `boolean`[]

*Defined in [ActiveSquares/ActiveSquares.ts:59](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquares.ts#L59)*

*__description__*: get all safeArea squares

**Returns:** `boolean`[]

___
<a id="sizes"></a>

###  sizes

getsizes(): [Square](../modules/_squares_types_.md#square)[]

*Inherited from [Squares](_squares_squares_.squares.md).[sizes](_squares_squares_.squares.md#sizes)*

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[sizes](_squares_squaresabstract_.squaresabstract.md#sizes)*

*Defined in [Squares/Squares.ts:46](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/Squares.ts#L46)*

*__description__*: Can be constructed square from this using canvas rect on matrix

**Returns:** [Square](../modules/_squares_types_.md#square)[]
Array of left top corner of square with width and height

___
<a id="squares"></a>

###  squares

getsquares(): [Square](../modules/_squares_types_.md#square)[]

*Inherited from [Squares](_squares_squares_.squares.md).[squares](_squares_squares_.squares.md#squares)*

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[squares](_squares_squaresabstract_.squaresabstract.md#squares)*

*Defined in [Squares/Squares.ts:32](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/Squares.ts#L32)*

*__description__*: Coordinates based description of the square on matrix using 4 corners

**Returns:** [Square](../modules/_squares_types_.md#square)[]
Array of coordinates x,y of 4 corners of square

___
<a id="xpairsedges"></a>

### `<Protected>` xPairsEdges

getxPairsEdges(): [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

*Inherited from [Squares](_squares_squares_.squares.md).[xPairsEdges](_squares_squares_.squares.md#xpairsedges)*

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[xPairsEdges](_squares_squaresabstract_.squaresabstract.md#xpairsedges)*

*Defined in [Squares/Squares.ts:20](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/Squares.ts#L20)*

**Returns:** [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

___
<a id="ypairsedges"></a>

### `<Protected>` yPairsEdges

getyPairsEdges(): [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

*Inherited from [Squares](_squares_squares_.squares.md).[yPairsEdges](_squares_squares_.squares.md#ypairsedges)*

*Overrides [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[yPairsEdges](_squares_squaresabstract_.squaresabstract.md#ypairsedges)*

*Defined in [Squares/Squares.ts:24](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/Squares.ts#L24)*

**Returns:** [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

___

## Methods

<a id="getinactive"></a>

###  getInactive

▸ **getInactive**(square: *[Square](../modules/_squares_types_.md#square)*): `(Anonymous function)`

*Defined in [ActiveSquares/ActiveSquares.ts:20](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquares.ts#L20)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| square | [Square](../modules/_squares_types_.md#square) |

**Returns:** `(Anonymous function)`

___

