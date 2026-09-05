[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IBuffer

# Interface: IBuffer

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:77](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L77)

Loader interface with additional members.

## Extends

- `IBuffer`.[`IArrayItem`](IArrayItem.md)

## Properties

### byteLength

> **byteLength**: `number`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:486](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L486)

The length of the buffer in bytes

#### Inherited from

`GLTF2.IBuffer.byteLength`

***

### extensions?

> `optional` **extensions?**: `object`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:282](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L282)

Dictionary object with extension-specific objects

#### Index Signature

\[`key`: `string`\]: `any`

#### Inherited from

`GLTF2.IBuffer.extensions`

***

### extras?

> `optional` **extras?**: `any`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:288](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L288)

Application-Specific data

#### Inherited from

`GLTF2.IBuffer.extras`

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

`GLTF2.IBuffer.name`

***

### uri?

> `optional` **uri?**: `string`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:482](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L482)

The uri of the buffer.  Relative paths are relative to the .gltf file.  Instead of referencing an external file, the uri can also be a data-uri

#### Inherited from

`GLTF2.IBuffer.uri`
