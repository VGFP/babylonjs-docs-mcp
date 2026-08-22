[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ImportAnimationsAsync

# Function: ImportAnimationsAsync()

> **ImportAnimationsAsync**(`source`, `scene`, `options?`): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/Loading/sceneLoader.ts:1289](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Loading/sceneLoader.ts#L1289)

Import animations from a file into a scene

## Parameters

### source

`SceneSource`

a string that defines the name of the scene file, or starts with "data:" following by the stringified version of the scene, or a File object, or an ArrayBufferView

### scene

[`Scene`](../classes/Scene.md)

is the instance of BABYLON.Scene to append to

### options?

[`ImportAnimationsOptions`](../interfaces/ImportAnimationsOptions.md)

an object that configures aspects of how the scene is loaded

## Returns

`Promise`\<`void`\>

A promise that resolves when the animations are imported
