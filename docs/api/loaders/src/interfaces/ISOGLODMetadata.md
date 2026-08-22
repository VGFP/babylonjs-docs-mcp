[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / ISOGLODMetadata

# Interface: ISOGLODMetadata

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:71](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L71)

Parsed contents of a PlayCanvas-style `lod-meta.json` file.

## Properties

### environment?

> `optional` **environment?**: `string`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:77](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L77)

Optional always-on environment `.sog` bundle, relative to the metadata file.

***

### filenames

> **filenames**: `string`[]

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:75](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L75)

SOG `meta.json` paths, relative to the metadata file, indexed by `ISOGLODEntry.file`.

***

### lodLevels

> **lodLevels**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:73](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L73)

Number of LOD levels (0 = highest detail).

***

### tree

> **tree**: `ISOGLODNode`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:79](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L79)

Root of the LOD octree.
