[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphForLoopBlockConfiguration

# Interface: IFlowGraphForLoopBlockConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts#L18)

Configuration for the For Loop block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### incrementIndexWhenLoopDone?

> `optional` **incrementIndexWhenLoopDone?**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts#L30)

If set to true, the index of the case will be incremented when the loop is done.
This will result that the index will equal endIndex when the loop finished its work.
This is the default behavior in glTF interactivity

***

### initialIndex?

> `optional` **initialIndex?**: `FlowGraphNumber`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts#L23)

The initial index of the loop.
if not set will default to 0

***

### maxLoopIterations?

> `optional` **maxLoopIterations?**: `number`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphForLoopBlock.pure.ts#L37)

Overrides [FlowGraphForLoopBlock.MaxLoopIterations](../classes/FlowGraphForLoopBlock.md#maxloopiterations) for this block only.
Lets a single graph opt into a higher (or lower) runaway-loop guard without changing the
process-wide default that every other FlowGraph relies on.

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)
