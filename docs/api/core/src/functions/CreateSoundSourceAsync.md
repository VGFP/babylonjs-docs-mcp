[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateSoundSourceAsync

# Function: CreateSoundSourceAsync()

> **CreateSoundSourceAsync**(`name`, `source`, `options?`, `engine?`): `Promise`\<[`AbstractSoundSource`](../classes/AbstractSoundSource.md)\>

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:485](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L485)

Creates a new sound source.

## Parameters

### name

`string`

The name of the sound.

### source

`AudioNode`

The source of the sound.

### options?

`Partial`\<[`ISoundSourceOptions`](../interfaces/ISoundSourceOptions.md)\> = `{}`

The options for the sound source.

### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\> = `null`

The audio engine.

## Returns

`Promise`\<[`AbstractSoundSource`](../classes/AbstractSoundSource.md)\>

A promise that resolves to the created sound source.
