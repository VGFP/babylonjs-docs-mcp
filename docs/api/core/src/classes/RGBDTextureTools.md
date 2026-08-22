[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RGBDTextureTools

# Class: RGBDTextureTools

Defined in: [packages/dev/core/src/Misc/rgbdTextureTools.ts:14](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/rgbdTextureTools.ts#L14)

Class used to host RGBD texture specific utilities

## Constructors

### Constructor

> **new RGBDTextureTools**(): `RGBDTextureTools`

#### Returns

`RGBDTextureTools`

## Methods

### EncodeTextureToRGBD()

> `static` **EncodeTextureToRGBD**(`internalTexture`, `scene`, `outputTextureType?`): `Promise`\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [packages/dev/core/src/Misc/rgbdTextureTools.ts:137](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/rgbdTextureTools.ts#L137)

Encode the texture to RGBD if possible.

#### Parameters

##### internalTexture

[`InternalTexture`](InternalTexture.md)

the texture to encode

##### scene

[`Scene`](Scene.md)

the scene hosting the texture

##### outputTextureType?

`number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

type of the texture in which the encoding is performed

#### Returns

`Promise`\<[`InternalTexture`](InternalTexture.md)\>

a promise with the internalTexture having its texture replaced by the result of the processing

***

### ExpandRGBDTexture()

> `static` **ExpandRGBDTexture**(`texture`): `void`

Defined in: [packages/dev/core/src/Misc/rgbdTextureTools.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/rgbdTextureTools.ts#L19)

Expand the RGBD Texture from RGBD to Half Float if possible.

#### Parameters

##### texture

[`Texture`](Texture.md)

the texture to expand.

#### Returns

`void`
