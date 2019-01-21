[@pyxis/imigary](../README.md) > ["Dimension/Dimension"](../modules/_dimension_dimension_.md) > [Dimension](../classes/_dimension_dimension_.dimension.md)

# Class: Dimension

*__description__*: represent divisions for x and y

## Hierarchy

 [DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md)

**↳ Dimension**

## Implements

* [IDimension](../interfaces/_dimension_types_.idimension.md)

## Index

### Constructors

* [constructor](_dimension_dimension_.dimension.md#constructor)

### Properties

* [height](_dimension_dimension_.dimension.md#height)
* [width](_dimension_dimension_.dimension.md#width)

### Accessors

* [xDivisions](_dimension_dimension_.dimension.md#xdivisions)
* [xPairs](_dimension_dimension_.dimension.md#xpairs)
* [yDivisions](_dimension_dimension_.dimension.md#ydivisions)
* [yPairs](_dimension_dimension_.dimension.md#ypairs)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Dimension**(width: *`number`*, height: *`number`*): [Dimension](_dimension_dimension_.dimension.md)

*Defined in [Dimension/Dimension.ts:10](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Dimension/Dimension.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** [Dimension](_dimension_dimension_.dimension.md)

___

## Properties

<a id="height"></a>

### `<Protected>` height

**● height**: *`number`*

*Overrides [DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md).[height](_dimension_dimensionabstract_.dimensionabstract.md#height)*

*Defined in [Dimension/Dimension.ts:13](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Dimension/Dimension.ts#L13)*

___
<a id="width"></a>

### `<Protected>` width

**● width**: *`number`*

*Overrides [DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md).[width](_dimension_dimensionabstract_.dimensionabstract.md#width)*

*Defined in [Dimension/Dimension.ts:12](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Dimension/Dimension.ts#L12)*

___

## Accessors

<a id="xdivisions"></a>

### `<Protected>` xDivisions

getxDivisions(): [DerivatedDivision](../modules/_division_types_.md#derivateddivision)

*Overrides [DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md).[xDivisions](_dimension_dimensionabstract_.dimensionabstract.md#xdivisions)*

*Defined in [Dimension/Dimension.ts:18](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Dimension/Dimension.ts#L18)*

**Returns:** [DerivatedDivision](../modules/_division_types_.md#derivateddivision)

___
<a id="xpairs"></a>

###  xPairs

getxPairs(): [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

*Overrides [DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md).[xPairs](_dimension_dimensionabstract_.dimensionabstract.md#xpairs)*

*Defined in [Dimension/Dimension.ts:28](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Dimension/Dimension.ts#L28)*

**Returns:** [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

___
<a id="ydivisions"></a>

### `<Protected>` yDivisions

getyDivisions(): [DerivatedDivision](../modules/_division_types_.md#derivateddivision)

*Overrides [DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md).[yDivisions](_dimension_dimensionabstract_.dimensionabstract.md#ydivisions)*

*Defined in [Dimension/Dimension.ts:23](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Dimension/Dimension.ts#L23)*

**Returns:** [DerivatedDivision](../modules/_division_types_.md#derivateddivision)

___
<a id="ypairs"></a>

###  yPairs

getyPairs(): [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

*Overrides [DimensionAbstract](_dimension_dimensionabstract_.dimensionabstract.md).[yPairs](_dimension_dimensionabstract_.dimensionabstract.md#ypairs)*

*Defined in [Dimension/Dimension.ts:32](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Dimension/Dimension.ts#L32)*

**Returns:** [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

___

