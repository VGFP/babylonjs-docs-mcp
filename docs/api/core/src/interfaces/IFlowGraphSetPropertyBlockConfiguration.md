[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphSetPropertyBlockConfiguration

# Interface: IFlowGraphSetPropertyBlockConfiguration\<O\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.pure.ts#L15)

Configuration for the FlowGraphSetPropertyBlock

## Type Parameters

### O

`O` *extends* [`FlowGraphAssetType`](../enumerations/FlowGraphAssetType.md)

## Properties

### propertyName?

> `optional` **propertyName?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.pure.ts#L19)

The name of the property that will be set

***

### target?

> `optional` **target?**: [`AssetType`](../type-aliases/AssetType.md)\<`O`\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/flowGraphSetPropertyBlock.pure.ts#L24)

The target asset from which the property will be retrieved
