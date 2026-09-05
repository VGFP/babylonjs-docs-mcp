[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRMediaLayerCreationOptions

# Interface: IWebXRMediaLayerCreationOptions\<InitT\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L103)

Common options for creating an XRMediaBinding layer.

## Type Parameters

### InitT

`InitT`

the media layer initialization dictionary

## Properties

### fallbackMode?

> `optional` **fallbackMode?**: `"none"` \| `"mesh"`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L119)

Uses a Babylon mesh and VideoTexture when XRMediaBinding is unavailable.
Import `@babylonjs/core/XR/features/WebXRLayersFallback` to enable this optional fallback.
Fallback is disabled by default.

***

### layerInit?

> `optional` **layerInit?**: `Partial`\<`InitT`\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L108)

Initialization values for the media layer.
Babylon supplies the current reference space when omitted.

***

### transformNode?

> `optional` **transformNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L113)

A Babylon node whose world position and rotation will be synchronized with the layer.
Babylon creates and owns a node when this is omitted.
