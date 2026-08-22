[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IHtmlRaycastInteractionManagerOptions

# Interface: IHtmlRaycastInteractionManagerOptions

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts:32](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts#L32)

Options for [HtmlRaycastInteractionManager](../classes/HtmlRaycastInteractionManager.md).

## Properties

### backFaceCulling?

> `optional` **backFaceCulling?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts#L36)

Whether hits on back-facing geometry are ignored (default true).

***

### invertY?

> `optional` **invertY?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts:38](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts#L38)

Whether the texture content is stored Y-inverted, used when mapping UVs to element pixels (default true).

***

### targetElement?

> `optional` **targetElement?**: `HTMLElement`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts:34](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts#L34)

The DOM element that receives the forwarded pointer events (defaults to the texture's element).
