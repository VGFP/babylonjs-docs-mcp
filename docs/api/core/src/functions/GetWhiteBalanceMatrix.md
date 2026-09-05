[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetWhiteBalanceMatrix

# Function: GetWhiteBalanceMatrix()

> **GetWhiteBalanceMatrix**(`temperatureKelvin`, `tint`): `number`[] \| `Float32Array`\<`ArrayBufferLike`\>

Defined in: [packages/dev/core/src/Maths/colorTemperature.functions.ts:209](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/colorTemperature.functions.ts#L209)

Computes the linear RGB (sRGB / Rec.709 primaries) color-correction matrix that white-balances the given
illuminant, by chromatically adapting its white point (see [TemperatureTintToXyz](TemperatureTintToXyz.md)) to the working
color space's reference white using the Bradford transform.

## Parameters

### temperatureKelvin

`number`

The correlated color temperature of the illuminant to neutralize, in Kelvin

### tint

`number`

An offset perpendicular to the Planckian locus (the green/magenta axis), in the range [-150, 150]

## Returns

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

A column-major 3x3 matrix (9 values), ready to be bound as a `mat3` shader uniform
