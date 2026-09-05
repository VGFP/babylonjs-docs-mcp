[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRSpatialLayerWrapper

# Class: WebXRSpatialLayerWrapper\<LayerT, LayerTypeT\>

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:164](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L164)

Wraps a positionable XR composition layer and synchronizes it with a Babylon transform node.
The node's scaling does not affect the physical dimensions of the layer.

## Extends

- [`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md)\<`LayerT`, `LayerTypeT`\>

## Extended by

- [`WebXRCubeLayerWrapper`](WebXRCubeLayerWrapper.md)
- [`WebXRMediaLayerWrapper`](WebXRMediaLayerWrapper.md)

## Type Parameters

### LayerT

`LayerT` *extends* [`WebXRSpatialLayer`](../type-aliases/WebXRSpatialLayer.md) = [`WebXRSpatialLayer`](../type-aliases/WebXRSpatialLayer.md)

the concrete positionable WebXR layer type

### LayerTypeT

`LayerTypeT` *extends* [`WebXRSpatialLayerType`](../type-aliases/WebXRSpatialLayerType.md) = [`WebXRSpatialLayerType`](../type-aliases/WebXRSpatialLayerType.md)

## Constructors

### Constructor

> **new WebXRSpatialLayerWrapper**\<`LayerT`, `LayerTypeT`\>(`getWidth`, `getHeight`, `layer`, `layerType`, `isMultiview`, `isStatic`, `usesSessionReferenceSpace`, `createRTTProvider`, `transformNode`, `_ownsTransformNode`): `WebXRSpatialLayerWrapper`\<`LayerT`, `LayerTypeT`\>

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:173](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L173)

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

##### isStatic

`boolean`

##### usesSessionReferenceSpace

`boolean`

Whether the layer should follow changes to the session manager's reference space.

##### createRTTProvider

(`xrSessionManager`) => `WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>

##### transformNode

[`TransformNode`](TransformNode.md)

The Babylon node whose world position and rotation are applied to the native layer.

##### \_ownsTransformNode

`boolean`

#### Returns

`WebXRSpatialLayerWrapper`\<`LayerT`, `LayerTypeT`\>

#### Overrides

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`constructor`](WebXRCompositionLayerWrapper.md#constructor)

## Properties

### \_originalInternalTexture

> **\_originalInternalTexture**: [`Nullable`](../type-aliases/Nullable.md)\<[`InternalTexture`](InternalTexture.md)\> = `null`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:132](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L132)

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`_originalInternalTexture`](WebXRCompositionLayerWrapper.md#_originalinternaltexture)

***

### createRTTProvider

> **createRTTProvider**: (`xrSessionManager`) => `WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:131](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L131)

#### Parameters

##### xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

#### Returns

`WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`createRTTProvider`](WebXRCompositionLayerWrapper.md#createrttprovider)

***

### getHeight

> **getHeight**: () => `number`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:124](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L124)

#### Returns

`number`

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`getHeight`](WebXRCompositionLayerWrapper.md#getheight)

***

### getWidth

> **getWidth**: () => `number`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:123](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L123)

#### Returns

`number`

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`getWidth`](WebXRCompositionLayerWrapper.md#getwidth)

***

### isMediaLayer

> `readonly` **isMediaLayer**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L32)

Whether this layer receives its content directly from an HTML media element.

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`isMediaLayer`](WebXRCompositionLayerWrapper.md#ismedialayer)

***

### isMultiview

> `readonly` **isMultiview**: `boolean`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:130](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L130)

Whether the layer renders both views into a texture array.

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`isMultiview`](WebXRCompositionLayerWrapper.md#ismultiview)

***

### isStatic

> `readonly` **isStatic**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:137](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L137)

Whether the layer can only be rendered when its native `needsRedraw` flag is set.

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`isStatic`](WebXRCompositionLayerWrapper.md#isstatic)

***

### layer

> `readonly` **layer**: `LayerT`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:125](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L125)

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`layer`](WebXRCompositionLayerWrapper.md#layer)

***

### layerType

> `readonly` **layerType**: `LayerTypeT`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:126](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L126)

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`layerType`](WebXRCompositionLayerWrapper.md#layertype)

***

### transformNode

> `readonly` **transformNode**: [`TransformNode`](TransformNode.md)

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:188](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L188)

The Babylon node whose world position and rotation are applied to the native layer.

***

### usesRenderTargetProvider

> `readonly` **usesRenderTargetProvider**: `boolean` = `true`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L37)

Whether Babylon should acquire subimages and expose render target textures for this layer.

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`usesRenderTargetProvider`](WebXRCompositionLayerWrapper.md#usesrendertargetprovider)

***

### usesSessionReferenceSpace

> `readonly` **usesSessionReferenceSpace**: `boolean`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:183](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L183)

Whether the layer should follow changes to the session manager's reference space.

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

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`fixedFoveation`](WebXRCompositionLayerWrapper.md#fixedfoveation)

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

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`forceMonoPresentation`](WebXRCompositionLayerWrapper.md#forcemonopresentation)

***

### isFixedFoveationSupported

#### Get Signature

> **get** **isFixedFoveationSupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/webXRLayerWrapper.ts:38](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRLayerWrapper.ts#L38)

Check if fixed foveation is supported by the wrapped XRWebGLLayer or XRProjectionLayer.

##### Returns

`boolean`

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`isFixedFoveationSupported`](WebXRCompositionLayerWrapper.md#isfixedfoveationsupported)

***

### isForceMonoPresentationSupported

#### Get Signature

> **get** **isForceMonoPresentationSupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:97](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L97)

Whether the native layer exposes mono-presentation control.

##### Returns

`boolean`

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`isForceMonoPresentationSupported`](WebXRCompositionLayerWrapper.md#isforcemonopresentationsupported)

***

### isOpacitySupported

#### Get Signature

> **get** **isOpacitySupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:42](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L42)

Whether the native layer exposes compositor opacity control.

##### Returns

`boolean`

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`isOpacitySupported`](WebXRCompositionLayerWrapper.md#isopacitysupported)

***

### isQualitySupported

#### Get Signature

> **get** **isQualitySupported**(): `boolean`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:70](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L70)

Whether the native layer exposes compositor quality hints.

##### Returns

`boolean`

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`isQualitySupported`](WebXRCompositionLayerWrapper.md#isqualitysupported)

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

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`opacity`](WebXRCompositionLayerWrapper.md#opacity)

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

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`quality`](WebXRCompositionLayerWrapper.md#quality)

***

### renderTargetTextureProvider

#### Get Signature

> **get** **renderTargetTextureProvider**(): [`Nullable`](../type-aliases/Nullable.md)\<`WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>\>

Defined in: [packages/dev/core/src/XR/webXRLayerWrapper.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRLayerWrapper.ts#L32)

The render target provider created for this layer, or `null` until one is created.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`WebXRLayerRenderTargetTextureProvider`\<`LayerTypeT`\>\>

#### Inherited from

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`renderTargetTextureProvider`](WebXRCompositionLayerWrapper.md#rendertargettextureprovider)

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

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`createRenderTargetTextureProvider`](WebXRCompositionLayerWrapper.md#createrendertargettextureprovider)

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:240](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L240)

Disposes the native layer wrapper and its Babylon transform node when the node was created by Babylon.

#### Returns

`void`

#### Overrides

[`WebXRCompositionLayerWrapper`](WebXRCompositionLayerWrapper.md).[`dispose`](WebXRCompositionLayerWrapper.md#dispose)

***

### updateFromTransformNode()

> **updateFromTransformNode**(`useRightHandedSystem`, `worldScalingFactor`): `void`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts:199](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRCompositionLayer.ts#L199)

Synchronizes the native layer with the current world transform of the Babylon node.

#### Parameters

##### useRightHandedSystem

`boolean`

whether the Babylon scene uses right-handed coordinates

##### worldScalingFactor

`number`

the number of Babylon scene units represented by one meter

#### Returns

`void`
