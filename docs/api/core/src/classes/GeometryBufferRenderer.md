[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeometryBufferRenderer

# Class: GeometryBufferRenderer

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L102)

This renderer is helpful to fill one of the render target with a geometry buffer.

## Constructors

### Constructor

> **new GeometryBufferRenderer**(`scene`, `ratioOrDimensions?`, `depthFormat?`, `textureTypesAndFormats?`): `GeometryBufferRenderer`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:577](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L577)

Creates a new G Buffer for the scene

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the buffer belongs to

##### ratioOrDimensions?

`number` \| \{ `height`: `number`; `width`: `number`; \}

How big is the buffer related to the main canvas (default: 1). You can also directly pass a width and height for the generated textures

##### depthFormat?

`number` = `Constants.TEXTUREFORMAT_DEPTH16`

Format of the depth texture (default: Constants.TEXTUREFORMAT_DEPTH16)

##### textureTypesAndFormats?

The types, formats and optional sampling modes of textures to create as render targets.
If not provided, all textures will be RGBA and float or half float, depending on the engine capabilities.

#### Returns

`GeometryBufferRenderer`

## Properties

### excludedSkinnedMeshesFromVelocity

> **excludedSkinnedMeshesFromVelocity**: [`AbstractMesh`](AbstractMesh.md)[] = `[]`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:168](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L168)

Array used to store the ignored skinned meshes while computing velocity map (typically used by the motion blur post-process).
Avoids computing bones velocities and computes only mesh's velocity itself (position, rotation, scaling).

***

### generateIrradianceWithScatterMask

> **generateIrradianceWithScatterMask**: `boolean` = `false`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:529](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L529)

This will store a mask in the alpha channel of the irradiance texture to indicate which pixels have
scattering and should be taken into account when applying image-based lighting.

***

### generateNormalsInWorldSpace

> **generateNormalsInWorldSpace**: `boolean` = `false`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:176](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L176)

Gets or sets a boolean indicating if normals should be generated in world space (default: false, meaning normals are generated in view space)

***

### renderTransparentMeshes

> **renderTransparentMeshes**: `boolean` = `true`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:171](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L171)

Gets or sets a boolean indicating if transparent meshes should be rendered

***

### useSpecificClearForDepthTexture

> **useSpecificClearForDepthTexture**: `boolean` = `false`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:535](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L535)

If set to true (default: false), the depth texture will be cleared with the depth value corresponding to the far plane (1 in normal mode, 0 in reverse depth buffer mode)
If set to false, the depth texture is always cleared with 0.

***

### DEPTH\_TEXTURE\_TYPE

> `readonly` `static` **DEPTH\_TEXTURE\_TYPE**: `0` = `0`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L112)

Constant used to retrieve the depth texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.DEPTH_TEXTURE_INDEX)

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L107)

Force all the standard materials to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

***

### IRRADIANCE\_TEXTURE\_TYPE

> `readonly` `static` **IRRADIANCE\_TEXTURE\_TYPE**: `7` = `7`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:150](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L150)

Constant used to retrieve the irradiance texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.IRRADIANCE_TEXTURE_TYPE)

***

### NORMAL\_TEXTURE\_TYPE

> `readonly` `static` **NORMAL\_TEXTURE\_TYPE**: `1` = `1`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:117](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L117)

Constant used to retrieve the normal texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.NORMAL_TEXTURE_INDEX)

***

### POSITION\_TEXTURE\_TYPE

> `readonly` `static` **POSITION\_TEXTURE\_TYPE**: `2` = `2`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:122](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L122)

Constant used to retrieve the position texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.POSITION_TEXTURE_INDEX)

***

### REFLECTIVITY\_TEXTURE\_TYPE

> `readonly` `static` **REFLECTIVITY\_TEXTURE\_TYPE**: `4` = `4`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L132)

Constant used to retrieve the reflectivity texture index in the G-Buffer textures array
using the getIndex(GeometryBufferRenderer.REFLECTIVITY_TEXTURE_TYPE)

***

### SCREENSPACE\_DEPTH\_TEXTURE\_TYPE

> `readonly` `static` **SCREENSPACE\_DEPTH\_TEXTURE\_TYPE**: `5` = `5`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L138)

Constant used to retrieve the screen-space depth texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.SCREENSPACE_DEPTH_TEXTURE_TYPE)

***

### VELOCITY\_LINEAR\_TEXTURE\_TYPE

> `readonly` `static` **VELOCITY\_LINEAR\_TEXTURE\_TYPE**: `6` = `6`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:144](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L144)

Constant used to retrieve the linear velocity texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.VELOCITY_LINEAR_TEXTURE_TYPE)

***

### VELOCITY\_TEXTURE\_TYPE

> `readonly` `static` **VELOCITY\_TEXTURE\_TYPE**: `3` = `3`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L127)

Constant used to retrieve the velocity texture index in the G-Buffer textures array
using getIndex(GeometryBufferRenderer.VELOCITY_TEXTURE_INDEX)

## Accessors

### enableDepth

#### Get Signature

> **get** **enableDepth**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:368](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L368)

##### Returns

`boolean`

a boolean indicating if object's depths are enabled for the G buffer.

#### Set Signature

> **set** **enableDepth**(`enable`): `void`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:375](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L375)

Sets whether or not object's depths are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableIrradiance

#### Get Signature

> **get** **enableIrradiance**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:509](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L509)

Gets a boolean indicating if objects irradiance are enabled in the G buffer.

##### Returns

`boolean`

#### Set Signature

> **set** **enableIrradiance**(`enable`): `void`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:516](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L516)

Sets whether or not objects irradiance are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableNormal

#### Get Signature

> **get** **enableNormal**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L387)

##### Returns

`boolean`

a boolean indicating if object's normals are enabled for the G buffer.

#### Set Signature

> **set** **enableNormal**(`enable`): `void`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L394)

Sets whether or not object's normals are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enablePosition

#### Get Signature

> **get** **enablePosition**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:406](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L406)

##### Returns

`boolean`

a boolean indicating if objects positions are enabled for the G buffer.

#### Set Signature

> **set** **enablePosition**(`enable`): `void`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:413](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L413)

Sets whether or not objects positions are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableReflectivity

#### Get Signature

> **get** **enableReflectivity**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:470](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L470)

Gets a boolean indicating if objects reflectivity are enabled in the G buffer.

##### Returns

`boolean`

#### Set Signature

> **set** **enableReflectivity**(`enable`): `void`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L481)

Sets whether or not objects reflectivity are enabled for the G buffer.
For Metallic-Roughness workflow with ORM texture, we assume that ORM texture is defined according to the default layout:
pbr.useRoughnessFromMetallicTextureAlpha = false;
pbr.useRoughnessFromMetallicTextureGreen = true;
pbr.useMetallnessFromMetallicTextureBlue = true;

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableScreenspaceDepth

#### Get Signature

> **get** **enableScreenspaceDepth**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:493](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L493)

Sets whether or not objects screenspace depth are enabled for the G buffer.

##### Returns

`boolean`

#### Set Signature

> **set** **enableScreenspaceDepth**(`enable`): `void`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:497](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L497)

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableVelocity

#### Get Signature

> **get** **enableVelocity**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:426](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L426)

##### Returns

`boolean`

a boolean indicating if objects velocities are enabled for the G buffer.

#### Set Signature

> **set** **enableVelocity**(`enable`): `void`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L433)

Sets whether or not objects velocities are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### enableVelocityLinear

#### Get Signature

> **get** **enableVelocityLinear**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:451](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L451)

##### Returns

`boolean`

a boolean indicating if object's linear velocities are enabled for the G buffer.

#### Set Signature

> **set** **enableVelocityLinear**(`enable`): `void`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:458](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L458)

Sets whether or not object's linear velocities are enabled for the G buffer.

##### Parameters

###### enable

`boolean`

##### Returns

`void`

***

### isSupported

#### Get Signature

> **get** **isSupported**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L333)

Gets whether or not G buffer are supported by the running hardware.
This requires draw buffer supports

##### Returns

`boolean`

***

### normalsAreUnsigned

#### Get Signature

> **get** **normalsAreUnsigned**(): `boolean`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:183](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L183)

Gets a boolean indicating if normals are encoded in the [0,1] range in the render target. If true, you should do `normal = normal_rt * 2.0 - 1.0` to get the right normal

##### Returns

`boolean`

***

### ratio

#### Get Signature

> **get** **ratio**(): `number`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:548](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L548)

Gets the ratio used by the buffer during its creation.
How big is the buffer related to the main canvas.

##### Returns

`number`

***

### renderList

#### Get Signature

> **get** **renderList**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:318](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L318)

Gets the render list (meshes to be rendered) used in the G buffer.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

#### Set Signature

> **set** **renderList**(`meshes`): `void`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L325)

Set the render list (meshes to be rendered) used in the G buffer.

##### Parameters

###### meshes

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)[]\>

##### Returns

`void`

***

### samples

#### Get Signature

> **get** **samples**(): `number`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:1050](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L1050)

Gets the number of samples used to render the buffer (anti aliasing).

##### Returns

`number`

#### Set Signature

> **set** **samples**(`value`): `void`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:1057](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L1057)

Sets the number of samples used to render the buffer (anti aliasing).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:540](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L540)

Gets the scene associated with the buffer.

##### Returns

[`Scene`](Scene.md)

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:558](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L558)

Gets the shader language used in this material.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:1064](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L1064)

Disposes the renderer and frees up associated resources.

#### Returns

`void`

***

### getGBuffer()

> **getGBuffer**(): [`MultiRenderTarget`](MultiRenderTarget.md)

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:1043](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L1043)

Gets the current underlying G Buffer.

#### Returns

[`MultiRenderTarget`](MultiRenderTarget.md)

the buffer

***

### getTextureIndex()

> **getTextureIndex**(`textureType`): `number`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:342](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L342)

Returns the index of the given texture type in the G-Buffer textures array

#### Parameters

##### textureType

`number`

The texture type constant. For example GeometryBufferRenderer.POSITION_TEXTURE_INDEX

#### Returns

`number`

the index of the given texture type in the G-Buffer textures array

***

### isReady()

> **isReady**(`subMesh`, `useInstances`): `boolean`

Defined in: [packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts:621](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/geometryBufferRenderer.pure.ts#L621)

Checks whether everything is ready to render a submesh to the G buffer.

#### Parameters

##### subMesh

[`SubMesh`](SubMesh.md)

the submesh to check readiness for

##### useInstances

`boolean`

is the mesh drawn using instance or not

#### Returns

`boolean`

true if ready otherwise false
