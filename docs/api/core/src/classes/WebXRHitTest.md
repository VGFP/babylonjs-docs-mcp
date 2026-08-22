[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRHitTest

# Class: WebXRHitTest

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L82)

The currently-working hit-test module.
Hit test (or Ray-casting) is used to interact with the real world.
For further information read here - https://github.com/immersive-web/hit-test

Tested on chrome (mobile) 80.

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Implements

- [`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md)\<[`IWebXRHitResult`](../interfaces/IWebXRHitResult.md)\>

## Constructors

### Constructor

> **new WebXRHitTest**(`_xrSessionManager`, `options?`): `WebXRHitTest`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:146](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L146)

Creates a new instance of the hit test feature

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

an instance of WebXRSessionManager

##### options?

[`IWebXRHitTestOptions`](../interfaces/IWebXRHitTestOptions.md) = `{}`

options to use when constructing this feature

#### Returns

`WebXRHitTest`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`constructor`](WebXRAbstractFeature.md#constructor)

## Properties

### autoCloneTransformation

> **autoCloneTransformation**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:130](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L130)

When set to true, each hit test will have its own position/rotation objects
When set to false, position and rotation objects will be reused for each hit test. It is expected that
the developers will clone them or copy them as they see fit.

***

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:63](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L63)

The dependencies of this feature, if any

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`dependsOn`](../interfaces/IWebXRHitTestFeature.md#dependson)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dependsOn`](WebXRAbstractFeature.md#dependson)

***

### disableAutoAttach

> **disableAutoAttach**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L29)

Should auto-attach be disabled?

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`disableAutoAttach`](../interfaces/IWebXRHitTestFeature.md#disableautoattach)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`disableAutoAttach`](WebXRAbstractFeature.md#disableautoattach)

***

### isDisposed

> **isDisposed**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:24](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L24)

Is this feature disposed?

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`isDisposed`](../interfaces/IWebXRHitTestFeature.md#isdisposed)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isDisposed`](WebXRAbstractFeature.md#isdisposed)

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:54](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L54)

Observers registered here will be executed when the feature is attached

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`onFeatureAttachObservable`](../interfaces/IWebXRHitTestFeature.md#onfeatureattachobservable)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureAttachObservable`](WebXRAbstractFeature.md#onfeatureattachobservable)

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:58](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L58)

Observers registered here will be executed when the feature is detached

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`onFeatureDetachObservable`](../interfaces/IWebXRHitTestFeature.md#onfeaturedetachobservable)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureDetachObservable`](WebXRAbstractFeature.md#onfeaturedetachobservable)

***

### onHitTestResultObservable

> **onHitTestResultObservable**: [`Observable`](Observable.md)\<[`IWebXRHitResult`](../interfaces/IWebXRHitResult.md)[]\>

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L135)

Triggered when new babylon (transformed) hit test results are available
Note - this will be called when results come back from the device. It can be an empty array!!

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`onHitTestResultObservable`](../interfaces/IWebXRHitTestFeature.md#onhittestresultobservable)

***

### options

> `readonly` **options**: [`IWebXRHitTestOptions`](../interfaces/IWebXRHitTestOptions.md) = `{}`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L151)

[Empty Object] options to use when constructing this feature

***

### paused

> **paused**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:139](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L139)

Use this to temporarily pause hit test checks.

***

### Name

> `readonly` `static` **Name**: `"xr-hit-test"` = `WebXRFeatureName.HIT_TEST`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L117)

The module's name

***

### Version

> `readonly` `static` **Version**: `2` = `2`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L123)

The (Babylon) version of this module.
This is an integer representing the implementation version.
This number does not correspond to the WebXR specs version

## Accessors

### attached

#### Get Signature

> **get** **attached**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:74](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L74)

Is this feature attached

##### Returns

`boolean`

Is this feature attached

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`attached`](../interfaces/IWebXRHitTestFeature.md#attached)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attached`](WebXRAbstractFeature.md#attached)

***

### xrNativeFeatureName

#### Get Signature

> **get** **xrNativeFeatureName**(): `string`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:39](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L39)

The name of the native xr feature name (like anchor, hit-test, or hand-tracking)

##### Returns

`string`

#### Set Signature

> **set** **xrNativeFeatureName**(`name`): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:43](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L43)

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

##### Parameters

###### name

`string`

##### Returns

`void`

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`xrNativeFeatureName`](../interfaces/IWebXRHitTestFeature.md#xrnativefeaturename)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`xrNativeFeatureName`](WebXRAbstractFeature.md#xrnativefeaturename)

## Methods

### attach()

> **attach**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L164)

attach this feature
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`attach`](../interfaces/IWebXRHitTestFeature.md#attach)

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L202)

detach this feature.
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`detach`](../interfaces/IWebXRHitTestFeature.md#detach)

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRHitTest.pure.ts:221](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRHitTest.pure.ts#L221)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`dispose`](../interfaces/IWebXRHitTestFeature.md#dispose)

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:149](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L149)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Implementation of

[`IWebXRHitTestFeature`](../interfaces/IWebXRHitTestFeature.md).[`isCompatible`](../interfaces/IWebXRHitTestFeature.md#iscompatible)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)
