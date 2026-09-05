[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ITextureMergeConfiguration

# Interface: ITextureMergeConfiguration

Defined in: [packages/dev/core/src/Materials/Textures/textureMerger.ts:36](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/textureMerger.ts#L36)

Configuration for texture merging operation

## Properties

### alpha?

> `optional` **alpha?**: [`ChannelInput`](../type-aliases/ChannelInput.md)

Defined in: [packages/dev/core/src/Materials/Textures/textureMerger.ts:44](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/textureMerger.ts#L44)

Configuration for alpha output channel (optional, defaults to 1)

***

### blue?

> `optional` **blue?**: [`ChannelInput`](../type-aliases/ChannelInput.md)

Defined in: [packages/dev/core/src/Materials/Textures/textureMerger.ts:42](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/textureMerger.ts#L42)

Configuration for blue output channel (optional, defaults to 0)

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/textureMerger.ts:48](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/textureMerger.ts#L48)

Whether to generate mipmaps for the output texture

***

### green?

> `optional` **green?**: [`ChannelInput`](../type-aliases/ChannelInput.md)

Defined in: [packages/dev/core/src/Materials/Textures/textureMerger.ts:40](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/textureMerger.ts#L40)

Configuration for green output channel (optional, defaults to 0)

***

### outputSize?

> `optional` **outputSize?**: [`TextureSize`](../type-aliases/TextureSize.md)

Defined in: [packages/dev/core/src/Materials/Textures/textureMerger.ts:46](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/textureMerger.ts#L46)

Output texture size. If not specified, uses the largest input texture size

***

### red

> **red**: [`ChannelInput`](../type-aliases/ChannelInput.md)

Defined in: [packages/dev/core/src/Materials/Textures/textureMerger.ts:38](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/textureMerger.ts#L38)

Configuration for red output channel
