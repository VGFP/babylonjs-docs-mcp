[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphBitwiseBlockConfiguration

# Interface: IFlowGraphBitwiseBlockConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1181](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1181)

Configuration for bitwise operators

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

### valueType

> **valueType**: [`FlowGraphTypes`](../enumerations/FlowGraphTypes.md)

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1186](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1186)

The type of the values that will be operated on
Defaults to FlowGraphInteger, but can be a number or boolean as well.
