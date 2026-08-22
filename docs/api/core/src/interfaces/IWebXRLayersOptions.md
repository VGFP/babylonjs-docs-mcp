[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRLayersOptions

# Interface: IWebXRLayersOptions

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L29)

Configuration options of the layers feature

## Properties

### preferMultiviewOnInit?

> `optional` **preferMultiviewOnInit?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L34)

Whether to try initializing the base projection layer as a multiview render target, if multiview is supported.
Defaults to false.

***

### projectionLayerInit?

> `optional` **projectionLayerInit?**: `Partial`\<`XRProjectionLayerInit`\>

Defined in: [packages/dev/core/src/XR/features/WebXRLayers.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRLayers.pure.ts#L39)

Optional configuration for the base projection layer.
