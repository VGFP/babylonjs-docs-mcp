[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRHitTestOptions

# Interface: IWebXRHitTestOptions

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L15)

Options used for hit testing (version 2)

## Extends

- [`IWebXRLegacyHitTestOptions`](IWebXRLegacyHitTestOptions.md)

## Properties

### disablePermanentHitTest?

> `optional` **disablePermanentHitTest?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L20)

Do not create a permanent hit test. Will usually be used when only
transient inputs are needed.

***

### enableTransientHitTest?

> `optional` **enableTransientHitTest?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L24)

Enable transient (for example touch-based) hit test inspections

***

### entityTypes?

> `optional` **entityTypes?**: `XRHitTestTrackableType`[]

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L45)

Override the default entity type(s) of the hit-test result

***

### offsetRay?

> `optional` **offsetRay?**: [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L32)

Offset ray for the permanent hit test

***

### testOnPointerDownOnly?

> `optional` **testOnPointerDownOnly?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:28](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L28)

Only test when user interacted with the scene. Default - hit test every frame

#### Inherited from

[`IWebXRLegacyHitTestOptions`](IWebXRLegacyHitTestOptions.md).[`testOnPointerDownOnly`](IWebXRLegacyHitTestOptions.md#testonpointerdownonly)

***

### transientHitTestProfile?

> `optional` **transientHitTestProfile?**: `string`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L28)

Override the default transient hit test profile (generic-touchscreen).

***

### transientOffsetRay?

> `optional` **transientOffsetRay?**: [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L36)

Offset ray for the transient hit test

***

### useReferenceSpace?

> `optional` **useReferenceSpace?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L40)

Instead of using viewer space for hit tests, use the reference space defined in the session manager

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:32](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L32)

The node to use to transform the local results to world coordinates

#### Inherited from

[`IWebXRLegacyHitTestOptions`](IWebXRLegacyHitTestOptions.md).[`worldParentNode`](IWebXRLegacyHitTestOptions.md#worldparentnode)
