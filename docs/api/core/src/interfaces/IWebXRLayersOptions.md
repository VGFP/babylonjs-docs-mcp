[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRLayersOptions

# Interface: IWebXRLayersOptions

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L52)

Configuration options of the layers feature

## Properties

### preferMultiviewOnInit?

> `optional` **preferMultiviewOnInit?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L57)

Whether to try initializing the base projection layer as a multiview render target, if multiview is supported.
Defaults to false.

***

### projectionLayerInit?

> `optional` **projectionLayerInit?**: `Partial`\<`XRProjectionLayerInit`\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L62)

Optional configuration for the base projection layer.
