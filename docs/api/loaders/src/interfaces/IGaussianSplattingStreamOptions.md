[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / IGaussianSplattingStreamOptions

# Interface: IGaussianSplattingStreamOptions

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:93](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L93)

Options for [GaussianSplattingStream](../classes/GaussianSplattingStream.md).

## Properties

### debugDisplay?

> `optional` **debugDisplay?**: `boolean`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:99](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L99)

When true, renders a wireframe box per LOD node, colored by the node's LOD level.

***

### debugLodSource?

> `optional` **debugLodSource?**: [`GaussianSplattingStreamDebugLodSource`](../type-aliases/GaussianSplattingStreamDebugLodSource.md)

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:101](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L101)

Which LOD value drives the debug wireframe colors. Defaults to `"optimal"`.

***

### decodeSh?

> `optional` **decodeSh?**: `boolean`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:181](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L181)

When true, higher-order spherical-harmonics carried by the SOG files (`shN`) are GPU-decoded into baked
packed-u32 SH textures so the streamed splats render with view-dependent lighting (matching the non-stream
`.spz`/`.sog` path) instead of flat DC-only color. The SH degree is the max `shN.bands` across the streamed
files (lower-band files neutral-fill). No effect when the files carry no `shN`. Defaults to `true`, matching
the non-stream path's always-decode-if-present behavior; set to `false` to force flat DC-only color even
when the data carries `shN` (e.g. to save the decode cost/texture memory).

***

### deflateURL?

> `optional` **deflateURL?**: `string`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:95](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L95)

URL of the fflate UMD module used to unzip `.sog` environment bundles.

***

### evictionCooldownFrames?

> `optional` **evictionCooldownFrames?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:153](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L153)

Frames an unreferenced (no longer rendered) LOD file stays resident before it is evicted, so a quick
return to it avoids a re-download. Only used when a budget enables eviction. PlayCanvas default `100`.

***

### fflate?

> `optional` **fflate?**: `any`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:97](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L97)

Pre-loaded fflate module.

***

### frustumCulling?

> `optional` **frustumCulling?**: `boolean`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:130](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L130)

When true (default), LOD nodes outside the camera frustum are biased to their coarsest LOD rather than
rendered at full detail. They stay in the sort/render set so they appear instantly (at low detail) when
the camera turns toward them, then refine. Set to `false` to render every node at its distance LOD.

***

### lodBaseDistance?

> `optional` **lodBaseDistance?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:103](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L103)

Distance (in local units) of the first LOD transition. PlayCanvas default `5`.

***

### lodBehindPenalty?

> `optional` **lodBehindPenalty?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:107](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L107)

Distance multiplier applied to nodes behind the camera (`1` = no penalty). PlayCanvas default `1`.

***

### lodCooldownFrames?

> `optional` **lodCooldownFrames?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:115](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L115)

Frames a node must wait after switching LOD before it may switch again (oscillation damping). Defaults to `10`.

***

### lodMultiplier?

> `optional` **lodMultiplier?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:105](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L105)

Geometric ratio between successive LOD transition distances. PlayCanvas default `3`.

***

### lodRangeMax?

> `optional` **lodRangeMax?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:111](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L111)

Highest LOD index the optimal-LOD heuristic may select. Defaults to `lodLevels - 1`.

***

### lodRangeMin?

> `optional` **lodRangeMin?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:109](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L109)

Lowest LOD index the optimal-LOD heuristic may select. Defaults to `0`.

***

### lodUpdateDistance?

> `optional` **lodUpdateDistance?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:119](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L119)

Minimum camera movement (world units) required to re-evaluate LODs. Defaults to `0.5`.

***

### lodUpdateInterval?

> `optional` **lodUpdateInterval?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:117](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L117)

Minimum number of frames between LOD re-evaluations (throttles per-frame work during motion). Defaults to `4`.

***

### maxConcurrentDownloads?

> `optional` **maxConcurrentDownloads?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:132](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L132)

Maximum number of LOD file downloads allowed to run concurrently. PlayCanvas default `2`.

***

### maxDecodesPerFrame?

> `optional` **maxDecodesPerFrame?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:113](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L113)

Maximum number of LOD source files to GPU-decode per frame (spreads work to avoid hitches). Defaults to `1`.

***

### maxDetailLod?

> `optional` **maxDetailLod?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:124](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L124)

Finest (most detailed) LOD level any node is allowed to render. `0` allows full detail (level 0);
`1` caps detail at the next-coarser level, and so on. Higher values force a coarser maximum detail.

***

### maxDownloadRetries?

> `optional` **maxDownloadRetries?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:134](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L134)

Number of times a failed file download is retried before giving up. PlayCanvas default `2`.

***

### maxResidentSplats?

> `optional` **maxResidentSplats?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:148](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L148)

Maximum number of splats kept resident in the work buffer. When set (and smaller than the full
dataset), enables eviction-based streaming (see [memoryBudgetMb](#memorybudgetmb)). Default unset = size the work
buffer for the whole dataset (no eviction).

***

### memoryBudgetMb?

> `optional` **memoryBudgetMb?**: `number`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:142](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L142)

GPU memory budget (in megabytes) for resident splats. When set (and smaller than the full dataset),
LOD files are streamed through a fixed-size work buffer and unreferenced files are evicted to stay
within budget, allowing datasets larger than a single full-dataset buffer. Converted to a splat count
using the per-splat cost (core data plus any baked SH and rotation/scale textures). Combined with
[maxResidentSplats](#maxresidentsplats) by taking the smaller of the two.

***

### needsRotationScale?

> `optional` **needsRotationScale?**: `boolean`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:188](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L188)

When true, each splat's rotation matrix + scale are GPU-decoded into half-float rotation/scale textures so the
streamed splats participate in voxel-based IBL shadowing (matching the non-stream path). Standalone: the work
buffer owns the rotation textures. Hosted: the compound's rotation textures become a shared render-target atlas
the stream decodes into. Defaults to `false`.

***

### splatBudget?

> `optional` **splatBudget?**: `number` \| `"auto"`

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:164](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L164)

Enables budget-driven LOD: caps the total rendered splats by converging a screen-space (size + distance)
pixel-size threshold to the budget. Selection is view-direction-independent, so it is consistent across any
number of active cameras (each node takes the finest level and largest projected size any camera demands).
A number is an explicit splat cap; `"auto"` picks a device-tiered default (desktop 2.5M / iOS 1.5M /
other mobile 1M; XR shares the mobile tier). **Undefined (default) disables the cap** — LOD is pure
distance, identical to prior behavior. Runtime-mutable via the [splatBudget](#splatbudget) accessor. When this stream
is hosted in a compound, the compound's [GaussianSplattingMesh.splatBudget](../../../core/src/classes/GaussianSplattingMesh.md#splatbudget) (if set) overrides this and
apportions a shared budget across all its streams.
