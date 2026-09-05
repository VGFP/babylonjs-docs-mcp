[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PLYHeader

# Interface: PLYHeader

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:370](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L370)

meta info on Splat file

## Properties

### buffer

> **buffer**: `ArrayBuffer`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:402](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L402)

buffer for the data view

***

### chunkCount

> **chunkCount**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:378](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L378)

number of spatial chunks for compressed ply

***

### chunkProperties

> **chunkProperties**: [`PlyProperty`](../type-aliases/PlyProperty.md)[]

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L394)

array listing properties per chunk

***

### dataView

> **dataView**: `DataView`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:398](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L398)

data view for parsing chunks and vertices

***

### rowChunkLength

> **rowChunkLength**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:386](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L386)

length in bytes of the chunk

***

### rowVertexLength

> **rowVertexLength**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:382](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L382)

length in bytes of the vertex info

***

### shBuffer

> **shBuffer**: `ArrayBuffer` \| `null`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:414](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L414)

buffer for SH coefficients

***

### shCoefficientCount

> **shCoefficientCount**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:410](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L410)

number of coefficient per splat

***

### shDegree

> **shDegree**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:406](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L406)

degree of SH coefficients

***

### vertexCount

> **vertexCount**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:374](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L374)

number of splats

***

### vertexProperties

> **vertexProperties**: [`PlyProperty`](../type-aliases/PlyProperty.md)[]

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:390](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L390)

array listing properties per vertex
