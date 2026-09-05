[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphGetVariableBlockConfiguration

# Interface: IFlowGraphGetVariableBlockConfiguration\<T\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.pure.ts:13](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.pure.ts#L13)

The configuration of the FlowGraphGetVariableBlock.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Type Parameters

### T

`T`

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### initialValue?

> `optional` **initialValue?**: `T`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.pure.ts#L22)

The initial value of the variable.

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### variable

> **variable**: `string`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphGetVariableBlock.pure.ts#L17)

The name of the variable to get.
