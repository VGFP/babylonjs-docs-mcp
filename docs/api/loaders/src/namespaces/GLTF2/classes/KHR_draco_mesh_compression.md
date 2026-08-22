[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / KHR\_draco\_mesh\_compression

# Class: KHR\_draco\_mesh\_compression

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_draco\_mesh\_compression.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.pure.ts#L24)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_draco_mesh_compression/README.md)

## Implements

- [`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)

## Properties

### dracoDecoder?

> `optional` **dracoDecoder?**: [`DracoDecoder`](../../../../../core/src/classes/DracoDecoder.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_draco\_mesh\_compression.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.pure.ts#L33)

The draco decoder used to decode vertex data or DracoDecoder.Default if not defined

***

### enabled

> **enabled**: `boolean`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_draco\_mesh\_compression.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.pure.ts#L38)

Defines whether this extension is enabled.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`enabled`](../interfaces/IGLTFLoaderExtension.md#enabled)

***

### name

> `readonly` **name**: `"KHR_draco_mesh_compression"` = `NAME`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_draco\_mesh\_compression.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.pure.ts#L28)

The name of this extension.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`name`](../interfaces/IGLTFLoaderExtension.md#name)

***

### useNormalizedFlagFromAccessor

> **useNormalizedFlagFromAccessor**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_draco\_mesh\_compression.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_draco_mesh_compression.pure.ts#L43)

Defines whether to use the normalized flag from the glTF accessor instead of the Draco data. Defaults to true.
