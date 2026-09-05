[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRLegacyHitTestOptions

# Interface: IWebXRLegacyHitTestOptions

Defined in: [packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:24](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L24)

Options used for hit testing

## Extended by

- [`IWebXRHitTestOptions`](IWebXRHitTestOptions.md)

## Properties

### testOnPointerDownOnly?

> `optional` **testOnPointerDownOnly?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:28](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L28)

Only test when user interacted with the scene. Default - hit test every frame

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L32)

The node to use to transform the local results to world coordinates
