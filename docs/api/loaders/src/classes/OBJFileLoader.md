[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / OBJFileLoader

# Class: OBJFileLoader

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L28)

OBJ file type loader.
This is a babylon scene loader plugin.

## Implements

- [`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md)
- [`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md)

## Constructors

### Constructor

> **new OBJFileLoader**(`loadingOptions?`): `OBJFileLoader`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L104)

Creates loader for .OBJ files

#### Parameters

##### loadingOptions?

`Partial`\<`Readonly`\<[`OBJLoadingOptions`](../type-aliases/OBJLoadingOptions.md)\>\>

options for loading and parsing OBJ/MTL files.

#### Returns

`OBJFileLoader`

## Properties

### extensions

> `readonly` **extensions**: `object` = `OBJFileLoaderMetadata.extensions`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L93)

Defines the extension the plugin is able to load.

##### .obj

> `readonly` **.obj**: `object`

##### .obj.isBinary

> `readonly` **isBinary**: `true` = `true`

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`extensions`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#extensions)

***

### name

> `readonly` **name**: `"obj"` = `OBJFileLoaderMetadata.name`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L89)

Defines the name of the plugin.

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`name`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#name)

***

### COMPUTE\_NORMALS

> `static` **COMPUTE\_NORMALS**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L59)

Compute the normals for the model, even if normals are present in the file.

***

### ENCODING

> `static` **ENCODING**: `string` = `"auto"`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L32)

Defines the character encoding used to decode OBJ and MTL files.

***

### IMPORT\_VERTEX\_COLORS

> `static` **IMPORT\_VERTEX\_COLORS**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L55)

Include in meshes the vertex colors available in some OBJ files.  This is not part of OBJ standard.

***

### INVERT\_Y

> `static` **INVERT\_Y**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L40)

Invert model on y-axis (does a model scaling inversion)

***

### MATERIAL\_LOADING\_FAILS\_SILENTLY

> `static` **MATERIAL\_LOADING\_FAILS\_SILENTLY**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L79)

When a material fails to load OBJ loader will silently fail and onSuccess() callback will be triggered.

Defaults to true for backwards compatibility.

***

### OPTIMIZE\_NORMALS

> `static` **OPTIMIZE\_NORMALS**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L64)

Optimize the normals for the model. Lighting can be uneven if you use OptimizeWithUV = true because new vertices can be created for the same location if they pertain to different faces.
Using OptimizehNormals = true will help smoothing the lighting by averaging the normals of those vertices.

***

### OPTIMIZE\_WITH\_UV

> `static` **OPTIMIZE\_WITH\_UV**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L36)

Defines if UVs are optimized by default during load.

***

### SKIP\_MATERIALS

> `static` **SKIP\_MATERIALS**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L72)

Skip loading the materials even if defined in the OBJ file (materials are ignored).

***

### USE\_LEGACY\_BEHAVIOR

> `static` **USE\_LEGACY\_BEHAVIOR**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L84)

Loads assets without handedness conversions. This flag is for compatibility. Use it only if absolutely required. Defaults to false.

***

### UV\_SCALING

> `static` **UV\_SCALING**: [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L68)

Defines custom scaling of UV coordinates of loaded meshes.

## Accessors

### INVERT\_TEXTURE\_Y

#### Get Signature

> **get** `static` **INVERT\_TEXTURE\_Y**(): `boolean`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L44)

Invert Y-Axis of referenced textures on load

##### Returns

`boolean`

#### Set Signature

> **set** `static` **INVERT\_TEXTURE\_Y**(`value`): `void`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L48)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### canDirectLoad()

> **canDirectLoad**(): `boolean`

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L185)

If the data string can be loaded directly.

#### Returns

`boolean`

if the data can be loaded directly

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`canDirectLoad`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#candirectload)

***

### importMeshAsync()

> **importMeshAsync**(`meshesNames`, `scene`, `data`, `rootUrl`): `Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:198](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L198)

Imports one or more meshes from the loaded OBJ data and adds them to the scene

#### Parameters

##### meshesNames

`any`

a string or array of strings of the mesh names that should be loaded from the file

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

the scene the meshes should be added to

##### data

`any`

the OBJ data to load

##### rootUrl

`string`

root url to load from

#### Returns

`Promise`\<[`ISceneLoaderAsyncResult`](../../../core/src/interfaces/ISceneLoaderAsyncResult.md)\>

a promise containing the loaded meshes, particles, skeletons and animations

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`importMeshAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#importmeshasync)

***

### loadAssetContainerAsync()

> **loadAssetContainerAsync**(`scene`, `data`, `rootUrl`): `Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L239)

Load into an asset container.

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

The scene to load into

##### data

`string` \| `ArrayBuffer`

The data to import

##### rootUrl

`string`

The root url for scene and resources

#### Returns

`Promise`\<[`AssetContainer`](../../../core/src/classes/AssetContainer.md)\>

The loaded asset container

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAssetContainerAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadassetcontainerasync)

***

### loadAsync()

> **loadAsync**(`scene`, `data`, `rootUrl`): `Promise`\<`void`\>

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.pure.ts#L223)

Imports all objects from the loaded OBJ data and adds them to the scene

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

the scene the objects should be added to

##### data

`string` \| `ArrayBuffer`

the OBJ data to load

##### rootUrl

`string`

root url to load from

#### Returns

`Promise`\<`void`\>

a promise which completes when objects have been loaded to the scene

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`loadAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#loadasync)
