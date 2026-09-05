[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRFallbackLayerWrapper

# Interface: WebXRFallbackLayerWrapper

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts:40](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts#L40)

Wraps a mesh used when a requested native WebXR composition layer is unavailable.

## Properties

### isNative

> `readonly` **isNative**: `false` = `false`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts#L55)

Whether this wrapper is backed by a native WebXR composition layer.

***

### layer

> `readonly` **layer**: `null` = `null`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts:50](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts#L50)

The native layer is always `null` for a fallback wrapper.

***

### layerType

> `readonly` **layerType**: [`WebXRSpatialLayerType`](../type-aliases/WebXRSpatialLayerType.md)

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts:72](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts#L72)

The requested WebXR composition layer type.

***

### mesh

> `readonly` **mesh**: [`Mesh`](../classes/Mesh.md)

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts:60](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts#L60)

The Babylon mesh that approximates the requested composition layer.

***

### texture

> `readonly` **texture**: [`BaseTexture`](../classes/BaseTexture.md)

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts:65](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts#L65)

The texture displayed by the fallback mesh.

***

### transformNode

> `readonly` **transformNode**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts:80](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts#L80)

The Babylon node whose world position and rotation control the fallback mesh.

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts:188](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts#L188)

Disposes the fallback mesh, material, and any resources owned by this wrapper.

#### Returns

`void`

***

### updateFromTransformNode()

> **updateFromTransformNode**(`worldScalingFactor?`): `void`

Defined in: [packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts:174](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/Layers/WebXRFallbackLayer.ts#L174)

Copies the transform node's world position and rotation to the fallback mesh without applying the node's scaling.

#### Parameters

##### worldScalingFactor?

`number` = `1`

the number of Babylon scene units represented by one meter

#### Returns

`void`
