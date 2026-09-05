[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IAnimationSampler

# Interface: IAnimationSampler

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L55)

Loader interface with additional members.

## Extends

- `IAnimationSampler`.[`IArrayItem`](IArrayItem.md)

## Properties

### extensions?

> `optional` **extensions?**: `object`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:282](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L282)

Dictionary object with extension-specific objects

#### Index Signature

\[`key`: `string`\]: `any`

#### Inherited from

`GLTF2.IAnimationSampler.extensions`

***

### extras?

> `optional` **extras?**: `any`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:288](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L288)

Application-Specific data

#### Inherited from

`GLTF2.IAnimationSampler.extras`

***

### index

> **index**: `number`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts:20](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/glTFLoaderInterfaces.ts#L20)

The index of this item in the array.

#### Inherited from

[`IArrayItem`](IArrayItem.md).[`index`](IArrayItem.md#index)

***

### input

> **input**: `number`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:428](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L428)

The index of an accessor containing keyframe input values, e.g., time

#### Inherited from

`GLTF2.IAnimationSampler.input`

***

### interpolation?

> `optional` **interpolation?**: `AnimationSamplerInterpolation`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:432](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L432)

Interpolation algorithm

#### Inherited from

`GLTF2.IAnimationSampler.interpolation`

***

### output

> **output**: `number`

Defined in: [packages/public/glTF2Interface/babylon.glTF2Interface.d.ts:436](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/public/glTF2Interface/babylon.glTF2Interface.d.ts#L436)

The index of an accessor, containing keyframe output values

#### Inherited from

`GLTF2.IAnimationSampler.output`
