[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRRenderTarget

# Interface: WebXRRenderTarget\<TContext, TLayer\>

Defined in: [packages/dev/core/src/XR/webXRTypes.ts:51](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRTypes.ts#L51)

Abstraction of the XR render target.
The type parameters default to the WebGL context/layer types, so `WebXRRenderTarget`
used without type arguments keeps the exact same shape as before. A non-WebGL backend
(e.g. a future WebGPU/XRGPUBinding target) can specialize the context and layer types.

## Extends

- [`IDisposable`](IDisposable.md)

## Type Parameters

### TContext

`TContext` = `WebGLRenderingContext`

### TLayer

`TLayer` *extends* `XRLayer` = `XRWebGLLayer`

## Properties

### canvasContext

> **canvasContext**: `TContext`

Defined in: [packages/dev/core/src/XR/webXRTypes.ts:55](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRTypes.ts#L55)

xrpresent context of the canvas which can be used to display/mirror xr content

***

### xrLayer

> **xrLayer**: [`Nullable`](../type-aliases/Nullable.md)\<`TLayer`\>

Defined in: [packages/dev/core/src/XR/webXRTypes.ts:60](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRTypes.ts#L60)

xr layer for the canvas

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/scene.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/scene.pure.ts#L122)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)

***

### initializeXRLayerAsync()

> **initializeXRLayerAsync**(`xrSession`): `Promise`\<`TLayer`\>

Defined in: [packages/dev/core/src/XR/webXRTypes.ts:67](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRTypes.ts#L67)

Initializes an XR layer to be used as the session's baseLayer.

#### Parameters

##### xrSession

`XRSession`

xr session

#### Returns

`Promise`\<`TLayer`\>

a promise that will resolve once the XR Layer has been created
