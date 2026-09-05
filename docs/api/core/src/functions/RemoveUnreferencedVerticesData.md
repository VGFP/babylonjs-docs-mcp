[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RemoveUnreferencedVerticesData

# Function: RemoveUnreferencedVerticesData()

> **RemoveUnreferencedVerticesData**(`meshes`): `void`

Defined in: [packages/dev/core/src/Meshes/meshUtils.ts:231](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/meshUtils.ts#L231)

**`Experimental`**

Removes unreferenced vertex data from the given meshes.
This is useful for cleaning up unused vertex data, such as UV sets, to reduce memory usage and stay under graphics device limits.

## Parameters

### meshes

readonly [`Mesh`](../classes/Mesh.md)[]

The array of meshes to clean up.

## Returns

`void`

## Remarks

This function currently only removes unreferenced UV sets (UV2, UV3, etc.) from the meshes.
