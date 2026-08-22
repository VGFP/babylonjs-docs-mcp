[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LoadAllSmartAssetsAsync

# Function: LoadAllSmartAssetsAsync()

> **LoadAllSmartAssetsAsync**(`scene`): `Promise`\<[`AssetContainer`](../classes/AssetContainer.md)[]\>

Defined in: [packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L267)

Loads all registered assets concurrently.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene whose registered assets to load.

## Returns

`Promise`\<[`AssetContainer`](../classes/AssetContainer.md)[]\>

A promise resolving to loaded scene-file containers.
