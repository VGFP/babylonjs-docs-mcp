[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TargetedAnimation

# Class: TargetedAnimation

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L21)

This class defines the direct association between an animation and a target

## Constructors

### Constructor

> **new TargetedAnimation**(`parent`): `TargetedAnimation`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L49)

Creates a new targeted animation

#### Parameters

##### parent

[`AnimationGroup`](AnimationGroup.md)

The animation group to which the animation belongs

#### Returns

`TargetedAnimation`

## Properties

### animation

> **animation**: [`Animation`](Animation.md)

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L25)

Animation to perform

***

### parent

> `readonly` **parent**: [`AnimationGroup`](AnimationGroup.md)

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L49)

The animation group to which the animation belongs

***

### target

> **target**: `any`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L30)

Target to animate

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L35)

Gets or sets the unique id of the targeted animation

## Methods

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L41)

Returns the string "TargetedAnimation"

#### Returns

`string`

"TargetedAnimation"

***

### serialize()

> **serialize**(): `any`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L55)

Serialize the object

#### Returns

`any`

the JSON object representing the current entity
