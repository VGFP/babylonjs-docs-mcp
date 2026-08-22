[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetElementPixelFromUv

# Function: GetElementPixelFromUv()

> **GetElementPixelFromUv**(`u`, `v`, `width`, `height`, `invertY?`): `object`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts:25](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts#L25)

Maps a UV coordinate sampled from an [HtmlTexture](../classes/HtmlTexture.md) to a pixel position inside the source element.

When `invertY` is true (the default, matching [HtmlTexture](../classes/HtmlTexture.md)'s default upload orientation) the V
axis is flipped so that `v = 1` maps to the top of the element, matching the top-left origin used by
DOM layout.

## Parameters

### u

`number`

horizontal texture coordinate, normally in [0, 1]

### v

`number`

vertical texture coordinate, normally in [0, 1]

### width

`number`

element width in pixels

### height

`number`

element height in pixels

### invertY?

`boolean` = `true`

whether the texture content is stored Y-inverted (default true)

## Returns

`object`

the pixel position `{ x, y }` within the element

### x

> **x**: `number`

### y

> **y**: `number`
