[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HandleFallbacksForShadows

# Function: HandleFallbacksForShadows()

> **HandleFallbacksForShadows**(`defines`, `fallbacks`, `maxSimultaneousLights?`, `rank?`): `number`

Defined in: [packages/dev/core/src/Materials/materialHelper.functions.ts:632](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/materialHelper.functions.ts#L632)

This helps decreasing rank by rank the shadow quality (0 being the highest rank and quality)

## Parameters

### defines

`any`

The defines to update while falling back

### fallbacks

[`EffectFallbacks`](../classes/EffectFallbacks.md)

The authorized effect fallbacks

### maxSimultaneousLights?

`number` = `4`

The maximum number of lights allowed

### rank?

`number` = `0`

the current rank of the Effect

## Returns

`number`

The newly affected rank
