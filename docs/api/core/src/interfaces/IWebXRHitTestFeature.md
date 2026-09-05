[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRHitTestFeature

# Interface: IWebXRHitTestFeature\<T\>

Defined in: [packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L14)

An interface for all Hit test features

## Extends

- [`IWebXRFeature`](IWebXRFeature.md)

## Type Parameters

### T

`T` *extends* [`IWebXRLegacyHitResult`](IWebXRLegacyHitResult.md)

## Properties

### attached

> **attached**: `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L37)

Is this feature attached

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`attached`](IWebXRFeature.md#attached)

***

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:85](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L85)

A list of (Babylon WebXR) features this feature depends on

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`dependsOn`](IWebXRFeature.md#dependson)

***

### disableAutoAttach

> **disableAutoAttach**: `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:41](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L41)

Should auto-attach be disabled?

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`disableAutoAttach`](IWebXRFeature.md#disableautoattach)

***

### getXRSessionInitExtension?

> `optional` **getXRSessionInitExtension?**: () => `Promise`\<`Partial`\<`XRSessionInit`\>\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:90](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L90)

If this feature requires to extend the XRSessionInit object, this function will return the partial XR session init object

#### Returns

`Promise`\<`Partial`\<`XRSessionInit`\>\>

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`getXRSessionInitExtension`](IWebXRFeature.md#getxrsessioninitextension)

***

### isDisposed

> **isDisposed**: `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:75](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L75)

Was this feature disposed;

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`isDisposed`](IWebXRFeature.md#isdisposed)

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](../classes/Observable.md)\<[`IWebXRFeature`](IWebXRFeature.md)\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:95](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L95)

Triggered when the feature is attached

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`onFeatureAttachObservable`](IWebXRFeature.md#onfeatureattachobservable)

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](../classes/Observable.md)\<[`IWebXRFeature`](IWebXRFeature.md)\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:99](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L99)

Triggered when the feature is detached

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`onFeatureDetachObservable`](IWebXRFeature.md#onfeaturedetachobservable)

***

### onHitTestResultObservable

> **onHitTestResultObservable**: [`Observable`](../classes/Observable.md)\<`T`[]\>

Defined in: [packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts:18](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRHitTestLegacy.ts#L18)

Triggered when new babylon (transformed) hit test results are available

***

### xrNativeFeatureName?

> `optional` **xrNativeFeatureName?**: `string`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:80](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L80)

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`xrNativeFeatureName`](IWebXRFeature.md#xrnativefeaturename)

## Methods

### attach()

> **attach**(`force?`): `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L55)

Attach the feature to the session
Will usually be called by the features manager

#### Parameters

##### force?

`boolean`

should attachment be forced (even when already attached)

#### Returns

`boolean`

true if successful.

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`attach`](IWebXRFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:62](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L62)

Detach the feature from the session
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`detach`](IWebXRFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/scene.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/scene.pure.ts#L122)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`dispose`](IWebXRFeature.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:70](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L70)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Inherited from

[`IWebXRFeature`](IWebXRFeature.md).[`isCompatible`](IWebXRFeature.md#iscompatible)
