[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DeserializeSmartAssetMap

# Function: DeserializeSmartAssetMap()

> **DeserializeSmartAssetMap**(`data`): [`ISerializedSmartAssetMap`](../interfaces/ISerializedSmartAssetMap.md)

Defined in: [packages/dev/core/src/SmartAssets/smartAssetSerializer.ts:41](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/SmartAssets/smartAssetSerializer.ts#L41)

Validates and parses a serialized smart asset map document.

## Parameters

### data

`unknown`

The raw data to validate (typically parsed JSON).

## Returns

[`ISerializedSmartAssetMap`](../interfaces/ISerializedSmartAssetMap.md)

The validated document.

## Throws

If the data does not conform to the expected schema.
