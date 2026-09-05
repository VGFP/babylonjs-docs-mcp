[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRImageTrackingOptions

# Interface: IWebXRImageTrackingOptions

Defined in: [packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L14)

Options interface for the background remover plugin

## Properties

### images

> **images**: `object`[]

Defined in: [packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L18)

A required array with images to track

#### estimatedRealWorldWidth

> **estimatedRealWorldWidth**: `number`

The estimated width in the real world (in meters)

#### src

> **src**: `string` \| `ImageBitmap`

The source of the image. can be a URL or an image bitmap
