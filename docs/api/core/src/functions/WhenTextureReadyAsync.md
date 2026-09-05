[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WhenTextureReadyAsync

# Function: WhenTextureReadyAsync()

> **WhenTextureReadyAsync**(`texture`): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/Misc/textureTools.ts:238](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/textureTools.ts#L238)

Waits for when the given texture is ready to be used (downloaded, converted, mip mapped...)

## Parameters

### texture

[`BaseTexture`](../classes/BaseTexture.md)

the texture to wait for

## Returns

`Promise`\<`void`\>

a promise that resolves when the texture is ready
