[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRCompositionLayerWrapper

# Class: WebXRCompositionLayerWrapper\<LayerT, LayerTypeT\>

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:25](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L25)

Wraps an XR composition layer and creates its Babylon render target provider.

## See

https://playground.babylonjs.com/#TODARD#0

## Extends

- `WebXRLayerWrapper`\<`LayerTypeT`\>

## Extended by

- [`WebXRSpatialLayerWrapper`](WebXRSpatialLayerWrapper.md)

## Type Parameters

### LayerT

`LayerT` *extends* `XRCompositionLayer` = `XRCompositionLayer`

the concrete WebXR composition layer type

### LayerTypeT

`LayerTypeT` *extends* `WebXRSupportedLayerType` = `WebXRLayerType`

## Constructors

### Constructor

> **new WebXRCompositionLayerWrapper**\<`LayerT`, `LayerTypeT`\>(`getWidth`, `getHeight`, `layer`, `layerType`, `isMultiview`, `createRTTProvider`, `_originalInternalTexture?`, `_destroyLayerOnDispose?`, `isStatic?`): `WebXRCompositionLayerWrapper`\<`LayerT`, `LayerTypeT`\>

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:122](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L122)

#### Parameters

##### getWidth

() => `number`

##### getHeight

() => `number`

##### layer

`LayerT`

##### layerType

`LayerTypeT`

##### isMultiview

`boolean`

Whether the layer renders both views into a texture array.

##### createRTTProvider

(`xrSessionManager`) => `WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>

##### \_originalInternalTexture?

[`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\> = `null`

##### \_destroyLayerOnDispose?

`boolean` = `false`

##### isStatic?

`boolean` = `false`

Whether the layer can only be rendered when its native `needsRedraw` flag is set.

#### Returns

`WebXRCompositionLayerWrapper`\<`LayerT`, `LayerTypeT`\>

#### Overrides

`WebXRLayerWrapper<LayerTypeT>.constructor`

## Properties

### \_originalInternalTexture

> **\_originalInternalTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\> = `null`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:132](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L132)

***

### createRTTProvider

> **createRTTProvider**: (`xrSessionManager`) => `WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:131](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L131)

#### Parameters

##### xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

#### Returns

`WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>

***

### getHeight

> **getHeight**: () => `number`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:124](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L124)

#### Returns

`number`

#### Inherited from

`WebXRLayerWrapper.getHeight`

***

### getWidth

> **getWidth**: () => `number`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:123](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L123)

#### Returns

`number`

#### Inherited from

`WebXRLayerWrapper.getWidth`

***

### isMediaLayer

> `readonly` **isMediaLayer**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L32)

Whether this layer receives its content directly from an HTML media element.

***

### isMultiview

> `readonly` **isMultiview**: `boolean`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:130](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L130)

Whether the layer renders both views into a texture array.

***

### isStatic

> `readonly` **isStatic**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:137](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L137)

Whether the layer can only be rendered when its native `needsRedraw` flag is set.

***

### layer

> `readonly` **layer**: `LayerT`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:125](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L125)

#### Inherited from

`WebXRLayerWrapper.layer`

***

### layerType

> `readonly` **layerType**: `LayerTypeT`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:126](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L126)

#### Inherited from

`WebXRLayerWrapper.layerType`

***

### usesRenderTargetProvider

> `readonly` **usesRenderTargetProvider**: `boolean` = `true`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L37)

Whether Babylon should acquire subimages and expose render target textures for this layer.

## Accessors

### fixedFoveation

#### Get Signature

> **get** **fixedFoveation**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [packages/dev/core/src/XR/webXRLayerWrapper.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRLayerWrapper.ts#L47)

Gets the fixed foveation currently set, as specified by the WebXR specs.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The fixed foveation level, or `null` when fixed foveation is not supported.

#### Set Signature

> **set** **fixedFoveation**(`value`): `void`

Defined in: [packages/dev/core/src/XR/webXRLayerWrapper.ts:60](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRLayerWrapper.ts#L60)

Sets the fixed foveation level, as specified by the WebXR specs.
The value is normalized between 0 and 1, where 1 is maximum foveation and 0 is no foveation.
Unsupported native layers ignore the assignment, matching the WebXR fixed-foveation contract.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

The fixed foveation level, or `null` to use no foveation.

##### Returns

`void`

#### Inherited from

`WebXRLayerWrapper.fixedFoveation`

***

### forceMonoPresentation

#### Get Signature

> **get** **forceMonoPresentation**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:106](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L106)

Gets whether the compositor presents the left-eye layer configuration to both eyes.

##### Throws

If mono presentation control is not supported by the active XR runtime.

##### Returns

`boolean`

Whether mono presentation is forced.

#### Set Signature

> **set** **forceMonoPresentation**(`value`): `void`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:117](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L117)

Sets whether the compositor presents the left-eye layer configuration to both eyes.
Applications should continue rendering both eyes when this is enabled.

##### Throws

If mono presentation control is not supported by the active XR runtime.

##### Parameters

###### value

`boolean`

Whether to force mono presentation.

##### Returns

`void`

***

### isFixedFoveationSupported

#### Get Signature

> **get** **isFixedFoveationSupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/webXRLayerWrapper.ts:38](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRLayerWrapper.ts#L38)

Check if fixed foveation is supported by the wrapped XRWebGLLayer or XRProjectionLayer.

##### Returns

`boolean`

#### Inherited from

`WebXRLayerWrapper.isFixedFoveationSupported`

***

### isForceMonoPresentationSupported

#### Get Signature

> **get** **isForceMonoPresentationSupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:97](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L97)

Whether the native layer exposes mono-presentation control.

##### Returns

`boolean`

***

### isOpacitySupported

#### Get Signature

> **get** **isOpacitySupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:42](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L42)

Whether the native layer exposes compositor opacity control.

##### Returns

`boolean`

***

### isQualitySupported

#### Get Signature

> **get** **isQualitySupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:70](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L70)

Whether the native layer exposes compositor quality hints.

##### Returns

`boolean`

***

### opacity

#### Get Signature

> **get** **opacity**(): `number`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:51](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L51)

Gets the compositor opacity applied to this layer.

##### Throws

If opacity is not supported by the active XR runtime.

##### Returns

`number`

The native opacity in the range 0 to 1.

#### Set Signature

> **set** **opacity**(`value`): `void`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:62](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L62)

Sets the compositor opacity applied to this layer.
The native runtime clamps the value to the range 0 to 1.

##### Throws

If opacity is not supported by the active XR runtime.

##### Parameters

###### value

`number`

The desired opacity.

##### Returns

`void`

***

### quality

#### Get Signature

> **get** **quality**(): `XRLayerQuality`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:79](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L79)

Gets the compositor quality hint applied to this layer.

##### Throws

If quality hints are not supported by the active XR runtime.

##### Returns

`XRLayerQuality`

The current native layer quality hint.

#### Set Signature

> **set** **quality**(`value`): `void`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:89](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L89)

Sets the compositor quality hint applied to this layer.

##### Throws

If quality hints are not supported by the active XR runtime, or the native runtime rejects the value.

##### Parameters

###### value

`XRLayerQuality`

The desired quality hint.

##### Returns

`void`

***

### renderTargetTextureProvider

#### Get Signature

> **get** **renderTargetTextureProvider**(): [`Nullable`](../type-aliases/Nullable.md)\<`WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>\>

Defined in: [packages/dev/core/src/XR/webXRLayerWrapper.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRLayerWrapper.ts#L32)

The render target provider created for this layer, or `null` until one is created.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>\>

#### Inherited from

`WebXRLayerWrapper.renderTargetTextureProvider`

## Methods

### createRenderTargetTextureProvider()

> **createRenderTargetTextureProvider**(`xrSessionManager`): `WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>

Defined in: [packages/dev/core/src/XR/webXRLayerWrapper.ts:72](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRLayerWrapper.ts#L72)

Create a render target provider for the wrapped layer.

#### Parameters

##### xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

The XR Session Manager

#### Returns

`WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>

A new render target texture provider for the wrapped layer.

#### Inherited from

`WebXRLayerWrapper.createRenderTargetTextureProvider`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:151](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L151)

Disposes the Babylon render-target resources and destroys the native layer when this wrapper owns it.

#### Returns

`void`

#### Overrides

`WebXRLayerWrapper.dispose`
