[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SceneLoaderPluginOptions

# Interface: SceneLoaderPluginOptions

Defined in: [packages/dev/core/src/Loading/sceneLoader.ts:382](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/sceneLoader.ts#L382)

Defines options for SceneLoader plugins. This interface is extended by specific plugins.

## Extends

- `Record`\<`string`, `Record`\<`string`, `unknown`\> \| `undefined`\>

## Indexable

> \[`key`: `string`\]: `Record`\<`string`, `unknown`\> \| `undefined`

## Properties

### bvh

> **bvh**: `Partial`\<`BVHLoadingOptions`\>

Defined in: [packages/dev/loaders/src/BVH/bvhFileLoader.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/BVH/bvhFileLoader.types.ts#L12)

Defines options for the bvh loader.

***

### fbx

> **fbx**: `Partial`\<[`FBXFileLoaderOptions`](../../../loaders/src/interfaces/FBXFileLoaderOptions.md)\>

Defined in: [packages/dev/loaders/src/FBX/fbxFileLoader.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/FBX/fbxFileLoader.types.ts#L12)

Defines options for the FBX loader.

***

### gltf

> **gltf**: `Partial`\<[`GLTFLoaderOptions`](../../../loaders/src/interfaces/GLTFLoaderOptions.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.types.ts#L12)

Defines options for the glTF loader.

***

### obj

> **obj**: `Partial`\<[`OBJLoadingOptions`](../../../loaders/src/type-aliases/OBJLoadingOptions.md)\>

Defined in: [packages/dev/loaders/src/OBJ/objFileLoader.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objFileLoader.types.ts#L12)

Defines options for the obj loader.

***

### splat

> **splat**: `Partial`\<[`SPLATLoadingOptions`](../../../loaders/src/type-aliases/SPLATLoadingOptions.md)\>

Defined in: [packages/dev/loaders/src/SPLAT/splatFileLoader.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/splatFileLoader.types.ts#L12)

Defines options for the splat loader.

***

### stl

> **stl**: `object`

Defined in: [packages/dev/loaders/src/STL/stlFileLoader.types.ts:11](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/STL/stlFileLoader.types.ts#L11)

Defines options for the stl loader.
