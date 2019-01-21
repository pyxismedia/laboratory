[@pyxis/imigary](../README.md) > ["Squares/types"](../modules/_squares_types_.md)

# External module: "Squares/types"

## Index

### Enumerations

* [SafeArea](../enums/_squares_types_.safearea.md)

### Interfaces

* [ISquares](../interfaces/_squares_types_.isquares.md)

### Type aliases

* [Coordinates](_squares_types_.md#coordinates)
* [Square](_squares_types_.md#square)

---

## Type aliases

<a id="coordinates"></a>

###  Coordinates

**Ƭ Coordinates**: *[`number`, `number`]*

*Defined in [Squares/types.ts:8](https://github.com/creaux/pyxis/blob/42c6131/packages/imigary/src/Squares/types.ts#L8)*

*__description__*: x and y coordinates

*__author__*: Petr Juna

*__example__*: \[1, 2\] // Corner has x = 1 and y = 2

___
<a id="square"></a>

###  Square

**Ƭ Square**: *[[Coordinates](_squares_types_.md#coordinates), [Coordinates](_squares_types_.md#coordinates)]*

*Defined in [Squares/types.ts:16](https://github.com/creaux/pyxis/blob/42c6131/packages/imigary/src/Squares/types.ts#L16)*

*__description__*: contains min corner of x, y and and max corner of x, y which makes possible to render square on area particular area

*__author__*: Petr Juna

*__example__*: \[\[1, 2\], \[6, 5\]\] // min corner x = 1, y = 2 and max corner x = 6, y = 5

___

