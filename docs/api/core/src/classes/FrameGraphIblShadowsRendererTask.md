[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FrameGraphIblShadowsRendererTask

# Class: FrameGraphIblShadowsRendererTask

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L27)

Composite task that owns the individual IBL shadows frame graph tasks.
The frame graph remains flat internally, but this task groups the pipeline
and owns the child task implementation details.

## Extends

- [`FrameGraphTask`](FrameGraphTask.md)

## Constructors

### Constructor

> **new FrameGraphIblShadowsRendererTask**(`name`, `frameGraph`): `FrameGraphIblShadowsRendererTask`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:532](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L532)

Creates a new IBL shadows composite task.

#### Parameters

##### name

`string`

The task name.

##### frameGraph

[`FrameGraph`](FrameGraph.md)

The owning frame graph.

#### Returns

`FrameGraphIblShadowsRendererTask`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`constructor`](FrameGraphTask.md#constructor)

## Properties

### dependencies?

> `optional` **dependencies?**: `Set`\<`number`\>

Defined in: [packages/dev/core/src/FrameGraph/frameGraphTask.ts:68](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L68)

The (texture) dependencies of the task (optional).

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`dependencies`](FrameGraphTask.md#dependencies)

***

### depthTexture

> **depthTexture**: `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L135)

Depth texture handle used by tracing and blur.
This should be the screen-space depth of all objects in the scene
that will receive shadows.
It is important that this texture stores 32-bit depth values to avoid artifacts.

***

### normalTexture

> **normalTexture**: `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:144](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L144)

World-space normal texture handle used by tracing and blur.
This should store the world-space normals of all objects in the scene
that will receive shadows. Each component should be normalized to [0, 1] rather than [-1, 1].
Recommended to be 16-bit floating point though 8-bit unsigned byte can be used with minimal
loss in quality.

***

### onAfterTaskExecute

> **onAfterTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [packages/dev/core/src/FrameGraph/frameGraphTask.ts:107](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L107)

An observable that is triggered after the task is executed.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onAfterTaskExecute`](FrameGraphTask.md#onaftertaskexecute)

***

### onBeforeTaskExecute

> **onBeforeTaskExecute**: [`Observable`](Observable.md)\<[`FrameGraphTask`](FrameGraphTask.md)\>

Defined in: [packages/dev/core/src/FrameGraph/frameGraphTask.ts:102](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L102)

An observable that is triggered before the task is executed.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onBeforeTaskExecute`](FrameGraphTask.md#onbeforetaskexecute)

***

### onTexturesAllocatedObservable

> **onTexturesAllocatedObservable**: [`Observable`](Observable.md)\<[`FrameGraphRenderContext`](FrameGraphRenderContext.md)\>

Defined in: [packages/dev/core/src/FrameGraph/frameGraphTask.ts:97](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L97)

An observable that is triggered after the textures have been allocated.

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`onTexturesAllocatedObservable`](FrameGraphTask.md#ontexturesallocatedobservable)

***

### outputTexture

> `readonly` **outputTexture**: `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L29)

Final frame-graph texture handle produced by the task.

***

### positionTexture

> **positionTexture**: `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L152)

Position texture handle used by accumulation.
This should store the world-space position of all objects in the scene
that will receive shadows.
Should be stored as 16-bit floating point.

***

### velocityTexture

> **velocityTexture**: `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L160)

Velocity texture handle used by accumulation.
This should store the linear velocity per pixel of all objects in the scene
that will receive shadows.
Should be stored as 16-bit floating point.

## Accessors

### camera

#### Get Signature

> **get** **camera**(): [`Camera`](Camera.md)

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L103)

Camera used by the tracing stage.

##### Returns

[`Camera`](Camera.md)

#### Set Signature

> **set** **camera**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L108)

Camera used by the tracing stage.

##### Parameters

###### value

[`Camera`](Camera.md)

##### Returns

`void`

***

### coloredShadows

#### Get Signature

> **get** **coloredShadows**(): `boolean`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:176](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L176)

Whether traced shadows preserve environment color.

##### Returns

`boolean`

#### Set Signature

> **set** **coloredShadows**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:181](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L181)

Whether traced shadows preserve environment color.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L88)

Whether the task is disabled.

##### Returns

`boolean`

#### Set Signature

> **set** **disabled**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:92](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L92)

Whether the task is disabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`disabled`](FrameGraphTask.md#disabled)

***

### envRotation

#### Get Signature

> **get** **envRotation**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:279](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L279)

Environment rotation in radians.

##### Returns

`number`

#### Set Signature

> **set** **envRotation**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:284](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L284)

Environment rotation in radians.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L64)

The name of the task.

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L68)

The name of the task.

##### Parameters

###### value

`string`

##### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`name`](FrameGraphTask.md#name)

***

### objectList

#### Get Signature

> **get** **objectList**(): [`FrameGraphObjectList`](FrameGraphObjectList.md)

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L113)

Object list used by voxelization.

##### Returns

[`FrameGraphObjectList`](FrameGraphObjectList.md)

#### Set Signature

> **set** **objectList**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L118)

Object list used by voxelization.

##### Parameters

###### value

[`FrameGraphObjectList`](FrameGraphObjectList.md)

##### Returns

`void`

***

### onOutputTextureReadyObservable

#### Get Signature

> **get** **onOutputTextureReadyObservable**(): [`Observable`](Observable.md)\<[`InternalTexture`](InternalTexture.md)\>

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L356)

Notifies when the accumulated output texture becomes ready.

##### Returns

[`Observable`](Observable.md)\<[`InternalTexture`](InternalTexture.md)\>

***

### outputTextureReady

#### Get Signature

> **get** **outputTextureReady**(): `boolean`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:351](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L351)

True when the accumulated output texture is ready.

##### Returns

`boolean`

***

### passes

#### Get Signature

> **get** **passes**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [packages/dev/core/src/FrameGraph/frameGraphTask.ts:54](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L54)

Gets the passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`passes`](FrameGraphTask.md#passes)

***

### passesDisabled

#### Get Signature

> **get** **passesDisabled**(): [`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

Defined in: [packages/dev/core/src/FrameGraph/frameGraphTask.ts:61](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/frameGraphTask.ts#L61)

Gets the disabled passes of the task.

##### Returns

[`IFrameGraphPass`](../interfaces/IFrameGraphPass.md)[]

#### Inherited from

[`FrameGraphTask`](FrameGraphTask.md).[`passesDisabled`](FrameGraphTask.md#passesdisabled)

***

### refreshRate

#### Get Signature

> **get** **refreshRate**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:326](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L326)

Voxelization refresh rate.

##### Returns

`number`

#### Set Signature

> **set** **refreshRate**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:331](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L331)

Voxelization refresh rate.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### resolutionExp

#### Get Signature

> **get** **resolutionExp**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:315](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L315)

Voxelization resolution exponent.

##### Returns

`number`

#### Set Signature

> **set** **resolutionExp**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L320)

Voxelization resolution exponent.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### sampleDirections

#### Get Signature

> **get** **sampleDirections**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:165](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L165)

Number of tracing sample directions.

##### Returns

`number`

#### Set Signature

> **set** **sampleDirections**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:170](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L170)

Number of tracing sample directions.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowOpacity

#### Get Signature

> **get** **shadowOpacity**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L302)

Final material shadow opacity.

##### Returns

`number`

#### Set Signature

> **set** **shadowOpacity**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:307](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L307)

Final material shadow opacity.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### shadowRemanence

#### Get Signature

> **get** **shadowRemanence**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:292](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L292)

Temporal shadow remanence while moving.

##### Returns

`number`

#### Set Signature

> **set** **shadowRemanence**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L297)

Temporal shadow remanence while moving.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowDistanceScale

#### Get Signature

> **get** **ssShadowDistanceScale**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L235)

Distance scale used by screen-space shadow tracing.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowDistanceScale**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:240](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L240)

Distance scale used by screen-space shadow tracing.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowOpacity

#### Get Signature

> **get** **ssShadowOpacity**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:202](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L202)

Opacity of screen-space shadows.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowOpacity**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L207)

Opacity of screen-space shadows.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowSampleCount

#### Get Signature

> **get** **ssShadowSampleCount**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:213](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L213)

Number of screen-space shadow samples.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowSampleCount**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:218](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L218)

Number of screen-space shadow samples.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowStride

#### Get Signature

> **get** **ssShadowStride**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:224](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L224)

Stride used by screen-space shadow sampling.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowStride**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L229)

Stride used by screen-space shadow sampling.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ssShadowThicknessScale

#### Get Signature

> **get** **ssShadowThicknessScale**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:246](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L246)

Thickness scale used by screen-space shadow tracing.

##### Returns

`number`

#### Set Signature

> **set** **ssShadowThicknessScale**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L251)

Thickness scale used by screen-space shadow tracing.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### triPlanarVoxelization

#### Get Signature

> **get** **triPlanarVoxelization**(): `boolean`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L336)

Whether tri-planar voxelization is used.

##### Returns

`boolean`

#### Set Signature

> **set** **triPlanarVoxelization**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:341](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L341)

Whether tri-planar voxelization is used.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### voxelDirectionBias

#### Get Signature

> **get** **voxelDirectionBias**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:268](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L268)

Voxel tracing direction bias.

##### Returns

`number`

#### Set Signature

> **set** **voxelDirectionBias**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:273](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L273)

Voxel tracing direction bias.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### voxelGridSize

#### Get Signature

> **get** **voxelGridSize**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:346](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L346)

Current world-space voxel grid size.

##### Returns

`number`

***

### voxelNormalBias

#### Get Signature

> **get** **voxelNormalBias**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:257](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L257)

Voxel tracing normal bias.

##### Returns

`number`

#### Set Signature

> **set** **voxelNormalBias**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L262)

Voxel tracing normal bias.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### voxelShadowOpacity

#### Get Signature

> **get** **voxelShadowOpacity**(): `number`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:191](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L191)

Opacity of voxel-traced shadows.

##### Returns

`number`

#### Set Signature

> **set** **voxelShadowOpacity**(`value`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:196](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L196)

Opacity of voxel-traced shadows.

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### addShadowCastingMesh()

> **addShadowCastingMesh**(`mesh`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:432](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L432)

Adds one or more meshes to the voxelization object list.

#### Parameters

##### mesh

[`Mesh`](Mesh.md) \| [`Mesh`](Mesh.md)[]

The mesh or meshes to add.

#### Returns

`void`

***

### addShadowReceivingMaterial()

> **addShadowReceivingMaterial**(`material?`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:381](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L381)

Adds one or more materials that should receive IBL shadows.

#### Parameters

##### material?

[`Material`](Material.md) \| [`Material`](Material.md)[]

The material or materials to register. If omitted, all scene materials are added.

#### Returns

`void`

***

### clearShadowCastingMeshes()

> **clearShadowCastingMeshes**(): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:458](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L458)

Clears all shadow-casting meshes from the voxelization object list.

#### Returns

`void`

***

### clearShadowReceivingMaterials()

> **clearShadowReceivingMaterials**(): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:417](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L417)

Clears all registered shadow-receiving materials.

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:517](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L517)

Disposes the task and owned resources.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`dispose`](FrameGraphTask.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:60](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L60)

Gets the class name.

#### Returns

`string`

The class name.

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`getClassName`](FrameGraphTask.md#getclassname)

***

### initAsync()

> **initAsync**(): `Promise`\<`unknown`\>

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:466](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L466)

This function is called once after the task has been added to the frame graph and before the frame graph is built for the first time.
This allows you to initialize asynchronous resources, which is not possible in the constructor.

#### Returns

`Promise`\<`unknown`\>

A promise that resolves when the initialization is complete.

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`initAsync`](FrameGraphTask.md#initasync)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:477](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L477)

Checks if the task is ready to be executed.

#### Returns

`boolean`

True if the task is ready to be executed, else false.

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`isReady`](FrameGraphTask.md#isready)

***

### record()

> **record**(): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:485](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L485)

Records the parent task.
Child tasks record the actual passes.

#### Returns

`void`

#### Overrides

[`FrameGraphTask`](FrameGraphTask.md).[`record`](FrameGraphTask.md#record)

***

### removeShadowCastingMesh()

> **removeShadowCastingMesh**(`mesh`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L446)

Removes one or more meshes from the voxelization object list.

#### Parameters

##### mesh

[`Mesh`](Mesh.md) \| [`Mesh`](Mesh.md)[]

The mesh or meshes to remove.

#### Returns

`void`

***

### removeShadowReceivingMaterial()

> **removeShadowReceivingMaterial**(`material`): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:401](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L401)

Removes one or more materials from IBL shadow reception.

#### Parameters

##### material

[`Material`](Material.md) \| [`Material`](Material.md)[]

The material or materials to unregister.

#### Returns

`void`

***

### resetAccumulation()

> **resetAccumulation**(): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:373](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L373)

Resets temporal accumulation.

#### Returns

`void`

***

### updateSceneBounds()

> **updateSceneBounds**(): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:368](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L368)

Recomputes the voxelization scene bounds from the current object list.

#### Returns

`void`

***

### updateVoxelization()

> **updateVoxelization**(): `void`

Defined in: [packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts:363](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Tasks/Rendering/iblShadowsRendererTask.pure.ts#L363)

Triggers a voxelization refresh on the next eligible frame.

#### Returns

`void`
