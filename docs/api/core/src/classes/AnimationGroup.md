[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationGroup

# Class: AnimationGroup

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L82)

Use this class to create coordinated animations on multiple targets

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new AnimationGroup**(`name`, `scene?`, `weight?`, `playOrder?`): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:478](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L478)

Instantiates a new Animation Group.
This helps managing several animations at once.

#### Parameters

##### name

`string`

Defines the name of the group

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](Scene.md)\> = `null`

Defines the scene the group belongs to

##### weight?

`number` = `-1`

Defines the weight to use for animations in the group (-1.0 by default, meaning "no weight")

##### playOrder?

`number` = `0`

Defines the order of play of the animation group (default is 0)

#### Returns

`AnimationGroup`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/groupAnimations

## Properties

### metadata

> **metadata**: `any` = `null`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:142](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L142)

Gets or sets an object used to store user defined information for the node

***

### name

> **name**: `string`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:480](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L480)

The name of the animation group

***

### onAnimationEndObservable

> **onAnimationEndObservable**: [`Observable`](Observable.md)\<[`TargetedAnimation`](TargetedAnimation.md)\>

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L112)

This observable will notify when one animation have ended

***

### onAnimationGroupEndObservable

> **onAnimationGroupEndObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L127)

This observable will notify when all animations have ended.

***

### onAnimationGroupLoopObservable

> **onAnimationGroupLoopObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L122)

Observer raised when all animations have looped

***

### onAnimationGroupPauseObservable

> **onAnimationGroupPauseObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L132)

This observable will notify when all animations have paused.

***

### onAnimationGroupPlayObservable

> **onAnimationGroupPlayObservable**: [`Observable`](Observable.md)\<`AnimationGroup`\>

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L137)

This observable will notify when all animations are playing.

***

### onAnimationLoopObservable

> **onAnimationLoopObservable**: [`Observable`](Observable.md)\<[`TargetedAnimation`](TargetedAnimation.md)\>

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L117)

Observer raised when one animation loops

***

### uniqueId

> **uniqueId**: `number`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L107)

Gets or sets the unique id of the node

## Accessors

### animatables

#### Get Signature

> **get** **animatables**(): [`Animatable`](Animatable.md)[]

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:366](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L366)

returning the list of animatables controlled by this animation group.

##### Returns

[`Animatable`](Animatable.md)[]

***

### blendingSpeed

#### Get Signature

> **get** **blendingSpeed**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:426](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L426)

Gets or sets the animation blending speed
Note that a null value means that each animation will use their own existing blending configuration (Animation.blendingSpeed)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **blendingSpeed**(`value`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:430](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L430)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

***

### children

#### Get Signature

> **get** **children**(): [`TargetedAnimation`](TargetedAnimation.md)[]

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:373](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L373)

Gets the list of target animations

##### Returns

[`TargetedAnimation`](TargetedAnimation.md)[]

***

### enableBlending

#### Get Signature

> **get** **enableBlending**(): [`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:404](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L404)

Allows the animations of the animation group to blend with current running animations
Note that a null value means that each animation will use their own existing blending configuration (Animation.enableBlending)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

#### Set Signature

> **set** **enableBlending**(`value`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:408](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L408)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\>

##### Returns

`void`

***

### from

#### Get Signature

> **get** **from**(): `number`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:226](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L226)

Gets or sets the first frame

##### Returns

`number`

#### Set Signature

> **set** **from**(`value`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:230](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L230)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isAdditive

#### Get Signature

> **get** **isAdditive**(): `boolean`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:323](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L323)

Gets or sets if all animations should be evaluated additively

##### Returns

`boolean`

#### Set Signature

> **set** **isAdditive**(`value`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:327](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L327)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### isPlaying

#### Get Signature

> **get** **isPlaying**(): `boolean`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:273](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L273)

Gets a value indicating that the current group is playing

##### Returns

`boolean`

***

### isStarted

#### Get Signature

> **get** **isStarted**(): `boolean`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:266](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L266)

Define if the animations are started

##### Returns

`boolean`

***

### loopAnimation

#### Get Signature

> **get** **loopAnimation**(): `boolean`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:303](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L303)

Gets or sets if all animations should loop or not

##### Returns

`boolean`

#### Set Signature

> **set** **loopAnimation**(`value`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:307](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L307)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### mask

#### Get Signature

> **get** **mask**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroupMask`](AnimationGroupMask.md)\>

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:149](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L149)

Gets or sets the mask associated with this animation group. This mask is used to filter which objects should be animated.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroupMask`](AnimationGroupMask.md)\>

#### Set Signature

> **set** **mask**(`value`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L153)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationGroupMask`](AnimationGroupMask.md)\>

##### Returns

`void`

***

### playOrder

#### Get Signature

> **get** **playOrder**(): `number`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:380](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L380)

Gets or sets the order of play of the animation group (default: 0)

##### Returns

`number`

#### Set Signature

> **set** **playOrder**(`value`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:384](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L384)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### speedRatio

#### Get Signature

> **get** **speedRatio**(): `number`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:280](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L280)

Gets or sets the speed ratio to use for all animations

##### Returns

`number`

#### Set Signature

> **set** **speedRatio**(`value`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:287](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L287)

Gets or sets the speed ratio to use for all animations

##### Parameters

###### value

`number`

##### Returns

`void`

***

### targetedAnimations

#### Get Signature

> **get** **targetedAnimations**(): [`TargetedAnimation`](TargetedAnimation.md)[]

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:359](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L359)

Gets the targeted animations for this animation group

##### Returns

[`TargetedAnimation`](TargetedAnimation.md)[]

***

### to

#### Get Signature

> **get** **to**(): `number`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:246](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L246)

Gets or sets the last frame

##### Returns

`number`

#### Set Signature

> **set** **to**(`value`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L250)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### weight

#### Get Signature

> **get** **weight**(): `number`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:343](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L343)

Gets or sets the weight to apply to all animations of the group

##### Returns

`number`

#### Set Signature

> **set** **weight**(`value`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:347](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L347)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addTargetedAnimation()

> **addTargetedAnimation**(`animation`, `target`): [`TargetedAnimation`](TargetedAnimation.md)

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:501](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L501)

Add an animation (with its target) in the group

#### Parameters

##### animation

[`Animation`](Animation.md)

defines the animation we want to add

##### target

`any`

defines the target of the animation

#### Returns

[`TargetedAnimation`](TargetedAnimation.md)

the TargetedAnimation object

***

### clone()

> **clone**(`newName`, `targetConverter?`, `cloneAnimations?`, `cloneAnimationKeys?`): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:907](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L907)

Clone the current animation group and returns a copy

#### Parameters

##### newName

`string`

defines the name of the new group

##### targetConverter?

(`oldTarget`) => `any`

defines an optional function used to convert current animation targets to new ones

##### cloneAnimations?

`boolean` = `false`

defines if the animations should be cloned or referenced

##### cloneAnimationKeys?

`boolean` = `false`

defines if the animation keys should be cloned when cloning animations (false by default). No effect if cloneAnimations is false

#### Returns

`AnimationGroup`

the new animation group

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:856](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L856)

Dispose all associated resources

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:970](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L970)

Returns the string "AnimationGroup"

#### Returns

`string`

"AnimationGroup"

***

### getCurrentFrame()

> **getCurrentFrame**(): `number`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:849](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L849)

Helper to get the current frame. This will return 0 if the AnimationGroup is not running, and it might return wrong results if multiple animations are running in different frames.

#### Returns

`number`

current animation frame.

***

### getLength()

> **getLength**(`from?`, `to?`): `number`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:452](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L452)

Gets the length (in seconds) of the animation group
This function assumes that all animations are played at the same framePerSecond speed!
Note: you can only call this method after you've added at least one targeted animation!

#### Parameters

##### from?

`number`

Starting frame range (default is AnimationGroup.from)

##### to?

`number`

Ending frame range (default is AnimationGroup.to)

#### Returns

`number`

The length in seconds

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:465](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L465)

Gets the scene the animation group belongs to

#### Returns

[`Scene`](Scene.md)

The scene the animation group belongs to

***

### goToFrame()

> **goToFrame**(`frame`, `useWeight?`): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:832](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L832)

Goes to a specific frame in this animation group. Note that the animation group must be in playing or paused status

#### Parameters

##### frame

`number`

the frame number to go to

##### useWeight?

`boolean` = `false`

defines whether the animation weight should be applied to the image to be jumped to (false by default)

#### Returns

`AnimationGroup`

the animationGroup

***

### normalize()

> **normalize**(`beginFrame?`, `endFrame?`): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:549](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L549)

This function will normalize every animation in the group to make sure they all go from beginFrame to endFrame
It can add constant keys at begin or end

#### Parameters

##### beginFrame?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the new begin frame for all animations or the smallest begin frame of all animations if null (defaults to null)

##### endFrame?

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

defines the new end frame for all animations or the largest end frame of all animations if null (defaults to null)

#### Returns

`AnimationGroup`

the animation group

***

### pause()

> **pause**(): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:676](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L676)

Pause all animations

#### Returns

`AnimationGroup`

the animation group

***

### play()

> **play**(`loop?`): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:699](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L699)

Play all animations to initial state
This function will start() the animations if they were not started or will restart() them if they were paused

#### Parameters

##### loop?

`boolean`

defines if animations must loop

#### Returns

`AnimationGroup`

the animation group

***

### removeTargetedAnimation()

> **removeTargetedAnimation**(`animation`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:533](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L533)

Remove an animation from the group

#### Parameters

##### animation

[`Animation`](Animation.md)

defines the animation we want to remove

#### Returns

`void`

***

### removeUnmaskedAnimations()

> **removeUnmaskedAnimations**(): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L196)

Removes all animations for the targets not retained by the animation group mask.
Use this function if you know you won't need those animations anymore and if you want to free memory.

#### Returns

`void`

***

### reset()

> **reset**(): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:718](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L718)

Reset all animations to initial state

#### Returns

`AnimationGroup`

the animation group

***

### restart()

> **restart**(): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:738](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L738)

Restart animations from after pausing it

#### Returns

`AnimationGroup`

the animation group

***

### serialize()

> **serialize**(): `any`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:934](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L934)

Serializes the animationGroup to an object

#### Returns

`any`

Serialized object

***

### setWeightForAllAnimatables()

> **setWeightForAllAnimatables**(`weight`): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:802](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L802)

**`Since`**

Set animation weight for all animatables

 6.12.4
 You can pass the weight to the AnimationGroup constructor, or use the weight property to set it after the group has been created,
 making it easier to define the overall animation weight than calling setWeightForAllAnimatables() after the animation group has been started

#### Parameters

##### weight

`number`

defines the weight to use

#### Returns

`AnimationGroup`

the animationGroup

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-weights

***

### start()

> **start**(`loop?`, `speedRatio?`, `from?`, `to?`, `isAdditive?`): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:623](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L623)

Start all animations on given targets

#### Parameters

##### loop?

`boolean` = `false`

defines if animations must loop

##### speedRatio?

`number` = `1`

defines the ratio to apply to animation speed (1 by default)

##### from?

`number`

defines the from key (optional)

##### to?

`number`

defines the to key (optional)

##### isAdditive?

`boolean`

defines the additive state for the resulting animatables (optional)

#### Returns

`AnimationGroup`

the current animation group

***

### stop()

> **stop**(`skipOnAnimationEnd?`): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:762](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L762)

Stop all animations

#### Parameters

##### skipOnAnimationEnd?

`boolean` = `false`

defines if the system should not raise onAnimationEnd. Default is false

#### Returns

`AnimationGroup`

the animation group

***

### syncAllAnimationsWith()

> **syncAllAnimationsWith**(`root`): `AnimationGroup`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:817](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L817)

Synchronize and normalize all animatables with a source animatable

#### Parameters

##### root

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](Animatable.md)\>

defines the root animatable to synchronize with (null to stop synchronizing)

#### Returns

`AnimationGroup`

the animationGroup

#### See

https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#animation-weights

***

### syncWithMask()

> **syncWithMask**(`forceUpdate?`): `void`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L168)

Makes sure that the animations are either played or stopped according to the animation group mask.
Note however that the call won't have any effect if the animation group has not been started yet.

#### Parameters

##### forceUpdate?

`boolean` = `false`

If true, forces to loop over the animatables even if no mask is defined (used internally, you shouldn't need to use it). Default: false.

#### Returns

`void`

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [packages/dev/core/src/Animations/animationGroup.pure.ts:979](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animationGroup.pure.ts#L979)

Creates a detailed string about the object

#### Parameters

##### fullDetails?

`boolean`

defines if the output string will support multiple levels of logging within scene loading

#### Returns

`string`

a string representing the object
