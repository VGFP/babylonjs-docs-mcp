[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMotionControllerProfile

# Interface: IMotionControllerProfile

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:135](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L135)

The XR Input profile schema
Profiles can be found here:
https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry/profiles

## Properties

### fallbackProfileIds

> **fallbackProfileIds**: `string`[]

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:139](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L139)

fallback profiles for this profileId

***

### layouts

> **layouts**: [`IMotionControllerLayoutMap`](IMotionControllerLayoutMap.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:143](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L143)

The layout map, with handedness as key

***

### profileId

> **profileId**: `string`

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:148](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L148)

The id of this profile
correlates to the profile(s) in the xrInput.profiles array
