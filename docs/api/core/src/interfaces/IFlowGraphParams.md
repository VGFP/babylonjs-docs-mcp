[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphParams

# Interface: IFlowGraphParams

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:58](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L58)

Parameters used to create a flow graph.

## Properties

### coordinator

> **coordinator**: [`FlowGraphCoordinator`](../classes/FlowGraphCoordinator.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:66](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L66)

The event coordinator used by the flow graph.

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:71](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L71)

Optional human-readable name for the graph.
Defaults to "Graph" if not provided.

***

### scene

> **scene**: [`Scene`](../classes/Scene.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:62](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L62)

The scene that the flow graph belongs to.

***

### uniqueId?

> `optional` **uniqueId?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:76](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L76)

Optional unique identifier for the graph.
If not provided, a random UUID is generated.
