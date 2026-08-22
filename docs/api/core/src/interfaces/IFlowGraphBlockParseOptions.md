[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphBlockParseOptions

# Interface: IFlowGraphBlockParseOptions

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:16](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L16)

Options for parsing a block.

## Properties

### assetsContainer?

> `optional` **assetsContainer?**: `IAssetContainer`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L29)

The assets container to use when loading assets.

***

### pathConverter?

> `optional` **pathConverter?**: [`IPathToObjectConverter`](IPathToObjectConverter.md)\<[`IObjectAccessor`](IObjectAccessor.md)\<`any`, `any`, `any`\>\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:37](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L37)

The path converter to use to convert the path to an object accessor.

***

### scene

> **scene**: [`Scene`](../classes/Scene.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:33](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L33)

The scene that the block is being parsed in.

***

### valueParseFunction?

> `optional` **valueParseFunction?**: (`key`, `serializationObject`, `assetsContainer`, `scene`) => `any`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:25](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L25)

A function that parses a value from a serialization object.

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

the parsed value
