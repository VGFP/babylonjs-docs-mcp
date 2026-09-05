[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateAudioEngineAsync

# Function: CreateAudioEngineAsync()

> **CreateAudioEngineAsync**(`options?`): `Promise`\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\>

Defined in: [packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/AudioV2/webAudio/webAudioEngine.ts#L55)

Creates a new v2 audio engine that uses the WebAudio API.

## Parameters

### options?

`Partial`\<[`IWebAudioEngineOptions`](../interfaces/IWebAudioEngineOptions.md)\> = `{}`

The options for creating the audio engine.

## Returns

`Promise`\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\>

A promise that resolves with the created audio engine.
