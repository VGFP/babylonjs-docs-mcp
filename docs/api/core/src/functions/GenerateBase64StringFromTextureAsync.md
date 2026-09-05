[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GenerateBase64StringFromTextureAsync

# Function: GenerateBase64StringFromTextureAsync()

> **GenerateBase64StringFromTextureAsync**(`texture`, `faceIndex?`, `level?`): `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<`string`\>\>

Defined in: [packages/dev/core/src/Misc/copyTools.ts:97](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/copyTools.ts#L97)

Reads the pixels stored in the webgl texture and returns them as a base64 string

## Parameters

### texture

[`BaseTexture`](../classes/BaseTexture.md)

defines the texture to read pixels from

### faceIndex?

`number` = `0`

defines the face of the texture to read (in case of cube texture)

### level?

`number` = `0`

defines the LOD level of the texture to read (in case of Mip Maps)

## Returns

`Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<`string`\>\>

The base64 encoded string or null wrapped in a promise
