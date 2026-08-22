[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadFileError

# Class: LoadFileError

Defined in: [packages/dev/core/src/Misc/fileTools.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileTools.pure.ts#L26)

## Ignore

## Extends

- [`RuntimeError`](RuntimeError.md)

## Constructors

### Constructor

> **new LoadFileError**(`message`, `object?`): `LoadFileError`

Defined in: [packages/dev/core/src/Misc/fileTools.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileTools.pure.ts#L35)

Creates a new LoadFileError

#### Parameters

##### message

`string`

defines the message of the error

##### object?

[`WebRequest`](WebRequest.md) \| `File`

defines the optional web request

#### Returns

`LoadFileError`

#### Overrides

[`RuntimeError`](RuntimeError.md).[`constructor`](RuntimeError.md#constructor)

## Properties

### errorCode

> **errorCode**: [`ErrorCodesType`](../type-aliases/ErrorCodesType.md)

Defined in: [packages/dev/core/src/Misc/error.ts:63](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/error.ts#L63)

The error code

#### Inherited from

[`RuntimeError`](RuntimeError.md).[`errorCode`](RuntimeError.md#errorcode)

***

### file?

> `optional` **file?**: `File`

Defined in: [packages/dev/core/src/Misc/fileTools.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileTools.pure.ts#L28)

***

### innerError?

> `optional` **innerError?**: `Error`

Defined in: [packages/dev/core/src/Misc/error.ts:68](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/error.ts#L68)

The error that caused this outer error

#### Inherited from

[`RuntimeError`](RuntimeError.md).[`innerError`](RuntimeError.md#innererror)

***

### request?

> `optional` **request?**: [`WebRequest`](WebRequest.md)

Defined in: [packages/dev/core/src/Misc/fileTools.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileTools.pure.ts#L27)
