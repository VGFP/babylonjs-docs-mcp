[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFObjectModelTreeScenesObject

# Interface: IGLTFObjectModelTreeScenesObject

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:331](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L331)

Accessor tree describing the `/scenes` section of the glTF Object Model.
Per-scene root-node refs are exposed under `nodes/{i}`.

## Properties

### \_\_array\_\_

> **\_\_array\_\_**: `object`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:334](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L334)

#### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

#### nodes

> **nodes**: `object`

##### nodes.\_\_array\_\_

> **\_\_array\_\_**: `object` & [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`any`, `any`, `string`\>

###### Type Declaration

###### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

##### nodes.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`number`[], `any`, [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

***

### length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IScene`](IScene.md)[], `any`, [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:333](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L333)

Number of scenes in the array.
