[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MixamoRigMapping

# Variable: MixamoRigMapping

> `const` **MixamoRigMapping**: [`XRBodyMeshRigMapping`](../type-aliases/XRBodyMeshRigMapping.md)

Defined in: [packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:722](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L722)

Default rig mapping for Mixamo-rigged humanoid characters.

Maps each supported [WebXRBodyJoint](../enumerations/WebXRBodyJoint.md) to the corresponding Mixamo bone
name, **without** the `mixamorig:` prefix. When the feature applies this
mapping, it auto-detects whether the skeleton uses the `mixamorig:` prefix
and prepends it as needed, so the same table works for both prefixed and
unprefixed exports.

## Example

```ts
xr.featuresManager.enableFeature(WebXRFeatureName.BODY_TRACKING, "latest", {
    bodyMesh: myMixamoMesh,
    isMixamoModel: true,
});
```

Or, if you want to extend or customize it:
```ts
import { MixamoRigMapping } from "@babylonjs/core";
const rigMapping: XRBodyMeshRigMapping = { ...MixamoRigMapping, [WebXRBodyJoint.NECK]: "MyNeckBone" };
```
