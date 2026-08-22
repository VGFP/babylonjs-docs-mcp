[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SerializeSmartAssetManagerMap

# Function: SerializeSmartAssetManagerMap()

> **SerializeSmartAssetManagerMap**(`scene`, `baseUrl?`): [`ISerializedSmartAssetMap`](../interfaces/ISerializedSmartAssetMap.md)

Defined in: [packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:452](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L452)

Serializes the registry to a JSON-compatible document.
If a baseUrl is provided, asset URLs are stored relative to it for portability.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene whose registry to serialize.

### baseUrl?

`string`

Optional base URL for making asset paths relative.

## Returns

[`ISerializedSmartAssetMap`](../interfaces/ISerializedSmartAssetMap.md)

A serialized asset map document.
