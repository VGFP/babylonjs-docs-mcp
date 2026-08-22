[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetFlowGraphAssetWithType

# Function: GetFlowGraphAssetWithType()

> **GetFlowGraphAssetWithType**\<`T`\>(`assetsContext`, `type`, `index`, `useIndexAsUniqueId?`): [`Nullable`](../type-aliases/Nullable.md)\<[`AssetType`](../type-aliases/AssetType.md)\<`T`\>\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphAssetsContext.ts:45](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphAssetsContext.ts#L45)

Returns the asset with the given index and type from the assets context.

## Type Parameters

### T

`T` *extends* [`FlowGraphAssetType`](../enumerations/FlowGraphAssetType.md)

## Parameters

### assetsContext

`IAssetContainer`

The assets context to get the asset from

### type

`T`

The type of the asset

### index

`number`

The index of the asset

### useIndexAsUniqueId?

`boolean`

If set to true, instead of the index in the array it will search for the unique id of the asset.

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AssetType`](../type-aliases/AssetType.md)\<`T`\>\>

The asset or null if not found
