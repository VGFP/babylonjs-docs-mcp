[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRNearInteractionPickMeshWithSphere

# Function: WebXRNearInteractionPickMeshWithSphere()

> **WebXRNearInteractionPickMeshWithSphere**(`mesh`, `sphere`, `skipBoundingInfo?`): [`PickingInfo`](../classes/PickingInfo.md)

Defined in: [packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts:997](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRNearInteraction.pure.ts#L997)

Picks a mesh with a sphere

## Parameters

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

the mesh to pick

### sphere

[`BoundingSphere`](../classes/BoundingSphere.md)

picking sphere in world coordinates

### skipBoundingInfo?

`boolean` = `false`

a boolean indicating if we should skip the bounding info check

## Returns

[`PickingInfo`](../classes/PickingInfo.md)

the picking info
