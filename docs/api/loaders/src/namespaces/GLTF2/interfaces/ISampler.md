[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / ISampler

# Interface: ISampler

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:217](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L217)

Loader interface with additional members.

## Extends

- `ISampler`.[`IArrayItem`](IArrayItem.md)

## Properties

### extensions?

> `optional` **extensions?**: `object`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:282](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L282)

Dictionary object with extension-specific objects

#### Index Signature

\[`key`: `string`\]: `any`

#### Inherited from

`GLTF2.ISampler.extensions`

***

### extras?

> `optional` **extras?**: `any`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:288](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L288)

Application-Specific data

#### Inherited from

`GLTF2.ISampler.extras`

***

### index

> **index**: `number`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:20](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L20)

The index of this item in the array.

#### Inherited from

[`IArrayItem`](IArrayItem.md).[`index`](IArrayItem.md#index)

***

### magFilter?

> `optional` **magFilter?**: `TextureMagFilter`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:768](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L768)

Magnification filter.  Valid values correspond to WebGL enums: 9728 (NEAREST) and 9729 (LINEAR)

#### Inherited from

`GLTF2.ISampler.magFilter`

***

### minFilter?

> `optional` **minFilter?**: `TextureMinFilter`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:772](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L772)

Minification filter.  All valid values correspond to WebGL enums

#### Inherited from

`GLTF2.ISampler.minFilter`

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:298](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L298)

The user-defined name of this object

#### Inherited from

`GLTF2.ISampler.name`

***

### wrapS?

> `optional` **wrapS?**: `TextureWrapMode`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:776](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L776)

S (U) wrapping mode.  All valid values correspond to WebGL enums

#### Inherited from

`GLTF2.ISampler.wrapS`

***

### wrapT?

> `optional` **wrapT?**: `TextureWrapMode`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:780](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L780)

T (V) wrapping mode.  All valid values correspond to WebGL enums

#### Inherited from

`GLTF2.ISampler.wrapT`
