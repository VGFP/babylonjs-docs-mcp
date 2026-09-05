[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationGroupClipInPlace

# Function: AnimationGroupClipInPlace()

> **AnimationGroupClipInPlace**(`animationGroup`, `start`, `end`, `dontCloneAnimations?`, `useFrame?`): [`AnimationGroup`](../classes/AnimationGroup.md)

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:1260](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L1260)

Updates an existing animation, keeping only the keys that are inside a given key or frame range

## Parameters

### animationGroup

[`AnimationGroup`](../classes/AnimationGroup.md)

defines the animation group on which to operate

### start

`number`

defines the lower bound of the range

### end

`number`

defines the upper bound of the range

### dontCloneAnimations?

`boolean`

defines whether or not the animations should be cloned before clipping the keys. Default is false, so animations will be cloned

### useFrame?

`boolean` = `false`

defines if the range is defined by frame numbers or key indices (default is false which means use key indices)

## Returns

[`AnimationGroup`](../classes/AnimationGroup.md)

the animationGroup stripped from all the keys outside the given range
