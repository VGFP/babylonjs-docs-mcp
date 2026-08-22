[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / OpenPBRMaterial

# Class: OpenPBRMaterial

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:515](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L515)

A Physically based material that follows the specification of OpenPBR.

For more information, please refer to the documentation :
https://academysoftwarefoundation.github.io/OpenPBR/index.html

## Extends

- `OpenPBRMaterialBase`

## Constructors

### Constructor

> **new OpenPBRMaterial**(`name`, `scene?`, `forceGLSL?`): `OpenPBRMaterial`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1937](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1937)

Instantiates a new OpenPBRMaterial instance.

#### Parameters

##### name

`string`

The material name

##### scene?

[`Scene`](Scene.md)

The scene the material will be use in.

##### forceGLSL?

`boolean` = `false`

Use the GLSL code generation for the shader (even on WebGPU). Default is false

#### Returns

`OpenPBRMaterial`

#### Overrides

`OpenPBRMaterialBase.constructor`

## Properties

### \_imageProcessingConfiguration

> **\_imageProcessingConfiguration**: [`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:39](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L39)

Default configuration related to image processing available in the standard Material.

#### Inherited from

`OpenPBRMaterialBase._imageProcessingConfiguration`

***

### \_imageProcessingObserver

> **\_imageProcessingObserver**: [`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](Observer.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>\>

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:65](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L65)

Keep track of the image processing observer to allow dispose and replace.

#### Inherited from

`OpenPBRMaterialBase._imageProcessingObserver`

***

### \_useFuzzRoughnessFromTextureAlpha

> **\_useFuzzRoughnessFromTextureAlpha**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1620](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1620)

Specifies that the fuzz roughness is stored in the alpha channel of the texture.
This is for compatibility with glTF where the fuzz roughness is often stored in
the alpha channel of the fuzz color texture.

***

### \_useSubsurfaceWeightFromTextureAlpha

> **\_useSubsurfaceWeightFromTextureAlpha**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1627](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1627)

Specifies that the subsurface weight is stored in the alpha channel of the texture.
This is for compatibility with glTF where the subsurface weight is stored in
the alpha channel of the diffuseTransmissionTexture.

***

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L258)

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

`OpenPBRMaterialBase.allowShaderHotSwapping`

***

### animations

> **animations**: [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)[]\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L565)

Stores the animations for the material

#### Inherited from

`OpenPBRMaterialBase.animations`

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:339](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L339)

Specifies if the ready state should be checked on each call

#### Inherited from

`OpenPBRMaterialBase.checkReadyOnEveryCall`

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L345)

Specifies if the ready state should be checked once

#### Inherited from

`OpenPBRMaterialBase.checkReadyOnlyOnce`

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:878](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L878)

Gets or sets the active clipplane 1

#### Inherited from

`OpenPBRMaterialBase.clipPlane`

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:883](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L883)

Gets or sets the active clipplane 2

#### Inherited from

`OpenPBRMaterialBase.clipPlane2`

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:888](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L888)

Gets or sets the active clipplane 3

#### Inherited from

`OpenPBRMaterialBase.clipPlane3`

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:893](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L893)

Gets or sets the active clipplane 4

#### Inherited from

`OpenPBRMaterialBase.clipPlane4`

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:898](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L898)

Gets or sets the active clipplane 5

#### Inherited from

`OpenPBRMaterialBase.clipPlane5`

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:903](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L903)

Gets or sets the active clipplane 6

#### Inherited from

`OpenPBRMaterialBase.clipPlane6`

***

### customShaderNameResolve

> **customShaderNameResolve**: (`shaderName`, `uniforms`, `uniformBuffers`, `samplers`, `defines`, `attributes?`, `options?`) => `string`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L238)

Custom callback helping to override the default shader used in the material.

#### Parameters

##### shaderName

`string`

##### uniforms

`string`[]

##### uniformBuffers

`string`[]

##### samplers

`string`[]

##### defines

`string`[] \| [`MaterialDefines`](MaterialDefines.md)

##### attributes?

`string`[]

##### options?

[`ICustomShaderNameResolveOptions`](../interfaces/ICustomShaderNameResolveOptions.md)

#### Returns

`string`

#### Inherited from

`OpenPBRMaterialBase.customShaderNameResolve`

***

### depthFunction

> **depthFunction**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:765](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L765)

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

`OpenPBRMaterialBase.depthFunction`

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:753](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L753)

Specifies if color writing should be disabled

#### Inherited from

`OpenPBRMaterialBase.disableColorWrite`

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:747](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L747)

Specifies if depth writing should be disabled

#### Inherited from

`OpenPBRMaterialBase.disableDepthWrite`

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:555](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L555)

Specifies if the material should be serialized

#### Inherited from

`OpenPBRMaterialBase.doNotSerialize`

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:759](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L759)

Specifies if depth writing should be forced

#### Inherited from

`OpenPBRMaterialBase.forceDepthWrite`

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`SmartArray`](SmartArray.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L541)

Callback triggered to get the render target textures

#### Inherited from

`OpenPBRMaterialBase.getRenderTargetTextures`

***

### id

> **id**: `string`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L304)

The ID of the material

#### Inherited from

`OpenPBRMaterialBase.id`

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [packages/dev/core/src/Materials/material.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L372)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

`OpenPBRMaterialBase.inspectableCustomProperties`

***

### metadata

> **metadata**: `any` = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L325)

Gets or sets user defined metadata

#### Inherited from

`OpenPBRMaterialBase.metadata`

***

### name

> **name**: `string`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L319)

The name of the material

#### Inherited from

`OpenPBRMaterialBase.name`

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L531)

Callback triggered when the material is compiled

#### Inherited from

`OpenPBRMaterialBase.onCompiled`

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:570](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L570)

An event triggered when the material is disposed

#### Inherited from

`OpenPBRMaterialBase.onDisposeObservable`

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L536)

Callback triggered when an error occurs

#### Inherited from

`OpenPBRMaterialBase.onError`

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](MaterialPluginManager.md)

Defined in: [packages/dev/core/src/Materials/materialPluginManager.types.ts:8](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/materialPluginManager.types.ts#L8)

Plugin manager for this material

#### Inherited from

`OpenPBRMaterialBase.pluginManager`

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:801](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L801)

Stores the size of points

#### Inherited from

`OpenPBRMaterialBase.pointSize`

***

### prePassConfiguration

> `readonly` **prePassConfiguration**: `PrePassConfiguration`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1926](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1926)

Defines additional PrePass parameters for the material.

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L333)

For internal use only. Please do not use.

#### Inherited from

`OpenPBRMaterialBase.reservedDataStore`

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:771](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L771)

Specifies if there should be a separate pass for culling

#### Inherited from

`OpenPBRMaterialBase.separateCullingPass`

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](ShadowDepthWrapper.md)\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L251)

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

`OpenPBRMaterialBase.shadowDepthWrapper`

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:526](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L526)

Stores the value for side orientation

#### Inherited from

`OpenPBRMaterialBase.sideOrientation`

***

### state

> **state**: `string` = `""`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:351](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L351)

The state of the material

#### Inherited from

`OpenPBRMaterialBase.state`

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](MaterialStencilState.md)

Defined in: [packages/dev/core/src/Materials/material.pure.ts:908](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L908)

Gives access to the stencil properties of the material

#### Inherited from

`OpenPBRMaterialBase.stencil`

***

### textureRepetitionHexTilingParams

> **textureRepetitionHexTilingParams**: `number`[]

Defined in: [packages/dev/core/src/Materials/material.pure.ts:459](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L459)

Parameters for the hex tiling texture repetition mode (TEXTURE_REPETITION_HEX_TILING).
x = rotation strength (0..1, default 1.0) — how much each hex tile is rotated.
y = fall-off contrast (0..1, default 0.6) — how much luminance affects blending weight at tile borders.
z = exponent (1..20, default 7.0) — controls the sharpness of weight falloff between tiles.
w = contrast (0..1, default 0.5) — boost blending contrast via Gain3 (0.5 = neutral, &gt;0.5 = higher contrast).

#### See

https://jcgt.org/published/0011/03/05/

#### Inherited from

`OpenPBRMaterialBase.textureRepetitionHexTilingParams`

***

### uniqueId

> **uniqueId**: `number`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L310)

Gets or sets the unique id of the material

#### Inherited from

`OpenPBRMaterialBase.uniqueId`

***

### useCoatRoughnessFromWeightTexture

> **useCoatRoughnessFromWeightTexture**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:956](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L956)

Specifies whether the coat roughness is taken from the
same texture as the coat_weight.

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:807](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L807)

Stores the z offset Factor value

#### Inherited from

`OpenPBRMaterialBase.zOffset`

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:813](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L813)

Stores the z offset Units value

#### Inherited from

`OpenPBRMaterialBase.zOffsetUnits`

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L173)

The all dirty flag value

#### Inherited from

`OpenPBRMaterialBase.AllDirtyFlag`

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L158)

The dirty attribute flag value

#### Inherited from

`OpenPBRMaterialBase.AttributesDirtyFlag`

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L128)

Stores the clock-wise side orientation

#### Inherited from

`OpenPBRMaterialBase.ClockWiseSideOrientation`

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L133)

Stores the counter clock-wise side orientation

#### Inherited from

`OpenPBRMaterialBase.CounterClockWiseSideOrientation`

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1560](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1560)

Force all the PBR materials to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L233)

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

`OpenPBRMaterialBase.ForceVertexOutputInvariant`

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L153)

The dirty fresnel flag value

#### Inherited from

`OpenPBRMaterialBase.FresnelDirtyFlag`

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L138)

The dirty image processing flag value

#### Inherited from

`OpenPBRMaterialBase.ImageProcessingDirtyFlag`

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L148)

The dirty light flag value

#### Inherited from

`OpenPBRMaterialBase.LightDirtyFlag`

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L217)

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Inherited from

`OpenPBRMaterialBase.LIGHTFALLOFF_GLTF`

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:211](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L211)

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Inherited from

`OpenPBRMaterialBase.LIGHTFALLOFF_PHYSICAL`

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:223](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L223)

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Inherited from

`OpenPBRMaterialBase.LIGHTFALLOFF_STANDARD`

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L107)

Returns the line list draw mode

#### Inherited from

`OpenPBRMaterialBase.LineListDrawMode`

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L111)

Returns the line loop draw mode

#### Inherited from

`OpenPBRMaterialBase.LineLoopDrawMode`

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L115)

Returns the line strip draw mode

#### Inherited from

`OpenPBRMaterialBase.LineStripDrawMode`

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L188)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_ALPHABLEND`

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L183)

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_ALPHATEST`

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L194)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_ALPHATESTANDBLEND`

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L206)

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_NORMALBLENDMETHOD_RNM`

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L200)

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_NORMALBLENDMETHOD_WHITEOUT`

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L178)

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

`OpenPBRMaterialBase.MATERIAL_OPAQUE`

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L163)

The dirty misc flag value

#### Inherited from

`OpenPBRMaterialBase.MiscDirtyFlag`

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L228)

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

`OpenPBRMaterialBase.OnEventObservable`

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L99)

Returns the point fill mode

#### Inherited from

`OpenPBRMaterialBase.PointFillMode`

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L103)

Returns the point list draw mode

#### Inherited from

`OpenPBRMaterialBase.PointListDrawMode`

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L168)

The dirty prepass flag value

#### Inherited from

`OpenPBRMaterialBase.PrePassDirtyFlag`

***

### SSS\_QUALITY\_HIGH

> `readonly` `static` **SSS\_QUALITY\_HIGH**: `2` = `2`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1227](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1227)

SSS convolution uses 32 samples.

***

### SSS\_QUALITY\_LOW

> `readonly` `static` **SSS\_QUALITY\_LOW**: `0` = `0`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1223](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1223)

SSS convolution uses 8 samples.

***

### SSS\_QUALITY\_MEDIUM

> `readonly` `static` **SSS\_QUALITY\_MEDIUM**: `1` = `1`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1225](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1225)

SSS convolution uses 16 samples (default).

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L143)

The dirty texture flag value

#### Inherited from

`OpenPBRMaterialBase.TextureDirtyFlag`

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L123)

Returns the triangle fan draw mode

#### Inherited from

`OpenPBRMaterialBase.TriangleFanDrawMode`

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L91)

Returns the triangle fill mode

#### Inherited from

`OpenPBRMaterialBase.TriangleFillMode`

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L119)

Returns the triangle strip draw mode

#### Inherited from

`OpenPBRMaterialBase.TriangleStripDrawMode`

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L95)

Returns the wireframe mode

#### Inherited from

`OpenPBRMaterialBase.WireFrameFillMode`

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): `number`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L394)

Gets the alpha value of the material

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:377](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L377)

Sets the alpha value of the material

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.alpha`

***

### alphaCutOff

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1331](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1331)

Defines the alpha limits in alpha test mode.

***

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:686](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L686)

Gets the value of the alpha mode

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:675](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L675)

Sets the value of the alpha mode.

| Value | Type | Description |
| --- | --- | --- |
| 0 | ALPHA_DISABLE |  |
| 1 | ALPHA_ADD | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + DEST, ALPHA=DEST_ALPHA |
| 2 | ALPHA_COMBINE | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 3 | ALPHA_SUBTRACT | Defines that alpha blending is COLOR=(1 - SRC) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 4 | ALPHA_MULTIPLY | Defines that alpha blending is COLOR=DEST * SRC, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 5 | ALPHA_MAXIMIZED | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 6 | ALPHA_ONEONE | Defines that alpha blending is COLOR=SRC + DEST, ALPHA=DEST_ALPHA |
| 7 | ALPHA_PREMULTIPLIED | Defines that alpha blending is COLOR=SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 8 | ALPHA_PREMULTIPLIED_PORTERDUFF | Defines that alpha blending is COLOR=SRC + (1 - SRC_ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 9 | ALPHA_INTERPOLATE | Defines that alpha blending is COLOR=CST * SRC + (1 - CST) * DEST, ALPHA=CST_ALPHA * SRC + (1 - CST_ALPHA) * DEST_ALPHA |
| 10 | ALPHA_SCREENMODE | Defines that alpha blending is COLOR=SRC + (1 - SRC) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 11 | ALPHA_ONEONE_ONEONE | Defines that alpha blending is COLOR=SRC + DST, ALPHA=SRC_ALPHA + DEST_ALPHA |
| 12 | ALPHA_ALPHATOCOLOR | Defines that alpha blending is COLOR=DEST_ALPHA * SRC + DST, ALPHA=0 |
| 13 | ALPHA_REVERSEONEMINUS | Defines that alpha blending is COLOR=(1 - DEST) * SRC + (1 - SRC) * DEST, ALPHA=(1 - DEST_ALPHA) * SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 14 | ALPHA_SRC_DSTONEMINUSSRCALPHA | Defines that alpha blending is ALPHA=SRC + (1 - SRC ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC ALPHA) * DEST_ALPHA |
| 15 | ALPHA_ONEONE_ONEZERO | Defines that alpha blending is COLOR=SRC + DST, ALPHA=SRC_ALPHA |
| 16 | ALPHA_EXCLUSION | Defines that alpha blending is COLOR=(1 - DEST) * SRC + (1 - SRC) * DEST, ALPHA=DEST_ALPHA |
| 17 | ALPHA_LAYER_ACCUMULATE | Defines that alpha blending is COLOR=SRC_ALPHA * SRC + (1 - SRC ALPHA) * DEST, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |
| 18 | ALPHA_MIN | Defines that alpha blending is COLOR=MIN(SRC, DEST), ALPHA=MIN(SRC_ALPHA, DEST_ALPHA) |
| 19 | ALPHA_MAX | Defines that alpha blending is COLOR=MAX(SRC, DEST), ALPHA=MAX(SRC_ALPHA, DEST_ALPHA) |
| 20 | ALPHA_DUAL_SRC0_ADD_SRC1xDST | Defines that alpha blending uses dual source blending and is COLOR=SRC + SRC1 * DEST, ALPHA=DST_ALPHA |
| 21 | ALPHA_REPLACE_COLOR | Defines that alpha blending is COLOR=SRC, ALPHA=SRC_ALPHA + (1 - SRC_ALPHA) * DEST_ALPHA |

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.alphaMode`

***

### alphaModes

#### Get Signature

> **get** **alphaModes**(): readonly `number`[]

Defined in: [packages/dev/core/src/Materials/material.pure.ts:693](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L693)

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

`OpenPBRMaterialBase.alphaModes`

***

### ambientOcclusionTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1218](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1218)

Defines the ambient occlusion texture.

***

### applyDecalMapAfterDetailMap

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1554](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1554)

If sets to true, the decal map will be applied after the detail map. Else, it is applied before (default: false)

***

### backFaceCulling

#### Get Signature

> **get** **backFaceCulling**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:418](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L418)

Gets the culling state

##### Returns

`boolean`

#### Set Signature

> **set** **backFaceCulling**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L407)

Sets the culling state (true to enable culling, false to disable)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.backFaceCulling`

***

### backgroundRefractionTexture

#### Set Signature

> **set** **backgroundRefractionTexture**(`texture`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1790](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1790)

##### Parameters

###### texture

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

***

### baseColor

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:539](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L539)

Color of the base diffuse lobe.
See OpenPBR's specs for base_color

***

### baseColorTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:548](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L548)

Base Color Texture property.
See OpenPBR's specs for base_color

***

### baseDiffuseRoughness

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:557](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L557)

Roughness of the diffuse lobe.
See OpenPBR's specs for base_diffuse_roughness

***

### baseDiffuseRoughnessTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:566](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L566)

Roughness texture of the diffuse lobe.
See OpenPBR's specs for base_diffuse_roughness

***

### baseMetalness

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:575](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L575)

Metalness of the base lobe.
See OpenPBR's specs for base_metalness

***

### baseMetalnessTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:584](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L584)

Metalness texture.
See OpenPBR's specs for base_metalness

***

### baseWeight

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:521](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L521)

Base Weight is a multiplier on the diffuse and metal lobes.
See OpenPBR's specs for base_weight

***

### baseWeightTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:530](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L530)

Base Weight is a multiplier on the diffuse and metal lobes.
See OpenPBR's specs for base_weight

***

### blockDirtyMechanism

#### Get Signature

> **get** **blockDirtyMechanism**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:491](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L491)

Block the dirty-mechanism for this specific material
When set to false after being true the material will be marked as dirty.

##### Returns

`boolean`

#### Set Signature

> **set** **blockDirtyMechanism**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:495](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L495)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.blockDirtyMechanism`

***

### cameraColorCurves

#### Get Signature

> **get** **cameraColorCurves**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:188](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L188)

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
corresponding to low luminance, medium luminance, and high luminance areas respectively.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

#### Set Signature

> **set** **cameraColorCurves**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:197](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L197)

The color grading curves provide additional color adjustment that is applied after any color grading transform (3D LUT).
They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
corresponding to low luminance, medium luminance, and high luminance areas respectively.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.cameraColorCurves`

***

### cameraColorCurvesEnabled

#### Get Signature

> **get** **cameraColorCurvesEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:102](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L102)

Gets whether the color curves effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraColorCurvesEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:108](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L108)

Sets whether the color curves effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.cameraColorCurvesEnabled`

***

### cameraColorGradingEnabled

#### Get Signature

> **get** **cameraColorGradingEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:115](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L115)

Gets whether the color grading effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraColorGradingEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:121](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L121)

Gets whether the color grading effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.cameraColorGradingEnabled`

***

### cameraColorGradingTexture

#### Get Signature

> **get** **cameraColorGradingTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:172](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L172)

Gets the Color Grading 2D Lookup Texture.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **cameraColorGradingTexture**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:178](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L178)

Sets the Color Grading 2D Lookup Texture.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.cameraColorGradingTexture`

***

### cameraContrast

#### Get Signature

> **get** **cameraContrast**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:158](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L158)

Gets The camera contrast used on this material.

##### Returns

`number`

#### Set Signature

> **set** **cameraContrast**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:165](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L165)

Sets The camera contrast used on this material.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.cameraContrast`

***

### cameraExposure

#### Get Signature

> **get** **cameraExposure**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:143](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L143)

The camera exposure used on this material.
This property is here and not in the camera to allow controlling exposure without full screen post process.
This corresponds to a photographic exposure.

##### Returns

`number`

#### Set Signature

> **set** **cameraExposure**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:151](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L151)

The camera exposure used on this material.
This property is here and not in the camera to allow controlling exposure without full screen post process.
This corresponds to a photographic exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.cameraExposure`

***

### cameraToneMappingEnabled

#### Get Signature

> **get** **cameraToneMappingEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:128](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L128)

Gets whether tonemapping is enabled or not.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraToneMappingEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:134](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L134)

Sets whether tonemapping is enabled or not

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.cameraToneMappingEnabled`

***

### canRenderToMRT

#### Get Signature

> **get** **canRenderToMRT**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1857](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1857)

Can this material render to several textures at once

##### Returns

`boolean`

#### Overrides

`OpenPBRMaterialBase.canRenderToMRT`

***

### coatColor

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:872](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L872)

Defines the color of the clear coat on the surface.
See OpenPBR's specs for coat_color

***

### coatColorTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:881](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L881)

Color texture of the clear coat.
See OpenPBR's specs for coat_color

***

### coatDarkening

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:937](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L937)

Defines the amount that interreflections within the coat allow the underlying surface
to be darkened. A value of 1.0 means that the physically correct amount of darkening
is applied, while a value of 0.0 means that no darkening is applied.
See OpenPBR's specs for coat_darkening

***

### coatDarkeningTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:948](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L948)

Defines the amount that interreflections within the coat allow the underlying surface
to be darkened. A value of 1.0 means that the physically correct amount of darkening
is applied, while a value of 0.0 means that no darkening is applied.
See OpenPBR's specs for coat_darkening

***

### coatIor

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:926](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L926)

Defines the IOR of the clear coat on the surface.
See OpenPBR's specs for coat_ior

***

### coatRoughness

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:890](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L890)

Defines the roughness of the clear coat on the surface.
See OpenPBR's specs for coat_roughness

***

### coatRoughnessAnisotropy

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:908](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L908)

Defines the anisotropy of the clear coat on the surface.
See OpenPBR's specs for coat_roughness_anisotropy

***

### coatRoughnessAnisotropyTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:917](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L917)

Anisotropic Roughness texture of the clear coat.
See OpenPBR's specs for coat_roughness_anisotropy

***

### coatRoughnessTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:899](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L899)

Roughness texture of the clear coat.
See OpenPBR's specs for coat_roughness

***

### coatWeight

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:854](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L854)

Defines the amount of clear coat on the surface.
See OpenPBR's specs for coat_weight

***

### coatWeightTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:863](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L863)

Coat weight texture.
See OpenPBR's specs for coat_weight

***

### cullBackFaces

#### Get Signature

> **get** **cullBackFaces**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L481)

Gets the type of faces that should be culled

##### Returns

`boolean`

#### Set Signature

> **set** **cullBackFaces**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:470](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L470)

Sets the type of faces that should be culled (true for back faces, false for front faces)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.cullBackFaces`

***

### directIntensity

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1302](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1302)

Intensity of the direct lights e.g. the four lights available in your scene.
This impacts both the direct diffuse and specular highlights.

***

### disableLighting

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1446](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1446)

If sets to true, disables all the lights affecting the material.

***

### emissionColor

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1151](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1151)

Defines the color of the material's emission.
See OpenPBR's specs for emission_color

***

### emissionColorTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1160](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1160)

Defines the texture of the material's emission color.
See OpenPBR's specs for emission_color

***

### emissionLuminance

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1142](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1142)

Defines the luminance of the material's emission.
See OpenPBR's specs for emission_luminance

***

### enableSpecularAntiAliasing

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1524](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1524)

Enables specular anti aliasing in the PBR shader.
It will both interacts on the Geometry for analytical and IBL lighting.
It also prefilter the roughness map based on the normalmap values.

***

### environmentBRDFTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1508](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1508)

Let user defines the brdf lookup texture used for IBL.
A default 8bit version is embedded but you could point at :
* Default texture: https://assets.babylonjs.com/environments/correlatedMSBRDF_RGBD.png
* Default 16bit pixel depth texture: https://assets.babylonjs.com/environments/correlatedMSBRDF.dds
* LEGACY Default None correlated https://assets.babylonjs.com/environments/uncorrelatedBRDF_RGBD.png
* LEGACY Default None correlated 16bit pixel depth https://assets.babylonjs.com/environments/uncorrelatedBRDF.dds

***

### environmentIntensity

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1310](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1310)

Intensity of the environment e.g. how much the environment will light the object
either through harmonics for rough material or through the reflection for shiny ones.

***

### fillMode

#### Get Signature

> **get** **fillMode**(): `number`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:859](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L859)

Gets the material fill mode

##### Returns

`number`

#### Set Signature

> **set** **fillMode**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:866](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L866)

Sets the material fill mode

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.fillMode`

***

### fogEnabled

#### Get Signature

> **get** **fogEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:793](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L793)

Gets the value of the fog enabled state

##### Returns

`boolean`

#### Set Signature

> **set** **fogEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:782](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L782)

Sets the state for enabling fog

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.fogEnabled`

***

### forceAlphaTest

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1324](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1324)

Enforces alpha test in opaque or blend mode in order to improve the performances of some situations.

***

### forceIrradianceInFragment

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1453](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1453)

Force the shader to compute irradiance in the fragment shader in order to take normal mapping into account.

***

### forceNormalForward

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1515](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1515)

Force normal to face away from face.

***

### fuzzColor

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:981](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L981)

Defines the color of the fuzz layer on the surface.
See OpenPBR's specs for fuzz_color

***

### fuzzColorTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:990](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L990)

Color texture of the fuzz layer.
See OpenPBR's specs for fuzz_color

***

### fuzzRoughness

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:999](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L999)

Defines the roughness of the fuzz layer on the surface.
See OpenPBR's specs for fuzz_roughness

***

### fuzzRoughnessTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1008](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1008)

Roughness texture of the fuzz layer.
See OpenPBR's specs for fuzz_roughness

***

### fuzzSampleNumber

#### Get Signature

> **get** **fuzzSampleNumber**(): `number`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1846](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1846)

The number of samples used to compute the fuzz IBL lighting.

##### Returns

`number`

#### Set Signature

> **set** **fuzzSampleNumber**(`n`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1849](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1849)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### fuzzWeight

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:963](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L963)

Defines the weight of the fuzz layer on the surface.
See OpenPBR's specs for fuzz_weight

***

### fuzzWeightTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:972](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L972)

Weight texture of the fuzz layer.
See OpenPBR's specs for fuzz_weight

***

### geometryCoatNormalTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1065](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1065)

Defines the normal of the material's coat layer.
See OpenPBR's specs for geometry_coat_normal

***

### geometryCoatTangent

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1074](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1074)

Defines the tangent of the material's coat layer. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_coat_tangent

***

### geometryCoatTangentAngle

#### Get Signature

> **get** **geometryCoatTangentAngle**(): `number`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1081](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1081)

Defines the angle of the tangent of the material's coat layer.

##### Returns

`number`

#### Set Signature

> **set** **geometryCoatTangentAngle**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1088](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1088)

Defines the angle of the tangent of the material's coat layer.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### geometryCoatTangentTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1097](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1097)

Defines the tangent of the material's coat layer. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_coat_tangent

***

### geometryNormalTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1026](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1026)

Defines the normal of the material's geometry.
See OpenPBR's specs for geometry_normal

***

### geometryOpacity

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1106](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1106)

Defines the opacity of the material's geometry.
See OpenPBR's specs for geometry_opacity

***

### geometryOpacityTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1115](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1115)

Defines the opacity texture of the material's geometry.
See OpenPBR's specs for geometry_opacity

***

### geometryTangent

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1035](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1035)

Defines the tangent of the material's geometry. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_tangent

***

### geometryTangentAngle

#### Get Signature

> **get** **geometryTangentAngle**(): `number`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1043](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1043)

Defines the angle of the tangent of the material's geometry. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_tangent

##### Returns

`number`

#### Set Signature

> **set** **geometryTangentAngle**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1047](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1047)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### geometryTangentTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1056](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1056)

Defines the tangent of the material's geometry. Used only for anisotropic reflections.
See OpenPBR's specs for geometry_tangent

***

### geometryThickness

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1124](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1124)

Defines the thickness of the material's geometry.
Not part of OpenPBR's specs but useful for rasterization approximations of volume.

***

### geometryThicknessTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1133](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1133)

Defines the thickness of the material's geometry.
Not part of OpenPBR's specs but useful for rasterization approximations of volume.

***

### geometryThinWalled

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1017](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1017)

Defines whether the geometry is thin-walled (like a sheet of paper) or not.
See OpenPBR's specs for geometry_thin_walled

***

### hasRenderTargetTextures

#### Get Signature

> **get** **hasRenderTargetTextures**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2113](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2113)

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Overrides

`OpenPBRMaterialBase.hasRenderTargetTextures`

***

### hasScattering

#### Get Signature

> **get** **hasScattering**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1355](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1355)

Specifies if the material has scattering properties such as subsurface scattering or transmission scattering.

##### Returns

`boolean`

***

### hasTransparency

#### Get Signature

> **get** **hasTransparency**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1350](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1350)

Specifies if we can see through the surface of the material due to subsurface scattering or transmission.

##### Returns

`boolean`

***

### imageProcessingConfiguration

#### Get Signature

> **get** **imageProcessingConfiguration**(): [`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:44](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L44)

Gets the image processing configuration used either in this material.

##### Returns

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

#### Set Signature

> **set** **imageProcessingConfiguration**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:53](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L53)

Sets the Default image processing configuration used either in the this material.

If sets to null, the scene one is in use.

##### Parameters

###### value

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.imageProcessingConfiguration`

***

### invertNormalMapX

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1467](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1467)

If sets to true, x component of normal map value will invert (x = 1.0 - x).

***

### invertNormalMapY

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1474](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1474)

If sets to true, y component of normal map value will invert (y = 1.0 - y).

***

### isFrozen

#### Get Signature

> **get** **isFrozen**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1159](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1159)

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

`OpenPBRMaterialBase.isFrozen`

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2128](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2128)

Can this material render to prepass

##### Returns

`boolean`

#### Overrides

`OpenPBRMaterialBase.isPrePassCapable`

***

### isVertexOutputInvariant

#### Get Signature

> **get** **isVertexOutputInvariant**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:943](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L943)

Gets or sets the vertex output invariant state
Setting this property to true will force the shader compiler to disable some optimization to make sure the vertex output is always calculated
the same way across different compilation units.
You may need to enable this option if you are seeing some depth artifacts when using a depth pre-pass, for e.g.
Note that this may have an impact on performance, so leave this option disabled if not needed.

##### Returns

`boolean`

#### Set Signature

> **set** **isVertexOutputInvariant**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:947](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L947)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.isVertexOutputInvariant`

***

### maxSimultaneousLights

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1460](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1460)

Number of Simultaneous lights allowed on the material.

***

### needDepthPrePass

#### Get Signature

> **get** **needDepthPrePass**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:732](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L732)

Gets the depth pre-pass value

##### Returns

`boolean`

#### Set Signature

> **set** **needDepthPrePass**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:719](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L719)

Sets the need depth pre-pass value

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.needDepthPrePass`

***

### onBind

#### Set Signature

> **set** **onBind**(`callback`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:609](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L609)

Called during a bind event

##### Parameters

###### callback

(`Mesh`) => `void`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.onBind`

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:593](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L593)

An event triggered when the material is bound

##### Returns

[`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Inherited from

`OpenPBRMaterialBase.onBindObservable`

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:581](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L581)

Called during a dispose event

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.onDispose`

***

### onEffectCreatedObservable

#### Get Signature

> **get** **onEffectCreatedObservable**(): [`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L632)

An event triggered when the effect is (re)created

##### Returns

[`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

#### Inherited from

`OpenPBRMaterialBase.onEffectCreatedObservable`

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:619](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L619)

An event triggered when the material is unbound

##### Returns

[`Observable`](Observable.md)\<[`Material`](Material.md)\>

#### Inherited from

`OpenPBRMaterialBase.onUnBindObservable`

***

### parallaxScaleBias

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1439](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1439)

Controls the scale bias of the parallax mode.

***

### pointsCloud

#### Get Signature

> **get** **pointsCloud**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:838](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L838)

Gets the value specifying if point clouds are enabled

##### Returns

`boolean`

#### Set Signature

> **set** **pointsCloud**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:851](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L851)

Sets the state of point cloud mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.pointsCloud`

***

### realTimeFiltering

#### Get Signature

> **get** **realTimeFiltering**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1821](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1821)

Enables realtime filtering on the texture.

##### Returns

`boolean`

#### Set Signature

> **set** **realTimeFiltering**(`b`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1824](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1824)

##### Parameters

###### b

`boolean`

##### Returns

`void`

***

### realTimeFilteringQuality

#### Get Signature

> **get** **realTimeFilteringQuality**(): `number`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1833](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1833)

Quality switch for realtime filtering

##### Returns

`number`

#### Set Signature

> **set** **realTimeFilteringQuality**(`n`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1836](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1836)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### refractionHighQualityBlur

#### Get Signature

> **get** **refractionHighQualityBlur**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1801](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1801)

When true, uses a 4-tap rotated-grid kernel for refractive background blur,
eliminating bilinear block artifacts at the cost of 3 extra texture samples.
When false, a single dithered sample is used. Default: true.

##### Returns

`boolean`

#### Set Signature

> **set** **refractionHighQualityBlur**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1804](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1804)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [packages/dev/core/src/Materials/material.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L296)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

`OpenPBRMaterialBase.shaderLanguage`

***

### specularColor

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:611](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L611)

Color of the specular lobe.
See OpenPBR's specs for specular_color

***

### specularColorTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:620](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L620)

Specular Color Texture property.
See OpenPBR's specs for specular_color

***

### specularIor

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:665](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L665)

IOR of the specular lobe.
See OpenPBR's specs for specular_ior

***

### specularRoughness

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:629](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L629)

Roughness of the specular lobe.
See OpenPBR's specs for specular_roughness

***

### specularRoughnessAnisotropy

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:647](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L647)

Anisotropic roughness of the specular lobe.
See OpenPBR's specs for specular_roughness_anisotropy

***

### specularRoughnessAnisotropyTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:656](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L656)

Anisotropic Roughness texture.
See OpenPBR's specs for specular_roughness

***

### specularRoughnessTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:638](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L638)

Roughness texture of the specular lobe.
See OpenPBR's specs for specular_roughness

***

### specularWeight

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:593](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L593)

Weight of the specular lobe.
See OpenPBR's specs for specular_weight

***

### specularWeightTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:602](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L602)

Weight texture of the specular lobe.
See OpenPBR's specs for specular_weight

***

### sssDepthTexture

#### Get Signature

> **get** **sssDepthTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1272](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1272)

Defines the depth texture used for subsurface scattering. This is the depth defined
in screen space. If it's not provided, the depth will be looked for in the scene.geometryBufferRenderer.
Accepts a [ThinTexture](ThinTexture.md) so that an [InternalTexture](InternalTexture.md) obtained from a frame graph
handle can be wrapped with `new ThinTexture(internalTexture)` and assigned directly.
Setting this property marks all sub-meshes as textures-dirty so the shader recompiles.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

#### Set Signature

> **set** **sssDepthTexture**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1275](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1275)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

##### Returns

`void`

***

### sssIrradianceTexture

#### Get Signature

> **get** **sssIrradianceTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1253](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1253)

Defines the irradiance texture used for subsurface scattering.
If it's not provided, the irradiance will be looked for in the scene.geometryBufferRenderer.
Accepts a [ThinTexture](ThinTexture.md) so that an [InternalTexture](InternalTexture.md) obtained from a frame graph
handle can be wrapped with `new ThinTexture(internalTexture)` and assigned directly.
Setting this property marks all sub-meshes as textures-dirty so the shader recompiles.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

#### Set Signature

> **set** **sssIrradianceTexture**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1256](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1256)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ThinTexture`](ThinTexture.md)\>

##### Returns

`void`

***

### sssQuality

#### Get Signature

> **get** **sssQuality**(): `number`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1235](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1235)

Controls the sample count of the screen-space SSS convolution kernel.
Use the SSS_QUALITY_LOW / MEDIUM / HIGH constants (8 / 16 / 32 samples).
Higher quality reduces noise at the cost of GPU time. Default: MEDIUM.

##### Returns

`number`

#### Set Signature

> **set** **sssQuality**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1238](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1238)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### subsurfaceColor

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:800](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L800)

Defines the color of the subsurface scattering in the volume.
See OpenPBR's specs for subsurface_color

***

### subsurfaceColorTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:809](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L809)

Subsurface color texture.
See OpenPBR's specs for subsurface_color

***

### subsurfaceRadius

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:818](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L818)

Defines the radius of the subsurface scattering in the volume.
See OpenPBR's specs for subsurface_radius

***

### subsurfaceRadiusScale

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:827](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L827)

Defines the scale factor applied to the subsurface radius.
See OpenPBR's specs for subsurface_radius_scale

***

### subsurfaceRadiusScaleTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:836](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L836)

Subsurface radius scale texture.
See OpenPBR's specs for subsurface_radius_scale

***

### subsurfaceScatterAnisotropy

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:845](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L845)

Defines the anisotropy of the subsurface scattering in the volume.
See OpenPBR's specs for subsurface_scatter_anisotropy

***

### subsurfaceWeight

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:782](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L782)

Defines the amount of subsurface scattering on the surface.
See OpenPBR's specs for subsurface_weight

***

### subsurfaceWeightTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:791](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L791)

Subsurface weight texture.
See OpenPBR's specs for subsurface_weight

***

### textureRepetitionMode

#### Get Signature

> **get** **textureRepetitionMode**(): `number`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L446)

Gets the texture repetition breaking mode.

##### See

https://iquilezles.org/articles/texturerepetition/

##### Returns

`number`

#### Set Signature

> **set** **textureRepetitionMode**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L433)

Sets the texture repetition breaking mode.
Use one of the Constants.TEXTURE_REPETITION_* values to break visible texture tiling patterns.
Ordered by cost: NONE (1 fetch), NOISE_BLEND (3), HEX_TILING (3), TILE_RANDOMIZATION (4), VORONOI_BOMBING (9).
Not supported on WebGL1 — the mode will be forced to NONE.

##### See

 - https://iquilezles.org/articles/texturerepetition/
 - https://jcgt.org/published/0011/03/05/

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.textureRepetitionMode`

***

### thinFilmIor

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1210](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1210)

Defines the index of refraction of the thin film layer.

***

### thinFilmThickness

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1186](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1186)

Defines the thickness of the thin film layer in μm. If a texture is provided for thinFilmWeightTexture,
this value will act as a multiplier to the texture values.
See OpenPBR's specs for thin_film_thickness

***

### thinFilmThicknessMin

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1194](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1194)

Defines the minimum thickness of the thin film layer in μm.

***

### thinFilmThicknessTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1202](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1202)

Defines the maximum thickness of the thin film layer in μm.

***

### thinFilmWeight

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1168](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1168)

Defines the weight of the thin film layer on top of the base layer for iridescent effects.

***

### thinFilmWeightTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1176](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1176)

Thin film weight texture.

***

### transmissionColor

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:692](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L692)

Transmission color of the surface.
See OpenPBR's specs for transmission_color

***

### transmissionColorTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:701](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L701)

Transmission color texture.
See OpenPBR's specs for transmission_color

***

### transmissionDepth

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:710](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L710)

Transmission depth of the volume
See OpenPBR's specs for transmission_depth

***

### transmissionDepthTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:719](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L719)

Transmission depth texture.
See OpenPBR's specs for transmission_depth

***

### transmissionDispersionAbbeNumber

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:773](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L773)

Transmission Dispersion Abbe number.
See OpenPBR's specs for transmission_dispersion_abbe_number

***

### transmissionDispersionScale

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:755](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L755)

Transmission Dispersion Scale factor.
See OpenPBR's specs for transmission_dispersion_scale

***

### transmissionDispersionScaleTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:764](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L764)

Transmission Dispersion Scale texture.
See OpenPBR's specs for transmission_dispersion_scale

***

### transmissionScatter

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:728](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L728)

Transmission scatter of the surface.
See OpenPBR's specs for transmission_scatter

***

### transmissionScatterAnisotropy

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:746](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L746)

Transmission scatter anisotropy
See OpenPBR's specs for transmission_scatter_anisotropy

***

### transmissionScatterTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:737](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L737)

Transmission scatter texture.
See OpenPBR's specs for transmission_scatter

***

### transmissionWeight

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:674](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L674)

Transmission weight of the surface.
See OpenPBR's specs for transmission_weight

***

### transmissionWeightTexture

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:683](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L683)

Transmission weight texture.
See OpenPBR's specs for transmission_weight

***

### transparencyMode

#### Get Signature

> **get** **transparencyMode**(): `number`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2142](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2142)

Gets the current transparency mode.

##### Returns

`number`

#### Set Signature

> **set** **transparencyMode**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2146](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2146)

Gets the current transparency mode.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Overrides

`OpenPBRMaterialBase.transparencyMode`

***

### twoSidedLighting

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1481](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1481)

If sets to true and backfaceCulling is false, normals will be flipped on the backside.

***

### unlit

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1547](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1547)

If set to true, no lighting calculations will be applied.

***

### useAlphaFresnel

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1489](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1489)

A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
And/Or occlude the blended part. (alpha is converted to gamma to compute the fresnel)

***

### useAmbientInGrayScale

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1345](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1345)

Specifies if the ambient texture contains the ambient occlusion information in its red channel only.

***

### useAmbientOcclusionFromMetallicTextureRed

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1338](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1338)

Specifies if the metallic texture contains the ambient occlusion information in its red channel.

***

### useGLTFLightFalloff

#### Get Signature

> **get** **useGLTFLightFalloff**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1392](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1392)

In order to support the falloff compatibility with gltf, a special mode has been added
to reproduce the gltf light falloff.

##### Returns

`boolean`

#### Set Signature

> **set** **useGLTFLightFalloff**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1400](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1400)

In order to support the falloff compatibility with gltf, a special mode has been added
to reproduce the gltf light falloff.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useHorizonOcclusion

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1532](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1532)

This parameters will enable/disable Horizon occlusion to prevent normal maps to look shiny when the normal
makes the reflect vector face the model (under horizon).

***

### useLinearAlphaFresnel

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1497](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1497)

A fresnel is applied to the alpha of the model to ensure grazing angles edges are not alpha tested.
And/Or occlude the blended part. (alpha stays linear to compute the fresnel)

***

### useLogarithmicDepth

#### Get Signature

> **get** **useLogarithmicDepth**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:918](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L918)

In case the depth buffer does not allow enough depth precision for your scene (might be the case in large scenes)
You can try switching to logarithmic depth.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/logarithmicDepthBuffer

##### Returns

`boolean`

#### Set Signature

> **set** **useLogarithmicDepth**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:922](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L922)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.useLogarithmicDepth`

***

### useObjectSpaceNormalMap

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1418](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1418)

Allows using an object space normal map (instead of tangent space).

***

### useParallax

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1425](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1425)

Allows using the normal map in parallax mode.

***

### useParallaxOcclusion

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1432](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1432)

Allows using the normal map in parallax occlusion mode.

***

### usePhysicalLightFalloff

#### Get Signature

> **get** **usePhysicalLightFalloff**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1365](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1365)

BJS is using an hardcoded light falloff based on a manually sets up range.
In PBR, one way to represents the falloff is to use the inverse squared root algorithm.
This parameter can help you switch back to the BJS mode in order to create scenes using both materials.

##### Returns

`boolean`

#### Set Signature

> **set** **usePhysicalLightFalloff**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1374](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1374)

BJS is using an hardcoded light falloff based on a manually sets up range.
In PBR, one way to represents the falloff is to use the inverse squared root algorithm.
This parameter can help you switch back to the BJS mode in order to create scenes using both materials.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### useRadianceOcclusion

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1540](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1540)

This parameters will enable/disable radiance occlusion by preventing the radiance to lit
too much the area relying on ambient texture to define their ambient occlusion.

***

### useSpecularWeightFromTextureAlpha

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:1317](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L1317)

Specifies that the specular weight is stored in the alpha channel of the specular weight texture.

***

### useVertexPulling

#### Get Signature

> **get** **useVertexPulling**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L270)

Tells the engine to draw geometry using vertex pulling instead of index drawing. This will automatically
set the vertex buffers as storage buffers and make them accessible to the vertex shader (WebGPU only).

##### Returns

`boolean`

#### Set Signature

> **set** **useVertexPulling**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:274](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L274)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.useVertexPulling`

***

### wireframe

#### Get Signature

> **get** **wireframe**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:815](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L815)

##### Returns

`boolean`

#### Set Signature

> **set** **wireframe**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:830](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L830)

Sets the state of wireframe mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.wireframe`

## Methods

### \_attachImageProcessingConfiguration()

> **\_attachImageProcessingConfiguration**(`configuration`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:71](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/imageProcessing.ts#L71)

Attaches a new image processing configuration to the Standard Material.

#### Parameters

##### configuration

[`Nullable`](../type-aliases/Nullable.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase._attachImageProcessingConfiguration`

***

### atomicMaterialsUpdate()

> **atomicMaterialsUpdate**(`callback`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:513](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L513)

This allows you to modify the material without marking it as dirty after every change.
This function should be used if you need to make more than one dirty-enabling change to the material - adding a texture, setting a new fill mode and so on.
The callback will pass the material as an argument, so you can make your changes to it.

#### Parameters

##### callback

(`material`) => `void`

the callback to be executed that will update the material

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.atomicMaterialsUpdate`

***

### bind()

> **bind**(`world`, `mesh?`): `void`

Defined in: [packages/dev/core/src/Materials/pushMaterial.ts:72](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/pushMaterial.ts#L72)

Binds the material to the mesh

#### Parameters

##### world

[`Matrix`](Matrix.md)

defines the world transformation matrix

##### mesh?

[`Mesh`](Mesh.md)

defines the mesh to bind the material to

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.bind`

***

### bindEyePosition()

> **bindEyePosition**(`effect`, `variableName?`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1508](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1508)

Binds the view matrix to the effect

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind the view matrix to

##### variableName?

`string`

name of the shader variable that will hold the eye position

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.bindEyePosition`

***

### bindForSubMesh()

> **bindForSubMesh**(`world`, `mesh`, `subMesh`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2527](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2527)

Binds the submesh data.

#### Parameters

##### world

[`Matrix`](Matrix.md)

The world matrix.

##### mesh

[`Mesh`](Mesh.md)

The BJS mesh.

##### subMesh

[`SubMesh`](SubMesh.md)

A submesh of the BJS mesh.

#### Returns

`void`

#### Overrides

`OpenPBRMaterialBase.bindForSubMesh`

***

### bindOnlyNormalMatrix()

> **bindOnlyNormalMatrix**(`normalMatrix`): `void`

Defined in: [packages/dev/core/src/Materials/pushMaterial.ts:68](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/pushMaterial.ts#L68)

Binds the given normal matrix to the active effect

#### Parameters

##### normalMatrix

[`Matrix`](Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.bindOnlyNormalMatrix`

***

### bindOnlyWorldMatrix()

> **bindOnlyWorldMatrix**(`world`): `void`

Defined in: [packages/dev/core/src/Materials/pushMaterial.ts:59](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/pushMaterial.ts#L59)

Binds the given world matrix to the active effect

#### Parameters

##### world

[`Matrix`](Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.bindOnlyWorldMatrix`

***

### bindPropertiesForSubMesh()

> **bindPropertiesForSubMesh**(`uniformBuffer`, `scene`, `engine`, `subMesh`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2510](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2510)

Binds the material data (this function is called even if mustRebind() returns false)

#### Parameters

##### uniformBuffer

[`UniformBuffer`](UniformBuffer.md)

defines the Uniform buffer to fill in.

##### scene

[`Scene`](Scene.md)

defines the scene the material belongs to.

##### engine

[`Engine`](Engine.md)

defines the engine the material belongs to.

##### subMesh

[`SubMesh`](SubMesh.md)

the submesh to bind data for

#### Returns

`void`

***

### bindView()

> **bindView**(`effect`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1481](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1481)

Binds the view matrix to the effect

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind the view matrix to

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.bindView`

***

### bindViewProjection()

> **bindViewProjection**(`effect`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1493](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1493)

Binds the view projection and projection matrices to the effect

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind the view projection and projection matrices to

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.bindViewProjection`

***

### buildUniformLayout()

> **buildUniformLayout**(): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2475](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2475)

Initializes the uniform buffer layout for the shader.

#### Returns

`void`

#### Overrides

`OpenPBRMaterialBase.buildUniformLayout`

***

### clone()

> **clone**(`name`, `cloneTexturesOnlyOnce?`, `rootUrl?`): `OpenPBRMaterial`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2196](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2196)

Makes a duplicate of the current material.

#### Parameters

##### name

`string`

name to use for the new material.

##### cloneTexturesOnlyOnce?

`boolean` = `true`

if a texture is used in more than one channel (e.g baseColor and opacity), only clone it once and reuse it on the other channels. Default false.

##### rootUrl?

`string` = `""`

defines the root URL to use to load textures

#### Returns

`OpenPBRMaterial`

cloned material instance

#### Overrides

`OpenPBRMaterialBase.clone`

***

### dispose()

> **dispose**(`forceDisposeEffect?`, `forceDisposeTextures?`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2833](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2833)

Disposes the resources of the material.

#### Parameters

##### forceDisposeEffect?

`boolean`

Forces the disposal of effects.

##### forceDisposeTextures?

`boolean`

Forces the disposal of all textures.

#### Returns

`void`

#### Overrides

`OpenPBRMaterialBase.dispose`

***

### forceCompilation()

> **forceCompilation**(`mesh`, `onCompiled?`, `options?`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2246](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2246)

Force shader compilation

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

Define the mesh we want to force the compilation for

##### onCompiled?

(`material`) => `void`

Define a callback triggered when the compilation completes

##### options?

`Partial`\<[`IMaterialCompilationOptions`](../interfaces/IMaterialCompilationOptions.md)\>

Define the options used to create the compilation

#### Returns

`void`

#### Overrides

`OpenPBRMaterialBase.forceCompilation`

***

### forceCompilationAsync()

> **forceCompilationAsync**(`mesh`, `options?`): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1754](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1754)

Force shader compilation

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh that will use this material

##### options?

`Partial`\<[`IMaterialCompilationOptions`](../interfaces/IMaterialCompilationOptions.md)\>

defines additional options for compiling the shaders

#### Returns

`Promise`\<`void`\>

a promise that resolves when the compilation completes

#### Inherited from

`OpenPBRMaterialBase.forceCompilationAsync`

***

### freeze()

> **freeze**(): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1181](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1181)

Locks updates for the material.

Note: while a material is frozen, the scene can still rebind it at least
once per camera render (and again whenever another material was bound in
between). What can be skipped while the frozen material stays cached are
per-mesh updates performed during a rebind.

This includes per-mesh morph target influences. If the same frozen
material is shared across several meshes that each have different
per-mesh morph influences, only the mesh that triggers the rebind updates
those values. Other meshes rendered afterward with the same cached frozen
material may reuse stale influences and render with the wrong values.

For that scenario either keep the material unfrozen, clone the material
per mesh and freeze each clone, or `unfreeze()` before changing
influences and `freeze()` again afterwards.

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.freeze`

***

### getActiveTextures()

> **getActiveTextures**(): [`BaseTexture`](BaseTexture.md)[]

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2775](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2775)

Returns an array of the actively used textures.

#### Returns

[`BaseTexture`](BaseTexture.md)[]

- Array of BaseTextures

#### Overrides

`OpenPBRMaterialBase.getActiveTextures`

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1368](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1368)

Gets the texture used for the alpha test

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

the texture to use for alpha testing

#### Inherited from

`OpenPBRMaterialBase.getAlphaTestTexture`

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../interfaces/IAnimatable.md)[]

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2753](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2753)

Returns the animatable textures.
If material have animatable metallic texture, then reflectivity texture will not be returned, even if it has animations.

#### Returns

[`IAnimatable`](../interfaces/IAnimatable.md)[]

- Array of animatable textures.

#### Overrides

`OpenPBRMaterialBase.getAnimatables`

***

### getBindedMeshes()

> **getBindedMeshes**(): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1651](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1651)

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

`OpenPBRMaterialBase.getBindedMeshes`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2135](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2135)

#### Returns

`string`

the name of the material class.

#### Overrides

`OpenPBRMaterialBase.getClassName`

***

### getEffect()

> **getEffect**(): [`Effect`](Effect.md)

Defined in: [packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/pushMaterial.ts#L23)

Returns the material effect

#### Returns

[`Effect`](Effect.md)

the effect associated with the material

#### Inherited from

`OpenPBRMaterialBase.getEffect`

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1238](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1238)

Returns the current scene

#### Returns

[`Scene`](Scene.md)

a Scene

#### Inherited from

`OpenPBRMaterialBase.getScene`

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2798](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2798)

Checks to see if a texture is used in the material.

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

Base texture to use.

#### Returns

`boolean`

- Boolean specifying if a texture is used in the material.

#### Overrides

`OpenPBRMaterialBase.hasTexture`

***

### isReady()

> **isReady**(`mesh?`, `useInstances?`): `boolean`

Defined in: [packages/dev/core/src/Materials/pushMaterial.ts:27](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/pushMaterial.ts#L27)

Specifies if the material is ready to be used

#### Parameters

##### mesh?

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to check

##### useInstances?

`boolean`

specifies if instances should be used

#### Returns

`boolean`

a boolean indicating if the material is ready to be used

#### Inherited from

`OpenPBRMaterialBase.isReady`

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`mesh`, `subMesh`, `useInstances?`): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2295](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2295)

Specifies that the submesh is ready to be used.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

BJS mesh.

##### subMesh

[`SubMesh`](SubMesh.md)

A submesh of the BJS mesh.  Used to check if it is ready.

##### useInstances?

`boolean`

Specifies that instances should be used.

#### Returns

`boolean`

- boolean indicating that the submesh is ready or not.

#### Overrides

`OpenPBRMaterialBase.isReadyForSubMesh`

***

### markAsDirty()

> **markAsDirty**(`flag`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1800](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1800)

Marks a define in the material to indicate that it needs to be re-computed

#### Parameters

##### flag

`number`

defines a flag used to determine which parts of the material have to be marked as dirty

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.markAsDirty`

***

### markDirty()

> **markDirty**(`forceMaterialDirty?`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1376](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1376)

Marks the material to indicate that it needs to be re-calculated

#### Parameters

##### forceMaterialDirty?

`boolean` = `false`

Forces the material to be marked as dirty for all components (same as this.markAsDirty(Material.AllDirtyFlag)). You should use this flag if the material is frozen and you want to force a recompilation.

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.markDirty`

***

### needAlphaBlending()

> **needAlphaBlending**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2174](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2174)

#### Returns

`boolean`

true when the material needs alpha blending — i.e. when geometry_opacity < 1
or a geometry opacity texture is present.

#### Overrides

`OpenPBRMaterialBase.needAlphaBlending`

***

### needAlphaBlendingForMesh()

> **needAlphaBlendingForMesh**(`mesh`): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2185](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2185)

Specifies if the mesh will require alpha blending.
Overridden to check geometry_opacity before the _hasTransparencyMode short-circuit in the
base class, which would otherwise always return false when _transparencyMode is MATERIAL_OPAQUE.

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

The mesh to check

#### Returns

`boolean`

true if alpha blending is needed for the mesh

#### Overrides

`OpenPBRMaterialBase.needAlphaBlendingForMesh`

***

### ~~needAlphaTesting()~~

> **needAlphaTesting**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1343](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1343)

Specifies whether or not this material should be rendered in alpha test mode.

#### Returns

`boolean`

a boolean specifying if an alpha test is needed.

#### Deprecated

Please use needAlphaTestingForMesh instead

#### Inherited from

`OpenPBRMaterialBase.needAlphaTesting`

***

### needAlphaTestingForMesh()

> **needAlphaTestingForMesh**(`mesh`): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1356](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1356)

Specifies if material alpha testing should be turned on for the mesh

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha testing should be turned on for the mesh

#### Inherited from

`OpenPBRMaterialBase.needAlphaTestingForMesh`

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1845](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1845)

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.resetDrawCache`

***

### serialize()

> **serialize**(): `any`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2213](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2213)

Serializes this PBR Material.

#### Returns

`any`

- An object with the serialized material.

#### Overrides

`OpenPBRMaterialBase.serialize`

***

### setAlphaMode()

> **setAlphaMode**(`value`, `targetIndex?`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:702](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L702)

Sets the value of the alpha mode for a specific target index.

#### Parameters

##### value

`number`

The alpha mode value to set.

##### targetIndex?

`number` = `0`

The index of the target to set the alpha mode for. Defaults to 0.

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.setAlphaMode`

***

### setPrePassRenderer()

> **setPrePassRenderer**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2824](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2824)

Sets the required values to the prepass renderer.
It can't be sets when subsurface scattering of this material is disabled.
When scene have ability to enable subsurface prepass effect, it will enable.

#### Returns

`boolean`

- If prepass is enabled or not.

#### Overrides

`OpenPBRMaterialBase.setPrePassRenderer`

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1138](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1138)

Returns a string representation of the current material

#### Parameters

##### fullDetails?

`boolean`

defines a boolean indicating which levels of logging is desired

#### Returns

`string`

a string with material information

#### Inherited from

`OpenPBRMaterialBase.toString`

***

### unbind()

> **unbind**(): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1563](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1563)

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.unbind`

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1189](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L1189)

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.unfreeze`

***

### Parse()

> `static` **Parse**(`source`, `scene`, `rootUrl`): `OpenPBRMaterial`

Defined in: [packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts:2228](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/PBR/openpbrMaterial.pure.ts#L2228)

Parses a PBR Material from a serialized object.

#### Parameters

##### source

`any`

Serialized object.

##### scene

[`Scene`](Scene.md)

BJS scene instance.

##### rootUrl

`string`

url for the scene object

#### Returns

`OpenPBRMaterial`

- OpenPBRMaterial

#### Overrides

`OpenPBRMaterialBase.Parse`

***

### ParseAlphaMode()

> `static` **ParseAlphaMode**(`parsedMaterial`, `material`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:2144](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L2144)

Parses the alpha mode from the material data to parse

#### Parameters

##### parsedMaterial

`any`

defines the material data to parse

##### material

[`Material`](Material.md)

defines the material to update

#### Returns

`void`

#### Inherited from

`OpenPBRMaterialBase.ParseAlphaMode`
