[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DDSTools

# Class: DDSTools

Defined in: [packages/dev/core/src/Misc/dds.pure.ts:150](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/dds.pure.ts#L150)

Class used to provide DDS decompression tools

## Constructors

### Constructor

> **new DDSTools**(): `DDSTools`

#### Returns

`DDSTools`

## Properties

### StoreLODInAlphaChannel

> `static` **StoreLODInAlphaChannel**: `boolean` = `false`

Defined in: [packages/dev/core/src/Misc/dds.pure.ts:154](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/dds.pure.ts#L154)

Gets or sets a boolean indicating that LOD info is stored in alpha channel (false by default)

## Methods

### GetDDSInfo()

> `static` **GetDDSInfo**(`data`): [`DDSInfo`](../interfaces/DDSInfo.md)

Defined in: [packages/dev/core/src/Misc/dds.pure.ts:161](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/dds.pure.ts#L161)

Gets DDS information from an array buffer

#### Parameters

##### data

`ArrayBufferView`

defines the array buffer view to read data from

#### Returns

[`DDSInfo`](../interfaces/DDSInfo.md)

the DDS information
