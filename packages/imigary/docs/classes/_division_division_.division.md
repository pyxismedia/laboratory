[@pyxis/imigary](../README.md) > ["Division/Division"](../modules/_division_division_.md) > [Division](../classes/_division_division_.division.md)

# Class: Division

## Hierarchy

 [DivisionAbstract](_division_divisionabstract_.divisionabstract.md)

**↳ Division**

## Implements

* [IDivision](../interfaces/_division_types_.idivision.md)

## Index

### Constructors

* [constructor](_division_division_.division.md#constructor)

### Properties

* [max](_division_division_.division.md#max)
* [sequence](_division_division_.division.md#sequence)

### Accessors

* [reverse](_division_division_.division.md#reverse)
* [scale](_division_division_.division.md#scale)
* [straight](_division_division_.division.md#straight)

### Methods

* [pairs](_division_division_.division.md#pairs)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Division**(max: *`number`*): [Division](_division_division_.division.md)

*Defined in [Division/Division.ts:16](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Division/Division.ts#L16)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| max | `number` |

**Returns:** [Division](_division_division_.division.md)

___

## Properties

<a id="max"></a>

### `<Protected>` max

**● max**: *`number`*

*Overrides [DivisionAbstract](_division_divisionabstract_.divisionabstract.md).[max](_division_divisionabstract_.divisionabstract.md#max)*

*Defined in [Division/Division.ts:19](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Division/Division.ts#L19)*

___
<a id="sequence"></a>

### `<Protected>` sequence

**● sequence**: *[SequenceTuple](../modules/_division_types_.md#sequencetuple)* =  [
    Sequence.ONE,
    Sequence.TWO,
    Sequence.THREE,
    Sequence.FOUR,
    Sequence.FIVE,
    Sequence.SIX
  ]

*Inherited from [DivisionAbstract](_division_divisionabstract_.divisionabstract.md).[sequence](_division_divisionabstract_.divisionabstract.md#sequence)*

*Defined in [Division/DivisionAbstract.ts:5](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Division/DivisionAbstract.ts#L5)*

___

## Accessors

<a id="reverse"></a>

### `<Protected>` reverse

getreverse(): [DerivatedDivision](../modules/_division_types_.md#derivateddivision)

*Overrides [DivisionAbstract](_division_divisionabstract_.divisionabstract.md).[reverse](_division_divisionabstract_.divisionabstract.md#reverse)*

*Defined in [Division/Division.ts:29](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Division/Division.ts#L29)*

**Returns:** [DerivatedDivision](../modules/_division_types_.md#derivateddivision)

___
<a id="scale"></a>

###  scale

getscale(): [DerivatedDivision](../modules/_division_types_.md#derivateddivision)

*Overrides [DivisionAbstract](_division_divisionabstract_.divisionabstract.md).[scale](_division_divisionabstract_.divisionabstract.md#scale)*

*Defined in [Division/Division.ts:40](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Division/Division.ts#L40)*

**Returns:** [DerivatedDivision](../modules/_division_types_.md#derivateddivision)

___
<a id="straight"></a>

### `<Protected>` straight

getstraight(): [DerivatedDivision](../modules/_division_types_.md#derivateddivision)

*Overrides [DivisionAbstract](_division_divisionabstract_.divisionabstract.md).[straight](_division_divisionabstract_.divisionabstract.md#straight)*

*Defined in [Division/Division.ts:24](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Division/Division.ts#L24)*

**Returns:** [DerivatedDivision](../modules/_division_types_.md#derivateddivision)

___

## Methods

<a id="pairs"></a>

### `<Static>` pairs

▸ **pairs**(scale: *[DerivatedDivision](../modules/_division_types_.md#derivateddivision)*): [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

*Defined in [Division/Division.ts:6](https://github.com/creaux/pyxis/blob/04ce533/packages/imigary/src/Division/Division.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| scale | [DerivatedDivision](../modules/_division_types_.md#derivateddivision) |

**Returns:** [DerivatedDivisionPairs](../modules/_division_types_.md#derivateddivisionpairs)

___

