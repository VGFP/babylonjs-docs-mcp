[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRCompositionLayerCreationOptions

# Interface: IWebXRCompositionLayerCreationOptions\<TWebGLInit, TWebGPUInit\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L70)

Common options for creating a graphics-backed WebXR composition layer.

## Type Parameters

### TWebGLInit

`TWebGLInit`

the WebGL layer initialization dictionary

### TWebGPUInit

`TWebGPUInit`

the WebGPU layer initialization dictionary

## Properties

### fallbackMode?

> `optional` **fallbackMode?**: `"none"` \| `"mesh"`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L91)

Uses a Babylon mesh when the requested native layer factory is unavailable.
Import `@babylonjs/core/XR/features/WebXRLayersFallback` to enable this optional fallback.
Fallback is disabled by default.

***

### fallbackTexture?

> `optional` **fallbackTexture?**: [`BaseTexture`](../classes/BaseTexture.md)

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L96)

A texture to display on the fallback mesh.
Required when `fallbackMode` is `"mesh"`.

***

### gpuLayerInit?

> `optional` **gpuLayerInit?**: `Partial`\<`TWebGPUInit`\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:80](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L80)

WebGPU-specific initialization overrides.
Shared spatial and layout values are copied from `layerInit` before these overrides are applied.

***

### layerInit?

> `optional` **layerInit?**: `Partial`\<`TWebGLInit`\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L75)

Initialization values shared with the WebGL Layers API.
Babylon supplies the current reference space and projection-layer pixel dimensions when omitted.

***

### transformNode?

> `optional` **transformNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:85](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L85)

A Babylon node whose world position and rotation will be synchronized with the layer.
Babylon creates and owns a node when this is omitted.
