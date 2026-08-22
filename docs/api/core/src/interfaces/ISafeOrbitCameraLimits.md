[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISafeOrbitCameraLimits

# Interface: ISafeOrbitCameraLimits

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L67)

Safe-orbit camera limits embedded in a Gaussian Splatting file's metadata (Adobe safe-orbit
extension). Exposed on the loaded mesh via [GaussianSplattingMeshBase.safeOrbitCameraLimits](../../../loaders/src/classes/GaussianSplattingStream.md#safeorbitcameralimits)
so consumers can read/apply the limits independently of the scene's active camera — the loader's
automatic application only affects an active ArcRotateCamera at load time.

## Properties

### elevationMinMax?

> `optional` **elevationMinMax?**: \[`number`, `number`\]

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L71)

Safe elevation range as `[minElevation, maxElevation]` in radians, if the file specifies one.

***

### radiusMin?

> `optional` **radiusMin?**: `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMeshBase.pure.ts#L69)

Minimum safe orbit radius (distance from the camera to its target), if the file specifies one.
