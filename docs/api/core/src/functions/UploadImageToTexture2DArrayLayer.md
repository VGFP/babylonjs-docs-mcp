[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / UploadImageToTexture2DArrayLayer

# Function: UploadImageToTexture2DArrayLayer()

> **UploadImageToTexture2DArrayLayer**(`texture`, `source`, `layer`, `options?`): `void`

Defined in: [packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts:54](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts#L54)

Uploads a decoded image source (ImageBitmap, canvas, video, image element...) into a single layer of a 2D array texture.
This is the image-source counterpart to RawTexture2DArray.update, which only accepts raw bytes.

## Parameters

### texture

[`RawTexture2DArray`](../classes/RawTexture2DArray.md)

defines the 2D array texture to upload into

### source

[`ImageSource`](../type-aliases/ImageSource.md)

defines the image source to upload

### layer

`number`

defines the array layer to upload into

### options?

[`IUploadImageToTexture2DArrayLayerOptions`](../interfaces/IUploadImageToTexture2DArrayLayerOptions.md)

defines optional upload settings (invertY, premultiplyAlpha)

## Returns

`void`
