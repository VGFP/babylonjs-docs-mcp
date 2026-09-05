[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRControllerOptions

# Interface: IWebXRControllerOptions

Defined in: [packages/dev/core/src/XR/webXRInputSource.ts:18](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRInputSource.ts#L18)

Configuration options for the WebXR controller creation

## Properties

### disableMotionControllerAnimation?

> `optional` **disableMotionControllerAnimation?**: `boolean`

Defined in: [packages/dev/core/src/XR/webXRInputSource.ts:23](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRInputSource.ts#L23)

Should the controller mesh be animated when a user interacts with it
The pressed buttons / thumbstick and touchpad animations will be disabled

***

### doNotLoadControllerMesh?

> `optional` **doNotLoadControllerMesh?**: `boolean`

Defined in: [packages/dev/core/src/XR/webXRInputSource.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRInputSource.ts#L27)

Do not load the controller mesh, in case a different mesh needs to be loaded.

***

### forceControllerProfile?

> `optional` **forceControllerProfile?**: `string`

Defined in: [packages/dev/core/src/XR/webXRInputSource.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRInputSource.ts#L32)

Force a specific controller type for this controller.
This can be used when creating your own profile or when testing different controllers

***

### renderingGroupId?

> `optional` **renderingGroupId?**: `number`

Defined in: [packages/dev/core/src/XR/webXRInputSource.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRInputSource.ts#L37)

Defines a rendering group ID for meshes that will be loaded.
This is for the default controllers only.
