[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IDecodedData

# Interface: IDecodedData

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:124](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L124)

Result of the KTX2 decode function

## Properties

### errors?

> `optional` **errors?**: `string`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:171](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L171)

The errors (if any) encountered during the decoding process

***

### hasAlpha

> **hasAlpha**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:161](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L161)

Whether the texture has an alpha channel or not

***

### height

> **height**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:133](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L133)

Height of the texture

***

### isInGammaSpace

> **isInGammaSpace**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:156](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L156)

Whether the texture data is in gamma space or not

***

### layerCount

> **layerCount**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:151](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L151)

Number of array layers of the texture. 1 for a regular (non array) texture

***

### mipmaps

> **mipmaps**: [`IMipmap`](IMipmap.md)[]

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:146](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L146)

List of mipmap levels.
The first element is the base level, the last element is the smallest mipmap level (if more than one mipmap level is present)
For array textures (layerCount greater than 1), each level contributes layerCount consecutive entries, ordered by layer.

***

### transcodedFormat

> **transcodedFormat**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:139](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L139)

The format to use when creating the texture at the engine level
This corresponds to the engineFormat property of the leaf node of the decision tree

***

### transcoderName

> **transcoderName**: `string`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:166](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L166)

The name of the transcoder used to transcode the texture

***

### width

> **width**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts:128](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/ktx2decoderTypes.ts#L128)

Width of the texture
