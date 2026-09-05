[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / LatLonToNormalToRef

# Function: LatLonToNormalToRef()

> **LatLonToNormalToRef**\<`T`\>(`latLon`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.geospatial.functions.ts:44](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.geospatial.functions.ts#L44)

Computes the normal (up direction) in ECEF (Earth-Centered, Earth-Fixed) coordinates from the specified latitude and longitude in radians.
For the calculation, latitude is clamped to -PI/2 to PI/2.

## Type Parameters

### T

`T` *extends* `IVector3Like`

## Parameters

### latLon

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`ILatLonLike`](../interfaces/ILatLonLike.md)\>

The latitude and longitude in radians

### result

`T`

The resulting normal

## Returns

`T`

The resulting normal
