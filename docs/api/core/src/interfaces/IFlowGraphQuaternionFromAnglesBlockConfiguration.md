[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphQuaternionFromAnglesBlockConfiguration

# Interface: IFlowGraphQuaternionFromAnglesBlockConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.pure.ts#L394)

The configuration of the FlowGraphQuaternionFromAnglesBlock.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### order?

> `optional` **order?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.pure.ts:399](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.pure.ts#L399)

The intrinsic Tait–Bryan rotation order, one of `xyz`, `xzy`, `yxz`, `yzx`, `zxy`, `zyx`.
Any other (or missing) value falls back to the spec default `yxz`.
