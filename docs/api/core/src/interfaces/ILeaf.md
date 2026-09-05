[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ILeaf

# Interface: ILeaf

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:45](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L45)

Leaf node of a decision tree
It defines the transcoding format to use to transcode the texture as well as the corresponding format to use at the engine level when creating the texture

## Properties

### engineFormat

> **engineFormat**: [`EngineFormat`](../enumerations/EngineFormat.md)

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:54](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L54)

The format to use when creating the texture at the engine level after it has been transcoded to transcodeFormat

***

### roundToMultiple4?

> `optional` **roundToMultiple4?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:59](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L59)

Whether the texture must be rounded to a multiple of 4 (should normally be the case for all compressed formats). Default: true

***

### transcodeFormat

> **transcodeFormat**: [`TranscodeTarget`](../enumerations/TranscodeTarget.md)

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:49](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L49)

The format to transcode to
