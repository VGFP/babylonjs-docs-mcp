[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PBRBaseMaterial

# Abstract Class: PBRBaseMaterial

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:293](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L293)

The Physically based material base class of BJS.

This offers the main features of a standard PBR material.
For more information, please refer to the documentation :
https://doc.babylonjs.com/features/featuresDeepDive/materials/using/introToPBR

## See

 - [WebGL](https://playground.babylonjs.com/#CGHTSM#1)
 - [WebGPU](https://playground.babylonjs.com/#CGHTSM#2)

## Extends

- `PBRBaseMaterialBase`

## Extended by

- [`PBRBaseSimpleMaterial`](PBRBaseSimpleMaterial.md)
- [`PBRMaterial`](PBRMaterial.md)

## Constructors

### Constructor

> **new PBRBaseMaterial**(`name`, `scene?`, `forceGLSL?`): `PBRBaseMaterial`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:909](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L909)

Instantiates a new PBRMaterial instance.

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

`PBRBaseMaterial`

#### Overrides

`PBRBaseMaterialBase.constructor`

## Properties

### \_imageProcessingConfiguration

> **\_imageProcessingConfiguration**: [`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:39](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L39)

Default configuration related to image processing available in the standard Material.

#### Inherited from

`PBRBaseMaterialBase._imageProcessingConfiguration`

***

### \_imageProcessingObserver

> **\_imageProcessingObserver**: [`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](Observer.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>\>

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:65](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L65)

Keep track of the image processing observer to allow dispose and replace.

#### Inherited from

`PBRBaseMaterialBase._imageProcessingObserver`

***

### allowShaderHotSwapping

> **allowShaderHotSwapping**: `boolean` = `true`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L258)

Gets or sets a boolean indicating that the material is allowed (if supported) to do shader hot swapping.
This means that the material can keep using a previous shader while a new one is being compiled.
This is mostly used when shader parallel compilation is supported (true by default)

#### Inherited from

`PBRBaseMaterialBase.allowShaderHotSwapping`

***

### animations

> **animations**: [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](Animation.md)[]\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L565)

Stores the animations for the material

#### Inherited from

`PBRBaseMaterialBase.animations`

***

### anisotropy

> `readonly` **anisotropy**: [`PBRAnisotropicConfiguration`](PBRAnisotropicConfiguration.md)

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:873](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L873)

Defines the anisotropic parameters for the material.

***

### brdf

> `readonly` **brdf**: [`PBRBRDFConfiguration`](PBRBRDFConfiguration.md)

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:878](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L878)

Defines the BRDF parameters for the material.

***

### checkReadyOnEveryCall

> **checkReadyOnEveryCall**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:339](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L339)

Specifies if the ready state should be checked on each call

#### Inherited from

`PBRBaseMaterialBase.checkReadyOnEveryCall`

***

### checkReadyOnlyOnce

> **checkReadyOnlyOnce**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L345)

Specifies if the ready state should be checked once

#### Inherited from

`PBRBaseMaterialBase.checkReadyOnlyOnce`

***

### clearCoat

> `readonly` **clearCoat**: [`PBRClearCoatConfiguration`](PBRClearCoatConfiguration.md)

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:863](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L863)

Defines the clear coat layer parameters for the material.

***

### clipPlane

> **clipPlane**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:878](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L878)

Gets or sets the active clipplane 1

#### Inherited from

`PBRBaseMaterialBase.clipPlane`

***

### clipPlane2

> **clipPlane2**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:883](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L883)

Gets or sets the active clipplane 2

#### Inherited from

`PBRBaseMaterialBase.clipPlane2`

***

### clipPlane3

> **clipPlane3**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:888](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L888)

Gets or sets the active clipplane 3

#### Inherited from

`PBRBaseMaterialBase.clipPlane3`

***

### clipPlane4

> **clipPlane4**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:893](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L893)

Gets or sets the active clipplane 4

#### Inherited from

`PBRBaseMaterialBase.clipPlane4`

***

### clipPlane5

> **clipPlane5**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:898](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L898)

Gets or sets the active clipplane 5

#### Inherited from

`PBRBaseMaterialBase.clipPlane5`

***

### clipPlane6

> **clipPlane6**: [`Nullable`](../type-aliases/Nullable.md)\<[`Plane`](Plane.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:903](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L903)

Gets or sets the active clipplane 6

#### Inherited from

`PBRBaseMaterialBase.clipPlane6`

***

### customShaderNameResolve

> **customShaderNameResolve**: (`shaderName`, `uniforms`, `uniformBuffers`, `samplers`, `defines`, `attributes?`, `options?`) => `string`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L238)

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

`PBRBaseMaterialBase.customShaderNameResolve`

***

### decalMap

> **decalMap**: [`Nullable`](../type-aliases/Nullable.md)\<[`DecalMapConfiguration`](DecalMapConfiguration.md)\>

Defined in: [packages/dev/core/src/Materials/PBR/pbrMaterial.decalMap.types.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrMaterial.decalMap.types.ts#L12)

Defines the decal map parameters for the material.

***

### depthFunction

> **depthFunction**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:765](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L765)

Specifies the depth function that should be used. 0 means the default engine function

#### Inherited from

`PBRBaseMaterialBase.depthFunction`

***

### detailMap

> `readonly` **detailMap**: [`DetailMapConfiguration`](DetailMapConfiguration.md)

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:898](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L898)

Defines the detail map parameters for the material.

***

### disableColorWrite

> **disableColorWrite**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:753](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L753)

Specifies if color writing should be disabled

#### Inherited from

`PBRBaseMaterialBase.disableColorWrite`

***

### disableDepthWrite

> **disableDepthWrite**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:747](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L747)

Specifies if depth writing should be disabled

#### Inherited from

`PBRBaseMaterialBase.disableDepthWrite`

***

### doNotSerialize

> **doNotSerialize**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:555](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L555)

Specifies if the material should be serialized

#### Inherited from

`PBRBaseMaterialBase.doNotSerialize`

***

### forceDepthWrite

> **forceDepthWrite**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:759](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L759)

Specifies if depth writing should be forced

#### Inherited from

`PBRBaseMaterialBase.forceDepthWrite`

***

### getRenderTargetTextures

> **getRenderTargetTextures**: [`Nullable`](../type-aliases/Nullable.md)\<() => [`SmartArray`](SmartArray.md)\<[`RenderTargetTexture`](RenderTargetTexture.md)\>\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L541)

Callback triggered to get the render target textures

#### Inherited from

`PBRBaseMaterialBase.getRenderTargetTextures`

***

### id

> **id**: `string`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L304)

The ID of the material

#### Inherited from

`PBRBaseMaterialBase.id`

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](../interfaces/IInspectable.md)[]

Defined in: [packages/dev/core/src/Materials/material.pure.ts:372](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L372)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

`PBRBaseMaterialBase.inspectableCustomProperties`

***

### iridescence

> `readonly` **iridescence**: [`PBRIridescenceConfiguration`](PBRIridescenceConfiguration.md)

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:868](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L868)

Defines the iridescence layer parameters for the material.

***

### metadata

> **metadata**: `any` = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L325)

Gets or sets user defined metadata

#### Inherited from

`PBRBaseMaterialBase.metadata`

***

### name

> **name**: `string`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L319)

The name of the material

#### Inherited from

`PBRBaseMaterialBase.name`

***

### onCompiled

> **onCompiled**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`) => `void`\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:531](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L531)

Callback triggered when the material is compiled

#### Inherited from

`PBRBaseMaterialBase.onCompiled`

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:570](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L570)

An event triggered when the material is disposed

#### Inherited from

`PBRBaseMaterialBase.onDisposeObservable`

***

### onError

> **onError**: [`Nullable`](../type-aliases/Nullable.md)\<(`effect`, `errors`) => `void`\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:536](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L536)

Callback triggered when an error occurs

#### Inherited from

`PBRBaseMaterialBase.onError`

***

### pluginManager?

> `optional` **pluginManager?**: [`MaterialPluginManager`](MaterialPluginManager.md)

Defined in: [packages/dev/core/src/Materials/materialPluginManager.types.ts:8](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/materialPluginManager.types.ts#L8)

Plugin manager for this material

#### Inherited from

`PBRBaseMaterialBase.pluginManager`

***

### pointSize

> **pointSize**: `number` = `1.0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:801](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L801)

Stores the size of points

#### Inherited from

`PBRBaseMaterialBase.pointSize`

***

### prePassConfiguration

> `readonly` **prePassConfiguration**: `PrePassConfiguration`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:893](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L893)

Defines additional PrePass parameters for the material.

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L333)

For internal use only. Please do not use.

#### Inherited from

`PBRBaseMaterialBase.reservedDataStore`

***

### separateCullingPass

> **separateCullingPass**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:771](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L771)

Specifies if there should be a separate pass for culling

#### Inherited from

`PBRBaseMaterialBase.separateCullingPass`

***

### shadowDepthWrapper

> **shadowDepthWrapper**: [`Nullable`](../type-aliases/Nullable.md)\<[`ShadowDepthWrapper`](ShadowDepthWrapper.md)\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L251)

Custom shadow depth material to use for shadow rendering instead of the in-built one

#### Inherited from

`PBRBaseMaterialBase.shadowDepthWrapper`

***

### sheen

> `readonly` **sheen**: [`PBRSheenConfiguration`](PBRSheenConfiguration.md)

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:883](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L883)

Defines the Sheen parameters for the material.

***

### sideOrientation

> **sideOrientation**: [`Nullable`](../type-aliases/Nullable.md)\<`number`\> = `null`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:526](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L526)

Stores the value for side orientation

#### Inherited from

`PBRBaseMaterialBase.sideOrientation`

***

### state

> **state**: `string` = `""`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:351](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L351)

The state of the material

#### Inherited from

`PBRBaseMaterialBase.state`

***

### stencil

> `readonly` **stencil**: [`MaterialStencilState`](MaterialStencilState.md)

Defined in: [packages/dev/core/src/Materials/material.pure.ts:908](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L908)

Gives access to the stencil properties of the material

#### Inherited from

`PBRBaseMaterialBase.stencil`

***

### subSurface

> `readonly` **subSurface**: [`PBRSubSurfaceConfiguration`](PBRSubSurfaceConfiguration.md)

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:888](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L888)

Defines the SubSurface parameters for the material.

***

### textureRepetitionHexTilingParams

> **textureRepetitionHexTilingParams**: `number`[]

Defined in: [packages/dev/core/src/Materials/material.pure.ts:459](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L459)

Parameters for the hex tiling texture repetition mode (TEXTURE_REPETITION_HEX_TILING).
x = rotation strength (0..1, default 1.0) — how much each hex tile is rotated.
y = fall-off contrast (0..1, default 0.6) — how much luminance affects blending weight at tile borders.
z = exponent (1..20, default 7.0) — controls the sharpness of weight falloff between tiles.
w = contrast (0..1, default 0.5) — boost blending contrast via Gain3 (0.5 = neutral, &gt;0.5 = higher contrast).

#### See

https://jcgt.org/published/0011/03/05/

#### Inherited from

`PBRBaseMaterialBase.textureRepetitionHexTilingParams`

***

### uniqueId

> **uniqueId**: `number`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:310](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L310)

Gets or sets the unique id of the material

#### Inherited from

`PBRBaseMaterialBase.uniqueId`

***

### zOffset

> **zOffset**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:807](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L807)

Stores the z offset Factor value

#### Inherited from

`PBRBaseMaterialBase.zOffset`

***

### zOffsetUnits

> **zOffsetUnits**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:813](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L813)

Stores the z offset Units value

#### Inherited from

`PBRBaseMaterialBase.zOffsetUnits`

***

### AllDirtyFlag

> `readonly` `static` **AllDirtyFlag**: `127` = `Constants.MATERIAL_AllDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L173)

The all dirty flag value

#### Inherited from

`PBRBaseMaterialBase.AllDirtyFlag`

***

### AttributesDirtyFlag

> `readonly` `static` **AttributesDirtyFlag**: `8` = `Constants.MATERIAL_AttributesDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L158)

The dirty attribute flag value

#### Inherited from

`PBRBaseMaterialBase.AttributesDirtyFlag`

***

### ClockWiseSideOrientation

> `readonly` `static` **ClockWiseSideOrientation**: `0` = `Constants.MATERIAL_ClockWiseSideOrientation`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L128)

Stores the clock-wise side orientation

#### Inherited from

`PBRBaseMaterialBase.ClockWiseSideOrientation`

***

### CounterClockWiseSideOrientation

> `readonly` `static` **CounterClockWiseSideOrientation**: `1` = `Constants.MATERIAL_CounterClockWiseSideOrientation`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:133](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L133)

Stores the counter clock-wise side orientation

#### Inherited from

`PBRBaseMaterialBase.CounterClockWiseSideOrientation`

***

### DEFAULT\_AO\_ON\_ANALYTICAL\_LIGHTS

> `static` **DEFAULT\_AO\_ON\_ANALYTICAL\_LIGHTS**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:319](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L319)

Defines the default value of how much AO map is occluding the analytical lights
(point spot...).

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:342](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L342)

Force all the PBR materials to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

***

### ForceVertexOutputInvariant

> `static` **ForceVertexOutputInvariant**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L233)

If true, all materials will have their vertex output set to invariant (see the vertexOutputInvariant property).

#### Inherited from

`PBRBaseMaterialBase.ForceVertexOutputInvariant`

***

### FresnelDirtyFlag

> `readonly` `static` **FresnelDirtyFlag**: `4` = `Constants.MATERIAL_FresnelDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L153)

The dirty fresnel flag value

#### Inherited from

`PBRBaseMaterialBase.FresnelDirtyFlag`

***

### ImageProcessingDirtyFlag

> `readonly` `static` **ImageProcessingDirtyFlag**: `64` = `Constants.MATERIAL_ImageProcessingDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L138)

The dirty image processing flag value

#### Inherited from

`PBRBaseMaterialBase.ImageProcessingDirtyFlag`

***

### LightDirtyFlag

> `readonly` `static` **LightDirtyFlag**: `2` = `Constants.MATERIAL_LightDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L148)

The dirty light flag value

#### Inherited from

`PBRBaseMaterialBase.LightDirtyFlag`

***

### LIGHTFALLOFF\_GLTF

> `readonly` `static` **LIGHTFALLOFF\_GLTF**: `1` = `1`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:330](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L330)

PBRMaterialLightFalloff gltf: light is falling off as described in the gltf moving to PBR document
to enhance interoperability with other engines.

#### Overrides

`PBRBaseMaterialBase.LIGHTFALLOFF_GLTF`

***

### LIGHTFALLOFF\_PHYSICAL

> `readonly` `static` **LIGHTFALLOFF\_PHYSICAL**: `0` = `0`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:324](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L324)

PBRMaterialLightFalloff Physical: light is falling off following the inverse squared distance law.

#### Overrides

`PBRBaseMaterialBase.LIGHTFALLOFF_PHYSICAL`

***

### LIGHTFALLOFF\_STANDARD

> `readonly` `static` **LIGHTFALLOFF\_STANDARD**: `2` = `2`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L336)

PBRMaterialLightFalloff Standard: light is falling off like in the standard material
to enhance interoperability with other materials.

#### Overrides

`PBRBaseMaterialBase.LIGHTFALLOFF_STANDARD`

***

### LineListDrawMode

> `readonly` `static` **LineListDrawMode**: `4` = `Constants.MATERIAL_LineListDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L107)

Returns the line list draw mode

#### Inherited from

`PBRBaseMaterialBase.LineListDrawMode`

***

### LineLoopDrawMode

> `readonly` `static` **LineLoopDrawMode**: `5` = `Constants.MATERIAL_LineLoopDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L111)

Returns the line loop draw mode

#### Inherited from

`PBRBaseMaterialBase.LineLoopDrawMode`

***

### LineStripDrawMode

> `readonly` `static` **LineStripDrawMode**: `6` = `Constants.MATERIAL_LineStripDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L115)

Returns the line strip draw mode

#### Inherited from

`PBRBaseMaterialBase.LineStripDrawMode`

***

### MATERIAL\_ALPHABLEND

> `readonly` `static` **MATERIAL\_ALPHABLEND**: `2` = `2`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:188](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L188)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

#### Inherited from

`PBRBaseMaterialBase.MATERIAL_ALPHABLEND`

***

### MATERIAL\_ALPHATEST

> `readonly` `static` **MATERIAL\_ALPHATEST**: `1` = `1`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L183)

MaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

#### Inherited from

`PBRBaseMaterialBase.MATERIAL_ALPHATEST`

***

### MATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **MATERIAL\_ALPHATESTANDBLEND**: `3` = `3`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:194](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L194)

MaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

#### Inherited from

`PBRBaseMaterialBase.MATERIAL_ALPHATESTANDBLEND`

***

### MATERIAL\_NORMALBLENDMETHOD\_RNM

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_RNM**: `1` = `1`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:206](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L206)

The Reoriented Normal Mapping method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`PBRBaseMaterialBase.MATERIAL_NORMALBLENDMETHOD_RNM`

***

### MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT

> `readonly` `static` **MATERIAL\_NORMALBLENDMETHOD\_WHITEOUT**: `0` = `0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:200](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L200)

The Whiteout method is used to blend normals.
Details of the algorithm can be found here: https://blog.selfshadow.com/publications/blending-in-detail/

#### Inherited from

`PBRBaseMaterialBase.MATERIAL_NORMALBLENDMETHOD_WHITEOUT`

***

### MATERIAL\_OPAQUE

> `readonly` `static` **MATERIAL\_OPAQUE**: `0` = `0`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L178)

MaterialTransparencyMode: No transparency mode, Alpha channel is not use.

#### Inherited from

`PBRBaseMaterialBase.MATERIAL_OPAQUE`

***

### MiscDirtyFlag

> `readonly` `static` **MiscDirtyFlag**: `16` = `Constants.MATERIAL_MiscDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:163](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L163)

The dirty misc flag value

#### Inherited from

`PBRBaseMaterialBase.MiscDirtyFlag`

***

### OnEventObservable

> `static` **OnEventObservable**: [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:228](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L228)

Event observable which raises global events common to all materials (like MaterialPluginEvent.Created)

#### Inherited from

`PBRBaseMaterialBase.OnEventObservable`

***

### PBRMATERIAL\_ALPHABLEND

> `readonly` `static` **PBRMATERIAL\_ALPHABLEND**: `2` = `Material.MATERIAL_ALPHABLEND`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:307](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L307)

PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.

***

### PBRMATERIAL\_ALPHATEST

> `readonly` `static` **PBRMATERIAL\_ALPHATEST**: `1` = `Material.MATERIAL_ALPHATEST`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L302)

PBRMaterialTransparencyMode: Alpha Test mode, pixel are discarded below a certain threshold defined by the alpha cutoff value.

***

### PBRMATERIAL\_ALPHATESTANDBLEND

> `readonly` `static` **PBRMATERIAL\_ALPHATESTANDBLEND**: `3` = `Material.MATERIAL_ALPHATESTANDBLEND`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:313](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L313)

PBRMaterialTransparencyMode: Pixels are blended (according to the alpha mode) with the already drawn pixels in the current frame buffer.
They are also discarded below the alpha cutoff threshold to improve performances.

***

### PBRMATERIAL\_OPAQUE

> `readonly` `static` **PBRMATERIAL\_OPAQUE**: `0` = `Material.MATERIAL_OPAQUE`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L297)

PBRMaterialTransparencyMode: No transparency mode, Alpha channel is not use.

***

### PointFillMode

> `readonly` `static` **PointFillMode**: `2` = `Constants.MATERIAL_PointFillMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L99)

Returns the point fill mode

#### Inherited from

`PBRBaseMaterialBase.PointFillMode`

***

### PointListDrawMode

> `readonly` `static` **PointListDrawMode**: `3` = `Constants.MATERIAL_PointListDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:103](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L103)

Returns the point list draw mode

#### Inherited from

`PBRBaseMaterialBase.PointListDrawMode`

***

### PrePassDirtyFlag

> `readonly` `static` **PrePassDirtyFlag**: `32` = `Constants.MATERIAL_PrePassDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L168)

The dirty prepass flag value

#### Inherited from

`PBRBaseMaterialBase.PrePassDirtyFlag`

***

### TextureDirtyFlag

> `readonly` `static` **TextureDirtyFlag**: `1` = `Constants.MATERIAL_TextureDirtyFlag`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L143)

The dirty texture flag value

#### Inherited from

`PBRBaseMaterialBase.TextureDirtyFlag`

***

### TriangleFanDrawMode

> `readonly` `static` **TriangleFanDrawMode**: `8` = `Constants.MATERIAL_TriangleFanDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:123](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L123)

Returns the triangle fan draw mode

#### Inherited from

`PBRBaseMaterialBase.TriangleFanDrawMode`

***

### TriangleFillMode

> `readonly` `static` **TriangleFillMode**: `0` = `Constants.MATERIAL_TriangleFillMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:91](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L91)

Returns the triangle fill mode

#### Inherited from

`PBRBaseMaterialBase.TriangleFillMode`

***

### TriangleStripDrawMode

> `readonly` `static` **TriangleStripDrawMode**: `7` = `Constants.MATERIAL_TriangleStripDrawMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L119)

Returns the triangle strip draw mode

#### Inherited from

`PBRBaseMaterialBase.TriangleStripDrawMode`

***

### WireFrameFillMode

> `readonly` `static` **WireFrameFillMode**: `1` = `Constants.MATERIAL_WireFrameFillMode`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:95](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L95)

Returns the wireframe mode

#### Inherited from

`PBRBaseMaterialBase.WireFrameFillMode`

## Accessors

### alpha

#### Get Signature

> **get** **alpha**(): `number`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L394)

Gets the alpha value of the material

##### Returns

`number`

#### Set Signature

> **set** **alpha**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:377](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L377)

Sets the alpha value of the material

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.alpha`

***

### alphaMode

#### Get Signature

> **get** **alphaMode**(): `number`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:686](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L686)

Gets the value of the alpha mode

##### Returns

`number`

#### Set Signature

> **set** **alphaMode**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:675](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L675)

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

`PBRBaseMaterialBase.alphaMode`

***

### alphaModes

#### Get Signature

> **get** **alphaModes**(): readonly `number`[]

Defined in: [packages/dev/core/src/Materials/material.pure.ts:693](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L693)

Gets the list of alpha modes (length greater than 1 for multi-targets)

##### Returns

readonly `number`[]

#### Inherited from

`PBRBaseMaterialBase.alphaModes`

***

### backFaceCulling

#### Get Signature

> **get** **backFaceCulling**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:418](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L418)

Gets the culling state

##### Returns

`boolean`

#### Set Signature

> **set** **backFaceCulling**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L407)

Sets the culling state (true to enable culling, false to disable)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.backFaceCulling`

***

### blockDirtyMechanism

#### Get Signature

> **get** **blockDirtyMechanism**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:491](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L491)

Block the dirty-mechanism for this specific material
When set to false after being true the material will be marked as dirty.

##### Returns

`boolean`

#### Set Signature

> **set** **blockDirtyMechanism**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:495](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L495)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.blockDirtyMechanism`

***

### cameraColorCurves

#### Get Signature

> **get** **cameraColorCurves**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:188](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L188)

The color grading curves provide additional color adjustmnent that is applied after any color grading transform (3D LUT).
They allow basic adjustment of saturation and small exposure adjustments, along with color filter tinting to provide white balance adjustment or more stylistic effects.
These are similar to controls found in many professional imaging or colorist software. The global controls are applied to the entire image. For advanced tuning, extra controls are provided to adjust the shadow, midtone and highlight areas of the image;
corresponding to low luminance, medium luminance, and high luminance areas respectively.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

#### Set Signature

> **set** **cameraColorCurves**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:197](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L197)

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

`PBRBaseMaterialBase.cameraColorCurves`

***

### cameraColorCurvesEnabled

#### Get Signature

> **get** **cameraColorCurvesEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:102](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L102)

Gets whether the color curves effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraColorCurvesEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:108](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L108)

Sets whether the color curves effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.cameraColorCurvesEnabled`

***

### cameraColorGradingEnabled

#### Get Signature

> **get** **cameraColorGradingEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:115](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L115)

Gets whether the color grading effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraColorGradingEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:121](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L121)

Gets whether the color grading effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.cameraColorGradingEnabled`

***

### cameraColorGradingTexture

#### Get Signature

> **get** **cameraColorGradingTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:172](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L172)

Gets the Color Grading 2D Lookup Texture.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **cameraColorGradingTexture**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:178](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L178)

Sets the Color Grading 2D Lookup Texture.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.cameraColorGradingTexture`

***

### cameraContrast

#### Get Signature

> **get** **cameraContrast**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:158](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L158)

Gets The camera contrast used on this material.

##### Returns

`number`

#### Set Signature

> **set** **cameraContrast**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:165](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L165)

Sets The camera contrast used on this material.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.cameraContrast`

***

### cameraExposure

#### Get Signature

> **get** **cameraExposure**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:143](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L143)

The camera exposure used on this material.
This property is here and not in the camera to allow controlling exposure without full screen post process.
This corresponds to a photographic exposure.

##### Returns

`number`

#### Set Signature

> **set** **cameraExposure**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:151](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L151)

The camera exposure used on this material.
This property is here and not in the camera to allow controlling exposure without full screen post process.
This corresponds to a photographic exposure.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.cameraExposure`

***

### cameraToneMappingEnabled

#### Get Signature

> **get** **cameraToneMappingEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:128](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L128)

Gets whether tonemapping is enabled or not.

##### Returns

`boolean`

#### Set Signature

> **set** **cameraToneMappingEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:134](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L134)

Sets whether tonemapping is enabled or not

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.cameraToneMappingEnabled`

***

### canRenderToMRT

#### Get Signature

> **get** **canRenderToMRT**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:785](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L785)

Can this material render to several textures at once

##### Returns

`boolean`

#### Overrides

`PBRBaseMaterialBase.canRenderToMRT`

***

### cullBackFaces

#### Get Signature

> **get** **cullBackFaces**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L481)

Gets the type of faces that should be culled

##### Returns

`boolean`

#### Set Signature

> **set** **cullBackFaces**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:470](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L470)

Sets the type of faces that should be culled (true for back faces, false for front faces)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.cullBackFaces`

***

### fillMode

#### Get Signature

> **get** **fillMode**(): `number`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:859](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L859)

Gets the material fill mode

##### Returns

`number`

#### Set Signature

> **set** **fillMode**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:866](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L866)

Sets the material fill mode

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.fillMode`

***

### fogEnabled

#### Get Signature

> **get** **fogEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:793](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L793)

Gets the value of the fog enabled state

##### Returns

`boolean`

#### Set Signature

> **set** **fogEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:782](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L782)

Sets the state for enabling fog

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.fogEnabled`

***

### hasRenderTargetTextures

#### Get Signature

> **get** **hasRenderTargetTextures**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:943](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L943)

Gets a boolean indicating that current material needs to register RTT

##### Returns

`boolean`

#### Overrides

`PBRBaseMaterialBase.hasRenderTargetTextures`

***

### imageProcessingConfiguration

#### Get Signature

> **get** **imageProcessingConfiguration**(): [`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:44](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L44)

Gets the image processing configuration used either in this material.

##### Returns

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

#### Set Signature

> **set** **imageProcessingConfiguration**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:53](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L53)

Sets the Default image processing configuration used either in the this material.

If sets to null, the scene one is in use.

##### Parameters

###### value

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.imageProcessingConfiguration`

***

### isFrozen

#### Get Signature

> **get** **isFrozen**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1159](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1159)

Specifies if updates for the material been locked

##### Returns

`boolean`

#### Inherited from

`PBRBaseMaterialBase.isFrozen`

***

### isPrePassCapable

#### Get Signature

> **get** **isPrePassCapable**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:954](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L954)

Can this material render to prepass

##### Returns

`boolean`

#### Overrides

`PBRBaseMaterialBase.isPrePassCapable`

***

### isVertexOutputInvariant

#### Get Signature

> **get** **isVertexOutputInvariant**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:943](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L943)

Gets or sets the vertex output invariant state
Setting this property to true will force the shader compiler to disable some optimization to make sure the vertex output is always calculated
the same way across different compilation units.
You may need to enable this option if you are seeing some depth artifacts when using a depth pre-pass, for e.g.
Note that this may have an impact on performance, so leave this option disabled if not needed.

##### Returns

`boolean`

#### Set Signature

> **set** **isVertexOutputInvariant**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:947](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L947)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.isVertexOutputInvariant`

***

### needDepthPrePass

#### Get Signature

> **get** **needDepthPrePass**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:732](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L732)

Gets the depth pre-pass value

##### Returns

`boolean`

#### Set Signature

> **set** **needDepthPrePass**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:719](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L719)

Sets the need depth pre-pass value

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.needDepthPrePass`

***

### onBind

#### Set Signature

> **set** **onBind**(`callback`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:609](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L609)

Called during a bind event

##### Parameters

###### callback

(`Mesh`) => `void`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.onBind`

***

### onBindObservable

#### Get Signature

> **get** **onBindObservable**(): [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:593](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L593)

An event triggered when the material is bound

##### Returns

[`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

#### Inherited from

`PBRBaseMaterialBase.onBindObservable`

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:581](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L581)

Called during a dispose event

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.onDispose`

***

### onEffectCreatedObservable

#### Get Signature

> **get** **onEffectCreatedObservable**(): [`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:632](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L632)

An event triggered when the effect is (re)created

##### Returns

[`Observable`](Observable.md)\<\{ `effect`: [`Effect`](Effect.md); `subMesh`: [`Nullable`](../type-aliases/Nullable.md)\<[`SubMesh`](SubMesh.md)\>; \}\>

#### Inherited from

`PBRBaseMaterialBase.onEffectCreatedObservable`

***

### onUnBindObservable

#### Get Signature

> **get** **onUnBindObservable**(): [`Observable`](Observable.md)\<[`Material`](Material.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:619](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L619)

An event triggered when the material is unbound

##### Returns

[`Observable`](Observable.md)\<[`Material`](Material.md)\>

#### Inherited from

`PBRBaseMaterialBase.onUnBindObservable`

***

### pointsCloud

#### Get Signature

> **get** **pointsCloud**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:838](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L838)

Gets the value specifying if point clouds are enabled

##### Returns

`boolean`

#### Set Signature

> **set** **pointsCloud**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:851](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L851)

Sets the state of point cloud mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.pointsCloud`

***

### realTimeFiltering

#### Get Signature

> **get** **realTimeFiltering**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:762](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L762)

Enables realtime filtering on the texture.

##### Returns

`boolean`

#### Set Signature

> **set** **realTimeFiltering**(`b`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:765](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L765)

##### Parameters

###### b

`boolean`

##### Returns

`void`

***

### realTimeFilteringQuality

#### Get Signature

> **get** **realTimeFilteringQuality**(): `number`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:774](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L774)

Quality switch for realtime filtering

##### Returns

`number`

#### Set Signature

> **set** **realTimeFilteringQuality**(`n`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:777](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L777)

##### Parameters

###### n

`number`

##### Returns

`void`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [packages/dev/core/src/Materials/material.pure.ts:296](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L296)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

#### Inherited from

`PBRBaseMaterialBase.shaderLanguage`

***

### textureRepetitionMode

#### Get Signature

> **get** **textureRepetitionMode**(): `number`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L446)

Gets the texture repetition breaking mode.

##### See

https://iquilezles.org/articles/texturerepetition/

##### Returns

`number`

#### Set Signature

> **set** **textureRepetitionMode**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L433)

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

`PBRBaseMaterialBase.textureRepetitionMode`

***

### transparencyMode

#### Get Signature

> **get** **transparencyMode**(): [`Nullable`](../type-aliases/Nullable.md)\<`number`\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1256](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1256)

Gets the current transparency mode.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

#### Set Signature

> **set** **transparencyMode**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1271](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1271)

Sets the transparency mode of the material.

| Value | Type                                | Description |
| ----- | ----------------------------------- | ----------- |
| 0     | OPAQUE                              |             |
| 1     | ALPHATEST                           |             |
| 2     | ALPHABLEND                          |             |
| 3     | ALPHATESTANDBLEND                   |             |

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.transparencyMode`

***

### useLogarithmicDepth

#### Get Signature

> **get** **useLogarithmicDepth**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:918](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L918)

In case the depth buffer does not allow enough depth precision for your scene (might be the case in large scenes)
You can try switching to logarithmic depth.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/logarithmicDepthBuffer

##### Returns

`boolean`

#### Set Signature

> **set** **useLogarithmicDepth**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:922](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L922)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.useLogarithmicDepth`

***

### useVertexPulling

#### Get Signature

> **get** **useVertexPulling**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L270)

Tells the engine to draw geometry using vertex pulling instead of index drawing. This will automatically
set the vertex buffers as storage buffers and make them accessible to the vertex shader (WebGPU only).

##### Returns

`boolean`

#### Set Signature

> **set** **useVertexPulling**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:274](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L274)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.useVertexPulling`

***

### wireframe

#### Get Signature

> **get** **wireframe**(): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:815](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L815)

##### Returns

`boolean`

#### Set Signature

> **set** **wireframe**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:830](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L830)

Sets the state of wireframe mode

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.wireframe`

## Methods

### \_attachImageProcessingConfiguration()

> **\_attachImageProcessingConfiguration**(`configuration`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessing.ts:71](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessing.ts#L71)

Attaches a new image processing configuration to the Standard Material.

#### Parameters

##### configuration

[`Nullable`](../type-aliases/Nullable.md)\<[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)\>

#### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase._attachImageProcessingConfiguration`

***

### atomicMaterialsUpdate()

> **atomicMaterialsUpdate**(`callback`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:513](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L513)

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

`PBRBaseMaterialBase.atomicMaterialsUpdate`

***

### bind()

> **bind**(`world`, `mesh?`): `void`

Defined in: [packages/dev/core/src/Materials/pushMaterial.ts:72](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/pushMaterial.ts#L72)

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

`PBRBaseMaterialBase.bind`

***

### bindEyePosition()

> **bindEyePosition**(`effect`, `variableName?`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1508](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1508)

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

`PBRBaseMaterialBase.bindEyePosition`

***

### bindForSubMesh()

> **bindForSubMesh**(`world`, `mesh`, `subMesh`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1930](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1930)

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

`PBRBaseMaterialBase.bindForSubMesh`

***

### bindOnlyNormalMatrix()

> **bindOnlyNormalMatrix**(`normalMatrix`): `void`

Defined in: [packages/dev/core/src/Materials/pushMaterial.ts:68](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/pushMaterial.ts#L68)

Binds the given normal matrix to the active effect

#### Parameters

##### normalMatrix

[`Matrix`](Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.bindOnlyNormalMatrix`

***

### bindOnlyWorldMatrix()

> **bindOnlyWorldMatrix**(`world`): `void`

Defined in: [packages/dev/core/src/Materials/pushMaterial.ts:59](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/pushMaterial.ts#L59)

Binds the given world matrix to the active effect

#### Parameters

##### world

[`Matrix`](Matrix.md)

the matrix to bind

#### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.bindOnlyWorldMatrix`

***

### bindView()

> **bindView**(`effect`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1481](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1481)

Binds the view matrix to the effect

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind the view matrix to

#### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.bindView`

***

### bindViewProjection()

> **bindViewProjection**(`effect`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1493](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1493)

Binds the view projection and projection matrices to the effect

#### Parameters

##### effect

[`Effect`](Effect.md)

defines the effect to bind the view projection and projection matrices to

#### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.bindViewProjection`

***

### buildUniformLayout()

> **buildUniformLayout**(): `void`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1876](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1876)

Initializes the uniform buffer layout for the shader.

#### Returns

`void`

#### Overrides

`PBRBaseMaterialBase.buildUniformLayout`

***

### clone()

> **clone**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1624](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1624)

Makes a duplicate of the material, and gives it a new name

#### Parameters

##### name

`string`

defines the new name for the duplicated material

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

the cloned material

#### Inherited from

`PBRBaseMaterialBase.clone`

***

### dispose()

> **dispose**(`forceDisposeEffect?`, `forceDisposeTextures?`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:2483](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L2483)

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

`PBRBaseMaterialBase.dispose`

***

### forceCompilation()

> **forceCompilation**(`mesh`, `onCompiled?`, `options?`): `void`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1835](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1835)

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

`PBRBaseMaterialBase.forceCompilation`

***

### forceCompilationAsync()

> **forceCompilationAsync**(`mesh`, `options?`): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1754](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1754)

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

`PBRBaseMaterialBase.forceCompilationAsync`

***

### freeze()

> **freeze**(): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1181](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1181)

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

`PBRBaseMaterialBase.freeze`

***

### getActiveTextures()

> **getActiveTextures**(): [`BaseTexture`](BaseTexture.md)[]

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:2328](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L2328)

Returns an array of the actively used textures.

#### Returns

[`BaseTexture`](BaseTexture.md)[]

- Array of BaseTextures

#### Overrides

`PBRBaseMaterialBase.getActiveTextures`

***

### getAlphaTestTexture()

> **getAlphaTestTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1023](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1023)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

the texture used for the alpha test.

#### Overrides

`PBRBaseMaterialBase.getAlphaTestTexture`

***

### getAnimatables()

> **getAnimatables**(): [`IAnimatable`](../interfaces/IAnimatable.md)[]

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:2252](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L2252)

Returns the animatable textures.
If material have animatable metallic texture, then reflectivity texture will not be returned, even if it has animations.

#### Returns

[`IAnimatable`](../interfaces/IAnimatable.md)[]

- Array of animatable textures.

#### Overrides

`PBRBaseMaterialBase.getAnimatables`

***

### getBindedMeshes()

> **getBindedMeshes**(): [`AbstractMesh`](AbstractMesh.md)[]

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1651](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1651)

Gets the meshes bound to the material

#### Returns

[`AbstractMesh`](AbstractMesh.md)[]

an array of meshes bound to the material

#### Inherited from

`PBRBaseMaterialBase.getBindedMeshes`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:961](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L961)

#### Returns

`string`

the name of the material class.

#### Overrides

`PBRBaseMaterialBase.getClassName`

***

### getEffect()

> **getEffect**(): [`Effect`](Effect.md)

Defined in: [packages/dev/core/src/Materials/pushMaterial.ts:23](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/pushMaterial.ts#L23)

Returns the material effect

#### Returns

[`Effect`](Effect.md)

the effect associated with the material

#### Inherited from

`PBRBaseMaterialBase.getEffect`

***

### getScene()

> **getScene**(): [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1238](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1238)

Returns the current scene

#### Returns

[`Scene`](Scene.md)

a Scene

#### Inherited from

`PBRBaseMaterialBase.getScene`

***

### hasTexture()

> **hasTexture**(`texture`): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:2395](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L2395)

Checks to see if a texture is used in the material.

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

Base texture to use.

#### Returns

`boolean`

- Boolean specifying if a texture is used in the material.

#### Overrides

`PBRBaseMaterialBase.hasTexture`

***

### isMetallicWorkflow()

> **isMetallicWorkflow**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1250](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1250)

Specifies if the material uses metallic roughness workflow.

#### Returns

`boolean`

boolean specifying if the material uses metallic roughness workflow.

***

### isReady()

> **isReady**(`mesh?`, `useInstances?`): `boolean`

Defined in: [packages/dev/core/src/Materials/pushMaterial.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/pushMaterial.ts#L27)

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

`PBRBaseMaterialBase.isReady`

***

### isReadyForSubMesh()

> **isReadyForSubMesh**(`mesh`, `subMesh`, `useInstances?`): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:1034](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L1034)

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

`PBRBaseMaterialBase.isReadyForSubMesh`

***

### markAsDirty()

> **markAsDirty**(`flag`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1800](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1800)

Marks a define in the material to indicate that it needs to be re-computed

#### Parameters

##### flag

`number`

defines a flag used to determine which parts of the material have to be marked as dirty

#### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.markAsDirty`

***

### markDirty()

> **markDirty**(`forceMaterialDirty?`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1376](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1376)

Marks the material to indicate that it needs to be re-calculated

#### Parameters

##### forceMaterialDirty?

`boolean` = `false`

Forces the material to be marked as dirty for all components (same as this.markAsDirty(Material.AllDirtyFlag)). You should use this flag if the material is frozen and you want to force a recompilation.

#### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.markDirty`

***

### needAlphaBlending()

> **needAlphaBlending**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:979](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L979)

#### Returns

`boolean`

whether or not this material should be rendered in alpha blend mode.

#### Overrides

`PBRBaseMaterialBase.needAlphaBlending`

***

### needAlphaBlendingForMesh()

> **needAlphaBlendingForMesh**(`mesh`): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1322](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1322)

Specifies if the mesh will require alpha blending

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha blending is needed for the mesh

#### Inherited from

`PBRBaseMaterialBase.needAlphaBlendingForMesh`

***

### needAlphaTesting()

> **needAlphaTesting**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:994](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L994)

#### Returns

`boolean`

whether or not this material should be rendered in alpha test mode.

#### Overrides

`PBRBaseMaterialBase.needAlphaTesting`

***

### needAlphaTestingForMesh()

> **needAlphaTestingForMesh**(`mesh`): `boolean`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1356](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1356)

Specifies if material alpha testing should be turned on for the mesh

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

defines the mesh to check

#### Returns

`boolean`

a boolean specifying if alpha testing should be turned on for the mesh

#### Inherited from

`PBRBaseMaterialBase.needAlphaTestingForMesh`

***

### resetDrawCache()

> **resetDrawCache**(): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1845](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1845)

Resets the draw wrappers cache for all submeshes that are using this material

#### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.resetDrawCache`

***

### serialize()

> **serialize**(): `any`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:2116](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L2116)

Serializes this material

#### Returns

`any`

the serialized material object

#### Inherited from

`PBRBaseMaterialBase.serialize`

***

### setAlphaMode()

> **setAlphaMode**(`value`, `targetIndex?`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:702](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L702)

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

`PBRBaseMaterialBase.setAlphaMode`

***

### setPrePassRenderer()

> **setPrePassRenderer**(): `boolean`

Defined in: [packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts:2465](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/PBR/pbrBaseMaterial.pure.ts#L2465)

Sets the required values to the prepass renderer.
It can't be sets when subsurface scattering of this material is disabled.
When scene have ability to enable subsurface prepass effect, it will enable.

#### Returns

`boolean`

- If prepass is enabled or not.

#### Overrides

`PBRBaseMaterialBase.setPrePassRenderer`

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1138](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1138)

Returns a string representation of the current material

#### Parameters

##### fullDetails?

`boolean`

defines a boolean indicating which levels of logging is desired

#### Returns

`string`

a string with material information

#### Inherited from

`PBRBaseMaterialBase.toString`

***

### unbind()

> **unbind**(): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1563](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1563)

Unbinds the material from the mesh

#### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.unbind`

***

### unfreeze()

> **unfreeze**(): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:1189](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L1189)

Unlocks updates for the material

#### Returns

`void`

#### Inherited from

`PBRBaseMaterialBase.unfreeze`

***

### Parse()

> `static` **Parse**(`parsedMaterial`, `scene`, `rootUrl`): [`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:2161](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L2161)

Creates a material from parsed material data

#### Parameters

##### parsedMaterial

`any`

defines parsed material data

##### scene

[`Scene`](Scene.md)

defines the hosting scene

##### rootUrl

`string`

defines the root URL to use to load textures

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Material`](Material.md)\>

a new material

#### Inherited from

`PBRBaseMaterialBase.Parse`

***

### ParseAlphaMode()

> `static` **ParseAlphaMode**(`parsedMaterial`, `material`): `void`

Defined in: [packages/dev/core/src/Materials/material.pure.ts:2144](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L2144)

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

`PBRBaseMaterialBase.ParseAlphaMode`
