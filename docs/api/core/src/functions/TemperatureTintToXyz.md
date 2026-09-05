[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TemperatureTintToXyz

# Function: TemperatureTintToXyz()

> **TemperatureTintToXyz**(`temperatureKelvin`, `tint`): [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/Maths/colorTemperature.functions.ts:63](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/colorTemperature.functions.ts#L63)

Converts a correlated color temperature and tint offset into the CIE XYZ (Y = 1) coordinates of the
corresponding illuminant white point, using a tabulated approximation of the Planckian locus in CIE 1960 UCS
(u, v) space.

## Parameters

### temperatureKelvin

`number`

The correlated color temperature of the illuminant, in Kelvin

### tint

`number`

An offset perpendicular to the Planckian locus (the green/magenta axis), in the range
[-[MaxTintMagnitude](../variables/MaxTintMagnitude.md), [MaxTintMagnitude](../variables/MaxTintMagnitude.md)]

## Returns

[`Vector3`](../classes/Vector3.md)

The CIE XYZ (Y = 1) coordinates of the illuminant white point
