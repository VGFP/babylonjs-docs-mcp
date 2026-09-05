[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / registerTextureLoader

# Function: registerTextureLoader()

> **registerTextureLoader**(`extension`, `loaderFactory`): `void`

Defined in: [packages/dev/core/src/Materials/Textures/Loaders/textureLoaderManager.ts:15](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/Loaders/textureLoaderManager.ts#L15)

Registers a texture loader.
If a loader for the extension exists in the registry, it will be replaced.

## Parameters

### extension

`string`

The name of the loader extension.

### loaderFactory

(`mimeType?`) => [`IInternalTextureLoader`](../interfaces/IInternalTextureLoader.md) \| `Promise`\<[`IInternalTextureLoader`](../interfaces/IInternalTextureLoader.md)\>

The factory function that creates the loader extension.

## Returns

`void`
