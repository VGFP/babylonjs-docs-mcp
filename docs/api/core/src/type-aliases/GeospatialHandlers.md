[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeospatialHandlers

# Type Alias: GeospatialHandlers

> **GeospatialHandlers** = `object`

Defined in: [packages/dev/core/src/Cameras/geospatialCameraMovement.ts:39](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L39)

Handler shape for geospatial camera interactions.
Property names are the canonical interaction type strings used in inputMap entries.
Single-method handlers are plain functions; multi-method handlers (pan) are objects.

## Properties

### pan

> **pan**: [`GeospatialPanHandler`](GeospatialPanHandler.md)

Defined in: [packages/dev/core/src/Cameras/geospatialCameraMovement.ts:41](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L41)

Handler for pan (globe drag) interactions — object because it needs start/update/stop lifecycle

***

### rotate

> **rotate**: (`yaw`, `pitch`) => `void`

Defined in: [packages/dev/core/src/Cameras/geospatialCameraMovement.ts:43](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L43)

Handler for rotate (tilt) interactions — accepts yaw (horizontal) and pitch (vertical) deltas

#### Parameters

##### yaw

`number`

##### pitch

`number`

#### Returns

`void`

***

### zoom

> **zoom**: (`delta`, `toCursor`) => `void`

Defined in: [packages/dev/core/src/Cameras/geospatialCameraMovement.ts:45](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/geospatialCameraMovement.ts#L45)

Handler for zoom interactions — accepts delta and whether to zoom toward cursor

#### Parameters

##### delta

`number`

##### toCursor

`boolean`

#### Returns

`void`
