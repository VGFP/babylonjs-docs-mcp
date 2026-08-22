[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateResizedCopy

# Function: CreateResizedCopy()

> **CreateResizedCopy**(`texture`, `width`, `height`, `useBilinearMode?`): [`Texture`](../classes/Texture.md)

Defined in: [packages/dev/core/src/Misc/textureTools.ts:26](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/textureTools.ts#L26)

Uses the GPU to create a copy texture rescaled at a given size

## Parameters

### texture

[`Texture`](../classes/Texture.md)

Texture to copy from

### width

`number`

defines the desired width

### height

`number`

defines the desired height

### useBilinearMode?

`boolean` = `true`

defines if bilinear mode has to be used

## Returns

[`Texture`](../classes/Texture.md)

the generated texture
