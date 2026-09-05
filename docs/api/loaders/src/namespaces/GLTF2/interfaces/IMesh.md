[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IMesh

# Interface: IMesh

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:159](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L159)

Loader interface with additional members.

## Extends

- `IMesh`.[`IArrayItem`](IArrayItem.md)

## Properties

### extensions?

> `optional` **extensions?**: `object`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:282](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L282)

Dictionary object with extension-specific objects

#### Index Signature

\[`key`: `string`\]: `any`

#### Inherited from

`GLTF2.IMesh.extensions`

***

### extras?

> `optional` **extras?**: `any`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:288](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L288)

Application-Specific data

#### Inherited from

`GLTF2.IMesh.extras`

***

### index

> **index**: `number`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:20](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L20)

The index of this item in the array.

#### Inherited from

[`IArrayItem`](IArrayItem.md).[`index`](IArrayItem.md#index)

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:298](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L298)

The user-defined name of this object

#### Inherited from

`GLTF2.IMesh.name`

***

### weights?

> `optional` **weights?**: `number`[]

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:716](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L716)

Array of weights to be applied to the Morph Targets

#### Inherited from

`GLTF2.IMesh.weights`
