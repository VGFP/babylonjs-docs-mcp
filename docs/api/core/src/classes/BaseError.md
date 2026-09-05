[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BaseError

# Abstract Class: BaseError

Defined in: [packages/dev/core/src/Misc/error.ts:7](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/error.ts#L7)

Base error. Due to limitations of typedoc-check and missing documentation
in lib.es5.d.ts, cannot extend Error directly for RuntimeError.

## Ignore

## Extends

- `Error`

## Extended by

- [`RuntimeError`](RuntimeError.md)
- [`AbortError`](AbortError.md)

## Constructors

### Constructor

> **new BaseError**(`message?`): `BaseError`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1080

#### Parameters

##### message?

`string`

#### Returns

`BaseError`

#### Inherited from

`Error.constructor`

### Constructor

> **new BaseError**(`message?`, `options?`): `BaseError`

Defined in: node\_modules/typescript/lib/lib.es5.d.ts:1080

#### Parameters

##### message?

`string`

##### options?

`ErrorOptions`

#### Returns

`BaseError`

#### Inherited from

`Error.constructor`
