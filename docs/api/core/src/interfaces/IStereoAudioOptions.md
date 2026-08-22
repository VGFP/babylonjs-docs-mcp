[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IStereoAudioOptions

# Interface: IStereoAudioOptions

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts:6](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts#L6)

## Extended by

- [`ISoundSourceOptions`](ISoundSourceOptions.md)
- [`IAudioBusOptions`](IAudioBusOptions.md)

## Properties

### stereoEnabled

> **stereoEnabled**: `boolean`

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts:18](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts#L18)

Enable stereo. Defaults to false.

When set to `true`, the audio node's stereo properties will be initialized on creation and there will be no
delay when setting the first stereo value.

When not specified, or set to `false`, the audio node's stereo properties will not be initialized on creation
and there will be a small delay when setting the first stereo value.

- This option is ignored if any other stereo options are set.

***

### stereoPan

> **stereoPan**: `number`

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts:22](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractStereoAudio.ts#L22)

The stereo pan from -1 (left) to 1 (right). Defaults to 0.
