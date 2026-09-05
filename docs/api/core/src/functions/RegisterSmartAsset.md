[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RegisterSmartAsset

# Function: RegisterSmartAsset()

> **RegisterSmartAsset**(`scene`, `key`, `url`, `options?`): `void`

Defined in: [packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:170](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L170)

Registers a smart asset entry mapping a key to a URL.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene whose smart asset registry to update.

### key

`string`

Unique string identifier for this asset.

### url

`string`

URL or path to the asset file.

### options?

`SmartAssetRegistrationOptions`

Optional loader hints and metadata for this asset.

## Returns

`void`
