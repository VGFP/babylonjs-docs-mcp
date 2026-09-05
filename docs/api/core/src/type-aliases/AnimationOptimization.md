[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationOptimization

# Type Alias: AnimationOptimization

> **AnimationOptimization** = \{ `mergeRuntimeAnimations`: `false`; \} \| \{ `mergeKeyFrames`: `boolean`; `mergeRuntimeAnimations`: `true`; \}

Defined in: [packages/dev/core/src/Animations/animation.optimizations.ts:6](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animation.optimizations.ts#L6)

Interface used to define the optimization options for animations

## Union Members

### Type Literal

\{ `mergeRuntimeAnimations`: `false`; \}

#### mergeRuntimeAnimations

> **mergeRuntimeAnimations**: `false`

Do not merge runtime animations

##### Default Value

```ts
true
```

***

### Type Literal

\{ `mergeKeyFrames`: `boolean`; `mergeRuntimeAnimations`: `true`; \}

#### mergeKeyFrames

> **mergeKeyFrames**: `boolean`

If true, all keyframes evaluation will be merged from the first runtime animation
You need to turn on `mergeRuntimeAnimations` for this to work

##### Default Value

```ts
false
```

#### mergeRuntimeAnimations

> **mergeRuntimeAnimations**: `true`

All runtime animations will be merged into the first animatable

##### Default Value

```ts
true
```
