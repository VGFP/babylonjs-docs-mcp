[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / MatrixFormatter

# Class: MatrixFormatter

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.ts:61](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.ts#L61)

## Implements

- [`IFormatter`](../interfaces/IFormatter.md)\<[`Matrix3d`](Matrix3d.md)\>

## Constructors

### Constructor

> **new MatrixFormatter**(`o`): `MatrixFormatter`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.ts:67](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.ts#L67)

#### Parameters

##### o

[`IXmlSerializerFormatOptions`](../interfaces/IXmlSerializerFormatOptions.md)

#### Returns

`MatrixFormatter`

## Properties

### \_f

> **\_f**: [`NumberFormatter`](NumberFormatter.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.ts:65](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.ts#L65)

***

### o

> **o**: [`IXmlSerializerFormatOptions`](../interfaces/IXmlSerializerFormatOptions.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.ts:67](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.ts#L67)

## Methods

### toString()

> **toString**(`x`): `string`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.ts:71](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.ts#L71)

Converts a value to its XML string representation.

#### Parameters

##### x

[`Matrix3d`](Matrix3d.md)

#### Returns

`string`

the XML string representation

#### Implementation of

[`IFormatter`](../interfaces/IFormatter.md).[`toString`](../interfaces/IFormatter.md#tostring)
