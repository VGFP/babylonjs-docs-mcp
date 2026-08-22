[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphEditorLaunchOptions

# Interface: IFlowGraphEditorLaunchOptions

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L29)

Interface used to configure the launch of the flow graph editor.

## Properties

### editorURL?

> `optional` **editorURL?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:31](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L31)

Define the URL to load the flow graph editor script from

***

### flowGraphEditorConfig?

> `optional` **flowGraphEditorConfig?**: `object`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:33](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L33)

Additional configuration forwarded to `FlowGraphEditor.Show()` (e.g. hostScene, hostElement)

#### attachToLiveScene?

> `optional` **attachToLiveScene?**: `boolean`

#### hostElement?

> `optional` **hostElement?**: `HTMLElement`

#### hostScene?

> `optional` **hostScene?**: [`Scene`](../classes/Scene.md)
