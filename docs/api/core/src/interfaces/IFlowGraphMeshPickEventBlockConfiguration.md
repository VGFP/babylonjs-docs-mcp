[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphMeshPickEventBlockConfiguration

# Interface: IFlowGraphMeshPickEventBlockConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L19)

Configuration for the mesh pick event block.

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

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L23)

Should this mesh block propagation of the event.

***

### targetMesh?

> `optional` **targetMesh?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphMeshPickEventBlock.pure.ts#L28)

The mesh to listen to. Can also be set by the asset input.
