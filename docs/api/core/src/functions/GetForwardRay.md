[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetForwardRay

# Function: GetForwardRay()

> **GetForwardRay**(`camera`, `length?`, `transform?`, `origin?`): [`Ray`](../classes/Ray.md)

Defined in: [packages/dev/core/src/Culling/ray.core.ts:1223](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Culling/ray.core.ts#L1223)

Gets a ray in the forward direction from the camera.

## Parameters

### camera

[`Camera`](../classes/Camera.md)

Defines the camera to use to get the ray from

### length?

`number` = `100`

Defines the length of the ray to create

### transform?

[`Matrix`](../classes/Matrix.md)

Defines the transform to apply to the ray, by default the world matrix is used to create a workd space ray

### origin?

[`Vector3`](../classes/Vector3.md)

Defines the start point of the ray which defaults to the camera position

## Returns

[`Ray`](../classes/Ray.md)

the forward ray
