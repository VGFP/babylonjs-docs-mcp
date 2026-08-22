[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRLayers

# Class: WebXRLayers

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L45)

Exposes the WebXR Layers API.

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRLayers**(`_xrSessionManager`, `_options?`): `WebXRLayers`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L72)

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

##### \_options?

[`IWebXRLayersOptions`](../interfaces/IWebXRLayersOptions.md) = `{}`

#### Returns

`WebXRLayers`

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

### Name

> `readonly` `static` **Name**: `"xr-layers"` = `WebXRFeatureName.LAYERS`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L49)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L55)

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

### addFullscreenAdvancedDynamicTexture()

> **addFullscreenAdvancedDynamicTexture**(`texture`, `options?`): [`Nullable`](../type-aliases/Nullable.md)\<`WebXRCompositionLayerWrapper`\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:299](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L299)

**`Experimental`**

This will support full screen ADT when used with WebXR Layers. This API might change in the future.
Note that no interaction will be available with the ADT when using this method

#### Parameters

##### texture

[`DynamicTexture`](DynamicTexture.md)

the texture to display in the layer

##### options?

optional parameters for the layer

###### distanceFromHeadset

`number`

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`WebXRCompositionLayerWrapper`\>

a composition layer containing the texture, or null when WebGPU quad layers are unavailable

***

### addXRSessionLayer()

> **addXRSessionLayer**(`wrappedLayer`): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:416](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L416)

Add a new layer to the already-existing list of layers

#### Parameters

##### wrappedLayer

`WebXRLayerWrapper`

the new layer to add to the existing ones

#### Returns

`void`

***

### attach()

> **attach**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L86)

Attach this feature.
Will usually be called by the features manager.

#### Returns

`boolean`

true if successful.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### createProjectionLayer()

> **createProjectionLayer**(`params?`, `multiview?`): `WebXRProjectionLayerWrapper`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:171](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L171)

Creates a new XRProjectionLayer.

#### Parameters

##### params?

`XRProjectionLayerInit` = `DefaultXRProjectionLayerInit`

an object providing configuration options for the new XRProjectionLayer.

##### multiview?

`boolean` = `...`

whether the projection layer should render with multiview. Will be tru automatically if the extension initialized with multiview.

#### Returns

`WebXRProjectionLayerWrapper`

the projection layer

***

### createXRWebGLLayer()

> **createXRWebGLLayer**(`params?`): `WebXRWebGLLayerWrapper`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L138)

Creates a new XRWebGLLayer.

#### Parameters

##### params?

`XRWebGLLayerInit` = `DefaultXRWebGLLayerInit`

an object providing configuration options for the new XRWebGLLayer

#### Returns

`WebXRWebGLLayerWrapper`

the XRWebGLLayer

***

### detach()

> **detach**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L121)

detach this feature.

#### Returns

`boolean`

true if successful, false if failed or already detached

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:456](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L456)

Dispose this feature and all of the resources attached.

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:442](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L442)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)

***

### setXRSessionLayers()

> **setXRSessionLayers**(`wrappedLayers?`): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:430](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L430)

Sets the layers to be used by the XR session.
Note that you must call this function with any layers you wish to render to
since it adds them to the XR session's render state
(replacing any layers that were added in a previous call to setXRSessionLayers or updateRenderState).
This method also sets up the session manager's render target texture provider
as the first layer in the array, which feeds the WebXR camera(s) attached to the session.

#### Parameters

##### wrappedLayers?

`WebXRLayerWrapper`[] = `...`

An array of WebXRLayerWrapper, usually returned from the WebXRLayers createLayer functions.

#### Returns

`void`
