[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / UploadEnvLevelsAsync

# Function: UploadEnvLevelsAsync()

> **UploadEnvLevelsAsync**(`texture`, `data`, `info`): `Promise`\<`void`[]\>

Defined in: [packages/dev/core/src/Misc/environmentTextureTools.pure.ts:566](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L566)

Uploads the texture info contained in the env file to the GPU.

## Parameters

### texture

[`InternalTexture`](../classes/InternalTexture.md)

defines the internal texture to upload to

### data

`ArrayBufferView`

defines the data to load

### info

[`EnvironmentTextureInfo`](../type-aliases/EnvironmentTextureInfo.md)

defines the texture info retrieved through the GetEnvInfo method

## Returns

`Promise`\<`void`[]\>

a promise
