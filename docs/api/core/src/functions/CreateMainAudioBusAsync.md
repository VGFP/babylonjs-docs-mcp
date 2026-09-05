[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateMainAudioBusAsync

# Function: CreateMainAudioBusAsync()

> **CreateMainAudioBusAsync**(`name`, `options?`, `engine?`): `Promise`\<[`MainAudioBus`](../classes/MainAudioBus.md)\>

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:423](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L423)

Creates a new main audio bus.

## Parameters

### name

`string`

The name of the main audio bus.

### options?

`Partial`\<[`IMainAudioBusOptions`](../interfaces/IMainAudioBusOptions.md)\> = `{}`

The options to use when creating the main audio bus.

### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\> = `null`

The audio engine.

## Returns

`Promise`\<[`MainAudioBus`](../classes/MainAudioBus.md)\>

A promise that resolves with the created main audio bus.
