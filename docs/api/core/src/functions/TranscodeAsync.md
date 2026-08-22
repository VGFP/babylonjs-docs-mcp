[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TranscodeAsync

# Function: TranscodeAsync()

> **TranscodeAsync**(`data`, `config`): `Promise`\<`TranscodeResult`\>

Defined in: [packages/dev/core/src/Misc/basis.pure.ts:212](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/basis.pure.ts#L212)

Transcodes a loaded image file to compressed pixel data

## Parameters

### data

`ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\>

image data to transcode

### config

[`BasisTranscodeConfiguration`](../classes/BasisTranscodeConfiguration.md)

configuration options for the transcoding

## Returns

`Promise`\<`TranscodeResult`\>

a promise resulting in the transcoded image
