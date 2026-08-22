[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WheelInputMapEntry

# Type Alias: WheelInputMapEntry\<TInteraction\>

> **WheelInputMapEntry**\<`TInteraction`\> = `object` & [`WheelConditions`](WheelConditions.md)

Defined in: [packages/dev/core/src/Cameras/inputMapper.ts:79](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/inputMapper.ts#L79)

Mapping rule for mouse wheel inputs.

## Type Declaration

### interaction

> **interaction**: `TInteraction`

### sensitivity?

> `optional` **sensitivity?**: `number`

Multiplier applied to input deltas before passing to the handler. Default is 1.

### source

> **source**: `"wheel"`

## Type Parameters

### TInteraction

`TInteraction` *extends* `string` = `string`
