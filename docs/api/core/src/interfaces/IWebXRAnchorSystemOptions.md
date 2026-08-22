[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRAnchorSystemOptions

# Interface: IWebXRAnchorSystemOptions

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L14)

Configuration options of the anchor system

## Properties

### clearAnchorsOnSessionInit?

> `optional` **clearAnchorsOnSessionInit?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L29)

If set to true, all anchor arrays will be cleared when the session initializes

***

### doNotRemoveAnchorsOnSessionEnded?

> `optional` **doNotRemoveAnchorsOnSessionEnded?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L24)

If set to true a reference of the created anchors will be kept until the next session starts
If not defined, anchors will be removed from the array when the feature is detached or the session ended.

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L18)

a node that will be used to convert local to world coordinates
