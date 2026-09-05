[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PostProcessRenderPipeline

# Class: PostProcessRenderPipeline

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:18](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L18)

PostProcessRenderPipeline

## See

https://doc.babylonjs.com/features/featuresDeepDive/postProcesses/postProcessRenderPipeline

## Extended by

- [`DefaultRenderingPipeline`](DefaultRenderingPipeline.md)
- [`LensRenderingPipeline`](LensRenderingPipeline.md)
- [`SSAO2RenderingPipeline`](SSAO2RenderingPipeline.md)
- [`SSAORenderingPipeline`](SSAORenderingPipeline.md)
- [`StandardRenderingPipeline`](StandardRenderingPipeline.md)
- [`SSRRenderingPipeline`](SSRRenderingPipeline.md)
- [`TAARenderingPipeline`](TAARenderingPipeline.md)
- [`FSR1RenderingPipeline`](FSR1RenderingPipeline.md)
- [`IblShadowsRenderPipeline`](IblShadowsRenderPipeline.md)

## Constructors

### Constructor

> **new PostProcessRenderPipeline**(`_engine`, `name`): `PostProcessRenderPipeline`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:66](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L66)

Initializes a PostProcessRenderPipeline

#### Parameters

##### \_engine

[`AbstractEngine`](AbstractEngine.md)

engine to add the pipeline to

##### name

`string`

name of the pipeline

#### Returns

`PostProcessRenderPipeline`

## Properties

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:26](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L26)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L47)

Gets the unique id of the post process rendering pipeline

## Accessors

### cameras

#### Get Signature

> **get** **cameras**(): [`Camera`](Camera.md)[]

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:50](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L50)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

***

### engine

#### Get Signature

> **get** **engine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:57](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L57)

Gets the active engine

##### Returns

[`AbstractEngine`](AbstractEngine.md)

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:90](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L90)

If all the render effects in the pipeline are supported

##### Returns

`boolean`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:40](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L40)

Gets pipeline name

##### Returns

`string`

## Methods

### addEffect()

> **addEffect**(`renderEffect`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:106](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L106)

Adds an effect to the pipeline

#### Parameters

##### renderEffect

[`PostProcessRenderEffect`](PostProcessRenderEffect.md)

the effect to add

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:285](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L285)

Disposes of the pipeline

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:83](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L83)

Gets the class name

#### Returns

`string`

"PostProcessRenderPipeline"

***

### setPrePassRenderer()

> **setPrePassRenderer**(`prePassRenderer`): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:277](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L277)

Sets the required values to the prepass renderer.

#### Parameters

##### prePassRenderer

[`PrePassRenderer`](PrePassRenderer.md)

defines the prepass renderer to setup.

#### Returns

`boolean`

true if the pre pass is needed.
