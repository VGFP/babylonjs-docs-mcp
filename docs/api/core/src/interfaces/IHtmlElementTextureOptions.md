[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IHtmlElementTextureOptions

# Interface: IHtmlElementTextureOptions

Defined in: [packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L19)

Defines the options related to the creation of an HtmlElementTexture

## Properties

### engine

> **engine**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](../classes/AbstractEngine.md)\>

Defined in: [packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L35)

Defines the engine instance to use the texture with. It is not mandatory if you define a scene.

***

### format?

> `optional` **format?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L31)

Defines the associated texture format.

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L23)

Defines whether mip maps should be created or not.

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L27)

Defines the sampling mode of the texture.

***

### scene

> **scene**: [`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\>

Defined in: [packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/htmlElementTexture.pure.ts#L39)

Defines the scene the texture belongs to. It is not mandatory if you define an engine.
