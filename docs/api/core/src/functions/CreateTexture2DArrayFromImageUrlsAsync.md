[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateTexture2DArrayFromImageUrlsAsync

# Function: CreateTexture2DArrayFromImageUrlsAsync()

> **CreateTexture2DArrayFromImageUrlsAsync**(`scene`, `urls`, `options?`): `Promise`\<[`RawTexture2DArray`](../classes/RawTexture2DArray.md)\>

Defined in: [packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts:224](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts#L224)

Creates a 2D array texture and fills each layer from a list of image urls.
All images must share the same dimensions.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

### urls

readonly \[`string`, `string`\]

defines the url of the image for each layer (at least one)

### options?

[`ICreateTexture2DArrayFromImageUrlsOptions`](../interfaces/ICreateTexture2DArrayFromImageUrlsOptions.md)

defines optional creation and upload settings

## Returns

`Promise`\<[`RawTexture2DArray`](../classes/RawTexture2DArray.md)\>

a promise resolved with the created RawTexture2DArray
