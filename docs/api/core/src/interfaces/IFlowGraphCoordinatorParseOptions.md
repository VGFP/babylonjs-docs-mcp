[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphCoordinatorParseOptions

# Interface: IFlowGraphCoordinatorParseOptions

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:28](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L28)

Parameters used to parse a flow graph coordinator.

## Properties

### pathConverter?

> `optional` **pathConverter?**: [`IPathToObjectConverter`](IPathToObjectConverter.md)\<[`IObjectAccessor`](IObjectAccessor.md)\<`any`, `any`, `any`\>\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L40)

The path converter to use to convert the path to an object accessor.

***

### scene

> **scene**: [`Scene`](../classes/Scene.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:44](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L44)

The scene that the flow graph coordinator belongs to.

***

### valueParseFunction?

> `optional` **valueParseFunction?**: (`key`, `serializationObject`, `assetsContainer`, `scene`) => `any`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L36)

A function that will be called to parse the value of a property.

#### Parameters

##### key

`string`

the key of the property

##### serializationObject

`any`

the serialization object where the property is located

##### assetsContainer

`IAssetContainer`

the assets container

##### scene

[`Scene`](../classes/Scene.md)

the scene that the block is being parsed in

#### Returns

`any`
