[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PLYHeader

# Interface: PLYHeader

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:369](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L369)

meta info on Splat file

## Properties

### buffer

> **buffer**: `ArrayBuffer`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:401](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L401)

buffer for the data view

***

### chunkCount

> **chunkCount**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:377](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L377)

number of spatial chunks for compressed ply

***

### chunkProperties

> **chunkProperties**: [`PlyProperty`](../type-aliases/PlyProperty.md)[]

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:393](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L393)

array listing properties per chunk

***

### dataView

> **dataView**: `DataView`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:397](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L397)

data view for parsing chunks and vertices

***

### rowChunkLength

> **rowChunkLength**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L385)

length in bytes of the chunk

***

### rowVertexLength

> **rowVertexLength**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:381](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L381)

length in bytes of the vertex info

***

### shBuffer

> **shBuffer**: `ArrayBuffer` \| `null`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:413](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L413)

buffer for SH coefficients

***

### shCoefficientCount

> **shCoefficientCount**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:409](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L409)

number of coefficient per splat

***

### shDegree

> **shDegree**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:405](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L405)

degree of SH coefficients

***

### vertexCount

> **vertexCount**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:373](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L373)

number of splats

***

### vertexProperties

> **vertexProperties**: [`PlyProperty`](../type-aliases/PlyProperty.md)[]

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:389](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L389)

array listing properties per vertex
