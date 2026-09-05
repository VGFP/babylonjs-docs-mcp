[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SmoothStep

# Function: SmoothStep()

> **SmoothStep**(`from`, `to`, `tx`): `number`

Defined in: [packages/dev/core/src/Maths/math.scalar.functions.ts:278](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.scalar.functions.ts#L278)

Interpolates between min and max with smoothing at the limits.

This function interpolates between min and max in a similar way to Lerp. However, the interpolation will gradually speed up
from the start and slow down toward the end. This is useful for creating natural-looking animation, fading and other transitions.

## Parameters

### from

`number`

from

### to

`number`

to

### tx

`number`

value

## Returns

`number`

the smooth stepped value
