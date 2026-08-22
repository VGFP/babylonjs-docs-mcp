[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / IGLTFLoaderExtension

# Interface: IGLTFLoaderExtension

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L125)

Interface for extending the loader.

## Extended by

- [`IGLTFLoaderExtension`](../namespaces/GLTF2/interfaces/IGLTFLoaderExtension.md)

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L134)

Defines whether this extension is enabled.

***

### name

> `readonly` **name**: `string`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:129](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L129)

The name of this extension.

***

### order?

> `optional` **order?**: `number`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L140)

Defines the order of this extension.
The loader sorts the extensions using these values when loading.
