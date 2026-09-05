[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RemoveSmartAssetAsync

# Function: RemoveSmartAssetAsync()

> **RemoveSmartAssetAsync**(`scene`, `key`): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L194)

Removes a key from the registry. If the asset is loaded, it is unloaded first.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene that owns the smart asset.

### key

`string`

The key to remove.

## Returns

`Promise`\<`void`\>

A promise that resolves when the asset has been unloaded and removed.
