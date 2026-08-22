[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InstallHtmlInCanvasPolyfill

# Function: InstallHtmlInCanvasPolyfill()

> **InstallHtmlInCanvasPolyfill**(`options?`): `Promise`\<`boolean`\>

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts:55](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts#L55)

Lazily installs the WICG HTML-in-Canvas polyfill (`three-html-render`) so that [HtmlTexture](../classes/HtmlTexture.md) and the
interaction managers work in browsers that do not yet ship the native API.

The polyfill is an optional dependency: it is imported on demand and never bundled into Babylon. When the
browser already supports the API natively, this is a no-op unless `force` is set or the `?polyfillHIC` URL
flag is present.

## Parameters

### options?

[`IInstallHtmlInCanvasPolyfillOptions`](../interfaces/IInstallHtmlInCanvasPolyfillOptions.md) = `{}`

optional installation configuration

## Returns

`Promise`\<`boolean`\>

a promise that resolves to true when the polyfill was installed, false otherwise
