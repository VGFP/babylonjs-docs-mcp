[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadImageToTexture2DArrayLayerAsync

# Function: LoadImageToTexture2DArrayLayerAsync()

> **LoadImageToTexture2DArrayLayerAsync**(`texture`, `url`, `layer`, `options?`): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts:88](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts#L88)

Fetches an image from a url, decodes it and uploads it into a single layer of a 2D array texture.

## Parameters

### texture

[`RawTexture2DArray`](../classes/RawTexture2DArray.md)

defines the 2D array texture to upload into

### url

`string`

defines the url of the image to load

### layer

`number`

defines the array layer to upload into

### options?

[`IUploadImageToTexture2DArrayLayerOptions`](../interfaces/IUploadImageToTexture2DArrayLayerOptions.md)

defines optional upload settings (invertY, premultiplyAlpha)

## Returns

`Promise`\<`void`\>

a promise resolved once the layer has been uploaded
