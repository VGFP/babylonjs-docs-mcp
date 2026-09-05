[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OnAudioEngineV2CreatedObservable

# Variable: OnAudioEngineV2CreatedObservable

> `const` **OnAudioEngineV2CreatedObservable**: [`Observable`](../classes/Observable.md)\<[`AudioEngineV2`](../classes/AudioEngineV2.md)\>

Defined in: [packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts:22](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/AudioV2/abstractAudio/audioEngineV2.ts#L22)

Observable that notifies when a new v2 audio engine instance has been created.
- Fires after the engine has been fully constructed and initialized (e.g. from [CreateAudioEngineAsync](../functions/CreateAudioEngineAsync.md)),
  so subclass state (audio context, listener, etc.) is guaranteed to be available to observers.
