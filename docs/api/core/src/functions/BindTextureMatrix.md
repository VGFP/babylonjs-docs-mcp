[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BindTextureMatrix

# Function: BindTextureMatrix()

> **BindTextureMatrix**(`texture`, `uniformBuffer`, `key`): `void`

Defined in: [packages/dev/core/src/Materials/materialHelper.functions.ts:416](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/materialHelper.functions.ts#L416)

Binds a texture matrix value to its corresponding uniform

## Parameters

### texture

[`BaseTexture`](../classes/BaseTexture.md)

The texture to bind the matrix for

### uniformBuffer

[`UniformBuffer`](../classes/UniformBuffer.md)

The uniform buffer receiving the data

### key

`string`

The channel key "diffuse", "specular"... used in the shader

## Returns

`void`
