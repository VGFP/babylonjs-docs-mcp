[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IblShadowsRenderPipeline

# Class: IblShadowsRenderPipeline

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L128)

Voxel-based shadow rendering for IBL's.
This should not be instanciated directly, as it is part of a scene component

## Extends

- [`PostProcessRenderPipeline`](PostProcessRenderPipeline.md)

## Constructors

### Constructor

> **new IblShadowsRenderPipeline**(`name`, `scene`, `options?`, `cameras?`): `IblShadowsRenderPipeline`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:789](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L789)

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

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:26](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L26)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`inspectableCustomProperties`](PostProcessRenderPipeline.md#inspectablecustomproperties)

***

### onNewIblReadyObservable

> **onNewIblReadyObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:165](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L165)

Observable that triggers when a new IBL is set and the importance sampling is ready

***

### onShadowTextureReadyObservable

> **onShadowTextureReadyObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L160)

Observable that triggers when the shadow renderer is ready

***

### onVoxelizationCompleteObservable

> **onVoxelizationCompleteObservable**: [`Observable`](Observable.md)\<`void`\>

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:170](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L170)

Observable that triggers when the voxelization is complete

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L132)

The scene that this pipeline is attached to

***

### uniqueId

> `readonly` **uniqueId**: `number` = `UniqueIdGenerator.UniqueId`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L47)

Gets the unique id of the post process rendering pipeline

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`uniqueId`](PostProcessRenderPipeline.md#uniqueid)

***

### voxelGridSize

> **voxelGridSize**: `number` = `1.0`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:175](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L175)

The current world-space size of that the voxel grid covers in the scene.

## Accessors

### accumulationPassDebugEnabled

#### Get Signature

> **get** **accumulationPassDebugEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:507](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L507)

Display the debug view for the shadows accumulated over time.

##### Returns

`boolean`

#### Set Signature

> **set** **accumulationPassDebugEnabled**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:511](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L511)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### allowDebugPasses

#### Get Signature

> **get** **allowDebugPasses**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:670](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L670)

Allow debug passes to be enabled. Default is false.

##### Returns

`boolean`

#### Set Signature

> **set** **allowDebugPasses**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:677](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L677)

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

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:50](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L50)

Gets the list of attached cameras

##### Returns

[`Camera`](Camera.md)[]

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`cameras`](PostProcessRenderPipeline.md#cameras)

***

### cdfDebugEnabled

#### Get Signature

> **get** **cdfDebugEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:426](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L426)

Turn on or off the debug view of the CDF importance sampling data

##### Returns

`boolean`

#### Set Signature

> **set** **cdfDebugEnabled**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L433)

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

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L202)

Render the shadows in color rather than black and white.
This is slightly more expensive than black and white shadows but can be much
more accurate when the strongest lights in the IBL are non-white.

##### Returns

`boolean`

#### Set Signature

> **set** **coloredShadows**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L206)

##### Parameters

###### value

`boolean`

##### Returns

`void`

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

### envRotation

#### Get Signature

> **get** **envRotation**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:652](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L652)

The global Y-axis rotation of the IBL for shadows. This should match the Y-rotation of the environment map applied to materials, skybox, etc.

##### Returns

`number`

#### Set Signature

> **set** **envRotation**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:659](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L659)

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

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:406](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L406)

Turn on or off the debug view of the G-Buffer. This will display only the targets
of the g-buffer that are used by the shadow pipeline.

##### Returns

`boolean`

#### Set Signature

> **set** **gbufferDebugEnabled**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:410](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L410)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts:90](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/RenderPipeline/postProcessRenderPipeline.ts#L90)

If all the render effects in the pipeline are supported

##### Returns

`boolean`

#### Inherited from

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`isSupported`](PostProcessRenderPipeline.md#issupported)

***

### maxVoxelRouletteTests

#### Get Signature

> **get** **maxVoxelRouletteTests**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:247](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L247)

Maximum number of translucent voxels a shadow ray roulettes through before it is treated as
unoccluded. Higher values converge more accurately at extra cost. Opaque voxels always block.

##### Returns

`number`

#### Set Signature

> **set** **maxVoxelRouletteTests**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L251)

##### Parameters

###### value

`number`

##### Returns

`void`

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

### resolutionExp

#### Get Signature

> **get** **resolutionExp**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:599](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L599)

The exponent of the resolution of the voxel shadow grid. Higher resolutions will result in sharper
shadows but are more expensive to compute and require more memory.
The resolution is calculated as 2 to the power of this number.

##### Returns

`number`

#### Set Signature

> **set** **resolutionExp**(`newResolution`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:603](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L603)

##### Parameters

###### newResolution

`number`

##### Returns

`void`

***

### sampleDirections

#### Get Signature

> **get** **sampleDirections**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:618](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L618)

The number of different directions to sample during the voxel tracing pass

##### Returns

`number`

#### Set Signature

> **set** **sampleDirections**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:625](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L625)

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

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L188)

How dark the shadows appear. 1.0 is full opacity, 0.0 is no shadows.

##### Returns

`number`

#### Set Signature

> **set** **shadowOpacity**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:192](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L192)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowRemanence

#### Get Signature

> **get** **shadowRemanence**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:635](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L635)

The decree to which the shadows persist between frames. 0.0 is no persistence, 1.0 is full persistence.

##### Returns

`number`

#### Set Signature

> **set** **shadowRemanence**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:642](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L642)

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

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L217)

A multiplier for the render size of the shadows. Used for rendering lower-resolution shadows.

##### Returns

`number`

#### Set Signature

> **set** **shadowRenderSizeFactor**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:221](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L221)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### spatialBlurPassDebugEnabled

#### Get Signature

> **get** **spatialBlurPassDebugEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L481)

Display the debug view for the spatial blur pass

##### Returns

`boolean`

#### Set Signature

> **set** **spatialBlurPassDebugEnabled**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:485](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L485)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### ssShadowDistanceScale

#### Get Signature

> **get** **ssShadowDistanceScale**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:308](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L308)

A scale for the maximum distance a screen-space shadow can be cast in world-space.
The maximum distance that screen-space shadows cast is derived from the voxel size
and this value so shouldn't need to change if you scale your scene

##### Returns

`number`

#### Set Signature

> **set** **ssShadowDistanceScale**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:312](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L312)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowOpacity

#### Get Signature

> **get** **ssShadowOpacity**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:261](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L261)

How dark the screen-space shadows appear. 1.0 is full opacity, 0.0 is no shadows.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowOpacity**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:265](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L265)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowSampleCount

#### Get Signature

> **get** **ssShadowSampleCount**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:275](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L275)

The number of samples used in the screen space shadow pass.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowSampleCount**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:279](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L279)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowStride

#### Get Signature

> **get** **ssShadowStride**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:290](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L290)

The stride of the screen-space shadow pass. This controls the distance between samples
in pixels.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowStride**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:294](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L294)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowThicknessScale

#### Get Signature

> **get** **ssShadowThicknessScale**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:324](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L324)

Screen-space shadow thickness scale. This value controls the assumed thickness of
on-screen surfaces in world-space. It scales with the size of the shadow-casting
region so shouldn't need to change if you scale your scene.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowThicknessScale**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:328](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L328)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### voxelShadowOpacity

#### Get Signature

> **get** **voxelShadowOpacity**(): `number`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L232)

How dark the voxel shadows appear. 1.0 is full opacity, 0.0 is no shadows.

##### Returns

`number`

#### Set Signature

> **set** **voxelShadowOpacity**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:236](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L236)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### voxelTracingDebugEnabled

#### Get Signature

> **get** **voxelTracingDebugEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:455](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L455)

Display the debug view for just the shadow samples taken this frame.

##### Returns

`boolean`

#### Set Signature

> **set** **voxelTracingDebugEnabled**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:459](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L459)

##### Parameters

###### enabled

`boolean`

##### Returns

`void`

***

### IsSupported

#### Get Signature

> **get** `static` **IsSupported**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:698](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L698)

Support test.

##### Returns

`boolean`

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

### addShadowCastingMesh()

> **addShadowCastingMesh**(`mesh`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:535](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L535)

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

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1072](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1072)

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

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:585](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L585)

Clear the list of shadow-casting meshes. This will remove all meshes from the list

#### Returns

`void`

***

### clearShadowReceivingMaterials()

> **clearShadowReceivingMaterials**(): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1116](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1116)

Clear the list of materials that receive shadows. This will remove all materials from the list

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1202](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1202)

Disposes the IBL shadow pipeline and associated resources

#### Returns

`void`

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`dispose`](PostProcessRenderPipeline.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1195](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1195)

Get the class name

#### Returns

`string`

"IBLShadowsRenderPipeline"

#### Overrides

[`PostProcessRenderPipeline`](PostProcessRenderPipeline.md).[`getClassName`](PostProcessRenderPipeline.md#getclassname)

***

### isReady()

> **isReady**(): `boolean` \| `null`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1179](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1179)

Checks if the IBL shadow pipeline is ready to render shadows

#### Returns

`boolean` \| `null`

true if the IBL shadow pipeline is ready to render the shadows

***

### removeShadowCastingMesh()

> **removeShadowCastingMesh**(`mesh`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:560](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L560)

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

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:1093](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L1093)

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

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:181](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L181)

Reset the shadow accumulation. This has a similar affect to lowering the remanence for a single frame.
This is useful when making a sudden change to the IBL.

#### Returns

`void`

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

***

### toggleShadow()

> **toggleShadow**(`enabled`): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:710](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L710)

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

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:742](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L742)

Trigger the scene bounds of shadow-casters to be calculated. This is the world size that the voxel grid will cover and will always be a cube.

#### Returns

`void`

***

### updateVoxelization()

> **updateVoxelization**(): `void`

Defined in: [packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts:727](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/IBLShadows/iblShadowsRenderPipeline.pure.ts#L727)

Trigger the scene to be re-voxelized. This should be run when any shadow-casters have been added, removed or moved.

#### Returns

`void`
