[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / KHR\_xmp\_json\_ld

# Class: KHR\_xmp\_json\_ld

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_xmp\_json\_ld.pure.ts:13](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_xmp_json_ld.pure.ts#L13)

**`Since`**

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_xmp_json_ld/README.md)
 5.0.0

## Implements

- [`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_xmp\_json\_ld.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_xmp_json_ld.pure.ts#L22)

Defines whether this extension is enabled.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`enabled`](../interfaces/IGLTFLoaderExtension.md#enabled)

***

### name

> `readonly` **name**: `"KHR_xmp_json_ld"` = `NAME`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_xmp\_json\_ld.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_xmp_json_ld.pure.ts#L17)

The name of this extension.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`name`](../interfaces/IGLTFLoaderExtension.md#name)

***

### order

> **order**: `number` = `100`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_xmp\_json\_ld.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_xmp_json_ld.pure.ts#L27)

Defines a number that determines the order the extensions are applied.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`order`](../interfaces/IGLTFLoaderExtension.md#order)

## Methods

### onLoading()

> **onLoading**(): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_xmp\_json\_ld.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_xmp_json_ld.pure.ts#L47)

Called after the loader state changes to LOADING.

#### Returns

`void`

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`onLoading`](../interfaces/IGLTFLoaderExtension.md#onloading)
