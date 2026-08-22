[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ArcRotateHandlers

# Type Alias: ArcRotateHandlers

> **ArcRotateHandlers** = `object`

Defined in: [packages/dev/core/src/Cameras/arcRotateCameraMovement.ts:17](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/arcRotateCameraMovement.ts#L17)

Handler shape for arc-rotate camera interactions.
Property names are the canonical interaction type strings used in inputMap entries.
All handlers are plain functions since none need multi-method lifecycle.

## Properties

### pan

> **pan**: (`deltaX`, `deltaY`) => `void`

Defined in: [packages/dev/core/src/Cameras/arcRotateCameraMovement.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/arcRotateCameraMovement.ts#L19)

Pan by pre-scaled pixel deltas

#### Parameters

##### deltaX

`number`

##### deltaY

`number`

#### Returns

`void`

***

### rotate

> **rotate**: (`deltaX`, `deltaY`) => `void`

Defined in: [packages/dev/core/src/Cameras/arcRotateCameraMovement.ts:21](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/arcRotateCameraMovement.ts#L21)

Orbit by pre-scaled pixel deltas

#### Parameters

##### deltaX

`number`

##### deltaY

`number`

#### Returns

`void`

***

### zoom

> **zoom**: (`delta`) => `void`

Defined in: [packages/dev/core/src/Cameras/arcRotateCameraMovement.ts:23](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/arcRotateCameraMovement.ts#L23)

Zoom by a pre-computed delta (already scaled by input)

#### Parameters

##### delta

`number`

#### Returns

`void`
