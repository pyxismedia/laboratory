[@pyxis/imigary](../README.md) > ["ActiveSquares/types"](../modules/_activesquares_types_.md) > [IActiveSquares](../interfaces/_activesquares_types_.iactivesquares.md)

# Interface: IActiveSquares

## Hierarchy

 [ISquares](_squares_types_.isquares.md)

**↳ IActiveSquares**

## Implemented by

* [ActiveSquares](../classes/_activesquares_activesquares_.activesquares.md)
* [ActiveSquaresAbstract](../classes/_activesquares_activesquaresabstract_.activesquaresabstract.md)

## Index

### Properties

* [edges](_activesquares_types_.iactivesquares.md#edges)
* [getInactive](_activesquares_types_.iactivesquares.md#getinactive)
* [inactiveEdges](_activesquares_types_.iactivesquares.md#inactiveedges)
* [safeArea](_activesquares_types_.iactivesquares.md#safearea)
* [safeAreaInactiveSquares](_activesquares_types_.iactivesquares.md#safeareainactivesquares)
* [sizes](_activesquares_types_.iactivesquares.md#sizes)
* [squares](_activesquares_types_.iactivesquares.md#squares)

---

## Properties

<a id="edges"></a>

###  edges

**● edges**: *[Square](../modules/_squares_types_.md#square)[]*

*Inherited from [ISquares](_squares_types_.isquares.md).[edges](_squares_types_.isquares.md#edges)*

*Defined in [Squares/types.ts:36](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/types.ts#L36)*

*__returns__*: Array of left and top edges and right and bottom edges of square

*__description__*: For checking whether some point is in between these edges on matrix

___
<a id="getinactive"></a>

###  getInactive

**● getInactive**: *`function`*

*Defined in [ActiveSquares/types.ts:4](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/ActiveSquares/types.ts#L4)*

#### Type declaration
▸(square: *[Square](../modules/_squares_types_.md#square)*): `function`

**Parameters:**

| Name | Type |
| ------ | ------ |
| square | [Square](../modules/_squares_types_.md#square) |

**Returns:** `function`

___
<a id="inactiveedges"></a>

###  inactiveEdges

**● inactiveEdges**: *[Square](../modules/_squares_types_.md#square)[]*

*Defined in [ActiveSquares/types.ts:5](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/ActiveSquares/types.ts#L5)*

___
<a id="safearea"></a>

###  safeArea

**● safeArea**: *[Square](../modules/_squares_types_.md#square)*

*Inherited from [ISquares](_squares_types_.isquares.md).[safeArea](_squares_types_.isquares.md#safearea)*

*Defined in [Squares/types.ts:37](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/types.ts#L37)*

___
<a id="safeareainactivesquares"></a>

###  safeAreaInactiveSquares

**● safeAreaInactiveSquares**: *`boolean`[]*

*Defined in [ActiveSquares/types.ts:6](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/ActiveSquares/types.ts#L6)*

___
<a id="sizes"></a>

###  sizes

**● sizes**: *[Square](../modules/_squares_types_.md#square)[]*

*Inherited from [ISquares](_squares_types_.isquares.md).[sizes](_squares_types_.isquares.md#sizes)*

*Defined in [Squares/types.ts:31](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/types.ts#L31)*

*__returns__*: Array of left top corners of square with width and height

*__description__*: Can be constructed square from this using canvas rect on matrix

___
<a id="squares"></a>

###  squares

**● squares**: *[Square](../modules/_squares_types_.md#square)[]*

*Inherited from [ISquares](_squares_types_.isquares.md).[squares](_squares_types_.isquares.md#squares)*

*Defined in [Squares/types.ts:26](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Squares/types.ts#L26)*

*__returns__*: Array of coordinates x,y of 4 square corners

*__description__*: Coordinates based description of the square on matrix using 4 corners

___

