[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICullable

# Interface: ICullable

Defined in: [packages/dev/core/src/Culling/boundingInfo.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Culling/boundingInfo.ts#L35)

Interface for cullable objects

## See

https://doc.babylonjs.com/features/featuresDeepDive/materials/using/materials_introduction#back-face-culling

## Methods

### isCompletelyInFrustum()

> **isCompletelyInFrustum**(`frustumPlanes`): `boolean`

Defined in: [packages/dev/core/src/Culling/boundingInfo.ts:48](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Culling/boundingInfo.ts#L48)

Checks if a cullable object (mesh...) is in the camera frustum
Unlike isInFrustum this checks the full bounding box

#### Parameters

##### frustumPlanes

[`Plane`](../classes/Plane.md)[]

Camera near/planes

#### Returns

`boolean`

true if the object is in frustum otherwise false

***

### isInFrustum()

> **isInFrustum**(`frustumPlanes`): `boolean`

Defined in: [packages/dev/core/src/Culling/boundingInfo.ts:41](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Culling/boundingInfo.ts#L41)

Checks if the object or part of the object is in the frustum

#### Parameters

##### frustumPlanes

[`Plane`](../classes/Plane.md)[]

Camera near/planes

#### Returns

`boolean`

true if the object is in frustum otherwise false
