[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMeshRebuildOptions

# Interface: IMeshRebuildOptions

Defined in: [packages/dev/core/src/Meshes/csg2.ts:57](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/csg2.ts#L57)

Interface to customize the mesh rebuild options

## Properties

### centerMesh?

> `optional` **centerMesh?**: `boolean`

Defined in: [packages/dev/core/src/Meshes/csg2.ts:65](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/csg2.ts#L65)

True to center the mesh on 0,0,0

***

### materialToUse?

> `optional` **materialToUse?**: [`Material`](../classes/Material.md)

Defined in: [packages/dev/core/src/Meshes/csg2.ts:69](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/csg2.ts#L69)

Defines a material to use for that mesh. When not defined the system will either reuse the one from the source or create a multimaterial if several materials were involved

***

### rebuildNormals?

> `optional` **rebuildNormals?**: `boolean`

Defined in: [packages/dev/core/src/Meshes/csg2.ts:61](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/csg2.ts#L61)

Rebuild normals
