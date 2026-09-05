[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadAssetContainerFromSerializedScene

# Function: LoadAssetContainerFromSerializedScene()

> **LoadAssetContainerFromSerializedScene**(`scene`, `serializedScene`, `rootUrl`): [`AssetContainer`](../classes/AssetContainer.md)

Defined in: [packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts#L143)

**`Experimental`**

Loads an AssetContainer from a serialized Babylon scene.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene to load the asset container into.

### serializedScene

`string` \| `object`

The serialized scene data. This can be either a JSON string, or an object (e.g. from a call to JSON.parse).

### rootUrl

`string`

The root URL for loading assets.

## Returns

[`AssetContainer`](../classes/AssetContainer.md)

The loaded AssetContainer.
