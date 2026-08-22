[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphNormalizeBlockConfiguration

# Interface: IFlowGraphNormalizeBlockConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.pure.ts#L66)

Configuration for normalized vector

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)

***

### nanOnZeroLength?

> `optional` **nanOnZeroLength?**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphVectorMathBlocks.pure.ts#L71)

If true, the block will return NaN if the input vector has a length of 0.
This is the expected behavior for glTF interactivity graphs.
