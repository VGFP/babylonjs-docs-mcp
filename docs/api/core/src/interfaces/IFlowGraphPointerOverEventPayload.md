[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphPointerOverEventPayload

# Interface: IFlowGraphPointerOverEventPayload

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.pure.ts#L32)

Payload for the pointer over event.

## Properties

### mesh

> **mesh**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.pure.ts#L40)

The mesh that was picked.

***

### out?

> `optional` **out?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.pure.ts#L45)

If populated, the hover event moved from this mesh to the `mesh` variable

***

### pointerId

> **pointerId**: `number`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphPointerOverEventBlock.pure.ts#L36)

The pointer id.
