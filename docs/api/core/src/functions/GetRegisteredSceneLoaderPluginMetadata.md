[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetRegisteredSceneLoaderPluginMetadata

# Function: GetRegisteredSceneLoaderPluginMetadata()

> **GetRegisteredSceneLoaderPluginMetadata**(): `DeepImmutableArray`\<`Pick`\<[`ISceneLoaderPluginMetadata`](../interfaces/ISceneLoaderPluginMetadata.md), `"name"`\> & `object`\>

Defined in: [packages/dev/core/src/Loading/sceneLoader.ts:930](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/sceneLoader.ts#L930)

Gets metadata for all currently registered scene loader plugins.

## Returns

`DeepImmutableArray`\<`Pick`\<[`ISceneLoaderPluginMetadata`](../interfaces/ISceneLoaderPluginMetadata.md), `"name"`\> & `object`\>

An array where each entry has metadata for a single scene loader plugin.
