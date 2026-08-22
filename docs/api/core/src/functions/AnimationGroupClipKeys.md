[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationGroupClipKeys

# Function: AnimationGroupClipKeys()

> **AnimationGroupClipKeys**(`sourceAnimationGroup`, `fromKey`, `toKey`, `name?`, `dontCloneAnimations?`): [`AnimationGroup`](../classes/AnimationGroup.md)

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:1206](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Animations/animationGroup.pure.ts#L1206)

Creates a new animation, keeping only the keys that are inside a given key range

## Parameters

### sourceAnimationGroup

[`AnimationGroup`](../classes/AnimationGroup.md)

defines the animation group on which to operate

### fromKey

`number`

defines the lower bound of the range

### toKey

`number`

defines the upper bound of the range

### name?

`string`

defines the name of the new animation group. If not provided, use the same name as animationGroup

### dontCloneAnimations?

`boolean`

defines whether or not the animations should be cloned before clipping the keys. Default is false, so animations will be cloned

## Returns

[`AnimationGroup`](../classes/AnimationGroup.md)

a new animation group stripped from all the keys outside the given range
