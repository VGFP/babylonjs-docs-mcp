[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MixamoAimChildOverrides

# Variable: MixamoAimChildOverrides

> `const` **MixamoAimChildOverrides**: `Partial`\<`Record`\<[`WebXRBodyJoint`](../enumerations/WebXRBodyJoint.md), [`WebXRBodyJoint`](../enumerations/WebXRBodyJoint.md)\>\>

Defined in: [packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:760](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L760)

Default aim-child overrides for Mixamo-rigged humanoids.

Redirects the short / noisy XR spine segments to longer, stable ones so that
[IWebXRBodyTrackingOptions.useBoneOrientationOffsets](../interfaces/IWebXRBodyTrackingOptions.md#useboneorientationoffsets) produces clean
torso rotations. In WebXR data, `hips`→`spine-lower` is typically only ~1 cm
apart — too short to give a stable aim direction — so we reroute Mixamo's
Hips/Spine/Spine1 bones to aim at `spine-upper` / `neck` instead.
