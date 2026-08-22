[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphCoordinatorConfiguration

# Interface: IFlowGraphCoordinatorConfiguration

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:13](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L13)

Parameters used to create a flow graph engine.

## Properties

### hostResolver?

> `optional` **hostResolver?**: [`IFlowGraphHostResolver`](IFlowGraphHostResolver.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:22](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L22)

Optional resolver letting the environment hosting the graphs decide how runtime entities are
represented as opaque reference values. When omitted, a neutral built-in representation is used.

***

### scene

> **scene**: [`Scene`](../classes/Scene.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:17](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L17)

The scene that the flow graph engine belongs to.
