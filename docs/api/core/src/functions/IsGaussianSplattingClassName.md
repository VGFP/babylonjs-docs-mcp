[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IsGaussianSplattingClassName

# Function: IsGaussianSplattingClassName()

> **IsGaussianSplattingClassName**(`className`): `boolean`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:2416](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L2416)

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
