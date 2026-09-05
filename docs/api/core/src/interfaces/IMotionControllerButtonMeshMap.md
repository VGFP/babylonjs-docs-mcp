[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMotionControllerButtonMeshMap

# Interface: IMotionControllerButtonMeshMap

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:173](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L173)

A helper-interface for the 3 meshes needed for controller button animation
The meshes are provided to the _lerpButtonTransform function to calculate the current position of the value mesh

## Properties

### pressedMesh

> **pressedMesh**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:178](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L178)

the mesh that defines the pressed value mesh position.
This is used to find the max-position of this button

***

### unpressedMesh

> **unpressedMesh**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:183](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L183)

the mesh that defines the unpressed value mesh position.
This is used to find the min (or initial) position of this button

***

### valueMesh

> **valueMesh**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:187](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L187)

The mesh that will be changed when value changes
