[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRDomOverlayOptions

# Interface: IWebXRDomOverlayOptions

Defined in: [packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L12)

Options for DOM Overlay feature

## Properties

### element

> **element**: `string` \| `Element`

Defined in: [packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L18)

DOM Element or document query selector string for overlay.

NOTE: UA may make this element background transparent in XR.

***

### supressXRSelectEvents?

> `optional` **supressXRSelectEvents?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRDOMOverlay.pure.ts#L22)

Supress XR Select events on container element (DOM blocks interaction to scene).
