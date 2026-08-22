[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadAssetContainerFromSerializedScene

# Function: LoadAssetContainerFromSerializedScene()

> **LoadAssetContainerFromSerializedScene**(`scene`, `serializedScene`, `rootUrl`): [`AssetContainer`](../classes/AssetContainer.md)

Defined in: [packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts#L143)

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
