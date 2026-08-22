[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ReadFileError

# Class: ReadFileError

Defined in: [packages/dev/core/src/Misc/fileTools.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileTools.pure.ts#L67)

## Ignore

## Extends

- [`RuntimeError`](RuntimeError.md)

## Constructors

### Constructor

> **new ReadFileError**(`message`, `file`): `ReadFileError`

Defined in: [packages/dev/core/src/Misc/fileTools.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileTools.pure.ts#L73)

Creates a new ReadFileError

#### Parameters

##### message

`string`

defines the message of the error

##### file

`File`

defines the optional file

#### Returns

`ReadFileError`

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

### file

> **file**: `File`

Defined in: [packages/dev/core/src/Misc/fileTools.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileTools.pure.ts#L75)

defines the optional file

***

### innerError?

> `optional` **innerError?**: `Error`

Defined in: [packages/dev/core/src/Misc/error.ts:68](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/error.ts#L68)

The error that caused this outer error

#### Inherited from

[`RuntimeError`](RuntimeError.md).[`innerError`](RuntimeError.md#innererror)
