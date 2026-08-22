[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphMatrixDecomposeBlockConfiguration

# Interface: IFlowGraphMatrixDecomposeBlockConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.pure.ts#L59)

Configuration for the matrix decompose block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### keepDegenerateComponents?

> `optional` **keepDegenerateComponents?**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMatrixMathBlocks.pure.ts#L68)

When a matrix cannot be decomposed, output the translation and the raw column lengths that were
extracted from the matrix instead of the type-default translation and scale. `isValid` is reported
as `false` either way. Defaults to `false`.

A host whose specification requires those components to be preserved can turn this on; it is
opt-in so that the default block behaviour stays unchanged.

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)
