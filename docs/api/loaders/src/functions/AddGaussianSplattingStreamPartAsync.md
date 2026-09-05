[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / AddGaussianSplattingStreamPartAsync

# Function: AddGaussianSplattingStreamPartAsync()

> **AddGaussianSplattingStreamPartAsync**(`compound`, `name`, `metadata`, `rootUrl`, `options?`): `Promise`\<`GaussianSplattingPartProxyMesh`\>

Defined in: [packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts:2764](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/SPLAT/gaussianSplattingStream.ts#L2764)

**`Experimental`**

Adds a PlayCanvas-style SOG LOD stream as a part of a compound Gaussian Splatting mesh and resolves once the
part is ready to use, returning its GaussianSplattingPartProxyMesh — the same handle
`GaussianSplattingCompoundMesh.addPart` returns for a static part. This lets a host application treat a
streamed splat exactly like any other compound part (place/frame/gizmo via the proxy, remove via
`compound.removePart(proxy.partIndex)`); the streaming controller lives behind the proxy and is disposed
automatically when the part is removed.

Resolves after the reserved region exists and its base layer has decoded (so the proxy's bounds are real),
and rejects if streaming fails before that (the partially-constructed stream is disposed on rejection).

NOTE: the base-layer decode runs on the GPU inside the scene's render loop, so this promise only resolves once
the scene is rendering. Do not `await` it before the render loop has started (it would never resolve) — start
rendering (e.g. `engine.runRenderLoop`) first, or `await` it concurrently with the first frames.

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

`Promise`\<`GaussianSplattingPartProxyMesh`\>

the part proxy driving the streamed region, ready to place/frame
