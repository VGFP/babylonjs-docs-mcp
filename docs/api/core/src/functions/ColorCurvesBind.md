[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ColorCurvesBind

# Function: ColorCurvesBind()

> **ColorCurvesBind**(`colorCurves`, `effect`, `positiveUniform?`, `neutralUniform?`, `negativeUniform?`): `void`

Defined in: [packages/dev/core/src/Materials/colorCurves.pure.ts:537](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/colorCurves.pure.ts#L537)

Binds the color curves to the shader.

## Parameters

### colorCurves

[`ColorCurves`](../classes/ColorCurves.md)

The color curve to bind

### effect

[`Effect`](../classes/Effect.md)

The effect to bind to

### positiveUniform?

`string` = `"vCameraColorCurvePositive"`

The positive uniform shader parameter

### neutralUniform?

`string` = `"vCameraColorCurveNeutral"`

The neutral uniform shader parameter

### negativeUniform?

`string` = `"vCameraColorCurveNegative"`

The negative uniform shader parameter

## Returns

`void`
