[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / AddGaussianSplattingStreamPart

# Function: AddGaussianSplattingStreamPart()

> **AddGaussianSplattingStreamPart**(`compound`, `name`, `metadata`, `rootUrl`, `options?`): [`GaussianSplattingStream`](../classes/GaussianSplattingStream.md)

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:2272](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L2272)

**`Experimental`**

Adds a PlayCanvas-style SOG LOD stream as a part of a compound Gaussian Splatting mesh, so the streamed
splats are depth-sorted and rendered in ONE pass together with the compound's other (static) parts.

The returned mesh is a hidden controller: it streams SOG LOD files, GPU-decodes them into a reserved region
of the compound's shared atlas, and drives which of its splats are active (LOD) — the compound owns the sort
and the single instanced draw. The SOG up-axis orientation is applied to the reserved part's proxy transform;
move/hide the part via the proxy (`streamController` exposes it once streaming has started).

## Parameters

### compound

[`GaussianSplattingMesh`](../../../core/src/classes/GaussianSplattingMesh.md)

the compound mesh to add the streamed part to

### name

`string`

name for the streaming controller / part

### metadata

[`ISOGLODMetadata`](../interfaces/ISOGLODMetadata.md)

parsed `lod-meta.json`

### rootUrl

`string`

base URL the metadata's relative paths resolve against

### options?

[`IGaussianSplattingStreamOptions`](../interfaces/IGaussianSplattingStreamOptions.md) = `{}`

streaming options

## Returns

[`GaussianSplattingStream`](../classes/GaussianSplattingStream.md)

the streaming controller mesh (hidden; drives the reserved compound part)
