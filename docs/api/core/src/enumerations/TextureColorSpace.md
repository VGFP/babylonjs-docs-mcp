[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TextureColorSpace

# Enumeration: TextureColorSpace

Defined in: [packages/dev/core/src/Materials/Textures/textureProcessor.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L19)

Specifies the color space of a texture operand.
When `sRGB` is set the sampled RGB values are converted to linear space before any channel
swizzle, factor multiplication, or arithmetic operation. Alpha is always treated as linear.

## Enumeration Members

### Linear

> **Linear**: `0`

Defined in: [packages/dev/core/src/Materials/Textures/textureProcessor.ts:21](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L21)

Texture data is already in linear space (default). No conversion applied.

***

### SRGB

> **SRGB**: `1`

Defined in: [packages/dev/core/src/Materials/Textures/textureProcessor.ts:23](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/textureProcessor.ts#L23)

Texture data is in sRGB (gamma) space. RGB channels are linearized (IEC 61966-2-1) before use.
