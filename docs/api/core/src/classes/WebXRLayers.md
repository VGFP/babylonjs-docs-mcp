[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRLayers

# Class: WebXRLayers

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:165](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L165)

Exposes the WebXR Layers API.

## Extends

- [`WebXRAbstractFeature`](WebXRAbstractFeature.md)

## Constructors

### Constructor

> **new WebXRLayers**(`_xrSessionManager`, `_options?`): `WebXRLayers`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L194)

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

### Name

> `readonly` `static` **Name**: `"xr-layers"` = `WebXRFeatureName.LAYERS`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L169)

The module's name

***

### Version

> `readonly` `static` **Version**: `1` = `1`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:175](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L175)

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

### isMaxRenderLayersSupported

#### Get Signature

> **get** **isMaxRenderLayersSupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L205)

Whether the active XR session exposes its compositor layer limit.

##### Returns

`boolean`

***

### maxRenderLayers

#### Get Signature

> **get** **maxRenderLayers**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:215](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L215)

Gets the maximum number of native layers accepted in the active session's render-state `layers` array.
The projection layer counts toward this limit. Fallback mesh layers do not.

##### See

https://playground.babylonjs.com/#TODARD#0

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The native layer limit, or `null` when the runtime does not expose it.

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

### addFullscreenAdvancedDynamicTexture()

> **addFullscreenAdvancedDynamicTexture**(`texture`, `options?`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md)\<`XRCompositionLayer`, `WebXRLayerType`\>\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:879](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L879)

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

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md)\<`XRCompositionLayer`, `WebXRLayerType`\>\>

a composition layer containing the texture, or null when WebGPU quad layers are unavailable

***

### addXRSessionLayer()

> **addXRSessionLayer**(`wrappedLayer`): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:1019](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L1019)

Add a new layer to the already-existing list of layers

#### Parameters

##### wrappedLayer

`WebXRLayerWrapper`\<`WebXRSupportedLayerType`\>

the new layer to add to the existing ones

#### Returns

`void`

***

### attach()

> **attach**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:226](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L226)

Attach this feature.
Will usually be called by the features manager.

#### Returns

`boolean`

true if successful.

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`attach`](WebXRAbstractFeature.md#attach)

***

### createCubeLayer()

> **createCubeLayer**(`options?`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRFallbackLayerWrapper`](../interfaces/WebXRFallbackLayerWrapper.md) \| [`WebXRCubeLayerWrapper`](WebXRCubeLayerWrapper.md)\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:736](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L736)

Creates a graphics-backed cube layer and adds it to the current XR session.
Cube layers synchronize only the rotation of their transform node because the WebXR API does not support cube-layer translation.

#### Parameters

##### options?

[`IWebXRCompositionLayerCreationOptions`](../interfaces/IWebXRCompositionLayerCreationOptions.md)\<`XRCubeLayerInit`, `XRGPUCubeLayerInit`\> = `{}`

initialization and transform-node options for the layer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRFallbackLayerWrapper`](../interfaces/WebXRFallbackLayerWrapper.md) \| [`WebXRCubeLayerWrapper`](WebXRCubeLayerWrapper.md)\>

the created layer wrapper, or `null` when the active graphics binding does not support cube layers

***

### createCylinderLayer()

> **createCylinderLayer**(`options?`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XRCylinderLayer`, `"XRCylinderLayer"`\>\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:651](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L651)

Creates a graphics-backed cylinder layer and adds it to the current XR session.

#### Parameters

##### options?

[`IWebXRCompositionLayerCreationOptions`](../interfaces/IWebXRCompositionLayerCreationOptions.md)\<`XRCylinderLayerInit`, `XRGPUCylinderLayerInit`\> = `{}`

initialization and transform-node options for the layer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XRCylinderLayer`, `"XRCylinderLayer"`\>\>

the created layer wrapper, or `null` when the active graphics binding does not support cylinder layers

***

### createEquirectLayer()

> **createEquirectLayer**(`options?`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XREquirectLayer`, `"XREquirectLayer"`\>\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:692](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L692)

Creates a graphics-backed equirectangular layer and adds it to the current XR session.

#### Parameters

##### options?

[`IWebXRCompositionLayerCreationOptions`](../interfaces/IWebXRCompositionLayerCreationOptions.md)\<`XREquirectLayerInit`, `XRGPUEquirectLayerInit`\> = `{}`

initialization and transform-node options for the layer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XREquirectLayer`, `"XREquirectLayer"`\>\>

the created layer wrapper, or `null` when the active graphics binding does not support equirectangular layers

***

### createMediaCylinderLayer()

> **createMediaCylinderLayer**(`video`, `options?`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XRCylinderLayer`, `"XRCylinderLayer"`\>\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:788](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L788)

Creates a video-backed cylinder layer and adds it to the current XR session.

#### Parameters

##### video

`HTMLVideoElement`

the video element presented by the XR compositor

##### options?

[`IWebXRMediaLayerCreationOptions`](../interfaces/IWebXRMediaLayerCreationOptions.md)\<`XRMediaCylinderLayerInit`\> = `{}`

initialization and transform-node options for the layer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XRCylinderLayer`, `"XRCylinderLayer"`\>\>

the created media layer wrapper, or `null` when XRMediaBinding is unavailable

***

### createMediaEquirectLayer()

> **createMediaEquirectLayer**(`video`, `options?`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XREquirectLayer`, `"XREquirectLayer"`\>\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:817](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L817)

Creates a video-backed equirectangular layer and adds it to the current XR session.

#### Parameters

##### video

`HTMLVideoElement`

the video element presented by the XR compositor

##### options?

[`IWebXRMediaLayerCreationOptions`](../interfaces/IWebXRMediaLayerCreationOptions.md)\<`XRMediaEquirectLayerInit`\> = `{}`

initialization and transform-node options for the layer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XREquirectLayer`, `"XREquirectLayer"`\>\>

the created media layer wrapper, or `null` when XRMediaBinding is unavailable

***

### createMediaQuadLayer()

> **createMediaQuadLayer**(`video`, `options?`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XRQuadLayer`, `"XRQuadLayer"`\>\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:763](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L763)

Creates a video-backed quad layer and adds it to the current XR session.

#### Parameters

##### video

`HTMLVideoElement`

the video element presented by the XR compositor

##### options?

[`IWebXRMediaLayerCreationOptions`](../interfaces/IWebXRMediaLayerCreationOptions.md)\<`XRMediaQuadLayerInit`\> = `{}`

initialization and transform-node options for the layer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XRQuadLayer`, `"XRQuadLayer"`\>\>

the created media layer wrapper, or `null` when XRMediaBinding is unavailable

#### See

https://playground.babylonjs.com/#D35HOL#0

***

### createProjectionLayer()

> **createProjectionLayer**(`params?`, `multiview?`): `WebXRProjectionLayerWrapper`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:581](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L581)

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

### createQuadLayer()

> **createQuadLayer**(`options?`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XRQuadLayer`, `"XRQuadLayer"`\>\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:615](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L615)

Creates a graphics-backed quad layer and adds it to the current XR session.

#### Parameters

##### options?

[`IWebXRCompositionLayerCreationOptions`](../interfaces/IWebXRCompositionLayerCreationOptions.md)\<`XRQuadLayerInit`, `XRGPUQuadLayerInit`\> = `{}`

initialization and transform-node options for the layer

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<`XRQuadLayer`, `"XRQuadLayer"`\>\>

the created layer wrapper, or `null` when the active graphics binding does not support quad layers

***

### createXRWebGLLayer()

> **createXRWebGLLayer**(`params?`): `WebXRWebGLLayerWrapper`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:291](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L291)

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

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:268](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L268)

detach this feature.

#### Returns

`boolean`

true if successful, false if failed or already detached

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`detach`](WebXRAbstractFeature.md#detach)

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:1176](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L1176)

Dispose this feature and all of the resources attached.

#### Returns

`void`

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`dispose`](WebXRAbstractFeature.md#dispose)

***

### isCompatible()

> **isCompatible**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:1162](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L1162)

This function will be executed during before enabling the feature and can be used to not-allow enabling it.
Note that at this point the session has NOT started, so this is purely checking if the browser supports it

#### Returns

`boolean`

whether or not the feature is compatible in this environment

#### Overrides

[`WebXRAbstractFeature`](WebXRAbstractFeature.md).[`isCompatible`](WebXRAbstractFeature.md#iscompatible)

***

### isLayerTypeSupported()

> **isLayerTypeSupported**(`layerType`, `source?`): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:1112](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L1112)

Checks whether the active runtime exposes the factory needed for a layer type.
This is a capability check only; creation can still fail when an initialization dictionary is invalid.

#### Parameters

##### layerType

`"XRProjectionLayer"` \| [`WebXRSpatialLayerType`](../type-aliases/WebXRSpatialLayerType.md)

the concrete WebXR layer type

##### source?

[`WebXRLayerSource`](../type-aliases/WebXRLayerSource.md) = `"graphics"`

whether to check a graphics-backed or media-backed layer

#### Returns

`boolean`

whether the requested factory is available

***

### removeLayer()

> **removeLayer**(`wrappedLayer`, `dispose?`): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:1060](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L1060)

Removes either a native spatial layer or a fallback layer created by this feature.

#### Parameters

##### wrappedLayer

[`WebXRLayerCreationResult`](../type-aliases/WebXRLayerCreationResult.md)\<[`WebXRSpatialLayer`](../type-aliases/WebXRSpatialLayer.md)\>

the native or fallback layer wrapper to remove

##### dispose?

`boolean` = `true`

whether to dispose resources owned by the wrapper

#### Returns

`boolean`

whether the wrapper was present and removed

***

### removeXRSessionLayer()

> **removeXRSessionLayer**(`wrappedLayer`, `dispose?`): `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:1031](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L1031)

Removes a non-projection layer from the current XR session.

#### Parameters

##### wrappedLayer

`WebXRLayerWrapper`\<`WebXRSupportedLayerType`\>

the layer wrapper to remove

##### dispose?

`boolean` = `true`

whether to dispose the wrapper and destroy its native composition layer

#### Returns

`boolean`

whether the layer was present and removed

***

### setXRSessionLayers()

> **setXRSessionLayers**(`wrappedLayers?`): `void`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:1084](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L1084)

Sets the layers to be used by the XR session.
Note that you must call this function with any layers you wish to render to
since it adds them to the XR session's render state
(replacing any layers that were added in a previous call to setXRSessionLayers or updateRenderState).
This method also sets up the session manager's render target texture provider
as the first layer in the array, which feeds the WebXR camera(s) attached to the session.

#### Parameters

##### wrappedLayers?

`WebXRLayerWrapper`\<`WebXRSupportedLayerType`\>[] = `...`

An array of WebXRLayerWrapper, usually returned from the WebXRLayers createLayer functions.

#### Returns

`void`
