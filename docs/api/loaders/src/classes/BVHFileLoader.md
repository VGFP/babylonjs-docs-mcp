[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / BVHFileLoader

# Class: BVHFileLoader

Defined in: [packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts#L20)

**`Experimental`**

BVH file type loader.
This is a babylon scene loader plugin.

## Implements

- [`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md)
- [`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md)

## Constructors

### Constructor

> **new BVHFileLoader**(`loadingOptions?`): `BVHFileLoader`

Defined in: [packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts#L35)

**`Experimental`**

Creates loader for bvh motion files

#### Parameters

##### loadingOptions?

`Partial`\<`Readonly`\<`BVHLoadingOptions`\>\>

Options for the bvh loader

#### Returns

`BVHFileLoader`

## Properties

### name

> `readonly` **name**: `"bvh"` = `BVHFileLoaderMetadata.name`

Defined in: [packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts#L24)

**`Experimental`**

Name of the loader ("bvh")

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`name`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#name)

## Methods

### canDirectLoad()

> **canDirectLoad**(`data`): `boolean`

Defined in: [packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts#L55)

**`Experimental`**

If the data string can be loaded directly.

#### Parameters

##### data

`string`

direct load data

#### Returns

`boolean`

if the data can be loaded directly

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`canDirectLoad`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#candirectload)

***

### importMeshAsync()

> **importMeshAsync**(`_meshesNames`, `scene`, `data`): `Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

Defined in: [packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts:85](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts#L85)

**`Experimental`**

Imports  from the loaded gaussian splatting data and adds them to the scene

#### Parameters

##### \_meshesNames

`string` \| readonly `string`[] \| `null` \| `undefined`

a string or array of strings of the mesh names that should be loaded from the file

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

the scene the meshes should be added to

##### data

`unknown`

the bvh data to load

#### Returns

`Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

a promise containing the loaded skeletons and animations

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`importMeshAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#importmeshasync)

***

### isBvhHeader()

> **isBvhHeader**(`text`): `boolean`

Defined in: [packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts#L64)

**`Experimental`**

Returns whether the provided text starts with a BVH HIERARCHY header.

#### Parameters

##### text

`string`

the text to inspect

#### Returns

`boolean`

true if the text is a BVH header

***

### isNotBvhHeader()

> **isNotBvhHeader**(`text`): `boolean`

Defined in: [packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts#L73)

**`Experimental`**

Returns whether the provided text does not start with a BVH HIERARCHY header.

#### Parameters

##### text

`string`

the text to inspect

#### Returns

`boolean`

true if the text is not a BVH header

***

### loadAssetContainerAsync()

> **loadAssetContainerAsync**(`scene`, `data`): `Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

Defined in: [packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts:142](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts#L142)

**`Experimental`**

Load into an asset container.

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

The scene to load into

##### data

`unknown`

The data to import

#### Returns

`Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

The loaded asset container

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAssetContainerAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadassetcontainerasync)

***

### loadAsync()

> **loadAsync**(`scene`, `data`): `Promise`\<`void`\>

Defined in: [packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/BVH/bvhFileLoader.pure.ts#L119)

**`Experimental`**

Imports all objects from the loaded bvh data and adds them to the scene

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

the scene the objects should be added to

##### data

`unknown`

the bvh data to load

#### Returns

`Promise`\<`void`\>

a promise which completes when objects have been loaded to the scene

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadasync)
