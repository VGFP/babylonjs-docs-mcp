[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BezierCurve

# Class: BezierCurve

Defined in: [packages/dev/core/src/Maths/math.path.ts:19](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.path.ts#L19)

Class used to represent a Bezier curve

## Constructors

### Constructor

> **new BezierCurve**(): `BezierCurve`

#### Returns

`BezierCurve`

## Methods

### Interpolate()

> `static` **Interpolate**(`t`, `x1`, `y1`, `x2`, `y2`): `number`

Defined in: [packages/dev/core/src/Maths/math.path.ts:29](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.path.ts#L29)

Returns the cubic Bezier interpolated value (float) at "t" (float) from the given x1, y1, x2, y2 floats

#### Parameters

##### t

`number`

defines the time

##### x1

`number`

defines the left coordinate on X axis

##### y1

`number`

defines the left coordinate on Y axis

##### x2

`number`

defines the right coordinate on X axis

##### y2

`number`

defines the right coordinate on Y axis

#### Returns

`number`

the interpolated value
