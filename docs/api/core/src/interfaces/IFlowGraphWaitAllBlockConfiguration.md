[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphWaitAllBlockConfiguration

# Interface: IFlowGraphWaitAllBlockConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock.pure.ts#L15)

Configuration for the wait all block.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### inputSignalCount

> **inputSignalCount**: `number`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Execution/ControlFlow/flowGraphWaitAllBlock.pure.ts#L20)

The number of input signals. There will always be at least one input flow.
glTF interactivity has a max of 64 input flows.

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)
