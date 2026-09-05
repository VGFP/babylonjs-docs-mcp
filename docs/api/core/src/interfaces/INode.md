[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / INode

# Interface: INode

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:68](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L68)

Regular node of a decision tree

Each property (except for "yes" and "no"), if not empty, will be checked in order to determine the next node to select.
If all checks are successful, the "yes" node will be selected, else the "no" node will be selected.

## Properties

### alpha?

> `optional` **alpha?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:88](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L88)

Checks if alpha is present in the texture

***

### cap?

> `optional` **cap?**: `string`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:78](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L78)

The name of the capability to check. Can be one of the following:
     astc
     bptc
     s3tc
     pvrtc
     etc2
     etc1

***

### needsPowerOfTwo?

> `optional` **needsPowerOfTwo?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:98](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L98)

Checks that the texture is a power of two

***

### no?

> `optional` **no?**: [`ILeaf`](ILeaf.md) \| `INode`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:108](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L108)

The node to select if at least one check is not successful

***

### option?

> `optional` **option?**: `string`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:83](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L83)

The name of the option to check from the options object passed to the KTX2 decode function. [IKTX2DecoderOptions](IKTX2DecoderOptions.md)

***

### transcodeFormat?

> `optional` **transcodeFormat?**: [`TranscodeTarget`](../enumerations/TranscodeTarget.md) \| [`TranscodeTarget`](../enumerations/TranscodeTarget.md)[]

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:93](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L93)

Checks the currently selected transcoding format.

***

### yes?

> `optional` **yes?**: [`ILeaf`](ILeaf.md) \| `INode`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:103](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L103)

The node to select if all checks are successful
