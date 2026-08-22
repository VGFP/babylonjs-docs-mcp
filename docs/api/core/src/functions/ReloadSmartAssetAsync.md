[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ReloadSmartAssetAsync

# Function: ReloadSmartAssetAsync()

> **ReloadSmartAssetAsync**(`scene`, `key`): `Promise`\<[`BaseTexture`](../classes/BaseTexture.md) \| [`AssetContainer`](../classes/AssetContainer.md)\>

Defined in: [packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:414](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L414)

Unloads and re-loads an asset.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene whose smart asset to reload.

### key

`string`

The key to reload.

## Returns

`Promise`\<[`BaseTexture`](../classes/BaseTexture.md) \| [`AssetContainer`](../classes/AssetContainer.md)\>

A promise resolving to the newly loaded AssetContainer or BaseTexture.
