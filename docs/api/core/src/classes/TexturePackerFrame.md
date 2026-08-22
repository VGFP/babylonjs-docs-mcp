[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TexturePackerFrame

# Class: TexturePackerFrame

Defined in: [packages/dev/core/src/Materials/Textures/Packer/frame.ts:26](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/Packer/frame.ts#L26)

This is a support class for frame Data on texture packer sets.

## Implements

- [`ITexturePackerFrame`](../interfaces/ITexturePackerFrame.md)

## Constructors

### Constructor

> **new TexturePackerFrame**(`id`, `scale`, `offset`): `TexturePackerFrame`

Defined in: [packages/dev/core/src/Materials/Textures/Packer/frame.ts:49](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/Packer/frame.ts#L49)

Initializes a texture package frame.

#### Parameters

##### id

`number`

The numerical frame identifier

##### scale

[`Vector2`](Vector2.md)

Scalar Vector2 for UV frame

##### offset

[`Vector2`](Vector2.md)

Vector2 for the frame position in UV units.

#### Returns

`TexturePackerFrame`

TexturePackerFrame

## Properties

### id

> **id**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/Packer/frame.ts:30](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/Packer/frame.ts#L30)

The frame ID

#### Implementation of

[`ITexturePackerFrame`](../interfaces/ITexturePackerFrame.md).[`id`](../interfaces/ITexturePackerFrame.md#id)

***

### offset

> **offset**: [`Vector2`](Vector2.md)

Defined in: [packages/dev/core/src/Materials/Textures/Packer/frame.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/Packer/frame.ts#L40)

The Frames offset

#### Implementation of

[`ITexturePackerFrame`](../interfaces/ITexturePackerFrame.md).[`offset`](../interfaces/ITexturePackerFrame.md#offset)

***

### scale

> **scale**: [`Vector2`](Vector2.md)

Defined in: [packages/dev/core/src/Materials/Textures/Packer/frame.ts:35](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/Packer/frame.ts#L35)

The frames Scale

#### Implementation of

[`ITexturePackerFrame`](../interfaces/ITexturePackerFrame.md).[`scale`](../interfaces/ITexturePackerFrame.md#scale)
