[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadAllSmartAssetsAsync

# Function: LoadAllSmartAssetsAsync()

> **LoadAllSmartAssetsAsync**(`scene`): `Promise`\<[`AssetContainer`](../classes/AssetContainer.md)[]\>

Defined in: [packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L267)

Loads all registered assets concurrently.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene whose registered assets to load.

## Returns

`Promise`\<[`AssetContainer`](../classes/AssetContainer.md)[]\>

A promise resolving to loaded scene-file containers.
