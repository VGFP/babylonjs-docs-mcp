[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphCombineMatrixBlockConfiguration

# ~~Interface: IFlowGraphCombineMatrixBlockConfiguration~~

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.pure.ts:145](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.pure.ts#L145)

Configuration for the matrix combine blocks.

## Deprecated

The matrix combine blocks now default to column-major input, matching Babylon's
[Matrix](../classes/Matrix.md) storage and the glTF/KHR_interactivity convention. This interface is retained so the
`inputIsColumnMajor` option keeps being honoured; set it to `false` to feed row-major input.

BREAKING: the meaning of `inputIsColumnMajor` is inverted from previous releases, not just its
default. Previously `inputIsColumnMajor: true` took the transposing path and the default (unset)
treated input as row-major. Now the default (unset) is column-major, `inputIsColumnMajor: false`
takes the transposing path, and `inputIsColumnMajor: true` is the straight (non-transposing) path.
The unset behaviour is unchanged for graphs that never set the flag, but anyone who explicitly set
`true` or `false` before now gets the opposite transform and should drop the flag (or flip it).

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### ~~inputIsColumnMajor?~~

> `optional` **inputIsColumnMajor?**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathCombineExtractBlocks.pure.ts#L153)

Whether the input is already in column-major order. Defaults to `true`.

#### Deprecated

Provide column-major input (the default) and omit this flag. Set to `false` only to
keep feeding legacy row-major input, which is transposed into the matrix's column-major storage.
Note the inverted meaning versus previous releases (see the interface deprecation note): a former
`inputIsColumnMajor: true` no longer transposes, and a former `false` now does.

***

### ~~name?~~

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)
