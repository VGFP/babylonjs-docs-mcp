[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IInstallHtmlInCanvasPolyfillOptions

# Interface: IInstallHtmlInCanvasPolyfillOptions

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts:22](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts#L22)

Options for [InstallHtmlInCanvasPolyfill](../functions/InstallHtmlInCanvasPolyfill.md).

## Properties

### force?

> `optional` **force?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts:24](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts#L24)

Install the polyfill even when the browser already supports the API natively (default false).

***

### moduleSpecifier?

> `optional` **moduleSpecifier?**: `string`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts:26](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts#L26)

Module specifier to lazily import the polyfill from (default `"three-html-render"`).

***

### polyfillModule?

> `optional` **polyfillModule?**: [`IHtmlInCanvasPolyfillModule`](IHtmlInCanvasPolyfillModule.md)

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts:28](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts#L28)

A pre-imported polyfill module to use instead of dynamically importing one.
