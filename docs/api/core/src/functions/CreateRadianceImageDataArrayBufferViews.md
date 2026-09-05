[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateRadianceImageDataArrayBufferViews

# Function: CreateRadianceImageDataArrayBufferViews()

> **CreateRadianceImageDataArrayBufferViews**(`data`, `info`): `ArrayBufferView`\<`ArrayBufferLike`\>[][]

Defined in: [packages/dev/core/src/Misc/environmentTextureTools.pure.ts:508](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L508)

Creates the ArrayBufferViews used for initializing environment texture image data.

## Parameters

### data

`ArrayBufferView`

the image data

### info

[`EnvironmentTextureInfo`](../type-aliases/EnvironmentTextureInfo.md)

parameters that determine what views will be created for accessing the underlying buffer

## Returns

`ArrayBufferView`\<`ArrayBufferLike`\>[][]

the views described by info providing access to the underlying buffer
