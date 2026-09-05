[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FluidRenderingObject

# Abstract Class: FluidRenderingObject

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:15](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L15)

Defines the base object used for fluid rendering.
It is based on a list of vertices (particles)

## Extended by

- [`FluidRenderingObjectParticleSystem`](FluidRenderingObjectParticleSystem.md)
- [`FluidRenderingObjectCustomParticles`](FluidRenderingObjectCustomParticles.md)

## Constructors

### Constructor

> **new FluidRenderingObject**(`scene`, `shaderLanguage?`): `FluidRenderingObject`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:113](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L113)

Instantiates a fluid rendering object

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the object is part of

##### shaderLanguage?

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

The shader language to use

#### Returns

`FluidRenderingObject`

## Properties

### onParticleSizeChanged

> **onParticleSizeChanged**: [`Observable`](Observable.md)\<`FluidRenderingObject`\>

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L35)

Observable triggered when the size of the particle is changed

***

### particleThicknessAlpha

> **particleThicknessAlpha**: `number` = `0.05`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L52)

Defines the alpha value of a particle

***

### priority

> **priority**: `number` = `0`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:30](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L30)

Defines the priority of the object. Objects will be rendered in ascending order of priority

***

### UsePerParticleSizeAttribute

> `static` **UsePerParticleSizeAttribute**: `boolean` = `false`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:20](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L20)

Uses each particle's own "size" vertex attribute instead
of a single uniform size for all particles (default: false, opt-in).

## Accessors

### indexBuffer

#### Get Signature

> **get** **indexBuffer**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:87](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L87)

Gets the index buffer (or null if the object is using instancing)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DataBuffer`](DataBuffer.md)\>

***

### numParticles

#### Get Signature

> **get** `abstract` **numParticles**(): `number`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:215](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L215)

Gets the number of particles (vertices) of this object

##### Returns

`number`

The number of particles

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

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:104](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L104)

Gets the shader language used in this object

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

***

### useInstancing

#### Get Signature

> **get** **useInstancing**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L55)

Indicates if the object uses instancing or not

##### Returns

`boolean`

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

***

### vertexBuffers

#### Get Signature

> **get** `abstract` **vertexBuffers**(): `object`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:82](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L82)

Gets the vertex buffers

##### Returns

`object`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:293](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L293)

Releases the resources used by the class

#### Returns

`void`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:94](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L94)

#### Returns

`string`

the name of the class

***

### isReady()

> **isReady**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:196](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L196)

Indicates if the object is ready to be rendered

#### Returns

`boolean`

True if everything is ready for the object to be rendered, otherwise false

***

### renderDepthTexture()

> **renderDepthTexture**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:220](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L220)

Render the depth texture for this object

#### Returns

`void`

***

### renderDiffuseTexture()

> **renderDiffuseTexture**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:286](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L286)

Render the diffuse texture for this object

#### Returns

`void`

***

### renderThicknessTexture()

> **renderThicknessTexture**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts:250](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderingObject.ts#L250)

Render the thickness texture for this object

#### Returns

`void`
