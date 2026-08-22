[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRExperienceHelper

# Class: WebXRExperienceHelper

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:33](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L33)

Base set of functionality needed to create an XR experience (WebXRSessionManager, Camera, StateManagement, etc.)

## See

https://doc.babylonjs.com/features/featuresDeepDive/webXR/webXRExperienceHelpers

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Properties

### camera

> **camera**: [`WebXRCamera`](WebXRCamera.md)

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:48](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L48)

Camera used to render xr content

***

### featuresManager

> **featuresManager**: [`WebXRFeaturesManager`](WebXRFeaturesManager.md)

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:50](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L50)

A features manager for this xr session

***

### onInitialXRPoseSetObservable

> **onInitialXRPoseSetObservable**: [`Observable`](Observable.md)\<[`WebXRCamera`](WebXRCamera.md)\>

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:58](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L58)

Observers registered here will be triggered after the camera's initial transformation is set
This can be used to set a different ground level or an extra rotation.

Note that ground level is considered to be at 0. The height defined by the XR camera will be added
to the position set after this observable is done executing.

***

### onStateChangedObservable

> **onStateChangedObservable**: [`Observable`](Observable.md)\<[`WebXRState`](../enumerations/WebXRState.md)\>

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:62](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L62)

Fires when the state of the experience helper has changed

***

### sessionManager

> **sessionManager**: [`WebXRSessionManager`](WebXRSessionManager.md)

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:64](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L64)

Session manager used to keep track of xr session

***

### state

> **state**: [`WebXRState`](../enumerations/WebXRState.md) = `WebXRState.NOT_IN_XR`

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:68](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L68)

The current state of the XR experience (eg. transitioning, in XR or not in XR)

## Methods

### disableSpecatatorMode()

> **disableSpecatatorMode**(): `void`

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:274](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L274)

Disable spectator mode for desktop VR experiences.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:109](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L109)

Disposes of the experience helper

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### enableSpectatorMode()

> **enableSpectatorMode**(`options?`): `void`

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:264](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L264)

Enable spectator mode for desktop VR experiences.
When spectator mode is enabled a camera will be attached to the desktop canvas and will
display the first rig camera's view on the desktop canvas.
Please note that this will degrade performance, as it requires another camera render.
It is also not recommended to enable this in devices like the quest, as it brings no benefit there.

#### Parameters

##### options?

[`WebXRSpectatorModeOption`](../interfaces/WebXRSpectatorModeOption.md)

giving WebXRSpectatorModeOption for specutator camera to setup when the spectator mode is enabled.

#### Returns

`void`

***

### enterXRAsync()

> **enterXRAsync**(`sessionMode`, `referenceSpaceType`, `renderTarget?`, `sessionCreationOptions?`): `Promise`\<[`WebXRSessionManager`](WebXRSessionManager.md)\>

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:131](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L131)

Enters XR mode (This must be done within a user interaction in most browsers eg. button click)

#### Parameters

##### sessionMode

`XRSessionMode`

options for the XR session

##### referenceSpaceType

`XRReferenceSpaceType`

frame of reference of the XR session

##### renderTarget?

[`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md) = `...`

the output canvas that will be used to enter XR mode

##### sessionCreationOptions?

`XRSessionInit` = `{}`

optional XRSessionInit object to init the session with

#### Returns

`Promise`\<[`WebXRSessionManager`](WebXRSessionManager.md)\>

promise that resolves after xr mode has entered

***

### exitXRAsync()

> **exitXRAsync**(): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:247](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L247)

Exits XR mode and returns the scene to its original state

#### Returns

`Promise`\<`void`\>

promise that resolves after xr mode has exited

***

### CreateAsync()

> `static` **CreateAsync**(`scene`): `Promise`\<`WebXRExperienceHelper`\>

Defined in: [packages/dev/core/src/XR/webXRExperienceHelper.ts:89](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRExperienceHelper.ts#L89)

Creates the experience helper

#### Parameters

##### scene

[`Scene`](Scene.md)

the scene to attach the experience helper to

#### Returns

`Promise`\<`WebXRExperienceHelper`\>

a promise for the experience helper
