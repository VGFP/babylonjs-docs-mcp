[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IsGaussianSplattingClassName

# Function: IsGaussianSplattingClassName()

> **IsGaussianSplattingClassName**(`className`): `boolean`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:2226](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L2226)

True when `className` (from `AbstractMesh.getClassName()`) identifies a Gaussian Splatting mesh whose
`position.z` vertex attribute encodes a splat index rather than world-space Z: `"GaussianSplattingMesh"`
(also returned by [GaussianSplattingCompoundMesh](../classes/GaussianSplattingCompoundMesh.md), which deliberately does not override
`getClassName()`) and `"GaussianSplattingStream"` (which does override it, to remain distinguishable for
other purposes). Rendering-pipeline code that must treat any Gaussian Splatting mesh differently from an
ordinary mesh (geometry buffer, depth pre-pass, GPU picking, IBL voxelization, snapshot rendering, ...)
should use this instead of a literal string comparison, so a future splat mesh subclass only needs to be
added here once.

## Parameters

### className

`string`

the mesh class name to test, e.g. from `AbstractMesh.getClassName()`

## Returns

`boolean`

true if the class name identifies a Gaussian Splatting mesh
