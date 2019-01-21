[@pyxis/imigary](../README.md) > ["ActiveSquares/ActiveSquaresAbstract"](../modules/_activesquares_activesquaresabstract_.md) > [ActiveSquaresAbstract](../classes/_activesquares_activesquaresabstract_.activesquaresabstract.md)

# Class: ActiveSquaresAbstract

## Hierarchy

 [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md)

**↳ ActiveSquaresAbstract**

## Implements

* [ISquares](../interfaces/_squares_types_.isquares.md)
* [IActiveSquares](../interfaces/_activesquares_types_.iactivesquares.md)

## Index

### Properties

* [corners](_activesquares_activesquaresabstract_.activesquaresabstract.md#corners)
* [dimension](_activesquares_activesquaresabstract_.activesquaresabstract.md#dimension)
* [getInactive](_activesquares_activesquaresabstract_.activesquaresabstract.md#getinactive)
* [inactive](_activesquares_activesquaresabstract_.activesquaresabstract.md#inactive)
* [inactiveEdges](_activesquares_activesquaresabstract_.activesquaresabstract.md#inactiveedges)
* [SAFE_MAX](_activesquares_activesquaresabstract_.activesquaresabstract.md#safe_max)
* [SAFE_MIN](_activesquares_activesquaresabstract_.activesquaresabstract.md#safe_min)

### Accessors

* [edges](_activesquares_activesquaresabstract_.activesquaresabstract.md#edges)
* [safeArea](_activesquares_activesquaresabstract_.activesquaresabstract.md#safearea)
* [safeAreaInactiveSquares](_activesquares_activesquaresabstract_.activesquaresabstract.md#safeareainactivesquares)
* [safeAreaSquares](_activesquares_activesquaresabstract_.activesquaresabstract.md#safeareasquares)
* [sizes](_activesquares_activesquaresabstract_.activesquaresabstract.md#sizes)
* [squares](_activesquares_activesquaresabstract_.activesquaresabstract.md#squares)
* [xPairsEdges](_activesquares_activesquaresabstract_.activesquaresabstract.md#xpairsedges)
* [yPairsEdges](_activesquares_activesquaresabstract_.activesquaresabstract.md#ypairsedges)

### Methods

* [generateInactive](_activesquares_activesquaresabstract_.activesquaresabstract.md#generateinactive)

---

## Properties

<a id="corners"></a>

### `<Protected>``<Abstract>` corners

**● corners**: *[Coordinates](../modules/_squares_types_.md#coordinates)[]*

*Defined in [ActiveSquares/ActiveSquaresAbstract.ts:10](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquaresAbstract.ts#L10)*

___
<a id="dimension"></a>

### `<Protected>``<Abstract>` dimension

**● dimension**: *[DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md)*

*Defined in [ActiveSquares/ActiveSquaresAbstract.ts:9](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquaresAbstract.ts#L9)*

___
<a id="getinactive"></a>

### `<Abstract>` getInactive

**● getInactive**: *`function`*

*Implementation of [IActiveSquares](../interfaces/_activesquares_types_.iactivesquares.md).[getInactive](../interfaces/_activesquares_types_.iactivesquares.md#getinactive)*

*Defined in [ActiveSquares/ActiveSquaresAbstract.ts:12](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquaresAbstract.ts#L12)*

#### Type declaration
▸(square: *[Square](../modules/_squares_types_.md#square)*): `function`

**Parameters:**

| Name | Type |
| ------ | ------ |
| square | [Square](../modules/_squares_types_.md#square) |

**Returns:** `function`

___
<a id="inactive"></a>

### `<Protected>``<Abstract>` inactive

**● inactive**: *`boolean`[]*

*Defined in [ActiveSquares/ActiveSquaresAbstract.ts:11](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquaresAbstract.ts#L11)*

___
<a id="inactiveedges"></a>

### `<Abstract>` inactiveEdges

**● inactiveEdges**: *[Square](../modules/_squares_types_.md#square)[]*

*Implementation of [IActiveSquares](../interfaces/_activesquares_types_.iactivesquares.md).[inactiveEdges](../interfaces/_activesquares_types_.iactivesquares.md#inactiveedges)*

*Defined in [ActiveSquares/ActiveSquaresAbstract.ts:15](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquaresAbstract.ts#L15)*

___
<a id="safe_max"></a>

### `<Static>``<Protected>` SAFE_MAX

**● SAFE_MAX**: *[SafeArea](../enums/_squares_types_.safearea.md)*

*Inherited from [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[SAFE_MAX](_squares_squaresabstract_.squaresabstract.md#safe_max)*

*Defined in [Squares/SquaresAbstract.ts:6](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/SquaresAbstract.ts#L6)*

___
<a id="safe_min"></a>

### `<Static>``<Protected>` SAFE_MIN

**● SAFE_MIN**: *[SafeArea](../enums/_squares_types_.safearea.md)*

*Inherited from [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[SAFE_MIN](_squares_squaresabstract_.squaresabstract.md#safe_min)*

*Defined in [Squares/SquaresAbstract.ts:5](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/SquaresAbstract.ts#L5)*

___

## Accessors

<a id="edges"></a>

###  edges

getedges(): [Square](../modules/_squares_types_.md#square)[]

*Inherited from [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[edges](_squares_squaresabstract_.squaresabstract.md#edges)*

*Defined in [Squares/SquaresAbstract.ts:11](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/SquaresAbstract.ts#L11)*

**Returns:** [Square](../modules/_squares_types_.md#square)[]

___
<a id="safearea"></a>

###  safeArea

getsafeArea(): [Square](../modules/_squares_types_.md#square)

*Inherited from [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[safeArea](_squares_squaresabstract_.squaresabstract.md#safearea)*

*Defined in [Squares/SquaresAbstract.ts:12](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/SquaresAbstract.ts#L12)*

**Returns:** [Square](../modules/_squares_types_.md#square)

___
<a id="safeareainactivesquares"></a>

###  safeAreaInactiveSquares

getsafeAreaInactiveSquares(): `boolean`[]

*Defined in [ActiveSquares/ActiveSquaresAbstract.ts:16](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquaresAbstract.ts#L16)*

**Returns:** `boolean`[]

___
<a id="safeareasquares"></a>

### `<Protected>` safeAreaSquares

getsafeAreaSquares(): `boolean`[]

*Defined in [ActiveSquares/ActiveSquaresAbstract.ts:14](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquaresAbstract.ts#L14)*

**Returns:** `boolean`[]

___
<a id="sizes"></a>

###  sizes

getsizes(): [Square](../modules/_squares_types_.md#square)[]

*Inherited from [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[sizes](_squares_squaresabstract_.squaresabstract.md#sizes)*

*Defined in [Squares/SquaresAbstract.ts:10](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/SquaresAbstract.ts#L10)*

**Returns:** [Square](../modules/_squares_types_.md#square)[]

___
<a id="squares"></a>

###  squares

getsquares(): [Square](../modules/_squares_types_.md#square)[]

*Inherited from [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[squares](_squares_squaresabstract_.squaresabstract.md#squares)*

*Defined in [Squares/SquaresAbstract.ts:9](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/SquaresAbstract.ts#L9)*

**Returns:** [Square](../modules/_squares_types_.md#square)[]

___
<a id="xpairsedges"></a>

### `<Protected>` xPairsEdges

getxPairsEdges(): [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

*Inherited from [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[xPairsEdges](_squares_squaresabstract_.squaresabstract.md#xpairsedges)*

*Defined in [Squares/SquaresAbstract.ts:7](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/SquaresAbstract.ts#L7)*

**Returns:** [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

___
<a id="ypairsedges"></a>

### `<Protected>` yPairsEdges

getyPairsEdges(): [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

*Inherited from [SquaresAbstract](_squares_squaresabstract_.squaresabstract.md).[yPairsEdges](_squares_squaresabstract_.squaresabstract.md#ypairsedges)*

*Defined in [Squares/SquaresAbstract.ts:8](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Squares/SquaresAbstract.ts#L8)*

**Returns:** [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

___

## Methods

<a id="generateinactive"></a>

### `<Protected>``<Abstract>` generateInactive

▸ **generateInactive**(): `boolean`[]

*Defined in [ActiveSquares/ActiveSquaresAbstract.ts:13](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/ActiveSquares/ActiveSquaresAbstract.ts#L13)*

**Returns:** `boolean`[]

___

