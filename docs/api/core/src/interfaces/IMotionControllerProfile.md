[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMotionControllerProfile

# Interface: IMotionControllerProfile

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:153](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L153)

The XR Input profile schema
Profiles can be found here:
https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry/profiles

## Properties

### fallbackProfileIds

> **fallbackProfileIds**: `string`[]

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:157](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L157)

fallback profiles for this profileId

***

### layouts

> **layouts**: [`IMotionControllerLayoutMap`](IMotionControllerLayoutMap.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:161](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L161)

The layout map, with handedness as key

***

### profileId

> **profileId**: `string`

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:166](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L166)

The id of this profile
correlates to the profile(s) in the xrInput.profiles array
