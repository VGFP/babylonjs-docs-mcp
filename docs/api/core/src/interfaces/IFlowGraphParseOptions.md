[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphParseOptions

# Interface: IFlowGraphParseOptions

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:82](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L82)

Options for parsing a flow graph.

## Properties

### coordinator

> **coordinator**: [`FlowGraphCoordinator`](../classes/FlowGraphCoordinator.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:94](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L94)

The flow graph coordinator.

***

### pathConverter?

> `optional` **pathConverter?**: [`IPathToObjectConverter`](IPathToObjectConverter.md)\<[`IObjectAccessor`](IObjectAccessor.md)\<`any`, `any`, `any`\>\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:98](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L98)

A function that converts a path to an object accessor.

***

### valueParseFunction?

> `optional` **valueParseFunction?**: (`key`, `serializationObject`, `assetsContainer`, `scene`) => `any`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:90](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraph.ts#L90)

A function that parses complex values in a scene.

#### Parameters

##### key

`string`

the key of the value

##### serializationObject

`any`

the object to read the value from

##### assetsContainer

`IAssetContainer`

the assets container to read assets from

##### scene

[`Scene`](../classes/Scene.md)

the scene to read the value from

#### Returns

`any`
