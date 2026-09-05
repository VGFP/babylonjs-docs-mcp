[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRSessionManager

# Class: WebXRSessionManager

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:29](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L29)

Manages an XRSession to work with Babylon's engine

## See

https://doc.babylonjs.com/features/featuresDeepDive/webXR/webXRSessionManagers

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)
- [`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md)

## Constructors

### Constructor

> **new WebXRSessionManager**(`scene`): `WebXRSessionManager`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:131](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L131)

Constructs a WebXRSessionManager, this must be initialized within a user action before usage

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene which the session should be created for

#### Returns

`WebXRSessionManager`

## Properties

### baseReferenceSpace

> **baseReferenceSpace**: `XRReferenceSpace`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:45](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L45)

The base reference space from which the session started. good if you want to reset your
reference space

***

### currentFrame

> **currentFrame**: [`Nullable`](../type-aliases/Nullable.md)\<`XRFrame`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:49](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L49)

Current XR frame

***

### currentTimestamp

> **currentTimestamp**: `number` = `-1`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:51](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L51)

WebXR timestamp updated every frame

***

### defaultHeightCompensation

> **defaultHeightCompensation**: `number` = `1.7`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:56](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L56)

Used just in case of a failure to initialize an immersive session.
The viewer reference space is compensated using this height, creating a kind of "viewer-floor" reference space

***

### inXRFrameLoop

> **inXRFrameLoop**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:95](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L95)

Are we currently in the XR loop?

***

### inXRSession

> **inXRSession**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:99](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L99)

Are we in an XR session?

***

### onWorldScaleFactorChangedObservable

> **onWorldScaleFactorChangedObservable**: [`Observable`](Observable.md)\<\{ `newScaleFactor`: `number`; `previousScaleFactor`: `number`; \}\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:106](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L106)

Observable raised when the world scale has changed

***

### onXRFrameObservable

> **onXRFrameObservable**: [`Observable`](Observable.md)\<`XRFrame`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:60](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L60)

Fires every time a new xrFrame arrives which can be used to update the camera

***

### onXRReady

> **onXRReady**: [`Observable`](Observable.md)\<`WebXRSessionManager`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:82](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L82)

Fires when the session manager is rendering the first frame

***

### onXRReferenceSpaceChanged

> **onXRReferenceSpaceChanged**: [`Observable`](Observable.md)\<`XRReferenceSpace`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:64](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L64)

Fires when the reference space changed

***

### onXRReferenceSpaceInitialized

> **onXRReferenceSpaceInitialized**: [`Observable`](Observable.md)\<`XRReferenceSpace`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:77](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L77)

Fires when the xr reference space has been initialized

***

### onXRSessionEnded

> **onXRSessionEnded**: [`Observable`](Observable.md)\<`any`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:68](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L68)

Fires when the xr session is ended either by the device or manually done

***

### onXRSessionInit

> **onXRSessionInit**: [`Observable`](Observable.md)\<`XRSession`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:72](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L72)

Fires when the xr session is initialized: right after requestSession was called and returned with a successful result

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:133](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L133)

The scene which the session should be created for

***

### session

> **session**: `XRSession`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:86](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L86)

Underlying xr session

***

### viewerReferenceSpace

> **viewerReferenceSpace**: `XRReferenceSpace`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:91](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L91)

The viewer (head position) reference space. This can be used to get the XR world coordinates
or get the offset the player is currently at.

## Accessors

### currentFrameRate

#### Get Signature

> **get** **currentFrameRate**(): `number` \| `undefined`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:661](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L661)

The current frame rate as reported by the device

##### Returns

`number` \| `undefined`

***

### enabledFeatures

#### Get Signature

> **get** **enabledFeatures**(): [`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:726](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L726)

Get the features enabled on the current session
This is only available in-session!

##### See

https://www.w3.org/TR/webxr/#dom-xrsession-enabledfeatures

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

***

### fixedFoveation

#### Get Signature

> **get** **fixedFoveation**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:706](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L706)

Get the fixed foveation currently set, as specified by the webxr specs
If this returns null, then fixed foveation is not supported

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **fixedFoveation**(`value`): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:714](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L714)

Set the fixed foveation to the specified value, as specified by the webxr specs
This value will be normalized to be between 0 and 1, 1 being max foveation, 0 being no foveation

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

***

### isFixedFoveationSupported

#### Get Signature

> **get** **isFixedFoveationSupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:698](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L698)

Check if fixed foveation is supported on this device

##### Returns

`boolean`

***

### isNative

#### Get Signature

> **get** **isNative**(): `boolean`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:654](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L654)

Returns true if Babylon.js is using the BabylonNative backend, otherwise false

##### Returns

`boolean`

***

### referenceSpace

#### Get Signature

> **get** **referenceSpace**(): `XRReferenceSpace`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:153](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L153)

The current reference space used in this session. This reference space can constantly change!
It is mainly used to offset the camera's position.

##### Returns

`XRReferenceSpace`

#### Set Signature

> **set** **referenceSpace**(`newReferenceSpace`): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:160](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L160)

Set a new reference space and triggers the observable

##### Parameters

###### newReferenceSpace

`XRReferenceSpace`

##### Returns

`void`

***

### sessionMode

#### Get Signature

> **get** **sessionMode**(): `XRSessionMode`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:169](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L169)

The mode for the managed XR session

##### Returns

`XRSessionMode`

***

### supportedFrameRates

#### Get Signature

> **get** **supportedFrameRates**(): `Float32Array`\<`ArrayBufferLike`\> \| `undefined`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:668](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L668)

A list of supported frame rates (only available in-session!

##### Returns

`Float32Array`\<`ArrayBufferLike`\> \| `undefined`

***

### worldScalingFactor

#### Get Signature

> **get** **worldScalingFactor**(): `number`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:114](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L114)

Scale factor to apply to all XR-related elements (camera, controllers)

##### Returns

`number`

#### Set Signature

> **set** **worldScalingFactor**(`value`): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:118](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L118)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### IsWebGPUXRSupported

#### Get Signature

> **get** `static` **IsWebGPUXRSupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:647](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L647)

**`Experimental`**

Returns whether the runtime exposes the WebGPU-XR binding APIs required by Babylon.js.

This is an advisory check only. XR session negotiation can still fail for the active device,
permissions, or adapter. A WebGPU engine intended for XR must also be created with
`xrCompatible: true`.

##### Returns

`boolean`

whether the required XRGPUBinding projection APIs are exposed
 WebGPU-XR support is experimental and may change.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:177](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L177)

Disposes of the session manager
This should be called explicitly by the dev, if required.

#### Returns

`void`

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`dispose`](../interfaces/IWebXRRenderTargetTextureProvider.md#dispose)

***

### exitXRAsync()

> **exitXRAsync**(): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:198](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L198)

Stops the xrSession and restores the render loop

#### Returns

`Promise`\<`void`\>

Promise which resolves after it exits XR

***

### getRecommendedViewportScale()

> **getRecommendedViewportScale**(`viewIndex`): [`Nullable`](../type-aliases/Nullable.md)\<`number`\> \| `undefined`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:264](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L264)

Gets the runtime-recommended viewport scale for the current XR view.
A number is returned when the runtime has a recommendation, `null` when the API is supported but
the runtime has no recommendation, and `undefined` when the API is not supported.
This method must be called during an active XR frame.

#### Parameters

##### viewIndex

`number`

the index of the view in the current viewer pose

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\> \| `undefined`

the recommended viewport scale, `null` when no recommendation is available, or `undefined` when unsupported

#### See

https://playground.babylonjs.com/#BAGIIM#0

***

### getRenderTargetTextureForEye()

> **getRenderTargetTextureForEye**(`eye`): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:229](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L229)

Gets the correct render target texture to be rendered this frame for this eye

#### Parameters

##### eye

`XREye`

the eye for which to get the render target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

the render target for the specified eye or null if not available

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`getRenderTargetTextureForEye`](../interfaces/IWebXRRenderTargetTextureProvider.md#getrendertargettextureforeye)

***

### getRenderTargetTextureForView()

> **getRenderTargetTextureForView**(`view`): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:238](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L238)

Gets the correct render target texture to be rendered this frame for this view

#### Parameters

##### view

`XRView`

the view for which to get the render target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

the render target for the specified view or null if not available

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`getRenderTargetTextureForView`](../interfaces/IWebXRRenderTargetTextureProvider.md#getrendertargettextureforview)

***

### getWebXRRenderTarget()

> **getWebXRRenderTarget**(`options?`): [`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md)

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:339](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L339)

Creates a WebXRRenderTarget object for the XR session

#### Parameters

##### options?

[`WebXRManagedOutputCanvasOptions`](WebXRManagedOutputCanvasOptions.md)

optional options to provide when creating a new render target

#### Returns

[`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md)

a WebXR render target to which the session can render

***

### initializeAsync()

> **initializeAsync**(): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:355](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L355)

Initializes the manager
After initialization enterXR can be called to start an XR session

#### Returns

`Promise`\<`void`\>

Promise which resolves after it is initialized

***

### initializeSessionAsync()

> **initializeSessionAsync**(`xrSessionMode?`, `xrSessionInit?`): `Promise`\<`XRSession`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:369](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L369)

Initializes an xr session

#### Parameters

##### xrSessionMode?

`XRSessionMode` = `"immersive-vr"`

mode to initialize

##### xrSessionInit?

`XRSessionInit` = `{}`

defines optional and required values to pass to the session builder

#### Returns

`Promise`\<`XRSession`\>

a promise which will resolve once the session has been initialized

***

### isSessionSupportedAsync()

> **isSessionSupportedAsync**(`sessionMode`): `Promise`\<`boolean`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:481](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L481)

Checks if a session would be supported for the creation options specified

#### Parameters

##### sessionMode

`XRSessionMode`

session mode to check if supported eg. immersive-vr

#### Returns

`Promise`\<`boolean`\>

A Promise that resolves to true if supported and false if not

***

### isViewportScaleSupported()

> **isViewportScaleSupported**(`viewIndex`): `boolean`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:250](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L250)

Checks whether the current XR view exposes the dynamic viewport scaling API.
API availability does not guarantee that the active XR device will change the viewport dimensions.
This method must be called during an active XR frame.

#### Parameters

##### viewIndex

`number`

the index of the view in the current viewer pose

#### Returns

`boolean`

whether dynamic viewport scaling is exposed for the view

#### See

https://playground.babylonjs.com/#BAGIIM#0

***

### requestViewportScale()

> **requestViewportScale**(`viewIndex`, `scale`): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:284](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L284)

Requests a viewport scale for the current XR view.
The request is a hint to the runtime. Babylon uses the native viewport returned on subsequent frames
and does not derive viewport dimensions from this value. Pass `1` to restore the full viewport scale;
`null` follows the native no-op behavior. Native ignored-value, clamping, and exception behavior is preserved.
Requests made from an application observer of `onXRFrameObservable` apply to a future frame because
Babylon's camera acquires the current frame's viewport before notifying application observers.
This method must be called during an active XR frame.

#### Parameters

##### viewIndex

`number`

the index of the view in the current viewer pose

##### scale

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

the viewport scale requested from the runtime

#### Returns

`void`

#### See

https://playground.babylonjs.com/#BAGIIM#0

***

### resetReferenceSpace()

> **resetReferenceSpace**(): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:488](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L488)

Resets the reference space to the one started the session

#### Returns

`void`

***

### runInXRFrame()

> **runInXRFrame**(`callback`, `ignoreIfNotInSession?`): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:687](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L687)

Run a callback in the xr render loop

#### Parameters

##### callback

() => `void`

the callback to call when in XR Frame

##### ignoreIfNotInSession?

`boolean` = `true`

if no session is currently running, run it first thing on the next session

#### Returns

`void`

***

### runXRRenderLoop()

> **runXRRenderLoop**(): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:495](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L495)

Starts rendering to the xr layer

#### Returns

`void`

***

### setReferenceSpaceTypeAsync()

> **setReferenceSpaceTypeAsync**(`referenceSpaceType?`): `Promise`\<`XRReferenceSpace`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:542](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L542)

Sets the reference space on the xr session

#### Parameters

##### referenceSpaceType?

`XRReferenceSpaceType` = `"local-floor"`

space to set

#### Returns

`Promise`\<`XRReferenceSpace`\>

a promise that will resolve once the reference space has been set

***

### trySetViewportForView()

> **trySetViewportForView**(`viewport`, `view`): `boolean`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:220](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L220)

Attempts to set the framebuffer-size-normalized viewport to be rendered this frame for this view.
In the event of a failure, the supplied viewport is not updated.

#### Parameters

##### viewport

[`Viewport`](Viewport.md)

the viewport to which the view will be rendered

##### view

`XRView`

the view for which to set the viewport

#### Returns

`boolean`

whether the operation was successful

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`trySetViewportForView`](../interfaces/IWebXRRenderTargetTextureProvider.md#trysetviewportforview)

***

### updateRenderState()

> **updateRenderState**(`state`): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:603](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L603)

Updates the render state of the session

#### Parameters

##### state

`XRRenderStateInit`

state to set

#### Returns

`void`

***

### ~~updateRenderStateAsync()~~

> **updateRenderStateAsync**(`state`): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:577](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L577)

Updates the render state of the session.
Note that this is deprecated in favor of WebXRSessionManager.updateRenderState().

#### Parameters

##### state

`XRRenderState`

state to set

#### Returns

`Promise`\<`void`\>

a promise that resolves once the render state has been updated

#### Deprecated

Use updateRenderState() instead.

***

### updateTargetFrameRate()

> **updateTargetFrameRate**(`rate`): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:678](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L678)

Set the framerate of the session.

#### Parameters

##### rate

`number`

the new framerate. This value needs to be in the supportedFrameRates array

#### Returns

`Promise`\<`void`\>

a promise that resolves once the framerate has been set

***

### IsSessionSupportedAsync()

> `static` **IsSessionSupportedAsync**(`sessionMode`): `Promise`\<`boolean`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:617](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRSessionManager.ts#L617)

Returns a promise that resolves with a boolean indicating if the provided session mode is supported by this browser

#### Parameters

##### sessionMode

`XRSessionMode`

defines the session to test

#### Returns

`Promise`\<`boolean`\>

a promise with boolean as final value
