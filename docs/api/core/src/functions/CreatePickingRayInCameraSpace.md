[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreatePickingRayInCameraSpace

# Function: CreatePickingRayInCameraSpace()

> **CreatePickingRayInCameraSpace**(`scene`, `x`, `y`, `camera?`): [`Ray`](../classes/Ray.md)

Defined in: [packages/dev/core/src/Culling/ray.core.ts:779](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Culling/ray.core.ts#L779)

Creates a ray that can be used to pick in the scene

## Parameters

### scene

[`Scene`](../classes/Scene.md)

defines the scene to use for the picking

### x

`number`

defines the x coordinate of the origin (on-screen)

### y

`number`

defines the y coordinate of the origin (on-screen)

### camera?

[`Camera`](../classes/Camera.md)

defines the camera to use for the picking

## Returns

[`Ray`](../classes/Ray.md)

a Ray
