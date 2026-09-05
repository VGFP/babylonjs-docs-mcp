[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphPointerOutEventPayload

# Interface: IFlowGraphPointerOutEventPayload

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts#L32)

Payload for the pointer out event.

## Properties

### mesh

> **mesh**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts#L40)

The mesh that was picked.

***

### over?

> `optional` **over?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts#L45)

If populated, the hover event moved to this mesh from the `mesh` variable

***

### pointerId

> **pointerId**: `number`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOutEventBlock.pure.ts#L36)

The pointer id.
