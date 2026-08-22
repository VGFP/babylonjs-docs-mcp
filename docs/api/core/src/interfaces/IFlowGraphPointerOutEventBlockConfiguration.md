[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphPointerOutEventBlockConfiguration

# Interface: IFlowGraphPointerOutEventBlockConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts#L17)

Configuration for the pointer out event block.

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

### stopPropagation?

> `optional` **stopPropagation?**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts#L21)

Should this mesh block propagation of the event.

***

### targetMesh?

> `optional` **targetMesh?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts#L26)

The mesh to listen to. Can also be set by the asset input.
