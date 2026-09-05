[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AnimationParseFromFileAsync

# Function: AnimationParseFromFileAsync()

> **AnimationParseFromFileAsync**(`name`, `url`): `Promise`\<[`Animation`](../classes/Animation.md) \| [`Animation`](../classes/Animation.md)[]\>

Defined in: [packages/dev/core/src/Animations/animation.pure.ts:1604](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Animations/animation.pure.ts#L1604)

Creates a new animation or an array of animations from a snippet saved in a remote file

## Parameters

### name

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the name of the animation to create (can be null or empty to use the one from the json data)

### url

`string`

defines the url to load from

## Returns

`Promise`\<[`Animation`](../classes/Animation.md) \| [`Animation`](../classes/Animation.md)[]\>

a promise that will resolve to the new animation or an array of animations
