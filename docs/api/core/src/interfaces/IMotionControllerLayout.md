[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMotionControllerLayout

# Interface: IMotionControllerLayout

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:49](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L49)

The schema of motion controller layout.
No object will be initialized using this interface
This is used just to define the profile.

## Properties

### assetPath

> **assetPath**: `string`

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:53](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L53)

Path to load the assets. Usually relative to the base path

***

### components

> **components**: `object`

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:57](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L57)

Available components (unsorted)

#### Index Signature

\[`componentId`: `string`\]: `object`

A map of component Ids

***

### gamepadMapping

> **gamepadMapping**: `""` \| `"xr-standard"`

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:127](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L127)

Is it xr standard mapping or not

***

### rootNodeName

> **rootNodeName**: `string`

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:131](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L131)

Base root node of this entire model

***

### selectComponentId

> **selectComponentId**: `string`

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:135](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L135)

Defines the main button component id
