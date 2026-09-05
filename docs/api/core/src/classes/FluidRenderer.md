[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FluidRenderer

# Class: FluidRenderer

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L124)

Class responsible for fluid rendering.
It is implementing the method described in https://developer.download.nvidia.com/presentations/2010/gdc/Direct3D_Effects.pdf

## Constructors

### Constructor

> **new FluidRenderer**(`scene`): `FluidRenderer`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:159](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L159)

Initializes the class

#### Parameters

##### scene

[`Scene`](Scene.md)

Scene in which the objects are part of

#### Returns

`FluidRenderer`

## Properties

### renderObjects

> `readonly` **renderObjects**: [`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)[]

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L140)

Retrieves all the render objects managed by the class

***

### targetRenderers

> `readonly` **targetRenderers**: [`FluidRenderingTargetRenderer`](FluidRenderingTargetRenderer.md)[]

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L143)

Retrieves all the render target renderers managed by the class

## Accessors

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:151](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L151)

Gets the shader language used in this renderer

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### addCustomParticles()

> **addCustomParticles**(`buffers`, `numParticles`, `generateDiffuseTexture?`, `targetRenderer?`, `camera?`): [`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:244](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L244)

Adds a custom particle set to the fluid renderer.

#### Parameters

##### buffers

The list of buffers (should contain at least a "position" buffer!)

##### numParticles

`number`

Number of particles in each buffer

##### generateDiffuseTexture?

`boolean`

True if you want to generate a diffuse texture from buffers and use it as part of the fluid rendering (default: false). For the texture to be generated correctly, you need a "color" buffer in the set!

##### targetRenderer?

[`FluidRenderingTargetRenderer`](FluidRenderingTargetRenderer.md)

The target renderer used to display the particle system as a fluid. If not provided, the method will create a new one

##### camera?

[`Camera`](Camera.md)

The camera used by the target renderer (if the target renderer is created by the method)

#### Returns

[`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)

the render object corresponding to the custom particle set

***

### addParticleSystem()

> **addParticleSystem**(`ps`, `generateDiffuseTexture?`, `targetRenderer?`, `camera?`): [`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L206)

Adds a particle system to the fluid renderer.

#### Parameters

##### ps

[`IParticleSystem`](../interfaces/IParticleSystem.md)

particle system

##### generateDiffuseTexture?

`boolean`

True if you want to generate a diffuse texture from the particle system and use it as part of the fluid rendering (default: false)

##### targetRenderer?

[`FluidRenderingTargetRenderer`](FluidRenderingTargetRenderer.md)

The target renderer used to display the particle system as a fluid. If not provided, the method will create a new one

##### camera?

[`Camera`](Camera.md)

The camera used by the target renderer (if the target renderer is created by the method)

#### Returns

[`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)

the render object corresponding to the particle system

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:516](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L516)

Disposes of all the resources used by the class

#### Returns

`void`

***

### getRenderObjectFromParticleSystem()

> **getRenderObjectFromParticleSystem**(`ps`): [`Nullable`](../type-aliases/Nullable.md)\<[`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)\>

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:193](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L193)

Gets the render object corresponding to a particle system (null if the particle system is not rendered as a fluid)

#### Parameters

##### ps

[`IParticleSystem`](../interfaces/IParticleSystem.md)

The particle system

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)\>

the render object corresponding to this particle system if any, otherwise null

***

### recreate()

> **recreate**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L183)

Reinitializes the class
Can be used if you change the object priority (FluidRenderingObject.priority), to make sure the objects are rendered in the right order

#### Returns

`void`

***

### removeRenderObject()

> **removeRenderObject**(`renderObject`, `removeUnusedTargetRenderer?`): `boolean`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:285](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L285)

Removes a render object from the fluid renderer

#### Parameters

##### renderObject

[`IFluidRenderingRenderObject`](../interfaces/IFluidRenderingRenderObject.md)

the render object to remove

##### removeUnusedTargetRenderer?

`boolean` = `true`

True to remove/dispose of the target renderer if it's not used anymore (default: true)

#### Returns

`boolean`

True if the render object has been found and released, else false
