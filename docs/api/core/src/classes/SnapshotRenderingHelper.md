[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SnapshotRenderingHelper

# Class: SnapshotRenderingHelper

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:43](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L43)

A helper class to simplify work with FAST snapshot mode (WebGPU only - can be used in WebGL too, but won't do anything).

## Constructors

### Constructor

> **new SnapshotRenderingHelper**(`scene`, `options?`): `SnapshotRenderingHelper`

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:69](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L69)

Creates a new snapshot rendering helper
Note that creating an instance of the helper will set the snapshot rendering mode to SNAPSHOTRENDERING_FAST but will not enable snapshot rendering (engine.snapshotRendering is not updated).
Note also that fixMeshes() is called as part of the construction

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene to use the helper in

##### options?

[`SnapshotRenderingHelpersOptions`](../interfaces/SnapshotRenderingHelpersOptions.md)

The options for the helper

#### Returns

`SnapshotRenderingHelper`

## Properties

### showDebugLogs

> **showDebugLogs**: `boolean` = `false`

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:60](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L60)

Indicates if debug logs should be displayed

## Accessors

### isReady

#### Get Signature

> **get** **isReady**(): `boolean`

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:178](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L178)

Gets a value indicating if the helper is in a steady state (not in the process of enabling snapshot rendering).

##### Returns

`boolean`

## Methods

### disableSnapshotRendering()

> **disableSnapshotRendering**(`debugMessage?`): `void`

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:245](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L245)

Disable snapshot rendering
Note that this method is ref-counted and works in pair with enableSnapshotRendering(): you should call enableSnapshotRendering() as many times as you call disableSnapshotRendering().

#### Parameters

##### debugMessage?

`string`

An optional message to display in debug logs to help identify the context of the call to disableSnapshotRendering

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:394](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L394)

Dispose the helper

#### Returns

`void`

***

### enableSnapshotRendering()

> **enableSnapshotRendering**(`debugMessage?`): `void`

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:188](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L188)

Enable snapshot rendering
Use this method instead of engine.snapshotRendering=true, to make sure everything is ready before enabling snapshot rendering.
Note that this method is ref-counted and works in pair with disableSnapshotRendering(): you should call enableSnapshotRendering() as many times as you call disableSnapshotRendering().

#### Parameters

##### debugMessage?

`string`

An optional message to display in debug logs to help identify the context of the call to enableSnapshotRendering

#### Returns

`void`

***

### fixMeshes()

> **fixMeshes**(`meshes?`): `void`

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:308](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L308)

Fix meshes for snapshot rendering.
This method will make sure that some features are disabled or fixed to make sure snapshot rendering works correctly.

#### Parameters

##### meshes?

[`AbstractMesh`](AbstractMesh.md)[]

List of meshes to fix. If not provided, all meshes in the scene will be fixed.

#### Returns

`void`

***

### fixParticleSystem()

> **fixParticleSystem**(`particleSystem`): `void`

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:474](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L474)

Make a CPU particle system compatible with FAST snapshot rendering.
The particle system will always render at full capacity (`getCapacity()` quads), with inactive slots collapsed
to degenerate triangles via zero-fill. This keeps the recorded GPU bundle's draw call valid every frame, while
the live particle data is uploaded to the bundle-referenced vertex buffer through the normal `animate()` path.

The helper additionally advances the particle simulation and updates view/projection (and `eyePosition`/`invView`
for billboard modes) into the particle system's draw wrappers each frame, because FAST snapshot replay skips the
normal scene particle evaluation path after the bundle is recorded.

Notes:
- Call this BEFORE `enableSnapshotRendering()` so the recording sees the correct draw count.
- GPU particle systems (`GPUParticleSystem`) are not supported by this method.
- Vertex shader cost scales with `getCapacity()` rather than the live particle count, so size capacity realistically.
- Per-frame uniforms other than camera matrices (e.g. `textureMask`, `translationPivot`, clip planes, fog) are
  baked at recording time and will not update during snapshot replay.

#### Parameters

##### particleSystem

[`IParticleSystem`](../interfaces/IParticleSystem.md)

The particle system to fix

#### Returns

`void`

***

### updateMesh()

> **updateMesh**(`mesh`, `updateInstancedMeshes?`): `void`

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:334](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L334)

Call this method to update a mesh on the GPU after some properties have changed (position, rotation, scaling).
Note: in FAST snapshot mode the GPU bundle is recorded once and replayed every frame, so draw calls
(including instance counts) are baked in. This method updates per-mesh GPU data such as transforms and
`mesh.visibility`, but it cannot change whether a recorded draw call is emitted. To apply changes such as
`mesh.isVisible`, `setEnabled(false)`, or per-instance visibility/state changes that affect instance counts,
wrap the change in a disableSnapshotRendering() / enableSnapshotRendering() pair so the snapshot is
re-recorded.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md) \| [`AbstractMesh`](AbstractMesh.md)[]

The mesh to update. Can be a single mesh or an array of meshes to update.

##### updateInstancedMeshes?

`boolean` = `true`

If true, the method will also update instanced meshes. Default is true. If you know instanced meshes won't move (or you don't have instanced meshes), you can set this to false to save some CPU time.

#### Returns

`void`

***

### updateMeshesForEffectLayer()

> **updateMeshesForEffectLayer**(`layer`, `autoUpdate?`): `void`

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:375](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L375)

Update the meshes used in an effect layer to ensure that snapshot rendering works correctly for these meshes in this layer.

#### Parameters

##### layer

[`EffectLayer`](EffectLayer.md) \| `FrameGraphBaseLayerTask`

The effect layer or frame graph layer

##### autoUpdate?

`boolean` = `true`

If true, the helper will automatically update the meshes of the layer with each frame. If false, you'll need to call this method manually when the camera or layer meshes move or rotate.

#### Returns

`void`
