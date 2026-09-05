[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / INodeRenderGraphEditorOptions

# Interface: INodeRenderGraphEditorOptions

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:31](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L31)

Interface used to configure the node render graph editor

## Properties

### editorURL?

> `optional` **editorURL?**: `string`

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:33](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L33)

Define the URL to load node editor script from

***

### nodeRenderGraphEditorConfig?

> `optional` **nodeRenderGraphEditorConfig?**: `object`

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L35)

Additional configuration for the FGE

#### backgroundColor?

> `optional` **backgroundColor?**: [`Color4`](../classes/Color4.md)

#### customBlockDescriptions?

> `optional` **customBlockDescriptions?**: [`INodeRenderGraphCustomBlockDescription`](INodeRenderGraphCustomBlockDescription.md)[]

#### hostScene?

> `optional` **hostScene?**: [`Scene`](../classes/Scene.md)
