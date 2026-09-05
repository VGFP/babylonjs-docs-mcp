[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DeserializeSmartAssetMap

# Function: DeserializeSmartAssetMap()

> **DeserializeSmartAssetMap**(`data`): [`ISerializedSmartAssetMap`](../interfaces/ISerializedSmartAssetMap.md)

Defined in: [packages/dev/core/src/SmartAssets/smartAssetSerializer.ts:41](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/SmartAssets/smartAssetSerializer.ts#L41)

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
