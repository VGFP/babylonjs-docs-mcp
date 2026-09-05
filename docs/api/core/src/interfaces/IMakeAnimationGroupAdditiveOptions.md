[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMakeAnimationGroupAdditiveOptions

# Interface: IMakeAnimationGroupAdditiveOptions

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L68)

Options to be used when creating an additive group animation

## Extends

- [`IMakeAnimationAdditiveOptions`](IMakeAnimationAdditiveOptions.md)

## Properties

### clipKeys?

> `optional` **clipKeys?**: `boolean`

Defined in: [packages/dev/core/src/Animations/animation.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animation.pure.ts#L76)

If true, the key frames will be clipped to the range specified by range or fromFrame / toFrame (default is false)

#### Inherited from

[`IMakeAnimationAdditiveOptions`](IMakeAnimationAdditiveOptions.md).[`clipKeys`](IMakeAnimationAdditiveOptions.md#clipkeys)

***

### clonedAnimationGroupName?

> `optional` **clonedAnimationGroupName?**: `string`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L76)

The name of the cloned animation group if cloneOriginalAnimationGroup is true

***

### clonedAnimationName?

> `optional` **clonedAnimationName?**: `string`

Defined in: [packages/dev/core/src/Animations/animation.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animation.pure.ts#L63)

The name of the cloned animation if cloneOriginalAnimation is true. If not provided, use the original animation name

#### Inherited from

[`IMakeAnimationAdditiveOptions`](IMakeAnimationAdditiveOptions.md).[`clonedAnimationName`](IMakeAnimationAdditiveOptions.md#clonedanimationname)

***

### cloneOriginalAnimation?

> `optional` **cloneOriginalAnimation?**: `boolean`

Defined in: [packages/dev/core/src/Animations/animation.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animation.pure.ts#L59)

If true, the original animation will be cloned and converted to additive. If false, the original animation will be converted to additive (default is false)

#### Inherited from

[`IMakeAnimationAdditiveOptions`](IMakeAnimationAdditiveOptions.md).[`cloneOriginalAnimation`](IMakeAnimationAdditiveOptions.md#cloneoriginalanimation)

***

### cloneOriginalAnimationGroup?

> `optional` **cloneOriginalAnimationGroup?**: `boolean`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L72)

Defines if the animation group should be cloned or not (default is false)

***

### fromFrame?

> `optional` **fromFrame?**: `number`

Defined in: [packages/dev/core/src/Animations/animation.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animation.pure.ts#L68)

Together with toFrame, defines the range of the animation to convert to additive. Will only be used if range is not provided
If range and fromFrame / toFrame are not provided, the whole animation will be converted to additive

#### Inherited from

[`IMakeAnimationAdditiveOptions`](IMakeAnimationAdditiveOptions.md).[`fromFrame`](IMakeAnimationAdditiveOptions.md#fromframe)

***

### range?

> `optional` **range?**: `string`

Defined in: [packages/dev/core/src/Animations/animation.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animation.pure.ts#L55)

The name of the animation range to convert to additive. If not provided, fromFrame / toFrame will be used
If fromFrame / toFrame are not provided either, the whole animation will be converted to additive

#### Inherited from

[`IMakeAnimationAdditiveOptions`](IMakeAnimationAdditiveOptions.md).[`range`](IMakeAnimationAdditiveOptions.md#range)

***

### referenceFrame?

> `optional` **referenceFrame?**: `number`

Defined in: [packages/dev/core/src/Animations/animation.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animation.pure.ts#L50)

The frame that the animation should be relative to (if not provided, 0 will be used)

#### Inherited from

[`IMakeAnimationAdditiveOptions`](IMakeAnimationAdditiveOptions.md).[`referenceFrame`](IMakeAnimationAdditiveOptions.md#referenceframe)

***

### toFrame?

> `optional` **toFrame?**: `number`

Defined in: [packages/dev/core/src/Animations/animation.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animation.pure.ts#L72)

Together with fromFrame, defines the range of the animation to convert to additive.

#### Inherited from

[`IMakeAnimationAdditiveOptions`](IMakeAnimationAdditiveOptions.md).[`toFrame`](IMakeAnimationAdditiveOptions.md#toframe)
