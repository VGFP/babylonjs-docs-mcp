[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / FBXFileLoader

# Class: FBXFileLoader

Defined in: [packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts#L82)

FBX file loader plugin for Babylon.js.
Pure TypeScript implementation — no Autodesk FBX SDK dependency.

## Implements

- [`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md)
- [`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md)

## Constructors

### Constructor

> **new FBXFileLoader**(`options?`): `FBXFileLoader`

Defined in: [packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts#L102)

Creates a new FBX loader.

#### Parameters

##### options?

[`FBXFileLoaderOptions`](../interfaces/FBXFileLoaderOptions.md) = `{}`

Options controlling FBX loading behavior

#### Returns

`FBXFileLoader`

## Properties

### extensions

> `readonly` **extensions**: `object` = `FBXFileLoaderMetadata.extensions`

Defined in: [packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts#L91)

Defines the extension the plugin is able to load.

##### .fbx

> `readonly` **.fbx**: `object`

##### .fbx.isBinary

> `readonly` **isBinary**: `true` = `true`

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`extensions`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#extensions)

***

### name

> `readonly` **name**: `"fbx"` = `FBXFileLoaderMetadata.name`

Defined in: [packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts#L86)

Defines the name of the plugin.

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`name`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#name)

## Methods

### createPlugin()

> **createPlugin**(`options`): [`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md)

Defined in: [packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts#L113)

Creates an FBX loader plugin instance with options from SceneLoader.

#### Parameters

##### options

[`SceneLoaderPluginOptions`](../../../core/src/interfaces/SceneLoaderPluginOptions.md)

Scene loader plugin options

#### Returns

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md)

The configured FBX loader

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`createPlugin`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#createplugin)

***

### importMeshAsync()

> **importMeshAsync**(`meshesNames`, `scene`, `data`, `rootUrl`, `_onProgress?`, `_fileName?`): `Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

Defined in: [packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts#L127)

Imports meshes from an FBX file and adds them to the scene.

#### Parameters

##### meshesNames

`string` \| readonly `string`[] \| `null` \| `undefined`

A string or array of mesh names to import, or null/undefined to import all meshes

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

The scene to add imported meshes to

##### data

`unknown`

The FBX data to load

##### rootUrl

`string`

Root URL used to resolve external resources

##### \_onProgress?

(`event`) => `void`

Callback called while the file is loading

##### \_fileName?

`string`

Name of the file being loaded

#### Returns

`Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

A promise containing the loaded meshes, particle systems, skeletons, animation groups, transform nodes, geometries, and lights

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`importMeshAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#importmeshasync)

***

### loadAssetContainerAsync()

> **loadAssetContainerAsync**(`scene`, `data`, `rootUrl`, `_onProgress?`, `_fileName?`): `Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

Defined in: [packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts#L164)

Loads all FBX content into an asset container.

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

The scene used to create the asset container

##### data

`unknown`

The FBX data to load

##### rootUrl

`string`

Root URL used to resolve external resources

##### \_onProgress?

(`event`) => `void`

Callback called while the file is loading

##### \_fileName?

`string`

Name of the file being loaded

#### Returns

`Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

A promise containing the loaded asset container

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAssetContainerAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadassetcontainerasync)

***

### loadAsync()

> **loadAsync**(`scene`, `data`, `rootUrl`, `_onProgress?`, `_fileName?`): `Promise`\<`void`\>

Defined in: [packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts:149](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts#L149)

Loads all FBX content into the scene.

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

The scene to load the FBX content into

##### data

`unknown`

The FBX data to load

##### rootUrl

`string`

Root URL used to resolve external resources

##### \_onProgress?

(`event`) => `void`

Callback called while the file is loading

##### \_fileName?

`string`

Name of the file being loaded

#### Returns

`Promise`\<`void`\>

A promise that resolves when loading is complete

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadasync)
