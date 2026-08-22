[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRDepthSensing

# Class: WebXRDepthSensing

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:458](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L458)

**`Since`**

WebXR Feature for WebXR Depth Sensing Module
 5.49.1

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRDepthSensing**(`_xrSessionManager`, `options`): `WebXRDepthSensing`

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:587](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L587)

Creates a new instance of the depth sensing feature

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

the WebXRSessionManager

##### options

[`IWebXRDepthSensingOptions`](../interfaces/IWebXRDepthSensingOptions.md)

options for WebXR Depth Sensing Feature

#### Returns

`WebXRDepthSensing`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`constructor`](WebXRAbstractFeature.md#constructor)

## Properties

### dependsOn?

> `optional` **dependsOn?**: `string`[]

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:63](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L63)

The dependencies of this feature, if any

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dependsOn`](WebXRAbstractFeature.md#dependson)

***

### disableAutoAttach

> **disableAutoAttach**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L29)

Should auto-attach be disabled?

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`disableAutoAttach`](WebXRAbstractFeature.md#disableautoattach)

***

### isDisposed

> **isDisposed**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:24](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L24)

Is this feature disposed?

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isDisposed`](WebXRAbstractFeature.md#isdisposed)

***

### onFeatureAttachObservable

> **onFeatureAttachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:54](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L54)

Observers registered here will be executed when the feature is attached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureAttachObservable`](WebXRAbstractFeature.md#onfeatureattachobservable)

***

### onFeatureDetachObservable

> **onFeatureDetachObservable**: [`Observable`](Observable.md)\<[`IWebXRFeature`](../interfaces/IWebXRFeature.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:58](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L58)

Observers registered here will be executed when the feature is detached

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`onFeatureDetachObservable`](WebXRAbstractFeature.md#onfeaturedetachobservable)

***

### onGetDepthInMetersAvailable

> **onGetDepthInMetersAvailable**: [`Observable`](Observable.md)\<`GetDepthInMetersType`\>

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:556](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L556)

Event that notify when `DepthInformation.getDepthInMeters` is available.
`getDepthInMeters` method needs active XRFrame (not available for cached XRFrame)

***

### options

> `readonly` **options**: [`IWebXRDepthSensingOptions`](../interfaces/IWebXRDepthSensingOptions.md)

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:589](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L589)

options for WebXR Depth Sensing Feature

***

### Name

> `readonly` `static` **Name**: `"xr-depth-sensing"` = `WebXRFeatureName.DEPTH_SENSING`

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:573](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L573)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:580](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L580)

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

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attached`](WebXRAbstractFeature.md#attached)

***

### depthDataFormat

#### Get Signature

> **get** **depthDataFormat**(): [`WebXRDepthDataFormat`](../type-aliases/WebXRDepthDataFormat.md)

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:517](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L517)

Describes which depth sensing data format ("ushort" or "float") is used.

##### Returns

[`WebXRDepthDataFormat`](../type-aliases/WebXRDepthDataFormat.md)

***

### depthUsage

#### Get Signature

> **get** **depthUsage**(): [`WebXRDepthUsage`](../type-aliases/WebXRDepthUsage.md)

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:505](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L505)

Describes which depth-sensing usage ("cpu" or "gpu") is used.

##### Returns

[`WebXRDepthUsage`](../type-aliases/WebXRDepthUsage.md)

***

### height

#### Get Signature

> **get** **height**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:484](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L484)

Height of depth data. If depth data is not exist, returns null.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

***

### latestDepthBuffer

#### Get Signature

> **get** **latestDepthBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:544](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L544)

cached depth buffer

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

***

### latestDepthImageTexture

#### Get Signature

> **get** **latestDepthImageTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`RawTexture`](RawTexture.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:561](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L561)

Latest cached Texture of depth image which is made from the depth buffer data.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RawTexture`](RawTexture.md)\>

***

### latestInternalTexture

#### Get Signature

> **get** **latestInternalTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:533](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L533)

Latest cached InternalTexture which containing depth buffer information.
This can be used when the depth usage is "gpu".

##### Deprecated

This will be removed in the future. Use latestDepthImageTexture

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\>

***

### normDepthBufferFromNormView

#### Get Signature

> **get** **normDepthBufferFromNormView**(): [`Nullable`](../type-aliases/Nullable.md)\<`XRRigidTransform`\>

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:498](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L498)

An XRRigidTransform that needs to be applied when indexing into the depth buffer.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`XRRigidTransform`\>

***

### rawValueToMeters

#### Get Signature

> **get** **rawValueToMeters**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:491](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L491)

Scale factor by which the raw depth values must be multiplied in order to get the depths in meters.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

***

### width

#### Get Signature

> **get** **width**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:477](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L477)

Width of depth data. If depth data is not exist, returns null.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

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

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`xrNativeFeatureName`](WebXRAbstractFeature.md#xrnativefeaturename)

## Methods

### attach()

> **attach**(`force?`): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:615](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L615)

attach this feature
Will usually be called by the features manager

#### Parameters

##### force?

`boolean`

should attachment be forced (even when already attached)

#### Returns

`boolean`

true if successful.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### detach()

> **detach**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:688](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L688)

detach this feature.

#### Returns

`boolean`

true if successful, false if failed or already detached

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:726](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L726)

Dispose this feature and all of the resources attached

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### getXRSessionInitExtension()

> **getXRSessionInitExtension**(): `Promise`\<`Partial`\<`XRSessionInit`\>\>

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:976](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L976)

Extends the session init object if needed

#### Returns

`Promise`\<`Partial`\<`XRSessionInit`\>\>

augmentation object for the xr session init object.

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRAbstractFeature.ts:149](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRAbstractFeature.ts#L149)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Inherited from

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)
