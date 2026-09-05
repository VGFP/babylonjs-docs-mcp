[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRRenderTargetTextureProvider

# Interface: IWebXRRenderTargetTextureProvider

Defined in: [packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts:13](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts#L13)

An interface for objects that provide render target textures for XR rendering.

## Extends

- [`IDisposable`](IDisposable.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/scene.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/scene.pure.ts#L122)

Releases all held resources

#### Returns

`void`

#### Inherited from

[`IDisposable`](IDisposable.md).[`dispose`](IDisposable.md#dispose)

***

### getRenderTargetTextureForEye()

> **getRenderTargetTextureForEye**(`eye`): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](../classes/RenderTargetTexture.md)\>

Defined in: [packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts#L27)

Gets the correct render target texture to be rendered this frame for this eye

#### Parameters

##### eye

`XREye`

the eye for which to get the render target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](../classes/RenderTargetTexture.md)\>

the render target for the specified eye or null if not available

***

### getRenderTargetTextureForView()

> **getRenderTargetTextureForView**(`view`): [`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](../classes/RenderTargetTexture.md)\>

Defined in: [packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts:33](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts#L33)

Gets the correct render target texture to be rendered this frame for this view

#### Parameters

##### view

`XRView`

the view for which to get the render target

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`RenderTargetTexture`](../classes/RenderTargetTexture.md)\>

the render target for the specified view or null if not available

***

### trySetViewportForView()

> **trySetViewportForView**(`viewport`, `view`): `boolean`

Defined in: [packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts:21](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRRenderTargetTextureProvider.ts#L21)

Attempts to set the framebuffer-size-normalized viewport to be rendered this frame for this view.
In the event of a failure, the supplied viewport is not updated.

#### Parameters

##### viewport

[`Viewport`](../classes/Viewport.md)

the viewport to which the view will be rendered

##### view

`XRView`

the view for which to set the viewport

#### Returns

`boolean`

whether the operation was successful
