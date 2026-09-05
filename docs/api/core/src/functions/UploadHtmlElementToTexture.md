[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / UploadHtmlElementToTexture

# Function: UploadHtmlElementToTexture()

> **UploadHtmlElementToTexture**(`engine`, `texture`, `element`, `invertY?`, `config?`): `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:86](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L86)

Uploads a live HTML element (or a captured ElementImage) into an existing 2D texture using the WICG
HTML-in-Canvas API (https://github.com/WICG/html-in-canvas).

This is a side-effect-free helper - it is only reachable when [HtmlTexture](../classes/HtmlTexture.md) (or a direct caller)
is imported, so it adds nothing to bundles that do not use it. It relies on
`WebGLRenderingContext.texElementImage2D` (WebGL) or `GPUQueue.copyElementImageToTexture` (WebGPU),
available either natively (behind chrome://flags/#canvas-draw-element) or through the
three-html-render polyfill.

## Parameters

### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

defines the engine that owns the texture

### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](../classes/InternalTexture.md)\>

defines the internal texture to update

### element

`Element` \| `ElementImage`

defines the source HTML element (or captured ElementImage) to upload

### invertY?

`boolean` = `true`

defines if data must be stored with Y axis inverted (true by default)

### config?

`WebGLCopyElementImageConfig`

defines an optional source rectangle and sizing configuration

## Returns

`boolean`

true if the upload succeeded, false otherwise (e.g. the API is unavailable)
