[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRLightEstimationOptions

# Interface: IWebXRLightEstimationOptions

Defined in: [packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L28)

Options for Light Estimation feature

## Properties

### createDirectionalLightSource?

> `optional` **createDirectionalLightSource?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L52)

Should a directional light source be created.
If created, this light source will be updated whenever the light estimation values change

***

### cubeMapPollInterval?

> `optional` **cubeMapPollInterval?**: `number`

Defined in: [packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:42](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L42)

How often should the cubemap update in ms.
If not set the cubemap will be updated every time the underlying system updates the environment texture.

***

### directionalLightIntensityFactor?

> `optional` **directionalLightIntensityFactor?**: `number`

Defined in: [packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:56](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L56)

The scale factor to multiply the intensity of the directional light by. Defaults to 1.0.

***

### disableCubeMapReflection?

> `optional` **disableCubeMapReflection?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L32)

Disable the cube map reflection feature. In this case only light direction and color will be updated

***

### disablePreFiltering?

> `optional` **disablePreFiltering?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L75)

disable prefiltering the cube map texture

***

### disableSphericalPolynomial?

> `optional` **disableSphericalPolynomial?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L70)

disable applying the spherical polynomial to the cube map texture

***

### disableVectorReuse?

> `optional` **disableVectorReuse?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:65](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L65)

Should the light estimation's needed vectors be constructed on each frame.
Use this when you use those vectors and don't want their values to change outside of the light estimation feature

***

### lightEstimationPollInterval?

> `optional` **lightEstimationPollInterval?**: `number`

Defined in: [packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L47)

How often should the light estimation properties update in ms.
If not set the light estimation properties will be updated on every frame (depending on the underlying system)

***

### reflectionFormat?

> `optional` **reflectionFormat?**: `XRReflectionFormat`

Defined in: [packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:60](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L60)

Define the format to be used for the light estimation texture.

***

### setSceneEnvironmentTexture?

> `optional` **setSceneEnvironmentTexture?**: `boolean`

Defined in: [packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRLightEstimation.pure.ts#L37)

Should the scene's env texture be set to the cube map reflection texture
Note that this doesn't work is disableCubeMapReflection if set to false
