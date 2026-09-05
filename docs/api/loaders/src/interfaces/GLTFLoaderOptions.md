[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / GLTFLoaderOptions

# Abstract Interface: GLTFLoaderOptions

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:338](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L338)

Base class for glTF loader options that supports copying values from a partial options object.

## Extends

- `GLTFLoaderBaseOptions`

## Extended by

- [`GLTFFileLoader`](../classes/GLTFFileLoader.md)

## Properties

### alwaysComputeBoundingBox

> **alwaysComputeBoundingBox**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L201)

Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`alwaysComputeBoundingBox`](../classes/GLTFFileLoader.md#alwayscomputeboundingbox)

***

### alwaysComputeSkeletonRootNode

> **alwaysComputeSkeletonRootNode**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L207)

Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
Set this to true if loading assets with invalid `skin.skeleton` values.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`alwaysComputeSkeletonRootNode`](../classes/GLTFFileLoader.md#alwayscomputeskeletonrootnode)

***

### animationStartMode

> **animationStartMode**: [`GLTFLoaderAnimationStartMode`](../enumerations/GLTFLoaderAnimationStartMode.md) = `GLTFLoaderAnimationStartMode.FIRST`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:212](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L212)

The animation start mode. Defaults to FIRST.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`animationStartMode`](../classes/GLTFFileLoader.md#animationstartmode)

***

### capturePerformanceCounters

> `abstract` **capturePerformanceCounters**: `boolean`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:396](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L396)

Defines if the loader should capture performance counters.

***

### compileMaterials

> **compileMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L217)

Defines if the loader should compile materials before raising the success callback. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`compileMaterials`](../classes/GLTFFileLoader.md#compilematerials)

***

### compileShadowGenerators

> **compileShadowGenerators**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L222)

Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`compileShadowGenerators`](../classes/GLTFFileLoader.md#compileshadowgenerators)

***

### coordinateSystemMode

> **coordinateSystemMode**: [`GLTFLoaderCoordinateSystemMode`](../enumerations/GLTFLoaderCoordinateSystemMode.md) = `GLTFLoaderCoordinateSystemMode.AUTO`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:227](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L227)

The coordinate system mode. Defaults to AUTO.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`coordinateSystemMode`](../classes/GLTFFileLoader.md#coordinatesystemmode)

***

### createInstances

> **createInstances**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L232)

Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`createInstances`](../classes/GLTFFileLoader.md#createinstances)

***

### customRootNode?

> `optional` **customRootNode?**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:402](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L402)

Defines the node to use as the root of the hierarchy when loading the scene (default: undefined). If not defined, a root node will be automatically created.
You can also pass null if you don't want a root node to be created.

***

### dontUseTransmissionHelper

> **dontUseTransmissionHelper**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L325)

If true, the loader will not use the transmission helper when loading materials with transmission.

#### Inherited from

`GLTFLoaderBaseOptions.dontUseTransmissionHelper`

***

### extensionOptions

> **extensionOptions**: `object` = `{}`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:407](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L407)

Defines options for glTF extensions.

#### Index Signature

\[`key`: `string`\]: \{\[`key`: `string`\]: `unknown`; `enabled?`: `boolean`; \} \| `undefined`

#### EXT\_lights\_area?

> `optional` **EXT\_lights\_area?**: `object`

Defines options for the EXT_lights_area extension.

##### EXT\_lights\_area.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_lights\_ies?

> `optional` **EXT\_lights\_ies?**: `object`

Defines options for the EXT_lights_ies extension.

##### EXT\_lights\_ies.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_lights\_image\_based?

> `optional` **EXT\_lights\_image\_based?**: `object`

Defines options for the EXT_lights_image_based extension.

##### EXT\_lights\_image\_based.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_mesh\_gpu\_instancing?

> `optional` **EXT\_mesh\_gpu\_instancing?**: `object`

Defines options for the EXT_mesh_gpu_instancing extension.

##### EXT\_mesh\_gpu\_instancing.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_meshopt\_compression?

> `optional` **EXT\_meshopt\_compression?**: `object`

Defines options for the EXT_meshopt_compression extension.

##### EXT\_meshopt\_compression.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_texture\_avif?

> `optional` **EXT\_texture\_avif?**: `object`

Defines options for the EXT_texture_avif extension.

##### EXT\_texture\_avif.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### EXT\_texture\_webp?

> `optional` **EXT\_texture\_webp?**: `object`

Defines options for the EXT_texture_webp extension.

##### EXT\_texture\_webp.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### ExtrasAsMetadata?

> `optional` **ExtrasAsMetadata?**: `object`

Defines options for the ExtrasAsMetadata extension.

##### ExtrasAsMetadata.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_animation\_pointer?

> `optional` **KHR\_animation\_pointer?**: `object`

Defines options for the KHR_animation_pointer extension.

##### KHR\_animation\_pointer.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_draco\_mesh\_compression?

> `optional` **KHR\_draco\_mesh\_compression?**: `object`

Defines options for the KHR_draco_mesh_compression extension.

##### KHR\_draco\_mesh\_compression.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_gaussian\_splatting?

> `optional` **KHR\_gaussian\_splatting?**: `object`

Defines options for the KHR_gaussian_splatting extension.

##### KHR\_gaussian\_splatting.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_interactivity?

> `optional` **KHR\_interactivity?**: `object`

Defines options for the KHR_interactivity extension.

##### KHR\_interactivity.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_lights\_punctual?

> `optional` **KHR\_lights\_punctual?**: `object`

Defines options for the KHR_lights_punctual extension.

##### KHR\_lights\_punctual.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_anisotropy?

> `optional` **KHR\_materials\_anisotropy?**: `object`

Defines options for the KHR_materials_anisotropy extension.

##### KHR\_materials\_anisotropy.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_clearcoat?

> `optional` **KHR\_materials\_clearcoat?**: `object`

Defines options for the KHR_materials_clearcoat extension.

##### KHR\_materials\_clearcoat.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_coat?

> `optional` **KHR\_materials\_coat?**: `object`

Defines options for the KHR_materials_coat extension.

##### KHR\_materials\_coat.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_diffuse\_roughness?

> `optional` **KHR\_materials\_diffuse\_roughness?**: `object`

Defines options for the KHR_materials_diffuse_roughness extension.

##### KHR\_materials\_diffuse\_roughness.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_diffuse\_transmission?

> `optional` **KHR\_materials\_diffuse\_transmission?**: `object`

Defines options for the KHR_materials_diffuse_transmission extension.

##### KHR\_materials\_diffuse\_transmission.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_dispersion?

> `optional` **KHR\_materials\_dispersion?**: `object`

Defines options for the KHR_materials_dispersion extension.

##### KHR\_materials\_dispersion.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_emissive\_strength?

> `optional` **KHR\_materials\_emissive\_strength?**: `object`

Defines options for the KHR_materials_emissive_strength extension.

##### KHR\_materials\_emissive\_strength.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_fuzz?

> `optional` **KHR\_materials\_fuzz?**: `object`

Defines options for the KHR_materials_fuzz extension.

##### KHR\_materials\_fuzz.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_ior?

> `optional` **KHR\_materials\_ior?**: `object`

Defines options for the KHR_materials_ior extension.

##### KHR\_materials\_ior.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_iridescence?

> `optional` **KHR\_materials\_iridescence?**: `object`

Defines options for the KHR_materials_iridescence extension.

##### KHR\_materials\_iridescence.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_pbrSpecularGlossiness?

> `optional` **KHR\_materials\_pbrSpecularGlossiness?**: `object`

Defines options for the KHR_materials_pbrSpecularGlossiness extension.

##### KHR\_materials\_pbrSpecularGlossiness.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_sheen?

> `optional` **KHR\_materials\_sheen?**: `object`

Defines options for the KHR_materials_sheen extension.

##### KHR\_materials\_sheen.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_specular?

> `optional` **KHR\_materials\_specular?**: `object`

Defines options for the KHR_materials_specular extension.

##### KHR\_materials\_specular.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_transmission?

> `optional` **KHR\_materials\_transmission?**: `object`

Defines options for the KHR_materials_transmission extension.

##### KHR\_materials\_transmission.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_unlit?

> `optional` **KHR\_materials\_unlit?**: `object`

Defines options for the KHR_materials_unlit extension.

##### KHR\_materials\_unlit.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_variants?

> `optional` **KHR\_materials\_variants?**: `object`

Defines options for the KHR_materials_variants extension.

##### KHR\_materials\_variants.defaultVariant?

> `optional` **defaultVariant?**: `string`

Specifies the name of the variant that should be selected by default.

##### KHR\_materials\_variants.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### KHR\_materials\_variants.onLoaded?

> `optional` **onLoaded?**: (`controller`) => `void`

**`Experimental`**

Defines a callback that will be called if material variants are loaded.

###### Parameters

###### controller

[`MaterialVariantsController`](../type-aliases/MaterialVariantsController.md)

###### Returns

`void`

#### KHR\_materials\_volume?

> `optional` **KHR\_materials\_volume?**: `object`

Defines options for the KHR_materials_volume extension.

##### KHR\_materials\_volume.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_materials\_volume\_scatter?

> `optional` **KHR\_materials\_volume\_scatter?**: `object`

Defines options for the KHR_materials_volume_scatter extension.

##### KHR\_materials\_volume\_scatter.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_mesh\_quantization?

> `optional` **KHR\_mesh\_quantization?**: `object`

Defines options for the KHR_mesh_quantization extension.

##### KHR\_mesh\_quantization.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_node\_hoverability?

> `optional` **KHR\_node\_hoverability?**: `object`

Defines options for the KHR_node_hoverability extension.

##### KHR\_node\_hoverability.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_node\_selectability?

> `optional` **KHR\_node\_selectability?**: `object`

Defines options for the KHR_selectability extension.

##### KHR\_node\_selectability.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_node\_visibility?

> `optional` **KHR\_node\_visibility?**: `object`

Defines options for the KHR_node_visibility extension.

##### KHR\_node\_visibility.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_texture\_basisu?

> `optional` **KHR\_texture\_basisu?**: `object`

Defines options for the KHR_texture_basisu extension.

##### KHR\_texture\_basisu.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_texture\_transform?

> `optional` **KHR\_texture\_transform?**: `object`

Defines options for the KHR_texture_transform extension.

##### KHR\_texture\_transform.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### KHR\_xmp\_json\_ld?

> `optional` **KHR\_xmp\_json\_ld?**: `object`

Defines options for the KHR_xmp_json_ld extension.

##### KHR\_xmp\_json\_ld.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### MSFT\_audio\_emitter?

> `optional` **MSFT\_audio\_emitter?**: `object`

Defines options for the MSFT_audio_emitter extension.

##### MSFT\_audio\_emitter.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### MSFT\_lod?

> `optional` **MSFT\_lod?**: `object`

Defines options for the MSFT_lod extension.

##### MSFT\_lod.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

##### MSFT\_lod.maxLODsToLoad?

> `optional` **maxLODsToLoad?**: `number`

Maximum number of LODs to load, starting from the lowest LOD.

#### MSFT\_minecraftMesh?

> `optional` **MSFT\_minecraftMesh?**: `object`

Defines options for the MSFT_minecraftMesh extension.

##### MSFT\_minecraftMesh.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

#### MSFT\_sRGBFactors?

> `optional` **MSFT\_sRGBFactors?**: `object`

Defines options for the MSFT_sRGBFactors extension.

##### MSFT\_sRGBFactors.enabled?

> `optional` **enabled?**: `boolean`

Defines if the extension is enabled

***

### loadAllMaterials

> **loadAllMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:237](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L237)

If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`loadAllMaterials`](../classes/GLTFFileLoader.md#loadallmaterials)

***

### loadMorphTargets

> **loadMorphTargets**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L242)

Defines if the loader should load morph targets. Defaults to true.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`loadMorphTargets`](../classes/GLTFFileLoader.md#loadmorphtargets)

***

### loadNodeAnimations

> **loadNodeAnimations**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:259](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L259)

Defines if the loader should load node animations. Defaults to true.
NOTE: The animation of this node will still load if the node is also a joint of a skin and `loadSkins` is true.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`loadNodeAnimations`](../classes/GLTFFileLoader.md#loadnodeanimations)

***

### loadOnlyMaterials

> **loadOnlyMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L264)

If true, load only the materials defined in the file. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`loadOnlyMaterials`](../classes/GLTFFileLoader.md#loadonlymaterials)

***

### loadSkins

> **loadSkins**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:269](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L269)

Defines if the loader should load skins. Defaults to true.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`loadSkins`](../classes/GLTFFileLoader.md#loadskins)

***

### loggingEnabled

> `abstract` **loggingEnabled**: `boolean`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:419](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L419)

If true, enable logging for the loader. Defaults to false.

***

### onCameraLoaded?

> `abstract` `optional` **onCameraLoaded?**: (`camera`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:424](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L424)

Callback raised when the loader creates a camera after parsing the glTF properties of the camera.

#### Parameters

##### camera

[`Camera`](../../../core/src/classes/Camera.md)

#### Returns

`void`

***

### onMaterialLoaded?

> `abstract` `optional` **onMaterialLoaded?**: (`material`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:429](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L429)

Callback raised when the loader creates a material after parsing the glTF properties of the material.

#### Parameters

##### material

[`Material`](../../../core/src/classes/Material.md)

#### Returns

`void`

***

### onMeshLoaded?

> `abstract` `optional` **onMeshLoaded?**: (`mesh`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:435](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L435)

Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)

#### Parameters

##### mesh

[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)

#### Returns

`void`

***

### onParsed?

> `abstract` `optional` **onParsed?**: (`loaderData`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:387](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L387)

Raised when the asset has been parsed

#### Parameters

##### loaderData

[`IGLTFLoaderData`](IGLTFLoaderData.md)

#### Returns

`void`

***

### onSkinLoaded?

> `abstract` `optional` **onSkinLoaded?**: (`node`, `skinnedNode`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:441](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L441)

Callback raised when the loader creates a skin after parsing the glTF properties of the skin node.

#### Parameters

##### node

[`TransformNode`](../../../core/src/classes/TransformNode.md)

##### skinnedNode

[`TransformNode`](../../../core/src/classes/TransformNode.md)

#### Returns

`void`

#### See

https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh

***

### onTextureLoaded?

> `abstract` `optional` **onTextureLoaded?**: (`texture`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:446](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L446)

Callback raised when the loader creates a texture after parsing the glTF properties of the texture.

#### Parameters

##### texture

[`BaseTexture`](../../../core/src/classes/BaseTexture.md)

#### Returns

`void`

***

### onValidated?

> `abstract` `optional` **onValidated?**: (`results`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:451](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L451)

Callback raised after the asset is validated.

#### Parameters

##### results

`IGLTFValidationResults`

#### Returns

`void`

***

### preprocessUrlAsync

> **preprocessUrlAsync**: (`url`, `rootUrl?`) => `Promise`\<`string`\> = `DefaultPreprocessUrlAsync`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:460](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L460)

Function called before loading a URL referenced by the asset.
Setting this function allows parent-relative asset URIs and makes the callback responsible for URI safety.

#### Parameters

##### url

`string`

The URL referenced by the asset

##### rootUrl?

`string`

The root URL of the asset, if available

#### Returns

`Promise`\<`string`\>

A promise that resolves to the URL to load

***

### skipMaterials

> **skipMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:274](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L274)

If true, do not load any materials defined in the file. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`skipMaterials`](../classes/GLTFFileLoader.md#skipmaterials)

***

### targetFps

> **targetFps**: `number` = `60`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:279](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L279)

When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`targetFps`](../classes/GLTFFileLoader.md#targetfps)

***

### transparencyAsCoverage

> **transparencyAsCoverage**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:286](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L286)

Defines if the Alpha blended materials are only applied as coverage.
If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
If true, no extra effects are applied to transparent pixels.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`transparencyAsCoverage`](../classes/GLTFFileLoader.md#transparencyascoverage)

***

### useClipPlane

> **useClipPlane**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:291](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L291)

Defines if the loader should also compile materials with clip planes. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`useClipPlane`](../classes/GLTFFileLoader.md#useclipplane)

***

### useGltfTextureNames

> **useGltfTextureNames**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L297)

If true, the loader will derive the name for Babylon textures from the glTF texture name, image name, or image url. Defaults to false.
Note that it is possible for multiple Babylon textures to share the same name when the Babylon textures load from the same glTF texture or image.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`useGltfTextureNames`](../classes/GLTFFileLoader.md#usegltftexturenames)

***

### useMaxMorphTargetInfluencers

> **useMaxMorphTargetInfluencers**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:253](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L253)

When loading a mesh with morph targets, configure its MorphTargetManager so the morph shader is compiled
once for all targets (`numMaxInfluencers = numTargets`, `optimizeInfluencers = false`). This prevents the
shader from being recompiled (and the resulting one-frame visual glitch) when an animated morph target
influence passes through zero and the active influencer count changes.
Disable to restore the previous behavior, where only the currently active (non-zero) influencers drive the
shader. That is cheaper per frame for meshes with very large morph target counts, but recompiles the shader
during animation. Defaults to true.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`useMaxMorphTargetInfluencers`](../classes/GLTFFileLoader.md#usemaxmorphtargetinfluencers)

***

### useOpenPBR

> **useOpenPBR**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L320)

**`Experimental`**

Load the glTF files using the OpenPBR material.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`useOpenPBR`](../classes/GLTFFileLoader.md#useopenpbr)

***

### useRangeRequests

> **useRangeRequests**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L304)

Defines if the loader should use range requests when load binary glTF files from HTTP.
Enabling will disable offline support and glTF validator.
Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`useRangeRequests`](../classes/GLTFFileLoader.md#userangerequests)

***

### useSRGBBuffers

> **useSRGBBuffers**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:309](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L309)

If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`useSRGBBuffers`](../classes/GLTFFileLoader.md#usesrgbbuffers)

***

### validate

> **validate**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:314](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L314)

Defines if the loader should validate the asset.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`validate`](../classes/GLTFFileLoader.md#validate)
