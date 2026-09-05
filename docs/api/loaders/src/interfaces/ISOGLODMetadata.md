[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / ISOGLODMetadata

# Interface: ISOGLODMetadata

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:74](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L74)

Parsed contents of a PlayCanvas-style `lod-meta.json` file.

## Properties

### environment?

> `optional` **environment?**: `string`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:80](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L80)

Optional always-on environment `.sog` bundle, relative to the metadata file.

***

### filenames

> **filenames**: `string`[]

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:78](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L78)

SOG `meta.json` paths, relative to the metadata file, indexed by `ISOGLODEntry.file`.

***

### lodLevels

> **lodLevels**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:76](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L76)

Number of LOD levels (0 = highest detail).

***

### tree

> **tree**: `ISOGLODNode`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:82](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L82)

Root of the LOD octree.
