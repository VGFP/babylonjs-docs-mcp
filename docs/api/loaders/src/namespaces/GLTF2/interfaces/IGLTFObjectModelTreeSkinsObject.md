[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFObjectModelTreeSkinsObject

# Interface: IGLTFObjectModelTreeSkinsObject

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:347](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L347)

Accessor tree describing the `/skins` section of the glTF Object Model.
Joint and skeleton properties are exposed as JSON-Pointer refs.

## Properties

### \_\_array\_\_

> **\_\_array\_\_**: `object`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:350](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L350)

#### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

#### joints

> **joints**: `object`

##### joints.\_\_array\_\_

> **\_\_array\_\_**: `object` & [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`any`, `any`, `string`\>

###### Type Declaration

###### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

##### joints.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`number`[], `any`, [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

#### skeleton

> **skeleton**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`ISkin`](ISkin.md), `any`, `string` \| `undefined`\>

***

### length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`ISkin`](ISkin.md)[], `any`, [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:349](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L349)

Number of skins in the array.
