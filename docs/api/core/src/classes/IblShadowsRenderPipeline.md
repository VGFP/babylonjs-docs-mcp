[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IblShadowsRenderPipeline

# Class: IblShadowsRenderPipeline

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:121](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L121)

Voxel-based shadow rendering for IBL's.
This should not be instanciated directly, as it is part of a scene component

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Constructors

### Constructor

> **new IblShadowsRenderPipeline**(`name`, `scene`, `options?`, `cameras?`): `IblShadowsRenderPipeline`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:767](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L767)

#### Parameters

##### name

`string`

The rendering pipeline name

##### scene

[`Scene`](Scene.md)

The scene linked to this pipeline

##### options?

`Partial`\<`IIblShadowsSettings`\> = `{}`

Options to configure the pipeline

##### cameras?

[`Camera`](Camera.md)[]

Cameras to apply the pipeline to.

#### Returns

`IblShadowsRenderPipeline`

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

### onNewIblReadyObservable

> **onNewIblReadyObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L158)

Observable that triggers when a new IBL is set and the importance sampling is ready

***

### onShadowTextureReadyObservable

> **onShadowTextureReadyObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L153)

Observable that triggers when the shadow renderer is ready

***

### onVoxelizationCompleteObservable

> **onVoxelizationCompleteObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L163)

Observable that triggers when the voxelization is complete

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:125](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L125)

The scene that this pipeline is attached to

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:47](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L47)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

***

### voxelGridSize

> **voxelGridSize**: `number` = `1.0`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L168)

The current world-space size of that the voxel grid covers in the scene.

## Accessors

### accumulationPassDebugEnabled

#### Get Signature

> **get** **accumulationPassDebugEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:485](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L485)

Display the debug view for the shadows accumulated over time.

##### Returns

`boolean`

#### Set Signature

> **set** **accumulationPassDebugEnabled**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:489](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L489)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### allowDebugPasses

#### Get Signature

> **get** **allowDebugPasses**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:648](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L648)

Allow debug passes to be enabled. Default is false.

##### Returns

`boolean`

#### Set Signature

> **set** **allowDebugPasses**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:655](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L655)

Allow debug passes to be enabled. Default is false.

##### Parameters

###### value

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

### cdfDebugEnabled

#### Get Signature

> **get** **cdfDebugEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:404](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L404)

Turn on or off the debug view of the CDF importance sampling data

##### Returns

`boolean`

#### Set Signature

> **set** **cdfDebugEnabled**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:411](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L411)

Turn on or off the debug view of the CDF importance sampling data

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### coloredShadows

#### Get Signature

> **get** **coloredShadows**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:195](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L195)

Render the shadows in color rather than black and white.
This is slightly more expensive than black and white shadows but can be much
more accurate when the strongest lights in the IBL are non-white.

##### Returns

`boolean`

#### Set Signature

> **set** **coloredShadows**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:199](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L199)

##### Parameters

###### value

`boolean`

##### Returns

`void`

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

### envRotation

#### Get Signature

> **get** **envRotation**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:630](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L630)

The global Y-axis rotation of the IBL for shadows. This should match the Y-rotation of the environment map applied to materials, skybox, etc.

##### Returns

`number`

#### Set Signature

> **set** **envRotation**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:637](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L637)

The global Y-axis rotation of the IBL for shadows. This should match the Y-rotation of the environment map applied to materials, skybox, etc.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### gbufferDebugEnabled

#### Get Signature

> **get** **gbufferDebugEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:384](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L384)

Turn on or off the debug view of the G-Buffer. This will display only the targets
of the g-buffer that are used by the shadow pipeline.

##### Returns

`boolean`

#### Set Signature

> **set** **gbufferDebugEnabled**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:388](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L388)

##### Parameters

###### enabled

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

### resolutionExp

#### Get Signature

> **get** **resolutionExp**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:577](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L577)

The exponent of the resolution of the voxel shadow grid. Higher resolutions will result in sharper
shadows but are more expensive to compute and require more memory.
The resolution is calculated as 2 to the power of this number.

##### Returns

`number`

#### Set Signature

> **set** **resolutionExp**(`newResolution`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:581](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L581)

##### Parameters

###### newResolution

`number`

##### Returns

`void`

***

### sampleDirections

#### Get Signature

> **get** **sampleDirections**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:596](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L596)

The number of different directions to sample during the voxel tracing pass

##### Returns

`number`

#### Set Signature

> **set** **sampleDirections**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:603](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L603)

The number of different directions to sample during the voxel tracing pass

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowOpacity

#### Get Signature

> **get** **shadowOpacity**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:181](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L181)

How dark the shadows appear. 1.0 is full opacity, 0.0 is no shadows.

##### Returns

`number`

#### Set Signature

> **set** **shadowOpacity**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:185](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L185)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowRemanence

#### Get Signature

> **get** **shadowRemanence**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:613](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L613)

The decree to which the shadows persist between frames. 0.0 is no persistence, 1.0 is full persistence.

##### Returns

`number`

#### Set Signature

> **set** **shadowRemanence**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:620](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L620)

The decree to which the shadows persist between frames. 0.0 is no persistence, 1.0 is full persistence.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowRenderSizeFactor

#### Get Signature

> **get** **shadowRenderSizeFactor**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:210](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L210)

A multiplier for the render size of the shadows. Used for rendering lower-resolution shadows.

##### Returns

`number`

#### Set Signature

> **set** **shadowRenderSizeFactor**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L214)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### spatialBlurPassDebugEnabled

#### Get Signature

> **get** **spatialBlurPassDebugEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:459](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L459)

Display the debug view for the spatial blur pass

##### Returns

`boolean`

#### Set Signature

> **set** **spatialBlurPassDebugEnabled**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:463](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L463)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### ssShadowDistanceScale

#### Get Signature

> **get** **ssShadowDistanceScale**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:286](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L286)

A scale for the maximum distance a screen-space shadow can be cast in world-space.
The maximum distance that screen-space shadows cast is derived from the voxel size
and this value so shouldn't need to change if you scale your scene

##### Returns

`number`

#### Set Signature

> **set** **ssShadowDistanceScale**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:290](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L290)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowOpacity

#### Get Signature

> **get** **ssShadowOpacity**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L239)

How dark the screen-space shadows appear. 1.0 is full opacity, 0.0 is no shadows.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowOpacity**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:243](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L243)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowSampleCount

#### Get Signature

> **get** **ssShadowSampleCount**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:253](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L253)

The number of samples used in the screen space shadow pass.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowSampleCount**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:257](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L257)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowStride

#### Get Signature

> **get** **ssShadowStride**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:268](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L268)

The stride of the screen-space shadow pass. This controls the distance between samples
in pixels.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowStride**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:272](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L272)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowThicknessScale

#### Get Signature

> **get** **ssShadowThicknessScale**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L302)

Screen-space shadow thickness scale. This value controls the assumed thickness of
on-screen surfaces in world-space. It scales with the size of the shadow-casting
region so shouldn't need to change if you scale your scene.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowThicknessScale**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:306](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L306)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### voxelShadowOpacity

#### Get Signature

> **get** **voxelShadowOpacity**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L225)

How dark the voxel shadows appear. 1.0 is full opacity, 0.0 is no shadows.

##### Returns

`number`

#### Set Signature

> **set** **voxelShadowOpacity**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L229)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### voxelTracingDebugEnabled

#### Get Signature

> **get** **voxelTracingDebugEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L433)

Display the debug view for just the shadow samples taken this frame.

##### Returns

`boolean`

#### Set Signature

> **set** **voxelTracingDebugEnabled**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:437](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L437)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### IsSupported

#### Get Signature

> **get** `static` **IsSupported**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:676](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L676)

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

### addShadowCastingMesh()

> **addShadowCastingMesh**(`mesh`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:513](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L513)

Add a mesh to be used for shadow-casting in the IBL shadow pipeline.
These meshes will be written to the voxel grid.

#### Parameters

##### mesh

[`Mesh`](Mesh.md) \| [`Mesh`](Mesh.md)[]

A mesh or list of meshes that you want to cast shadows

#### Returns

`void`

***

### addShadowReceivingMaterial()

> **addShadowReceivingMaterial**(`material?`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1049](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1049)

Apply the shadows to a material or array of materials. If no material is provided, all
materials in the scene will be added.

#### Parameters

##### material?

[`Material`](Material.md) \| [`Material`](Material.md)[]

Material that will be affected by the shadows. If not provided, all materials of the scene will be affected.

#### Returns

`void`

***

### clearShadowCastingMeshes()

> **clearShadowCastingMeshes**(): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:563](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L563)

Clear the list of shadow-casting meshes. This will remove all meshes from the list

#### Returns

`void`

***

### clearShadowReceivingMaterials()

> **clearShadowReceivingMaterials**(): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1093](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1093)

Clear the list of materials that receive shadows. This will remove all materials from the list

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1179](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1179)

Disposes the IBL shadow pipeline and associated resources

#### Returns

`void`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`dispose`](PostProcessRenderPipeline.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1172](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1172)

Get the class name

#### Returns

`string`

"IBLShadowsRenderPipeline"

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### isReady()

> **isReady**(): `boolean` \| `null`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1156](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1156)

Checks if the IBL shadow pipeline is ready to render shadows

#### Returns

`boolean` \| `null`

true if the IBL shadow pipeline is ready to render the shadows

***

### removeShadowCastingMesh()

> **removeShadowCastingMesh**(`mesh`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:538](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L538)

Remove a mesh from the shadow-casting list. The mesh will no longer be written
to the voxel grid and will not cast shadows.

#### Parameters

##### mesh

[`Mesh`](Mesh.md) \| [`Mesh`](Mesh.md)[]

The mesh or list of meshes that you don't want to cast shadows.

#### Returns

`void`

***

### removeShadowReceivingMaterial()

> **removeShadowReceivingMaterial**(`material`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1070](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1070)

Remove a material from the list of materials that receive shadows. If no material
is provided, all materials in the scene will be removed.

#### Parameters

##### material

[`Material`](Material.md) \| [`Material`](Material.md)[]

The material or array of materials that will no longer receive shadows

#### Returns

`void`

***

### resetAccumulation()

> **resetAccumulation**(): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:174](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L174)

Reset the shadow accumulation. This has a similar affect to lowering the remanence for a single frame.
This is useful when making a sudden change to the IBL.

#### Returns

`void`

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

***

### toggleShadow()

> **toggleShadow**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:688](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L688)

Toggle the shadow tracing on or off

#### Parameters

##### enabled

`boolean`

Toggle the shadow tracing on or off

#### Returns

`void`

***

### updateSceneBounds()

> **updateSceneBounds**(): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:720](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L720)

Trigger the scene bounds of shadow-casters to be calculated. This is the world size that the voxel grid will cover and will always be a cube.

#### Returns

`void`

***

### updateVoxelization()

> **updateVoxelization**(): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:705](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L705)

Trigger the scene to be re-voxelized. This should be run when any shadow-casters have been added, removed or moved.

#### Returns

`void`
