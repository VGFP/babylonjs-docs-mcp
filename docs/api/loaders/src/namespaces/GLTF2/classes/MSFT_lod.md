[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / MSFT\_lod

# Class: MSFT\_lod

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.pure.ts#L27)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/MSFT_lod/README.md)

## Implements

- [`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.pure.ts#L36)

Defines whether this extension is enabled.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`enabled`](../interfaces/IGLTFLoaderExtension.md#enabled)

***

### maxLODsToLoad

> **maxLODsToLoad**: `number` = `10`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.pure.ts#L46)

Maximum number of LODs to load, starting from the lowest LOD.

***

### name

> `readonly` **name**: `"MSFT_lod"` = `NAME`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.pure.ts#L31)

The name of this extension.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`name`](../interfaces/IGLTFLoaderExtension.md#name)

***

### onMaterialLODsLoadedObservable

> **onMaterialLODsLoadedObservable**: [`Observable`](../../../../../core/src/classes/Observable.md)\<`number`\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.pure.ts:60](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.pure.ts#L60)

Observable raised when all material LODs of one level are loaded.
The event data is the index of the loaded LOD starting from zero.
Dispose the loader to cancel the loading of the next level of LODs.

***

### onNodeLODsLoadedObservable

> **onNodeLODsLoadedObservable**: [`Observable`](../../../../../core/src/classes/Observable.md)\<`number`\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.pure.ts#L53)

Observable raised when all node LODs of one level are loaded.
The event data is the index of the loaded LOD starting from zero.
Dispose the loader to cancel the loading of the next level of LODs.

***

### order

> **order**: `number` = `100`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/MSFT\_lod.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/MSFT_lod.pure.ts#L41)

Defines a number that determines the order the extensions are applied.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`order`](../interfaces/IGLTFLoaderExtension.md#order)
