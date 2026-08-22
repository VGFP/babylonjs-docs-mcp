[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / XRBodyMeshRigMapping

# Type Alias: XRBodyMeshRigMapping

> **XRBodyMeshRigMapping** = `{ [jointName in WebXRBodyJoint]?: string }`

Defined in: [packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts:571](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRBodyTracking.pure.ts#L571)

A dictionary mapping each [WebXRBodyJoint](../enumerations/WebXRBodyJoint.md) to a bone name in a rigged body mesh.

When you supply a rigged mesh to [WebXRTrackedBody.setBodyMesh](../classes/WebXRTrackedBody.md#setbodymesh), provide
a mapping so the feature knows which skeleton bone to drive for each joint.

## Example

```typescript
const rigMapping: XRBodyMeshRigMapping = {
  "hips": "Bip01_Pelvis",
  "spine-lower": "Bip01_Spine",
  "head": "Bip01_Head",
  // …remaining joints…
};
```
