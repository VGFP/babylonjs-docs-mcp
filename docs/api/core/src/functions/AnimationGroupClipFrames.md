[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationGroupClipFrames

# Function: AnimationGroupClipFrames()

> **AnimationGroupClipFrames**(`sourceAnimationGroup`, `fromFrame`, `toFrame`, `name?`, `dontCloneAnimations?`): [`AnimationGroup`](../classes/AnimationGroup.md)

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:1233](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L1233)

Creates a new animation, keeping only the frames that are inside a given frame range

## Parameters

### sourceAnimationGroup

[`AnimationGroup`](../classes/AnimationGroup.md)

defines the animation group on which to operate

### fromFrame

`number`

defines the lower bound of the range

### toFrame

`number`

defines the upper bound of the range

### name?

`string`

defines the name of the new animation group. If not provided, use the same name as animationGroup

### dontCloneAnimations?

`boolean`

defines whether or not the animations should be cloned before clipping the frames. Default is false, so animations will be cloned

## Returns

[`AnimationGroup`](../classes/AnimationGroup.md)

a new animation group stripped from all the frames outside the given range
