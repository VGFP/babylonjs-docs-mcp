[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / UploadRadianceLevelsAsync

# Function: UploadRadianceLevelsAsync()

> **UploadRadianceLevelsAsync**(`texture`, `imageData`, `imageType?`): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/Misc/environmentTextureTools.pure.ts:668](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L668)

Uploads the levels of image data to the GPU.

## Parameters

### texture

[`InternalTexture`](../classes/InternalTexture.md)

defines the internal texture to upload to

### imageData

`ArrayBufferView`\<`ArrayBufferLike`\>[][]

defines the array buffer views of image data [mipmap][face]

### imageType?

`string` = `DefaultEnvironmentTextureImageType`

the mime type of the image data

## Returns

`Promise`\<`void`\>

a promise
