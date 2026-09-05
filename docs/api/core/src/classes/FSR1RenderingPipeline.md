[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FSR1RenderingPipeline

# Class: FSR1RenderingPipeline

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L14)

FidelityFX Super Resolution (FSR) 1 render pipeline.
This can be used to render the scene at a lower resolution and upscale it.

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Constructors

### Constructor

> **new FSR1RenderingPipeline**(`name`, `scene`, `cameras?`): `FSR1RenderingPipeline`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:121](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L121)

Creates a new FSR 1 rendering pipeline

#### Parameters

##### name

`string`

The rendering pipeline name

##### scene

[`Scene`](Scene.md)

The scene linked to this pipeline

##### cameras?

[`Camera`](Camera.md)[] = `scene.cameras`

The array of cameras that the rendering pipeline will be attached to (default: scene.cameras)

#### Returns

`FSR1RenderingPipeline`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`constructor`](PostProcessRenderPipeline.md#constructor)

## Properties

### FSR1SharpenEffect

> **FSR1SharpenEffect**: `string` = `"FSR1SharpenEffect"`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:111](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L111)

The FSR sharpen PostProcess ID in the pipeline

***

### FSR1UpscaleEffect

> **FSR1UpscaleEffect**: `string` = `"FSR1UpscaleEffect"`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:103](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L103)

The FSR upscale PostProcess ID in the pipeline

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:26](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L26)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`inspectableCustomProperties`](PostProcessRenderPipeline.md#inspectablecustomproperties)

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L47)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

***

### SCALE\_BALANCED

> `readonly` `static` **SCALE\_BALANCED**: `1.7` = `1.7`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:26](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L26)

AMD's recommended `scaleFactor` for a "Balanced" preset (equal to 1.7)

***

### SCALE\_PERFORMANCE

> `readonly` `static` **SCALE\_PERFORMANCE**: `2` = `2`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:30](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L30)

AMD's recommended `scaleFactor` for a "Performance" preset (equal to 2)

***

### SCALE\_QUALITY

> `readonly` `static` **SCALE\_QUALITY**: `1.5` = `1.5`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:22](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L22)

AMD's recommended `scaleFactor` for a "Quality" preset (equal to 1.5)

***

### SCALE\_ULTRA\_QUALITY

> `readonly` `static` **SCALE\_ULTRA\_QUALITY**: `1.3` = `1.3`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:18](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L18)

AMD's recommended `scaleFactor` for an "Ultra Quality" preset (equal to 1.3)

## Accessors

### cameras

#### Get Signature

> **get** **cameras**(): [`Camera`](Camera.md)[]

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:50](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L50)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`cameras`](PostProcessRenderPipeline.md#cameras)

***

### engine

#### Get Signature

> **get** **engine**(): [`AbstractEngine`](AbstractEngine.md)

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:57](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L57)

Gets the active engine

##### Returns

[`AbstractEngine`](AbstractEngine.md)

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`engine`](PostProcessRenderPipeline.md#engine)

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L37)

Returns true if FSR is supported by the running hardware

##### Returns

`boolean`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`isSupported`](PostProcessRenderPipeline.md#issupported)

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:40](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L40)

Gets pipeline name

##### Returns

`string`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`name`](PostProcessRenderPipeline.md#name)

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:51](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L51)

MSAA sample count (default: 4).
Disabling MSAA is not recommended since aliased edges will be exaggerated by the FSR pass.
Always have at least one AA solution enabled, whether that be MSAA with this setting or a post-process effect like FXAA or TAA.

##### Returns

`number`

#### Set Signature

> **set** **samples**(`samples`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L55)

##### Parameters

###### samples

`number`

##### Returns

`void`

***

### scaleFactor

#### Get Signature

> **get** **scaleFactor**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:70](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L70)

How much smaller to render the scene at (default: 1.5).
For example, a value of 2 will render the scene at half resolution.

##### Returns

`number`

#### Set Signature

> **set** **scaleFactor**(`factor`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:74](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L74)

##### Parameters

###### factor

`number`

##### Returns

`void`

***

### sharpnessStops

#### Get Signature

> **get** **sharpnessStops**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:87](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L87)

The number of stops (halving) of the reduction of sharpness (default: 0.2).
A value of 0 indicates a maximum sharpness.

##### Returns

`number`

#### Set Signature

> **set** **sharpnessStops**(`stops`): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:91](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L91)

##### Parameters

###### stops

`number`

##### Returns

`void`

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

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`addEffect`](PostProcessRenderPipeline.md#addeffect)

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts:156](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/Pipelines/fsr1RenderingPipeline.ts#L156)

Disposes of the pipeline

#### Returns

`void`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`dispose`](PostProcessRenderPipeline.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:83](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L83)

Gets the class name

#### Returns

`string`

"PostProcessRenderPipeline"

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

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

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`setPrePassRenderer`](PostProcessRenderPipeline.md#setprepassrenderer)
