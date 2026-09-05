[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MoveTowardsAngle

# Function: MoveTowardsAngle()

> **MoveTowardsAngle**(`current`, `target`, `maxDelta`): `number`

Defined in: [packages/dev/core/src/Maths/math.scalar.functions.ts:314](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.scalar.functions.ts#L314)

Same as MoveTowards but makes sure the values interpolate correctly when they wrap around 360 degrees.

Variables current and target are assumed to be in degrees. For optimization reasons, negative values of maxDelta
 are not supported and may cause oscillation. To push current away from a target angle, add 180 to that angle instead.

## Parameters

### current

`number`

current value

### target

`number`

target value

### maxDelta

`number`

max distance to move

## Returns

`number`

resulting angle
