[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SSAO2RenderingPipeline

# Class: SSAO2RenderingPipeline

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L36)

Render pipeline to produce ssao effect

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Constructors

### Constructor

> **new SSAO2RenderingPipeline**(`name`, `scene`, `ratio`, `cameras?`, `forceGeometryBuffer?`, `textureType?`): `SSAO2RenderingPipeline`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:334](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L334)

Creates the SSAO2 rendering pipeline.

#### Parameters

##### name

`string`

The rendering pipeline name

##### scene

[`Scene`](Scene.md)

The scene linked to this pipeline

##### ratio

`any`

The size of the postprocesses. Can be a number shared between passes or an object for more precision: { ssaoRatio: 0.5, blurRatio: 1.0 }

##### cameras?

[`Camera`](Camera.md)[]

The array of cameras that the rendering pipeline will be attached to

##### forceGeometryBuffer?

`boolean` \| [`GeometryBufferRenderer`](GeometryBufferRenderer.md)

Set to true if you want to use the legacy geometry buffer renderer. You can also pass an existing instance of GeometryBufferRenderer if you want to use your own geometry buffer renderer.

##### textureType?

`number` = `Constants.TEXTURETYPE_UNSIGNED_BYTE`

The texture type used by the different post processes created by SSAO (default: Constants.TEXTURETYPE_UNSIGNED_BYTE)

#### Returns

`SSAO2RenderingPipeline`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`constructor`](PostProcessRenderPipeline.md#constructor)

## Properties

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:26](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L26)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`inspectableCustomProperties`](PostProcessRenderPipeline.md#inspectablecustomproperties)

***

### SSAOBlurHRenderEffect

> **SSAOBlurHRenderEffect**: `string` = `"SSAOBlurHRenderEffect"`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L53)

#### Ignore

The horizontal blur PostProcess id in the pipeline

***

### SSAOBlurVRenderEffect

> **SSAOBlurVRenderEffect**: `string` = `"SSAOBlurVRenderEffect"`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L58)

#### Ignore

The vertical blur PostProcess id in the pipeline

***

### SSAOCombineRenderEffect

> **SSAOCombineRenderEffect**: `string` = `"SSAOCombineRenderEffect"`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L63)

#### Ignore

The PostProcess id in the pipeline that combines the SSAO-Blur output with the original scene color (SSAOOriginalSceneColorEffect)

***

### SSAOOriginalSceneColorEffect

> **SSAOOriginalSceneColorEffect**: `string` = `"SSAOOriginalSceneColorEffect"`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L43)

#### Ignore

The PassPostProcess id in the pipeline that contains the original scene color

***

### SSAORenderEffect

> **SSAORenderEffect**: `string` = `"SSAORenderEffect"`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L48)

#### Ignore

The SSAO PostProcess id in the pipeline

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:47](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L47)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

## Accessors

### base

#### Get Signature

> **get** **base**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:193](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L193)

The base color of the SSAO post-process
The final result is "base + ssao" between [0, 1]

##### Returns

`number`

#### Set Signature

> **set** **base**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:197](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L197)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### bilateralSamples

#### Get Signature

> **get** **bilateralSamples**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:237](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L237)

The number of samples the bilateral filter uses in both dimensions when denoising the SSAO calculations. Default value is 16.

A higher value should result in smoother shadows but will use more processing time in the shaders.

A high value can cause the shadows to get to blurry or create visible artifacts (bands) near sharp details in the geometry. The artifacts can sometimes be mitigated by increasing the bilateralSoften setting.

##### Returns

`number`

#### Set Signature

> **set** **bilateralSamples**(`n`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:241](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L241)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### bilateralSoften

#### Get Signature

> **get** **bilateralSoften**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:255](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L255)

Controls the shape of the denoising kernel used by the bilateral filter. Default value is 0.

By default the bilateral filter acts like a box-filter, treating all samples on the same depth with equal weights. This is effective to maximize the denoising effect given a limited set of samples. However, it also often results in visible ghosting around sharp shadow regions and can spread out lines over large areas so they are no longer visible.

Increasing this setting will make the filter pay less attention to samples further away from the center sample, reducing many artifacts but at the same time increasing noise.

Useful value range is [0..1].

##### Returns

`number`

#### Set Signature

> **set** **bilateralSoften**(`n`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:259](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L259)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### bilateralTolerance

#### Get Signature

> **get** **bilateralTolerance**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:271](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L271)

How forgiving the bilateral denoiser should be when rejecting samples. Default value is 0.

A higher value results in the bilateral filter being more forgiving and thus doing a better job at denoising slanted and curved surfaces, but can lead to shadows spreading out around corners or between objects that are close to each other depth wise.

Useful value range is normally [0..1], but higher values are allowed.

##### Returns

`number`

#### Set Signature

> **set** **bilateralTolerance**(`n`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:275](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L275)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### bypassBlur

#### Get Signature

> **get** **bypassBlur**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:210](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L210)

##### Returns

`boolean`

#### Set Signature

> **set** **bypassBlur**(`b`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L207)

Skips the denoising (blur) stage of the SSAO calculations.

Useful to temporarily set while experimenting with the other SSAO2 settings.

##### Parameters

###### b

`boolean`

##### Returns

`void`

***

### cameras

#### Get Signature

> **get** **cameras**(): [`Camera`](Camera.md)[]

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:50](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L50)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`cameras`](PostProcessRenderPipeline.md#cameras)

***

### engine

#### Get Signature

> **get** **engine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:57](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L57)

Gets the active engine

##### Returns

[`AbstractEngine`](AbstractEngine.md)

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`engine`](PostProcessRenderPipeline.md#engine)

***

### epsilon

#### Get Signature

> **get** **epsilon**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L112)

##### Returns

`number`

#### Set Signature

> **set** **epsilon**(`n`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:109](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L109)

Used in SSAO calculations to compensate for accuracy issues with depth values. Default 0.02.

Normally you do not need to change this value, but you can experiment with it if you get a lot of in false self-occlusion on flat surfaces when using fewer than 16 samples. Useful range is normally [0..0.1] but higher values is allowed.

##### Parameters

###### n

`number`

##### Returns

`void`

***

### expensiveBlur

#### Get Signature

> **get** **expensiveBlur**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L225)

##### Returns

`boolean`

#### Set Signature

> **set** **expensiveBlur**(`b`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L222)

Enables the configurable bilateral denoising (blurring) filter. Default is true.
Set to false to instead use a legacy bilateral filter that can't be configured.

The denoising filter runs after the SSAO calculations and is a very important step. Both options results in a so called bilateral being used, but the "expensive" one can be
configured in several ways to fit your scene.

##### Parameters

###### b

`boolean`

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:90](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L90)

If all the render effects in the pipeline are supported

##### Returns

`boolean`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`isSupported`](PostProcessRenderPipeline.md#issupported)

***

### maxZ

#### Get Signature

> **get** **maxZ**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:83](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L83)

Maximum depth value to still render AO. A smooth falloff makes the dimming more natural, so there will be no abrupt shading change.

##### Returns

`number`

#### Set Signature

> **set** **maxZ**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L87)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### minZAspect

#### Get Signature

> **get** **minZAspect**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L95)

In order to save performances, SSAO radius is clamped on close geometry. This ratio changes by how much.

##### Returns

`number`

#### Set Signature

> **set** **minZAspect**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L99)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L40)

Gets pipeline name

##### Returns

`string`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`name`](PostProcessRenderPipeline.md#name)

***

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:180](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L180)

The radius around the analyzed pixel used by the SSAO post-process. Default value is 2.0

##### Returns

`number`

#### Set Signature

> **set** **radius**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:184](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L184)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L123)

##### Returns

`number`

#### Set Signature

> **set** **samples**(`n`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:120](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L120)

Number of samples used for the SSAO calculations. Default value is 8.

##### Parameters

###### n

`number`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:321](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L321)

Gets active scene

##### Returns

[`Scene`](Scene.md)

***

### textureSamples

#### Get Signature

> **get** **textureSamples**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:141](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L141)

##### Returns

`number`

#### Set Signature

> **set** **textureSamples**(`n`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L132)

Number of samples to use for antialiasing.

##### Parameters

###### n

`number`

##### Returns

`void`

***

### totalStrength

#### Get Signature

> **get** **totalStrength**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L71)

The output strength of the SSAO post-process. Default value is 1.0.

##### Returns

`number`

#### Set Signature

> **set** **totalStrength**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L75)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### useViewportInCombineStage

#### Get Signature

> **get** **useViewportInCombineStage**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:293](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L293)

Indicates that the combine stage should use the current camera viewport to render the SSAO result on only a portion of the output texture (default: true).

##### Returns

`boolean`

#### Set Signature

> **set** **useViewportInCombineStage**(`b`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L297)

##### Parameters

###### b

`boolean`

##### Returns

`void`

***

### IsSupported

#### Get Signature

> **get** `static` **IsSupported**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:282](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L282)

Support test.

##### Returns

`boolean`

## Methods

### addEffect()

> **addEffect**(`renderEffect`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:106](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L106)

Adds an effect to the pipeline

#### Parameters

##### renderEffect

[`PostProcessRenderEffect`](PostProcessRenderEffect.md)

the effect to add

#### Returns

`void`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`addEffect`](PostProcessRenderPipeline.md#addeffect)

***

### dispose()

> **dispose**(`disableGeometryBufferRenderer?`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:464](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L464)

Removes the internal pipeline assets and detaches the pipeline from the scene cameras

#### Parameters

##### disableGeometryBufferRenderer?

`boolean` = `false`

Set to true if you want to disable the Geometry Buffer renderer

#### Returns

`void`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`dispose`](PostProcessRenderPipeline.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:456](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L456)

Get the class name

#### Returns

`string`

"SSAO2RenderingPipeline"

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:305](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L305)

Checks if all the post processes in the pipeline are ready.

#### Returns

`boolean`

True if all the post processes in the pipeline are ready

***

### serialize()

> **serialize**(): `any`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts:608](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline.pure.ts#L608)

Serialize the rendering pipeline (Used when exporting)

#### Returns

`any`

the serialized object

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:277](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L277)

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`setPrePassRenderer`](PostProcessRenderPipeline.md#setprepassrenderer)
