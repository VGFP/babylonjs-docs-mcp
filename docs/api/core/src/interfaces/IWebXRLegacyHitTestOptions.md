[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRLegacyHitTestOptions

# Interface: IWebXRLegacyHitTestOptions

Defined in: [packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:24](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L24)

Options used for hit testing

## Extended by

- [`IWebXRHitTestOptions`](IWebXRHitTestOptions.md)

## Properties

### testOnPointerDownOnly?

> `optional` **testOnPointerDownOnly?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:28](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L28)

Only test when user interacted with the scene. Default - hit test every frame

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:32](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L32)

The node to use to transform the local results to world coordinates
