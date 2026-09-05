[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICreateTexture2DArrayFromImageUrlsOptions

# Interface: ICreateTexture2DArrayFromImageUrlsOptions

Defined in: [packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts#L35)

Options controlling the creation of a 2D array texture from a list of image urls.

## Extends

- [`IUploadImageToTexture2DArrayLayerOptions`](IUploadImageToTexture2DArrayLayerOptions.md)

## Properties

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts#L37)

Defines if mip levels should be generated (true by default)

***

### imageBitmapOptions?

> `optional` **imageBitmapOptions?**: `ImageBitmapOptions`

Defined in: [packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts:43](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts#L43)

Options forwarded to createImageBitmap when decoding each url

***

### invertY?

> `optional` **invertY?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts#L27)

Defines if the source must be stored with the Y axis inverted (false by default)

#### Inherited from

[`IUploadImageToTexture2DArrayLayerOptions`](IUploadImageToTexture2DArrayLayerOptions.md).[`invertY`](IUploadImageToTexture2DArrayLayerOptions.md#inverty)

***

### premultiplyAlpha?

> `optional` **premultiplyAlpha?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts:29](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts#L29)

Defines if the source alpha must be premultiplied (false by default)

#### Inherited from

[`IUploadImageToTexture2DArrayLayerOptions`](IUploadImageToTexture2DArrayLayerOptions.md).[`premultiplyAlpha`](IUploadImageToTexture2DArrayLayerOptions.md#premultiplyalpha)

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts:39](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts#L39)

Defines the sampling mode to use (Texture.TRILINEAR_SAMPLINGMODE by default)

***

### textureType?

> `optional` **textureType?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts:41](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/rawTexture2DArray.functions.ts#L41)

Defines the texture type (Constants.TEXTURETYPE_UNSIGNED_BYTE by default)
