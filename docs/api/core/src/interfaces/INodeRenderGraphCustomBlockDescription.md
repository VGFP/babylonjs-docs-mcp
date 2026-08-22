[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / INodeRenderGraphCustomBlockDescription

# Interface: INodeRenderGraphCustomBlockDescription

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:17](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L17)

Description of a custom block to be used in the node render graph editor

## Properties

### description

> **description**: `string`

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:21](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L21)

Description (tooltip) of the block.

***

### factory

> **factory**: (`frameGraph`, `scene`) => [`NodeRenderGraphBlock`](../classes/NodeRenderGraphBlock.md)

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:25](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L25)

Factory function to create the block.

#### Parameters

##### frameGraph

[`FrameGraph`](../classes/FrameGraph.md)

##### scene

[`Scene`](../classes/Scene.md)

#### Returns

[`NodeRenderGraphBlock`](../classes/NodeRenderGraphBlock.md)

***

### menu

> **menu**: `string`

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:23](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L23)

Category of the block. Spaces must be replaced by underscores in the category name.

***

### name

> **name**: `string`

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L19)

Block name. It will be used as the block name in the left menu of the editor. Spaces must be replaced by underscores in the name.
