[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IHtmlInCanvasPolyfillModule

# Interface: IHtmlInCanvasPolyfillModule

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts#L12)

Shape of the `three-html-render` polyfill module (only the parts this wrapper uses).

## Properties

### installHtmlInCanvasPolyfill?

> `optional` **installHtmlInCanvasPolyfill?**: (`options?`) => `void`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts#L14)

Installs the WICG HTML-in-Canvas polyfill onto the relevant DOM prototypes.

#### Parameters

##### options?

###### force?

`boolean`

#### Returns

`void`

***

### uninstallHtmlInCanvasPolyfill?

> `optional` **uninstallHtmlInCanvasPolyfill?**: () => `void`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts:16](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlInCanvasPolyfill.ts#L16)

Removes a previously installed polyfill.

#### Returns

`void`
