[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetEnvInfo

# Function: GetEnvInfo()

> **GetEnvInfo**(`data`): [`Nullable`](../type-aliases/Nullable.md)\<`EnvironmentTextureInfoV2`\>

Defined in: [packages/dev/core/src/Misc/environmentTextureTools.pure.ts:192](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L192)

Gets the environment info from an env file.

## Parameters

### data

`ArrayBufferView`

The array buffer containing the .env bytes.

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<`EnvironmentTextureInfoV2`\>

the environment file info (the json header) if successfully parsed, normalized to the latest supported version.
