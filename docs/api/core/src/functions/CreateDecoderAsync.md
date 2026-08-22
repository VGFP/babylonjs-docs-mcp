[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateDecoderAsync

# Function: CreateDecoderAsync()

> **CreateDecoderAsync**(`header`, `dataView`, `offset`, `outputType`): `Promise`\<`IEXRDecoder`\>

Defined in: [packages/dev/core/src/Materials/Textures/Loaders/EXR/exrLoader.decoder.ts:87](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/Loaders/EXR/exrLoader.decoder.ts#L87)

Create a decoder for the exr file

## Parameters

### header

`IEXRHeader`

header of the exr file

### dataView

`DataView`

dataview of the exr file

### offset

[`DataCursor`](../interfaces/DataCursor.md)

current offset

### outputType

[`EXROutputType`](../enumerations/EXROutputType.md)

expected output type (float or half float)

## Returns

`Promise`\<`IEXRDecoder`\>

a promise that resolves with the decoder
