[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OptimizeAnimations

# Function: OptimizeAnimations()

> **OptimizeAnimations**(`scene`, `options?`): `void`

Defined in: [packages/dev/core/src/Animations/animation.optimizations.ts:35](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Animations/animation.optimizations.ts#L35)

This is a destructive optimization that merges all animatables into the first one.
That animatable will also host all the runtime animations.
We expect that all the animatables are on the same timeframe (same start, end, loop, etc..)

## Parameters

### scene

[`Scene`](../classes/Scene.md)

defines the scene to optimize

### options?

`Partial`\<[`AnimationOptimization`](../type-aliases/AnimationOptimization.md)\> = `{}`

defines the optimization options

## Returns

`void`
