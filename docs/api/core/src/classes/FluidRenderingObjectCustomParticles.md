[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FluidRenderingObjectCustomParticles

# Class: FluidRenderingObjectCustomParticles

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts#L14)

Defines a rendering object based on a list of custom buffers
The list must contain at least a "position" buffer!

## Extends

- [`FluidRenderingObject`](FluidRenderingObject.md)

## Constructors

### Constructor

> **new FluidRenderingObjectCustomParticles**(`scene`, `buffers`, `numParticles`, `shaderLanguage?`): `FluidRenderingObjectCustomParticles`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts:40](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts#L40)

Creates a new instance of the class

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the particles should be rendered into

##### buffers

The list of buffers (must contain at least one "position" buffer!). Note that you don't have to pass all (or any!) buffers at once in the constructor, you can use the addBuffers method to add more later.

##### numParticles

`number`

Number of vertices to take into account from the buffers

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

The shader language to use

#### Returns

`FluidRenderingObjectCustomParticles`

#### Overrides

[`FluidRenderingObject`](FluidRenderingObject.md).[`constructor`](FluidRenderingObject.md#constructor)

## Properties

### onParticleSizeChanged

> **onParticleSizeChanged**: [`Observable`](Observable.md)\<[`FluidRenderingObject`](FluidRenderingObject.md)\>

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L35)

Observable triggered when the size of the particle is changed

#### Inherited from

[`FluidRenderingObject`](FluidRenderingObject.md).[`onParticleSizeChanged`](FluidRenderingObject.md#onparticlesizechanged)

***

### particleThicknessAlpha

> **particleThicknessAlpha**: `number` = `0.05`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L52)

Defines the alpha value of a particle

#### Inherited from

[`FluidRenderingObject`](FluidRenderingObject.md).[`particleThicknessAlpha`](FluidRenderingObject.md#particlethicknessalpha)

***

### priority

> **priority**: `number` = `0`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:30](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L30)

Defines the priority of the object. Objects will be rendered in ascending order of priority

#### Inherited from

[`FluidRenderingObject`](FluidRenderingObject.md).[`priority`](FluidRenderingObject.md#priority)

***

### UsePerParticleSizeAttribute

> `static` **UsePerParticleSizeAttribute**: `boolean` = `false`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:20](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L20)

Uses each particle's own "size" vertex attribute instead
of a single uniform size for all particles (default: false, opt-in).

#### Inherited from

[`FluidRenderingObject`](FluidRenderingObject.md).[`UsePerParticleSizeAttribute`](FluidRenderingObject.md#useperparticlesizeattribute)

## Accessors

### indexBuffer

#### Get Signature

> **get** **indexBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:87](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L87)

Gets the index buffer (or null if the object is using instancing)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

#### Inherited from

[`FluidRenderingObject`](FluidRenderingObject.md).[`indexBuffer`](FluidRenderingObject.md#indexbuffer)

***

### numParticles

#### Get Signature

> **get** **numParticles**(): `number`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts:127](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts#L127)

Gets the number of particles in this object

##### Returns

`number`

The number of particles

#### Overrides

[`FluidRenderingObject`](FluidRenderingObject.md).[`numParticles`](FluidRenderingObject.md#numparticles)

***

### particleSize

#### Get Signature

> **get** **particleSize**(): `number`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:38](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L38)

Gets or sets the size of the particle

##### Returns

`number`

#### Set Signature

> **set** **particleSize**(`size`): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:42](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L42)

##### Parameters

###### size

`number`

##### Returns

`void`

#### Inherited from

[`FluidRenderingObject`](FluidRenderingObject.md).[`particleSize`](FluidRenderingObject.md#particlesize)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:104](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L104)

Gets the shader language used in this object

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

[`FluidRenderingObject`](FluidRenderingObject.md).[`shaderLanguage`](FluidRenderingObject.md#shaderlanguage)

***

### useInstancing

#### Get Signature

> **get** **useInstancing**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L55)

Indicates if the object uses instancing or not

##### Returns

`boolean`

#### Inherited from

[`FluidRenderingObject`](FluidRenderingObject.md).[`useInstancing`](FluidRenderingObject.md#useinstancing)

***

### useVelocity

#### Get Signature

> **get** **useVelocity**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:62](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L62)

Indicates if velocity of particles should be used when rendering the object. The vertex buffer set must contain a "velocity" buffer for this to work!

##### Returns

`boolean`

#### Set Signature

> **set** **useVelocity**(`use`): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:66](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L66)

##### Parameters

###### use

`boolean`

##### Returns

`void`

#### Inherited from

[`FluidRenderingObject`](FluidRenderingObject.md).[`useVelocity`](FluidRenderingObject.md#usevelocity)

***

### vertexBuffers

#### Get Signature

> **get** **vertexBuffers**(): `object`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts:29](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts#L29)

Gets the vertex buffers

##### Returns

`object`

#### Overrides

[`FluidRenderingObject`](FluidRenderingObject.md).[`vertexBuffers`](FluidRenderingObject.md#vertexbuffers)

## Methods

### addBuffers()

> **addBuffers**(`buffers`): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts:54](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts#L54)

Add some new buffers

#### Parameters

##### buffers

List of buffers

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts:171](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts#L171)

Releases the resources used by the class

#### Returns

`void`

#### Overrides

[`FluidRenderingObject`](FluidRenderingObject.md).[`dispose`](FluidRenderingObject.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts:22](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts#L22)

#### Returns

`string`

the name of the class

#### Overrides

[`FluidRenderingObject`](FluidRenderingObject.md).[`getClassName`](FluidRenderingObject.md#getclassname)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts:115](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts#L115)

Indicates if the object is ready to be rendered

#### Returns

`boolean`

True if everything is ready for the object to be rendered, otherwise false

#### Overrides

[`FluidRenderingObject`](FluidRenderingObject.md).[`isReady`](FluidRenderingObject.md#isready)

***

### renderDepthTexture()

> **renderDepthTexture**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:220](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L220)

Render the depth texture for this object

#### Returns

`void`

#### Inherited from

[`FluidRenderingObject`](FluidRenderingObject.md).[`renderDepthTexture`](FluidRenderingObject.md#renderdepthtexture)

***

### renderDiffuseTexture()

> **renderDiffuseTexture**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts:142](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts#L142)

Render the diffuse texture for this object

#### Returns

`void`

#### Overrides

[`FluidRenderingObject`](FluidRenderingObject.md).[`renderDiffuseTexture`](FluidRenderingObject.md#renderdiffusetexture)

***

### renderThicknessTexture()

> **renderThicknessTexture**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:250](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L250)

Render the thickness texture for this object

#### Returns

`void`

#### Inherited from

[`FluidRenderingObject`](FluidRenderingObject.md).[`renderThicknessTexture`](FluidRenderingObject.md#renderthicknesstexture)

***

### setNumParticles()

> **setNumParticles**(`num`): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts:135](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectCustomParticles.ts#L135)

Sets the number of particles in this object

#### Parameters

##### num

`number`

The number of particles to take into account

#### Returns

`void`
