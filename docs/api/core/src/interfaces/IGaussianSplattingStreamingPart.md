[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGaussianSplattingStreamingPart

# Interface: IGaussianSplattingStreamingPart

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:120](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L120)

Handle to a region of a compound Gaussian Splatting mesh reserved for dynamic (streamed) content by
[GaussianSplattingMesh.reserveStreamingPart](../classes/GaussianSplattingMesh.md#reservestreamingpart). It lets a streaming engine populate the region's
splats over time and drive which of them are sorted/rendered, while the compound keeps depth-sorting
and drawing every part (static + streamed) together in one pass.

Ranges/offsets passed to this handle are LOCAL to the part (0-based within `[0, capacity)`); the handle
translates them to the compound's global atlas coordinates.

## Properties

### atlasWidth

> `readonly` **atlasWidth**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L152)

Width (in texels) of the atlas, used to address decode/readback over the wide layout.

***

### base

> `readonly` **base**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:126](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L126)

First atlas splat index of the reserved region.

***

### capacity

> `readonly` **capacity**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L128)

Number of splats reserved for the region.

***

### centersTexture

> `readonly` **centersTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:130](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L130)

The compound's shared centers texture (the region occupies `[base, base+capacity)` within it).

***

### colorsTexture

> `readonly` **colorsTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:136](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L136)

The compound's shared colors texture.

***

### covariancesATexture

> `readonly` **covariancesATexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L132)

The compound's shared covariance A texture.

***

### covariancesBTexture

> `readonly` **covariancesBTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:134](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L134)

The compound's shared covariance B texture.

***

### isDepthSortSettled

> `readonly` **isDepthSortSettled**: `boolean`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:154](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L154)

Whether the compound's shared depth sort is settled (a streaming engine polls this to detect readiness).

***

### mrtAtlas

> `readonly` **mrtAtlas**: [`Nullable`](../type-aliases/Nullable.md)\<[`MultiRenderTarget`](../classes/MultiRenderTarget.md)\>

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L140)

The compound's shared render-target atlas a streaming engine decodes into, or null on a non-GPU backend.

***

### partIndex

> `readonly` **partIndex**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L124)

The part index assigned to this streaming region in the compound.

***

### proxy

> `readonly` **proxy**: `GaussianSplattingPartProxyMesh`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L122)

The proxy mesh controlling this part's world transform and visibility.

***

### rotMrtAtlas

> `readonly` **rotMrtAtlas**: [`Nullable`](../type-aliases/Nullable.md)\<[`MultiRenderTarget`](../classes/MultiRenderTarget.md)\>

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:150](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L150)

The compound's shared rotation/scale render-target atlas (one 3-attachment half-float MRT) a streaming engine
decodes rotation/scale into for voxel-IBL shadows, or null when rotation decode was not requested for this part.

***

### shMrtAtlas

> `readonly` **shMrtAtlas**: [`Nullable`](../type-aliases/Nullable.md)\<[`MultiRenderTarget`](../classes/MultiRenderTarget.md)[]\>

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:145](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L145)

The compound's shared higher-order SH render-target atlas (one single-attachment integer MRT per packed-u32
SH texture) a streaming engine bakes SH into, or null when SH decode was not requested for this part.

***

### splatPositions

> `readonly` **splatPositions**: [`Nullable`](../type-aliases/Nullable.md)\<`Float32Array`\<`ArrayBufferLike`\>\>

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L138)

The compound's shared CPU centers buffer consumed by the sort worker.

## Methods

### expandBounds()

> **expandBounds**(`min`, `max`): `void`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:182](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L182)

Grows the part's (and compound's) bounding info to include the given local-space centers extent.

#### Parameters

##### min

[`Vector3`](../classes/Vector3.md)

minimum corner

##### max

[`Vector3`](../classes/Vector3.md)

maximum corner

#### Returns

`void`

***

### notifyDataChanged()

> **notifyDataChanged**(): `void`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:187](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L187)

Re-posts the full merged position + part-index set to the compound's sort worker. Only needed after a
relayout moved the region's data wholesale; per-decode updates use [postPositionsRange](#postpositionsrange) instead.

#### Returns

`void`

***

### onAfterAtlasRebuild()

> **onAfterAtlasRebuild**(`callback`): () => `void`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L201)

Subscribes to the "shared atlas has been recreated" event. The callback receives the NEW atlas and should
rebind to it and restore this region's backed-up data.

#### Parameters

##### callback

(`newAtlas`) => `void`

invoked with the new atlas MRT

#### Returns

an unsubscribe function (call it on dispose)

() => `void`

***

### onBeforeAtlasRebuild()

> **onBeforeAtlasRebuild**(`callback`): () => `void`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L194)

Subscribes to the "about to recreate the shared atlas to grow it" event (e.g. another part is being added).
The callback receives the OLD atlas and should back up this region's GPU-only data before it is disposed.

#### Parameters

##### callback

(`oldAtlas`) => `void`

invoked with the old atlas MRT

#### Returns

an unsubscribe function (call it on dispose)

() => `void`

***

### postPositionsRange()

> **postPositionsRange**(`localOffset`, `count`): `void`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:176](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L176)

Patches only `[localOffset, localOffset+count)` of the worker's position buffer (for the GPU path,
where texel data is written directly to the atlas and only the CPU centers are pushed to the worker).

#### Parameters

##### localOffset

`number`

first local splat index

##### count

`number`

number of splats

#### Returns

`void`

***

### setActiveRanges()

> **setActiveRanges**(`localRanges`): `void`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L160)

Restricts which of this part's splats are sorted/rendered, in LOCAL coordinates. `null` renders the
whole reserved region. The compound merges this with every other part's ranges into the single sort.

#### Parameters

##### localRanges

[`Nullable`](../type-aliases/Nullable.md)\<readonly [`IGaussianSplattingSplatRange`](IGaussianSplattingSplatRange.md)[]\>

active local ranges, or `null` for the full region

#### Returns

`void`

***

### writeSplats()

> **writeSplats**(`localOffset`, `count`, `splatsData`): `void`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L169)

CPU-decodes raw `.splat` bytes into the region at `localOffset`, uploading only those texels and
patching the sort worker. Grows the part's bounding info to include the written centers. This is the
CPU population path (used to seed the region or as a fallback when GPU decode is unavailable).

#### Parameters

##### localOffset

`number`

first local splat index to write

##### count

`number`

number of splats to write

##### splatsData

`ArrayBuffer` \| `ArrayBufferView`\<`ArrayBufferLike`\>

raw `.splat` bytes for `count` splats (stride 32)

#### Returns

`void`
