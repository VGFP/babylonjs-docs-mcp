[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IKTX2DecoderOptions

# Interface: IKTX2DecoderOptions

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:237](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L237)

Options passed to the KTX2 decode function

## Properties

### bypassTranscoders?

> `optional` **bypassTranscoders?**: `string`[]

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:261](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L261)

list of transcoders to bypass when looking for a suitable transcoder. The available transcoders are:
     UniversalTranscoder_UASTC_ASTC
     UniversalTranscoder_UASTC_BC7
     UniversalTranscoder_UASTC_RGBA_UNORM
     UniversalTranscoder_UASTC_RGBA_SRGB
     UniversalTranscoder_UASTC_R8_UNORM
     UniversalTranscoder_UASTC_RG8_UNORM
     MSCTranscoder

***

### forceR8?

> `optional` **forceR8?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:245](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L245)

force to always use (uncompressed) R8 for transcoded format

***

### forceRG8?

> `optional` **forceRG8?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:249](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L249)

force to always use (uncompressed) RG8 for transcoded format

***

### forceRGBA?

> `optional` **forceRGBA?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:242](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L242)

force to always use (uncompressed) RGBA for transcoded format

***

### transcodeFormatDecisionTree?

> `optional` **transcodeFormatDecisionTree?**: [`IDecisionTree`](IDecisionTree.md)

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:268](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L268)

Custom decision tree to apply after the default decision tree has selected a transcoding format.
Allows the user to override the default decision tree selection.
The decision tree can use the INode.transcodeFormat property to base its decision on the transcoding format selected by the default decision tree.

***

### useRGBAIfASTCBC7NotAvailableWhenUASTC?

> `optional` **useRGBAIfASTCBC7NotAvailableWhenUASTC?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:239](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L239)

use RGBA format if ASTC and BC7 are not available as transcoded format
