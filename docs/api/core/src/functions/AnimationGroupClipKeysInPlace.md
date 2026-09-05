[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationGroupClipKeysInPlace

# Function: AnimationGroupClipKeysInPlace()

> **AnimationGroupClipKeysInPlace**(`animationGroup`, `fromKey`, `toKey`, `dontCloneAnimations?`): [`AnimationGroup`](../classes/AnimationGroup.md)

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:1220](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L1220)

Updates an existing animation, keeping only the keys that are inside a given key range

## Parameters

### animationGroup

[`AnimationGroup`](../classes/AnimationGroup.md)

defines the animation group on which to operate

### fromKey

`number`

defines the lower bound of the range

### toKey

`number`

defines the upper bound of the range

### dontCloneAnimations?

`boolean`

defines whether or not the animations should be cloned before clipping the keys. Default is false, so animations will be cloned

## Returns

[`AnimationGroup`](../classes/AnimationGroup.md)

the animationGroup stripped from all the keys outside the given range
