[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRAnchor

# Interface: IWebXRAnchor

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L35)

A babylon container for an XR Anchor

## Properties

### attachedNode?

> `optional` **attachedNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L57)

if defined, this object will be constantly updated by the anchor's position and rotation

***

### id

> **id**: `number`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L39)

A babylon-assigned ID for this anchor

***

### persistentHandle?

> `optional` **persistentHandle?**: `string`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L52)

The persistent handle associated with this anchor, if one was requested or the anchor was restored from one

***

### transformationMatrix

> **transformationMatrix**: [`Matrix`](../classes/Matrix.md)

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L43)

Transformation matrix to apply to an object attached to this anchor

***

### xrAnchor

> **xrAnchor**: `XRAnchor`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L47)

The native anchor object

## Methods

### remove()

> **remove**(): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L62)

Remove this anchor from the scene

#### Returns

`void`
