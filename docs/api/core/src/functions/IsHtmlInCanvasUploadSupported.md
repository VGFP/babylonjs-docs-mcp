[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IsHtmlInCanvasUploadSupported

# Function: IsHtmlInCanvasUploadSupported()

> **IsHtmlInCanvasUploadSupported**(`engine`): `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts:60](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/HTML/htmlTexture.ts#L60)

Detects whether the engine can upload an HTML element through the native (or polyfilled) WICG
HTML-in-Canvas API, without emitting any warning. Used to decide whether the SVG fallback is needed.

## Parameters

### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

defines the engine to test

## Returns

`boolean`

true when the WICG upload API is available for this engine
