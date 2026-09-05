[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRWalkingLocomotionOptions

# Interface: IWebXRWalkingLocomotionOptions

Defined in: [packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts#L336)

Options for the walking locomotion feature.

## Properties

### locomotionTarget

> **locomotionTarget**: [`TransformNode`](../classes/TransformNode.md) \| [`WebXRCamera`](../classes/WebXRCamera.md)

Defined in: [packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts:343](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRWalkingLocomotion.pure.ts#L343)

The target to be moved by walking locomotion. This should be the transform node
which is the root of the XR space (i.e., the WebXRCamera's parent node). However,
for simple cases and legacy purposes, articulating the WebXRCamera itself is also
supported as a deprecated feature.
