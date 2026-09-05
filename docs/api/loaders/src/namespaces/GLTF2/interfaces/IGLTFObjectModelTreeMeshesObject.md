[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFObjectModelTreeMeshesObject

# Interface: IGLTFObjectModelTreeMeshesObject

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:308](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L308)

Accessor tree describing the `/meshes` section of the glTF Object Model.
Exposes per-mesh primitives (and their material refs) and the mesh-level
morph-target weights array.

## Properties

### \_\_array\_\_

> **\_\_array\_\_**: `object`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:311](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L311)

#### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

#### primitives

> **primitives**: `object`

##### primitives.\_\_array\_\_

> **\_\_array\_\_**: `object`

##### primitives.\_\_array\_\_.\_\_target\_\_

> **\_\_target\_\_**: `boolean`

##### primitives.\_\_array\_\_.material

> **material**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`any`, `any`, `string` \| `undefined`\>

##### primitives.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMeshPrimitive`](IMeshPrimitive.md)[], `any`, [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

#### weights

> **weights**: `object`

##### weights.\_\_array\_\_

> **\_\_array\_\_**: `object` & [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`any`, `any`, `number`\>

###### Type Declaration

###### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

##### weights.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`number`[], `any`, [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

***

### length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IMesh`](IMesh.md)[], ([`Mesh`](../../../../../core/src/classes/Mesh.md) \| `undefined`)[], [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:310](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L310)

Number of meshes in the array.
