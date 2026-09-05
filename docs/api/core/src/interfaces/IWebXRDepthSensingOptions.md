[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRDepthSensingOptions

# Interface: IWebXRDepthSensingOptions

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L41)

Options for Depth Sensing feature

## Properties

### dataFormatPreference

> **dataFormatPreference**: [`WebXRDepthDataFormat`](../type-aliases/WebXRDepthDataFormat.md)[]

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L49)

The desired depth sensing data format for the session

***

### disableDepthSensingOnMaterials?

> `optional` **disableDepthSensingOnMaterials?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L55)

Depth sensing will be enabled on all materials per default, if the GPU variant is enabled.
If you just want to use the texture or the CPU variant instead set this to true.

***

### prepareTextureForVisualization?

> `optional` **prepareTextureForVisualization?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L69)

If set to true the texture will be set to be used for visualization.
In this case it will probably NOT work correctly on the materials.
So be aware that, for the time being, you can only use one or the other.

***

### usagePreference

> **usagePreference**: [`WebXRDepthUsage`](../type-aliases/WebXRDepthUsage.md)[]

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L45)

The desired depth sensing usage for the session

***

### useToleranceFactorForDepthSensing?

> `optional` **useToleranceFactorForDepthSensing?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts:62](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRDepthSensing.pure.ts#L62)

If set to true the occluded pixels will not be discarded but the pixel color will be changed based on the occlusion factor
Enabling this will lead to worse performance but slightly better outcome.
It is possible we will change this in the future to look even better.
