[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateEnvTextureAsync

# Function: CreateEnvTextureAsync()

> **CreateEnvTextureAsync**(`texture`, `options?`): `Promise`\<`ArrayBuffer`\>

Defined in: [packages/dev/core/src/Misc/environmentTextureTools.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L250)

Creates an environment texture from a loaded cube texture.

## Parameters

### texture

[`BaseTexture`](../classes/BaseTexture.md)

defines the cube texture to convert in env file

### options?

[`CreateEnvTextureOptions`](../interfaces/CreateEnvTextureOptions.md) = `{}`

options for the conversion process

## Returns

`Promise`\<`ArrayBuffer`\>

a promise containing the environment data if successful.
