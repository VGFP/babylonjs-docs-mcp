[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ComputeOverlayCssTransform

# Function: ComputeOverlayCssTransform()

> **ComputeOverlayCssTransform**(`centerX`, `centerY`, `scaleX`, `scaleY`, `rotation`, `elementWidth`, `elementHeight`): `string`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInteractionManager.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/HTML/htmlInteractionManager.ts#L29)

Builds the CSS `transform` string that positions an overlay element over the projected face of a mesh.

The transform is applied with `transform-origin: 0 0`. Reading right to left it centers the element on
its own origin, scales and rotates it to match the projected face, then translates it to the projected
center (in CSS pixels, top-left origin).

## Parameters

### centerX

`number`

projected center X in CSS pixels

### centerY

`number`

projected center Y in CSS pixels

### scaleX

`number`

horizontal scale to apply to the element

### scaleY

`number`

vertical scale to apply to the element

### rotation

`number`

in-plane rotation in radians

### elementWidth

`number`

element width in pixels

### elementHeight

`number`

element height in pixels

## Returns

`string`

the CSS transform string
