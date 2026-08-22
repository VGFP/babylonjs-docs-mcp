[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFObjectModelTreeNodesObject

# Interface: IGLTFObjectModelTreeNodesObject\<GLTFTargetType, BabylonTargetType\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:71](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L71)

Accessor tree describing the `/nodes` section of the glTF Object Model.
Exposes per-node TRS, ref-typed parent/children/camera/mesh/skin links,
morph-target weights and node-extension properties.

## Type Parameters

### GLTFTargetType

`GLTFTargetType` = [`INode`](INode.md)

### BabylonTargetType

`BabylonTargetType` = [`TransformNode`](../../../../../core/src/classes/TransformNode.md)

## Properties

### \_\_array\_\_

> **\_\_array\_\_**: `object`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:74](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L74)

#### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

#### camera

> **camera**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `any`, `string` \| `undefined`\>

#### children

> **children**: `object`

##### children.\_\_array\_\_

> **\_\_array\_\_**: `object` & [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`any`, `any`, `string`\>

###### Type Declaration

###### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

##### children.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`number`[], `any`, [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

#### extensions

> **extensions**: `object`

##### extensions.EXT\_lights\_ies?

> `optional` **EXT\_lights\_ies?**: `object`

##### extensions.EXT\_lights\_ies.color

> **color**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`INode`](INode.md), [`Light`](../../../../../core/src/classes/Light.md), [`Color3`](../../../../../core/src/classes/Color3.md)\>

##### extensions.EXT\_lights\_ies.multiplier

> **multiplier**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`INode`](INode.md), [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### extensions.KHR\_node\_visibility?

> `optional` **KHR\_node\_visibility?**: `object`

##### extensions.KHR\_node\_visibility.visible

> **visible**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`INode`](INode.md), [`Mesh`](../../../../../core/src/classes/Mesh.md), `boolean`\>

#### globalMatrix

> **globalMatrix**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, [`Matrix`](../../../../../core/src/classes/Matrix.md)\>

#### matrix

> **matrix**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, [`Matrix`](../../../../../core/src/classes/Matrix.md)\>

#### mesh

> **mesh**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `any`, `string` \| `undefined`\>

#### parent

> **parent**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `any`, `string` \| `undefined`\>

#### rotation

> **rotation**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, [`Quaternion`](../../../../../core/src/classes/Quaternion.md)\>

#### scale

> **scale**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, [`Vector3`](../../../../../core/src/classes/Vector3.md)\>

#### skin

> **skin**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `any`, `string` \| `undefined`\>

#### translation

> **translation**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, [`Vector3`](../../../../../core/src/classes/Vector3.md)\>

#### weights

> **weights**: `object` & [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, `number`[]\>

##### Type Declaration

###### \_\_array\_\_

> **\_\_array\_\_**: `object` & [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `any`, `number`\>

###### Type Declaration

###### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

###### \_\_passThroughTarget\_\_?

> `optional` **\_\_passThroughTarget\_\_?**: `boolean`

When true, the path converter skips objectTree traversal for this property, keeping the parent target.

###### length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

***

### length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`[], `BabylonTargetType`[], [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:73](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L73)

Number of nodes in the array.
