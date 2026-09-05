[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMotionControllerMeshMap

# Interface: IMotionControllerMeshMap

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:195](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L195)

A helper-interface for the 3 meshes needed for controller axis animation.
This will be expanded when touchpad animations are fully supported
The meshes are provided to the _lerpAxisTransform function to calculate the current position of the value mesh

## Properties

### maxMesh?

> `optional` **maxMesh?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:199](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L199)

the mesh that defines the maximum value mesh position.

***

### minMesh?

> `optional` **minMesh?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:203](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L203)

the mesh that defines the minimum value mesh position.

***

### valueMesh?

> `optional` **valueMesh?**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:207](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L207)

The mesh that will be changed when axis value changes
