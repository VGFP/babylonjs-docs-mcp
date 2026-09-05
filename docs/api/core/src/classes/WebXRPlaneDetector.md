[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRPlaneDetector

# Class: WebXRPlaneDetector

Defined in: [packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L68)

The plane detector is used to detect planes in the real world when in AR
For more information see https://github.com/immersive-web/real-world-geometry/

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRPlaneDetector**(`_xrSessionManager`, `_options?`): `WebXRPlaneDetector`

Defined in: [packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L103)

construct a new Plane Detector

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

an instance of xr Session manager

##### \_options?

[`IWebXRPlaneDetectorOptions`](../interfaces/IWebXRPlaneDetectorOptions.md) = `{}`

configuration to use when constructing this feature

#### Returns

`WebXRPlaneDetector`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`constructor`](WebXRAbstractFeature.md#constructor)

## Properties

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:63](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L63)

The dependencies of this feature, if any

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dependsOn`](WebXRAbstractFeature.md#dependson)

***

### disableAutoAttach

> **disableAutoAttach**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:29](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L29)

Should auto-attach be disabled?

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`disableAutoAttach`](WebXRAbstractFeature.md#disableautoattach)

***

### isDisposed

> **isDisposed**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:24](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L24)

Is this feature disposed?

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isDisposed`](WebXRAbstractFeature.md#isdisposed)

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:54](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L54)

Observers registered here will be executed when the feature is attached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureAttachObservable`](WebXRAbstractFeature.md#onfeatureattachobservable)

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:58](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L58)

Observers registered here will be executed when the feature is detached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureDetachObservable`](WebXRAbstractFeature.md#onfeaturedetachobservable)

***

### onPlaneAddedObservable

> **onPlaneAddedObservable**: [`Observable`](Observable.md)\<[`IWebXRPlane`](../interfaces/IWebXRPlane.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L87)

Observers registered here will be executed when a new plane was added to the session

***

### onPlaneRemovedObservable

> **onPlaneRemovedObservable**: [`Observable`](Observable.md)\<[`IWebXRPlane`](../interfaces/IWebXRPlane.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L91)

Observers registered here will be executed when a plane is no longer detected in the session

***

### onPlaneUpdatedObservable

> **onPlaneUpdatedObservable**: [`Observable`](Observable.md)\<[`IWebXRPlane`](../interfaces/IWebXRPlane.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L96)

Observers registered here will be executed when an existing plane updates (for example - expanded)
This can execute N times every frame

***

### Name

> `readonly` `static` **Name**: `"xr-plane-detection"` = `WebXRFeatureName.PLANE_DETECTION`

Defined in: [packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L76)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L82)

The (Babylon) version of this module.
This is an integer representing the implementation version.
This number does not correspond to the WebXR specs version

## Accessors

### attached

#### Get Signature

> **get** **attached**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:74](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L74)

Is this feature attached

##### Returns

`boolean`

Is this feature attached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attached`](WebXRAbstractFeature.md#attached)

***

### xrNativeFeatureName

#### Get Signature

> **get** **xrNativeFeatureName**(): `string`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:39](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L39)

The name of the native xr feature name (like anchor, hit-test, or hand-tracking)

##### Returns

`string`

#### Set Signature

> **set** **xrNativeFeatureName**(`name`): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:43](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L43)

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

##### Parameters

###### name

`string`

##### Returns

`void`

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`xrNativeFeatureName`](WebXRAbstractFeature.md#xrnativefeaturename)

## Methods

### attach()

> **attach**(`force?`): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:84](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L84)

attach this feature

#### Parameters

##### force?

`boolean`

should attachment be forced (even when already attached)

#### Returns

`boolean`

true if successful, false is failed or already attached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L124)

detach this feature.
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:144](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L144)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### initiateRoomCapture()

> **initiateRoomCapture**(): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:167](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L167)

Requests that the active XR session capture or refresh the current room layout.
Detected room planes are reported through the existing plane observables.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the native room capture request completes.

#### See

https://immersive-web.github.io/plane-detection/#dom-xrsession-initiateroomcapture

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRPlaneDetector.pure.ts#L156)

Check if the needed objects are defined.
This does not mean that the feature is enabled, but that the objects needed are well defined.

#### Returns

`boolean`

true if the initial compatibility test passed

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)
