[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRSessionManager

# Class: WebXRSessionManager

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:20](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L20)

Manages an XRSession to work with Babylon's engine

## See

https://doc.babylonjs.com/features/featuresDeepDive/webXR/webXRSessionManagers

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)
- [`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md)

## Constructors

### Constructor

> **new WebXRSessionManager**(`scene`): `WebXRSessionManager`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:120](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L120)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:34](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L34)

The base reference space from which the session started. good if you want to reset your
reference space

***

### currentFrame

> **currentFrame**: [`Nullable`](../type-aliases/Nullable.md)\<`XRFrame`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:38](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L38)

Current XR frame

***

### currentTimestamp

> **currentTimestamp**: `number` = `-1`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L40)

WebXR timestamp updated every frame

***

### defaultHeightCompensation

> **defaultHeightCompensation**: `number` = `1.7`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:45](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L45)

Used just in case of a failure to initialize an immersive session.
The viewer reference space is compensated using this height, creating a kind of "viewer-floor" reference space

***

### inXRFrameLoop

> **inXRFrameLoop**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:84](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L84)

Are we currently in the XR loop?

***

### inXRSession

> **inXRSession**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:88](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L88)

Are we in an XR session?

***

### onWorldScaleFactorChangedObservable

> **onWorldScaleFactorChangedObservable**: [`Observable`](Observable.md)\<\{ `newScaleFactor`: `number`; `previousScaleFactor`: `number`; \}\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:95](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L95)

Observable raised when the world scale has changed

***

### onXRFrameObservable

> **onXRFrameObservable**: [`Observable`](Observable.md)\<`XRFrame`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:49](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L49)

Fires every time a new xrFrame arrives which can be used to update the camera

***

### onXRReady

> **onXRReady**: [`Observable`](Observable.md)\<`WebXRSessionManager`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:71](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L71)

Fires when the session manager is rendering the first frame

***

### onXRReferenceSpaceChanged

> **onXRReferenceSpaceChanged**: [`Observable`](Observable.md)\<`XRReferenceSpace`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:53](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L53)

Fires when the reference space changed

***

### onXRReferenceSpaceInitialized

> **onXRReferenceSpaceInitialized**: [`Observable`](Observable.md)\<`XRReferenceSpace`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:66](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L66)

Fires when the xr reference space has been initialized

***

### onXRSessionEnded

> **onXRSessionEnded**: [`Observable`](Observable.md)\<`any`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:57](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L57)

Fires when the xr session is ended either by the device or manually done

***

### onXRSessionInit

> **onXRSessionInit**: [`Observable`](Observable.md)\<`XRSession`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:61](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L61)

Fires when the xr session is initialized: right after requestSession was called and returned with a successful result

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:122](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L122)

The scene which the session should be created for

***

### session

> **session**: `XRSession`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:75](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L75)

Underlying xr session

***

### viewerReferenceSpace

> **viewerReferenceSpace**: `XRReferenceSpace`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:80](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L80)

The viewer (head position) reference space. This can be used to get the XR world coordinates
or get the offset the player is currently at.

## Accessors

### currentFrameRate

#### Get Signature

> **get** **currentFrameRate**(): `number` \| `undefined`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:513](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L513)

The current frame rate as reported by the device

##### Returns

`number` \| `undefined`

***

### enabledFeatures

#### Get Signature

> **get** **enabledFeatures**(): [`Nullable`](../type-aliases/Nullable.md)\<`string`[]\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:578](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L578)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:558](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L558)

Get the fixed foveation currently set, as specified by the webxr specs
If this returns null, then fixed foveation is not supported

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **fixedFoveation**(`value`): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:566](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L566)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:550](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L550)

Check if fixed foveation is supported on this device

##### Returns

`boolean`

***

### isNative

#### Get Signature

> **get** **isNative**(): `boolean`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:506](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L506)

Returns true if Babylon.js is using the BabylonNative backend, otherwise false

##### Returns

`boolean`

***

### referenceSpace

#### Get Signature

> **get** **referenceSpace**(): `XRReferenceSpace`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:142](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L142)

The current reference space used in this session. This reference space can constantly change!
It is mainly used to offset the camera's position.

##### Returns

`XRReferenceSpace`

#### Set Signature

> **set** **referenceSpace**(`newReferenceSpace`): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:149](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L149)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:157](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L157)

The mode for the managed XR session

##### Returns

`XRSessionMode`

***

### supportedFrameRates

#### Get Signature

> **get** **supportedFrameRates**(): `Float32Array`\<`ArrayBufferLike`\> \| `undefined`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:520](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L520)

A list of supported frame rates (only available in-session!

##### Returns

`Float32Array`\<`ArrayBufferLike`\> \| `undefined`

***

### worldScalingFactor

#### Get Signature

> **get** **worldScalingFactor**(): `number`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:103](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L103)

Scale factor to apply to all XR-related elements (camera, controllers)

##### Returns

`number`

#### Set Signature

> **set** **worldScalingFactor**(`value`): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:107](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L107)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:165](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L165)

Disposes of the session manager
This should be called explicitly by the dev, if required.

#### Returns

`void`

#### Implementation of

[`IWebXRRenderTargetTextureProvider`](../interfaces/IWebXRRenderTargetTextureProvider.md).[`dispose`](../interfaces/IWebXRRenderTargetTextureProvider.md#dispose)

***

### exitXRAsync()

> **exitXRAsync**(): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:186](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L186)

Stops the xrSession and restores the render loop

#### Returns

`Promise`\<`void`\>

Promise which resolves after it exits XR

***

### getRenderTargetTextureForEye()

> **getRenderTargetTextureForEye**(`eye`): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:213](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L213)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:222](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L222)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:252](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L252)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:268](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L268)

Initializes the manager
After initialization enterXR can be called to start an XR session

#### Returns

`Promise`\<`void`\>

Promise which resolves after it is initialized

***

### initializeSessionAsync()

> **initializeSessionAsync**(`xrSessionMode?`, `xrSessionInit?`): `Promise`\<`XRSession`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:282](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L282)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:347](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L347)

Checks if a session would be supported for the creation options specified

#### Parameters

##### sessionMode

`XRSessionMode`

session mode to check if supported eg. immersive-vr

#### Returns

`Promise`\<`boolean`\>

A Promise that resolves to true if supported and false if not

***

### resetReferenceSpace()

> **resetReferenceSpace**(): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:354](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L354)

Resets the reference space to the one started the session

#### Returns

`void`

***

### runInXRFrame()

> **runInXRFrame**(`callback`, `ignoreIfNotInSession?`): `void`

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:539](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L539)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:361](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L361)

Starts rendering to the xr layer

#### Returns

`void`

***

### setReferenceSpaceTypeAsync()

> **setReferenceSpaceTypeAsync**(`referenceSpaceType?`): `Promise`\<`XRReferenceSpace`\>

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:408](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L408)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:204](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L204)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:469](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L469)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:443](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L443)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:530](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L530)

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

Defined in: [packages/dev/core/src/XR/webXRSessionManager.ts:483](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRSessionManager.ts#L483)

Returns a promise that resolves with a boolean indicating if the provided session mode is supported by this browser

#### Parameters

##### sessionMode

`XRSessionMode`

defines the session to test

#### Returns

`Promise`\<`boolean`\>

a promise with boolean as final value
