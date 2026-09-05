[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRLayerCreationResult

# Type Alias: WebXRLayerCreationResult\<LayerT, LayerTypeT\>

> **WebXRLayerCreationResult**\<`LayerT`, `LayerTypeT`\> = [`WebXRSpatialLayerWrapper`](../classes/WebXRSpatialLayerWrapper.md)\<`LayerT`, `LayerTypeT`\> \| [`WebXRFallbackLayerWrapper`](../interfaces/WebXRFallbackLayerWrapper.md)

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L132)

The result of creating a spatial WebXR layer.
Native wrappers expose an XR composition layer, while fallback wrappers expose a Babylon mesh.

## Type Parameters

### LayerT

`LayerT` *extends* [`WebXRSpatialLayer`](WebXRSpatialLayer.md)

the native layer type

### LayerTypeT

`LayerTypeT` *extends* [`WebXRSpatialLayerType`](WebXRSpatialLayerType.md) = [`WebXRSpatialLayerType`](WebXRSpatialLayerType.md)
