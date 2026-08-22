[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRFeature

# Interface: IWebXRFeature

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:32](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L32)

Defining the interface required for a (webxr) feature

## Extends

- [`IDisposable`](IDisposable.md)

## Extended by

- [`IWebXRHitTestFeature`](IWebXRHitTestFeature.md)

## Properties

### attached

> **attached**: `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L36)

Is this feature attached

***

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:84](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L84)

A list of (Babylon WebXR) features this feature depends on

***

### disableAutoAttach

> **disableAutoAttach**: `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L40)

Should auto-attach be disabled?

***

### getXRSessionInitExtension?

> `optional` **getXRSessionInitExtension?**: () => `Promise`\<`Partial`\<`XRSessionInit`\>\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:89](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L89)

If this feature requires to extend the XRSessionInit object, this function will return the partial XR session init object

#### Returns

`Promise`\<`Partial`\<`XRSessionInit`\>\>

***

### isDisposed

> **isDisposed**: `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:74](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L74)

Was this feature disposed;

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](../classes/Observable.md)\<`IWebXRFeature`\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:94](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L94)

Triggered when the feature is attached

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](../classes/Observable.md)\<`IWebXRFeature`\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:98](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L98)

Triggered when the feature is detached

***

### xrNativeFeatureName?

> `optional` **xrNativeFeatureName?**: `string`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:79](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L79)

The name of the native xr feature name, if applicable (like anchor, hit-test, or hand-tracking)

## Methods

### attach()

> **attach**(`force?`): `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:54](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L54)

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

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:61](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L61)

Detach the feature from the session
Will usually be called by the features manager

#### Returns

`boolean`

true if successful.

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/scene.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/scene.pure.ts#L122)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:69](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L69)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment
