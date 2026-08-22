[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VRTeleportationOptions

# Interface: VRTeleportationOptions

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L44)

Options to modify the vr teleportation behavior.

## Properties

### easingFunction?

> `optional` **easingFunction?**: [`EasingFunction`](../classes/EasingFunction.md)

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L68)

The easing function used in the animation or null for Linear. (default CircleEase)

***

### floorMeshes?

> `optional` **floorMeshes?**: [`Mesh`](../classes/Mesh.md)[]

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L52)

A list of meshes to be used as the teleportation floor. (default: empty)

***

### floorMeshName?

> `optional` **floorMeshName?**: `string`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L48)

The name of the mesh which should be used as the teleportation floor. (default: null)

***

### teleportationMode?

> `optional` **teleportationMode?**: `number`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L56)

The teleportation mode. (default: TELEPORTATIONMODE_CONSTANTTIME)

***

### teleportationSpeed?

> `optional` **teleportationSpeed?**: `number`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L64)

The speed of the animation in distance/sec, apply when animationMode is TELEPORTATIONMODE_CONSTANTSPEED. (default 20 units / sec)

***

### teleportationTime?

> `optional` **teleportationTime?**: `number`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:60](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L60)

The duration of the animation in ms, apply when animationMode is TELEPORTATIONMODE_CONSTANTTIME. (default 122ms)
