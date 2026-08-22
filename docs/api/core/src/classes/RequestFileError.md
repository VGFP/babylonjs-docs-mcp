[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RequestFileError

# Class: RequestFileError

Defined in: [packages/dev/core/src/Misc/fileTools.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileTools.pure.ts#L50)

## Ignore

## Extends

- [`RuntimeError`](RuntimeError.md)

## Constructors

### Constructor

> **new RequestFileError**(`message`, `request`): `RequestFileError`

Defined in: [packages/dev/core/src/Misc/fileTools.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileTools.pure.ts#L56)

Creates a new LoadFileError

#### Parameters

##### message

`string`

defines the message of the error

##### request

[`WebRequest`](WebRequest.md)

defines the optional web request

#### Returns

`RequestFileError`

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

### innerError?

> `optional` **innerError?**: `Error`

Defined in: [packages/dev/core/src/Misc/error.ts:68](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/error.ts#L68)

The error that caused this outer error

#### Inherited from

[`RuntimeError`](RuntimeError.md).[`innerError`](RuntimeError.md#innererror)

***

### request

> **request**: [`WebRequest`](WebRequest.md)

Defined in: [packages/dev/core/src/Misc/fileTools.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileTools.pure.ts#L58)

defines the optional web request
