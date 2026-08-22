[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AllocateShBuffers

# Function: AllocateShBuffers()

> **AllocateShBuffers**(`textureCount`, `bytesEach`): `Uint8Array`\<`ArrayBufferLike`\>[]

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:3857](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L3857)

Allocates SH texture buffers pre-filled with 128 (the neutral encoding of ~0.0 in the
shader's decompose() function). Padding bytes beyond the actual coefficients in the last
texture are read as higher-order SH bands when the mesh is added to a compound with a
higher degree; zero would decode to -1.0 instead, producing wrong colors.

## Parameters

### textureCount

`number`

number of SH textures to allocate

### bytesEach

`number`

byte size of each texture buffer

## Returns

`Uint8Array`\<`ArrayBufferLike`\>[]

array of initialized Uint8Array buffers
