[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetRegisteredSceneLoaderPluginMetadata

# Function: GetRegisteredSceneLoaderPluginMetadata()

> **GetRegisteredSceneLoaderPluginMetadata**(): `DeepImmutableArray`\<`Pick`\<[`ISceneLoaderPluginMetadata`](../interfaces/ISceneLoaderPluginMetadata.md), `"name"`\> & `object`\>

Defined in: [packages/dev/core/src/Loading/sceneLoader.ts:930](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Loading/sceneLoader.ts#L930)

Gets metadata for all currently registered scene loader plugins.

## Returns

`DeepImmutableArray`\<`Pick`\<[`ISceneLoaderPluginMetadata`](../interfaces/ISceneLoaderPluginMetadata.md), `"name"`\> & `object`\>

An array where each entry has metadata for a single scene loader plugin.
