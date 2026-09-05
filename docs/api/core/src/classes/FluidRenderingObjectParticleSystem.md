[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FluidRenderingObjectParticleSystem

# Class: FluidRenderingObjectParticleSystem

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:17](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L17)

Defines a rendering object based on a particle system

## Extends

- [`FluidRenderingObject`](FluidRenderingObject.md)

## Constructors

### Constructor

> **new FluidRenderingObjectParticleSystem**(`scene`, `ps`, `shaderLanguage?`): `FluidRenderingObjectParticleSystem`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:86](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L86)

Creates a new instance of the class

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the particle system is part of

##### ps

[`IParticleSystem`](../interfaces/IParticleSystem.md)

The particle system

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

The shader language to use

#### Returns

`FluidRenderingObjectParticleSystem`

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

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:76](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L76)

Gets the index buffer (or null if the object is using instancing)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

#### Overrides

[`FluidRenderingObject`](FluidRenderingObject.md).[`indexBuffer`](FluidRenderingObject.md#indexbuffer)

***

### numParticles

#### Get Signature

> **get** **numParticles**(): `number`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:127](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L127)

Gets the number of particles in this particle system

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

### particleSystem

#### Get Signature

> **get** **particleSystem**(): [`IParticleSystem`](../interfaces/IParticleSystem.md)

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:25](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L25)

Gets the particle system

##### Returns

[`IParticleSystem`](../interfaces/IParticleSystem.md)

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

### useTrueRenderingForDiffuseTexture

#### Get Signature

> **get** **useTrueRenderingForDiffuseTexture**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:43](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L43)

Gets or sets a boolean indicating that the diffuse texture should be generated based on the regular rendering of the particle system (default: true).
Sometimes, generating the diffuse texture this way may be sub-optimal. In that case, you can disable this property, in which case the particle system will be
rendered using a ALPHA_COMBINE mode instead of the one used by the particle system.

##### Returns

`boolean`

#### Set Signature

> **set** **useTrueRenderingForDiffuseTexture**(`use`): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L47)

##### Parameters

###### use

`boolean`

##### Returns

`void`

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

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:69](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L69)

Gets the vertex buffers

##### Returns

`object`

#### Overrides

[`FluidRenderingObject`](FluidRenderingObject.md).[`vertexBuffers`](FluidRenderingObject.md#vertexbuffers)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:141](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L141)

Releases the resources used by the class

#### Returns

`void`

#### Overrides

[`FluidRenderingObject`](FluidRenderingObject.md).[`dispose`](FluidRenderingObject.md#dispose)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L32)

#### Returns

`string`

the name of the class

#### Overrides

[`FluidRenderingObject`](FluidRenderingObject.md).[`getClassName`](FluidRenderingObject.md#getclassname)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:119](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L119)

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

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts:134](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObjectParticleSystem.ts#L134)

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
