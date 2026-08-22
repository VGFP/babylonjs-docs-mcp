[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IAudioAnalyzerOptions

# Interface: IAudioAnalyzerOptions

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:17](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L17)

Options for the AudioAnalyzer

## Properties

### analyzerEnabled

> **analyzerEnabled**: `boolean`

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:21](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L21)

Enable the audio analyzer. Defaults to false.

***

### analyzerFFTSize

> **analyzerFFTSize**: [`AudioAnalyzerFFTSizeType`](../type-aliases/AudioAnalyzerFFTSizeType.md)

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:25](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L25)

The size of the FFT (fast fourier transform) to use when converting time-domain data to frequency-domain data. Default is 2048.

***

### analyzerMaxDecibels

> **analyzerMaxDecibels**: `number`

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:35](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L35)

The maximum decibel value for the range of the analyzer. Default is -30.

***

### analyzerMinDecibels

> **analyzerMinDecibels**: `number`

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:30](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L30)

The minimum decibel value for the range of the analyzer. Default is -100.

***

### analyzerSmoothing

> **analyzerSmoothing**: `number`

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/AudioV2/abstractAudio/subProperties/abstractAudioAnalyzer.ts#L40)

A number between 0 and 1 that determines how quickly the analyzer's value changes. Default is 0.8.
