[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphFloatToIntConfiguration

# Interface: IFlowGraphFloatToIntConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.pure.ts#L58)

Configuration for the float to int block.

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

### roundingMode?

> `optional` **roundingMode?**: `"floor"` \| `"ceil"` \| `"round"`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Transformers/flowGraphTypeToTypeBlocks.pure.ts#L63)

The rounding mode to use.
if not defined, it will use the FlowGraphInteger default rounding ( a | 0 )
