[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IStaticSoundBufferOptions

# Interface: IStaticSoundBufferOptions

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts:8](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts#L8)

Options for creating a static sound buffer.

## Extended by

- [`IStaticSoundOptions`](IStaticSoundOptions.md)

## Properties

### skipCodecCheck

> **skipCodecCheck**: `boolean`

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/AudioV2/abstractAudio/staticSoundBuffer.ts#L14)

Whether to skip codec checking before attempting to load each source URL when `source` is a string array. Defaults to `false`.
- Has no effect if the sound's source is not a string array.

#### See

[CreateSoundAsync](../functions/CreateSoundAsync.md) `source` parameter.
