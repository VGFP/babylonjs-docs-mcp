[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRFeature

# Interface: IWebXRFeature

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:33](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L33)

Defining the interface required for a (webxr) feature

## Extends

- [`IDisposable`](IDisposable.md)

## Extended by

- [`IWebXRHitTestFeature`](IWebXRHitTestFeature.md)

## Properties

### attached

> **attached**: `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L37)

Is this feature attached

***

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:85](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L85)

A list of (Babylon WebXR) features this feature depends on

***

### disableAutoAttach

> **disableAutoAttach**: `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:41](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L41)

Should auto-attach be disabled?

***

### getXRSessionInitExtension?

> `optional` **getXRSessionInitExtension?**: () => `Promise`\<`Partial`\<`XRSessionInit`\>\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:90](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L90)

If this feature requires to extend the XRSessionInit object, this function will return the partial XR session init object

#### Returns

`Promise`\<`Partial`\<`XRSessionInit`\>\>

***

### isDisposed

> **isDisposed**: `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:75](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L75)

Was this feature disposed;

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](../classes/Observable.md)\<`IWebXRFeature`\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:95](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L95)

Triggered when the feature is attached

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](../classes/Observable.md)\<`IWebXRFeature`\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:99](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L99)

Triggered when the feature is detached

***

### xrNativeFeatureName?

> `optional` **xrNativeFeatureName?**: `string`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:80](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L80)

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

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

***

### detach()

> **detach**(): `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:62](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L62)

Detach the feature from the session
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/scene.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/scene.pure.ts#L122)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:70](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L70)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment
