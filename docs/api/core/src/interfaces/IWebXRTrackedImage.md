[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRTrackedImage

# Interface: IWebXRTrackedImage

Defined in: [packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L33)

An object representing an image tracked by the system

## Properties

### emulated?

> `optional` **emulated?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L41)

Is the transformation provided emulated. If it is, the system "guesses" its real position. Otherwise it can be considered as exact position.

***

### id

> **id**: `number`

Defined in: [packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L37)

The ID of this image (which is the same as the position in the array that was used to initialize the feature)

***

### originalBitmap

> **originalBitmap**: `ImageBitmap`

Defined in: [packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L45)

Just in case it is needed - the image bitmap that is being tracked

***

### ratio?

> `optional` **ratio?**: `number`

Defined in: [packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L61)

The width/height ratio of this image. can be used to calculate the size of the detected object/image

***

### realWorldWidth?

> `optional` **realWorldWidth?**: `number`

Defined in: [packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L53)

Width in real world (meters)

***

### transformationMatrix

> **transformationMatrix**: [`Matrix`](../classes/Matrix.md)

Defined in: [packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L57)

A transformation matrix of this current image in the current reference space.

***

### xrTrackingResult?

> `optional` **xrTrackingResult?**: `XRImageTrackingResult`

Defined in: [packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/features/WebXRImageTracking.pure.ts#L49)

The native XR result image tracking result, untouched
