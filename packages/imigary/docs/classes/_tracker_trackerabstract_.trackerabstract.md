[@pyxis/imigary](../README.md) > ["Tracker/TrackerAbstract"](../modules/_tracker_trackerabstract_.md) > [TrackerAbstract](../classes/_tracker_trackerabstract_.trackerabstract.md)

# Class: TrackerAbstract

## Hierarchy

 `EventEmitter`

**↳ TrackerAbstract**

## Index

### Properties

* [defaultMaxListeners](_tracker_trackerabstract_.trackerabstract.md#defaultmaxlisteners)

### Methods

* [addListener](_tracker_trackerabstract_.trackerabstract.md#addlistener)
* [blur](_tracker_trackerabstract_.trackerabstract.md#blur)
* [corners](_tracker_trackerabstract_.trackerabstract.md#corners)
* [depth4ToDepth1](_tracker_trackerabstract_.trackerabstract.md#depth4todepth1)
* [emit](_tracker_trackerabstract_.trackerabstract.md#emit)
* [eventNames](_tracker_trackerabstract_.trackerabstract.md#eventnames)
* [getMaxListeners](_tracker_trackerabstract_.trackerabstract.md#getmaxlisteners)
* [getPairs](_tracker_trackerabstract_.trackerabstract.md#getpairs)
* [grayscale](_tracker_trackerabstract_.trackerabstract.md#grayscale)
* [listenerCount](_tracker_trackerabstract_.trackerabstract.md#listenercount)
* [listeners](_tracker_trackerabstract_.trackerabstract.md#listeners)
* [off](_tracker_trackerabstract_.trackerabstract.md#off)
* [on](_tracker_trackerabstract_.trackerabstract.md#on)
* [once](_tracker_trackerabstract_.trackerabstract.md#once)
* [prependListener](_tracker_trackerabstract_.trackerabstract.md#prependlistener)
* [prependOnceListener](_tracker_trackerabstract_.trackerabstract.md#prependoncelistener)
* [rawListeners](_tracker_trackerabstract_.trackerabstract.md#rawlisteners)
* [removeAllListeners](_tracker_trackerabstract_.trackerabstract.md#removealllisteners)
* [removeListener](_tracker_trackerabstract_.trackerabstract.md#removelistener)
* [setMaxListeners](_tracker_trackerabstract_.trackerabstract.md#setmaxlisteners)
* [track](_tracker_trackerabstract_.trackerabstract.md#track)
* [listenerCount](_tracker_trackerabstract_.trackerabstract.md#listenercount-1)

---

## Properties

<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1110*

___

## Methods

<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1112*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="blur"></a>

### `<Protected>``<Abstract>` blur

▸ **blur**(width: *`number`*, height: *`number`*): `function`

*Defined in [Tracker/TrackerAbstract.ts:9](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Tracker/TrackerAbstract.ts#L9)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** `function`

___
<a id="corners"></a>

### `<Protected>``<Abstract>` corners

▸ **corners**(width: *`number`*, height: *`number`*): `function`

*Defined in [Tracker/TrackerAbstract.ts:8](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Tracker/TrackerAbstract.ts#L8)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** `function`

___
<a id="depth4todepth1"></a>

### `<Protected>``<Abstract>` depth4ToDepth1

▸ **depth4ToDepth1**(depth4: *`number`[]*): `number`[]

*Defined in [Tracker/TrackerAbstract.ts:7](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Tracker/TrackerAbstract.ts#L7)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| depth4 | `number`[] |

**Returns:** `number`[]

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` | `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1124*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` | `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1125*

**Returns:** `Array`<`string` | `symbol`>

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1121*

**Returns:** `number`

___
<a id="getpairs"></a>

### `<Protected>``<Abstract>` getPairs

▸ **getPairs**(data: *[Coordinates](../modules/_squares_types_.md#coordinates)*): [Coordinates](../modules/_squares_types_.md#coordinates)[]

*Defined in [Tracker/TrackerAbstract.ts:6](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Tracker/TrackerAbstract.ts#L6)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data | [Coordinates](../modules/_squares_types_.md#coordinates) |

**Returns:** [Coordinates](../modules/_squares_types_.md#coordinates)[]

___
<a id="grayscale"></a>

### `<Protected>``<Abstract>` grayscale

▸ **grayscale**(width: *`number`*, height: *`number`*): `function`

*Defined in [Tracker/TrackerAbstract.ts:10](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Tracker/TrackerAbstract.ts#L10)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| width | `number` |
| height | `number` |

**Returns:** `function`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` | `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1126*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` | `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` | `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1122*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |

**Returns:** `Function`[]

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1118*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="on"></a>

###  on

▸ **on**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.on*

*Overrides EventEmitter.on*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1113*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1114*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1115*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1116*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` | `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1123*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |

**Returns:** `Function`[]

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` | `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1119*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` | `symbol` |

**Returns:** `this`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` | `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1117*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` | `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1120*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="track"></a>

### `<Abstract>` track

▸ **track**(pixels: *`Uint8ClampedArray`*, width: *`number`*, height: *`number`*): `void`

*Defined in [Tracker/TrackerAbstract.ts:5](https://github.com/creaux/pyxis/blob/1000889/packages/imigary/src/Tracker/TrackerAbstract.ts#L5)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| pixels | `Uint8ClampedArray` |
| width | `number` |
| height | `number` |

**Returns:** `void`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` | `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /Users/petrjuna/Development/javascript/monorepo2/packages/imigary/node_modules/@types/node/index.d.ts:1109*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` | `symbol` |

**Returns:** `number`

___

