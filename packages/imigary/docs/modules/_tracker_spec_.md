[@pyxis/imigary](../README.md) > ["Tracker/spec"](../modules/_tracker_spec_.md)

# External module: "Tracker/spec"

## Index

### Interfaces

* [IWindowTracking](../interfaces/_tracker_spec_.iwindowtracking.md)

### Variables

* [CustomTracker](_tracker_spec_.md#customtracker)
* [blurSPY](_tracker_spec_.md#blurspy)
* [emitSPY](_tracker_spec_.md#emitspy)
* [findCornersSPY](_tracker_spec_.md#findcornersspy)
* [grayscaleSPY](_tracker_spec_.md#grayscalespy)
* [inheritsSPY](_tracker_spec_.md#inheritsspy)
* [trackResult](_tracker_spec_.md#trackresult)
* [tracker](_tracker_spec_.md#tracker)

---

## Variables

<a id="customtracker"></a>

###  CustomTracker

**● CustomTracker**: *`any`*

*Defined in [Tracker/spec.ts:48](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Tracker/spec.ts#L48)*

___
<a id="blurspy"></a>

### `<Const>` blurSPY

**● blurSPY**: *`SinonStub`<[`number`[], `number`, `number`, `number`], `string`>* =  stub<IWindowTracking['tracking']['Image'], 'blur'>(
  (window as IWindowTracking).tracking.Image,
  'blur',
).returns('blur')

*Defined in [Tracker/spec.ts:38](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Tracker/spec.ts#L38)*

___
<a id="emitspy"></a>

### `<Const>` emitSPY

**● emitSPY**: *`SinonSpy`<`any`[], `any`> | `SinonSpy`<`unknown`[], `Object`>* =  spy(tracker, 'emit')

*Defined in [Tracker/spec.ts:58](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Tracker/spec.ts#L58)*

___
<a id="findcornersspy"></a>

### `<Const>` findCornersSPY

**● findCornersSPY**: *`SinonStub`<[`number`[], `number`, `number`], `string`>* =  stub<IWindowTracking['tracking']['Fast'], 'findCorners'>(
  (window as IWindowTracking).tracking.Fast,
  'findCorners',
).returns('corners')

*Defined in [Tracker/spec.ts:33](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Tracker/spec.ts#L33)*

___
<a id="grayscalespy"></a>

### `<Const>` grayscaleSPY

**● grayscaleSPY**: *`SinonStub`<[`number`[], `number`, `number`, `boolean`], `string`>* =  stub<IWindowTracking['tracking']['Image'], 'grayscale'>(
  (window as IWindowTracking).tracking.Image,
  'grayscale',
).returns('grayscale')

*Defined in [Tracker/spec.ts:43](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Tracker/spec.ts#L43)*

___
<a id="inheritsspy"></a>

### `<Const>` inheritsSPY

**● inheritsSPY**: *`SinonSpy`<`[]`, `void`>* =  spy((window as IWindowTracking).tracking, 'inherits')

*Defined in [Tracker/spec.ts:31](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Tracker/spec.ts#L31)*

___
<a id="trackresult"></a>

### `<Const>` trackResult

**● trackResult**: *`any`* =  tracker.track([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 100, 100)

*Defined in [Tracker/spec.ts:59](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Tracker/spec.ts#L59)*

___
<a id="tracker"></a>

### `<Const>` tracker

**● tracker**: *`any`* =  new CustomTracker()

*Defined in [Tracker/spec.ts:56](https://github.com/creaux/pyxis/blob/f13ba2a/packages/imigary/src/Tracker/spec.ts#L56)*

___

