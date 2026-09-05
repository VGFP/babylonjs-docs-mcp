[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRAnchorSystem

# Class: WebXRAnchorSystem

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:110](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L110)

An implementation of the anchor system for WebXR.
For further information see https://github.com/immersive-web/anchors/

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRAnchorSystem**(`_xrSessionManager`, `_options?`): `WebXRAnchorSystem`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:157](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L157)

constructs a new anchor system

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

an instance of WebXRSessionManager

##### \_options?

[`IWebXRAnchorSystemOptions`](../interfaces/IWebXRAnchorSystemOptions.md) = `{}`

configuration object for this feature

#### Returns

`WebXRAnchorSystem`

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

### onAnchorAddedObservable

> **onAnchorAddedObservable**: [`Observable`](Observable.md)\<[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L133)

Observers registered here will be executed when a new anchor was added to the session

***

### onAnchorRemovedObservable

> **onAnchorRemovedObservable**: [`Observable`](Observable.md)\<[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:137](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L137)

Observers registered here will be executed when an anchor was removed from the session

***

### onAnchorUpdatedObservable

> **onAnchorUpdatedObservable**: [`Observable`](Observable.md)\<[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:142](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L142)

Observers registered here will be executed when an existing anchor updates
This can execute N times every frame

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

### Name

> `readonly` `static` **Name**: `"xr-anchor-system"` = `WebXRFeatureName.ANCHOR_SYSTEM`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L122)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L128)

The (Babylon) version of this module.
This is an integer representing the implementation version.
This number does not correspond to the WebXR specs version

## Accessors

### anchors

#### Get Signature

> **get** **anchors**(): [`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)[]

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:279](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L279)

Get the list of anchors currently being tracked by the system

##### Returns

[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)[]

***

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

### isPersistentAnchorSupported

#### Get Signature

> **get** **isPersistentAnchorSupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:287](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L287)

Whether the current XR session exposes all session-level persistent anchor APIs

##### Returns

`boolean`

Whether all session-level persistent anchor APIs are supported

***

### persistentAnchors

#### Get Signature

> **get** **persistentAnchors**(): readonly `string`[]

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:299](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L299)

Get the persistent anchor handles known to the current XR session

##### Throws

If persistent anchor enumeration is not supported by the current session

##### Returns

readonly `string`[]

The persistent anchor handles

***

### referenceSpaceForFrameAnchors

#### Set Signature

> **set** **referenceSpaceForFrameAnchors**(`referenceSpace`): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L148)

Set the reference space to use for anchor creation, when not using a hit test.
Will default to the session's reference space if not defined

##### Parameters

###### referenceSpace

`XRReferenceSpace`

##### Returns

`void`

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

### addAnchorAtPositionAndRotationAsync()

> **addAnchorAtPositionAndRotationAsync**(`position`, `rotationQuaternion?`, `forceCreateInCurrentFrame?`): `Promise`\<[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:247](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L247)

Add a new anchor at a specific position and rotation
This function will add a new anchor per default in the next available frame. Unless forced, the createAnchor function
will be called in the next xrFrame loop to make sure that the anchor can be created correctly.
An anchor is tracked only after it is added to the trackerAnchors in xrFrame. The promise returned here does not yet guaranty that.
Use onAnchorAddedObservable to get newly added anchors if you require tracking guaranty.

#### Parameters

##### position

[`Vector3`](Vector3.md)

the position in which to add an anchor

##### rotationQuaternion?

[`Quaternion`](Quaternion.md) = `...`

an optional rotation for the anchor transformation

##### forceCreateInCurrentFrame?

`boolean` = `false`

force the creation of this anchor in the current frame. Must be called inside xrFrame loop!

#### Returns

`Promise`\<[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)\>

A promise that fulfills when babylon has created the corresponding WebXRAnchor object and tracking has begun

***

### addAnchorPointUsingHitTestResultAsync()

> **addAnchorPointUsingHitTestResultAsync**(`hitTestResult`, `position?`, `rotationQuaternion?`): `Promise`\<[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L201)

Create a new anchor point using a hit test result at a specific point in the scene
An anchor is tracked only after it is added to the trackerAnchors in xrFrame. The promise returned here does not yet guaranty that.
Use onAnchorAddedObservable to get newly added anchors if you require tracking guaranty.

#### Parameters

##### hitTestResult

[`IWebXRHitResult`](../interfaces/IWebXRHitResult.md)

The hit test result to use for this anchor creation

##### position?

[`Vector3`](Vector3.md) = `...`

an optional position offset for this anchor

##### rotationQuaternion?

[`Quaternion`](Quaternion.md) = `...`

an optional rotation offset for this anchor

#### Returns

`Promise`\<[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)\>

A promise that fulfills when babylon has created the corresponding WebXRAnchor object and tracking has begun

***

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

### deletePersistentAnchorAsync()

> **deletePersistentAnchorAsync**(`handle`): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:379](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L379)

Delete a persistent anchor from native storage

#### Parameters

##### handle

`string`

The persistent anchor handle to delete

#### Returns

`Promise`\<`void`\>

A promise that resolves after native persistent storage is deleted

#### Throws

If deleting persistent anchors is not supported by the current session

***

### detach()

> **detach**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:406](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L406)

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

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:431](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L431)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:149](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L149)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)

***

### requestPersistentHandleAsync()

> **requestPersistentHandleAsync**(`anchor`): `Promise`\<`string`\>

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:313](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L313)

Request a persistent handle for a tracked anchor

#### Parameters

##### anchor

[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)

The Babylon anchor to persist

#### Returns

`Promise`\<`string`\>

A promise that resolves with the persistent handle

#### Throws

If requesting persistent handles is not supported by the native anchor

***

### restorePersistentAnchorAsync()

> **restorePersistentAnchorAsync**(`handle`): `Promise`\<[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:329](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L329)

Restore a persistent anchor into the Babylon anchor lifecycle

#### Parameters

##### handle

`string`

The persistent anchor handle to restore

#### Returns

`Promise`\<[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)\>

A promise that resolves after the restored anchor is tracked by an XR frame

#### Throws

If restoring persistent anchors is not supported by the current session

***

### restorePersistentAnchorsAsync()

> **restorePersistentAnchorsAsync**(): `Promise`\<[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)[]\>

Defined in: [packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts:369](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRAnchorSystem.pure.ts#L369)

Restore all persistent anchors known to the current XR session

#### Returns

`Promise`\<[`IWebXRAnchor`](../interfaces/IWebXRAnchor.md)[]\>

A promise that resolves after all restored anchors are tracked by an XR frame

#### Throws

If persistent anchor enumeration or restoration is not supported by the current session
