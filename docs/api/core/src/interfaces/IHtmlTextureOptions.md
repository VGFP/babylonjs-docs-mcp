[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IHtmlTextureOptions

# Interface: IHtmlTextureOptions

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:236](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L236)

Defines the options used to create an [HtmlTexture](../classes/HtmlTexture.md).

## Properties

### autoUpdate?

> `optional` **autoUpdate?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:248](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L248)

Defines whether the texture is automatically updated when the host canvas emits a paint event (default: true).

***

### engine?

> `optional` **engine?**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](../classes/AbstractEngine.md)\>

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:256](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L256)

Defines the engine instance to use the texture with. Not mandatory if a scene is provided.

***

### format?

> `optional` **format?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:246](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L246)

Defines the associated texture format (default: TEXTUREFORMAT_RGBA).

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:242](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L242)

Defines whether mip maps should be created or not (default: false).

***

### height?

> `optional` **height?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:240](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L240)

Defines the height of the texture in pixels (defaults to the element's offset height, then 256).

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:244](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L244)

Defines the sampling mode of the texture (default: TEXTURE_BILINEAR_SAMPLINGMODE).

***

### scene?

> `optional` **scene?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\>

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:258](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L258)

Defines the scene the texture belongs to. Not mandatory if an engine is provided.

***

### useSvgFallback?

> `optional` **useSvgFallback?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:254](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L254)

Defines whether to fall back to an SVG `<foreignObject>` rasterization when the native WICG
HTML-in-Canvas API is unavailable (default: true). The fallback works in any browser but only
captures same-origin, inline-styled content as a static snapshot (see the documentation for caveats).

***

### width?

> `optional` **width?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:238](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L238)

Defines the width of the texture in pixels (defaults to the element's offset width, then 256).
