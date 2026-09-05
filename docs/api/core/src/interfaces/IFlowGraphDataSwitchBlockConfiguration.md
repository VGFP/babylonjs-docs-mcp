[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphDataSwitchBlockConfiguration

# Interface: IFlowGraphDataSwitchBlockConfiguration\<T\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.pure.ts:11](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.pure.ts#L11)

Configuration for a block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Type Parameters

### T

`T`

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### cases

> **cases**: `FlowGraphNumber`[]

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.pure.ts#L16)

The possible values for the selection.

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### treatCasesAsIntegers?

> `optional` **treatCasesAsIntegers?**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphDataSwitchBlock.pure.ts#L22)

If true, the cases will be treated as integers, meaning 1.1, 1.0, 0.1e1  and 1 will a single case - "1".
This is the default behavior in glTF interactivity.
