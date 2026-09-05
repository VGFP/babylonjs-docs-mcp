[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / \_GetCompatibleTextureLoader

# Function: \_GetCompatibleTextureLoader()

> **\_GetCompatibleTextureLoader**(`extension`, `mimeType?`): [`Nullable`](../type-aliases/Nullable.md)\<`Promise`\<[`IInternalTextureLoader`](../interfaces/IInternalTextureLoader.md)\>\>

Defined in: [packages/dev/core/src/Materials/Textures/Loaders/textureLoaderManager.ts:38](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/Loaders/textureLoaderManager.ts#L38)

Function used to get the correct texture loader for a specific extension.

## Parameters

### extension

`string`

defines the file extension of the file being loaded

### mimeType?

`string`

defines the optional mime type of the file being loaded

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Promise`\<[`IInternalTextureLoader`](../interfaces/IInternalTextureLoader.md)\>\>

the IInternalTextureLoader or null if it wasn't found
