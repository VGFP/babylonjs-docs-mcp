[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VRExperienceHelperOptions

# Interface: VRExperienceHelperOptions

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L75)

Options to modify the vr experience helper's behavior.

## Properties

### createDeviceOrientationCamera?

> `optional` **createDeviceOrientationCamera?**: `boolean`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L79)

Create a DeviceOrientationCamera to be used as your out of vr camera. (default: true)

***

### createFallbackVRDeviceOrientationFreeCamera?

> `optional` **createFallbackVRDeviceOrientationFreeCamera?**: `boolean`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:83](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L83)

Create a VRDeviceOrientationFreeCamera to be used for VR when no external HMD is found. (default: true)

***

### floorMeshes?

> `optional` **floorMeshes?**: [`Mesh`](../classes/Mesh.md)[]

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L91)

A list of meshes to be used as the teleportation floor. If specified, teleportation will be enabled (default: undefined)

***

### laserToggle?

> `optional` **laserToggle?**: `boolean`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L87)

Uses the main button on the controller to toggle the laser casted. (default: true)

***

### useXR?

> `optional` **useXR?**: `boolean`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L99)

Defines if WebXR should be used (if available)

***

### vrDeviceOrientationCameraMetrics?

> `optional` **vrDeviceOrientationCameraMetrics?**: [`VRCameraMetrics`](../classes/VRCameraMetrics.md)

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L95)

Distortion metrics for the fallback vrDeviceOrientationCamera (default: VRCameraMetrics.Default)
