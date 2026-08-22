[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / GLTFLoaderOptions

# Abstract Interface: GLTFLoaderOptions

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L336)

Base class for glTF loader options that supports copying values from a partial options object.

## Extends

- `GLTFLoaderBaseOptions`

## Extended by

- [`GLTFFileLoader`](../classes/GLTFFileLoader.md)

## Properties

### alwaysComputeBoundingBox

> **alwaysComputeBoundingBox**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:199](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L199)

Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`alwaysComputeBoundingBox`](../classes/GLTFFileLoader.md#alwayscomputeboundingbox)

***

### alwaysComputeSkeletonRootNode

> **alwaysComputeSkeletonRootNode**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L205)

Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
Set this to true if loading assets with invalid `skin.skeleton` values.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`alwaysComputeSkeletonRootNode`](../classes/GLTFFileLoader.md#alwayscomputeskeletonrootnode)

***

### animationStartMode

> **animationStartMode**: [`GLTFLoaderAnimationStartMode`](../enumerations/GLTFLoaderAnimationStartMode.md) = `GLTFLoaderAnimationStartMode.FIRST`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:210](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L210)

The animation start mode. Defaults to FIRST.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`animationStartMode`](../classes/GLTFFileLoader.md#animationstartmode)

***

### capturePerformanceCounters

> `abstract` **capturePerformanceCounters**: `boolean`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:394](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L394)

Defines if the loader should capture performance counters.

***

### compileMaterials

> **compileMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:215](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L215)

Defines if the loader should compile materials before raising the success callback. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`compileMaterials`](../classes/GLTFFileLoader.md#compilematerials)

***

### compileShadowGenerators

> **compileShadowGenerators**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:220](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L220)

Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`compileShadowGenerators`](../classes/GLTFFileLoader.md#compileshadowgenerators)

***

### coordinateSystemMode

> **coordinateSystemMode**: [`GLTFLoaderCoordinateSystemMode`](../enumerations/GLTFLoaderCoordinateSystemMode.md) = `GLTFLoaderCoordinateSystemMode.AUTO`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L225)

The coordinate system mode. Defaults to AUTO.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`coordinateSystemMode`](../classes/GLTFFileLoader.md#coordinatesystemmode)

***

### createInstances

> **createInstances**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:230](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L230)

Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`createInstances`](../classes/GLTFFileLoader.md#createinstances)

***

### customRootNode?

> `optional` **customRootNode?**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:400](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L400)

Defines the node to use as the root of the hierarchy when loading the scene (default: undefined). If not defined, a root node will be automatically created.
You can also pass null if you don't want a root node to be created.

***

### dontUseTransmissionHelper

> **dontUseTransmissionHelper**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:323](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L323)

If true, the loader will not use the transmission helper when loading materials with transmission.

#### Inherited from

`GLTFLoaderBaseOptions.dontUseTransmissionHelper`

***

### extensionOptions

> **extensionOptions**: `object` = `{}`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:405](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L405)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L235)

If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`loadAllMaterials`](../classes/GLTFFileLoader.md#loadallmaterials)

***

### loadMorphTargets

> **loadMorphTargets**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:240](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L240)

Defines if the loader should load morph targets. Defaults to true.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`loadMorphTargets`](../classes/GLTFFileLoader.md#loadmorphtargets)

***

### loadNodeAnimations

> **loadNodeAnimations**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:257](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L257)

Defines if the loader should load node animations. Defaults to true.
NOTE: The animation of this node will still load if the node is also a joint of a skin and `loadSkins` is true.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`loadNodeAnimations`](../classes/GLTFFileLoader.md#loadnodeanimations)

***

### loadOnlyMaterials

> **loadOnlyMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L262)

If true, load only the materials defined in the file. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`loadOnlyMaterials`](../classes/GLTFFileLoader.md#loadonlymaterials)

***

### loadSkins

> **loadSkins**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L267)

Defines if the loader should load skins. Defaults to true.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`loadSkins`](../classes/GLTFFileLoader.md#loadskins)

***

### loggingEnabled

> `abstract` **loggingEnabled**: `boolean`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:417](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L417)

If true, enable logging for the loader. Defaults to false.

***

### onCameraLoaded?

> `abstract` `optional` **onCameraLoaded?**: (`camera`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:422](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L422)

Callback raised when the loader creates a camera after parsing the glTF properties of the camera.

#### Parameters

##### camera

[`Camera`](../../../core/src/classes/Camera.md)

#### Returns

`void`

***

### onMaterialLoaded?

> `abstract` `optional` **onMaterialLoaded?**: (`material`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:427](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L427)

Callback raised when the loader creates a material after parsing the glTF properties of the material.

#### Parameters

##### material

[`Material`](../../../core/src/classes/Material.md)

#### Returns

`void`

***

### onMeshLoaded?

> `abstract` `optional` **onMeshLoaded?**: (`mesh`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L433)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:385](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L385)

Raised when the asset has been parsed

#### Parameters

##### loaderData

[`IGLTFLoaderData`](IGLTFLoaderData.md)

#### Returns

`void`

***

### onSkinLoaded?

> `abstract` `optional` **onSkinLoaded?**: (`node`, `skinnedNode`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:439](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L439)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:444](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L444)

Callback raised when the loader creates a texture after parsing the glTF properties of the texture.

#### Parameters

##### texture

[`BaseTexture`](../../../core/src/classes/BaseTexture.md)

#### Returns

`void`

***

### onValidated?

> `abstract` `optional` **onValidated?**: (`results`) => `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:449](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L449)

Callback raised after the asset is validated.

#### Parameters

##### results

`IGLTFValidationResults`

#### Returns

`void`

***

### skipMaterials

> **skipMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:272](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L272)

If true, do not load any materials defined in the file. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`skipMaterials`](../classes/GLTFFileLoader.md#skipmaterials)

***

### targetFps

> **targetFps**: `number` = `60`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L277)

When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`targetFps`](../classes/GLTFFileLoader.md#targetfps)

***

### transparencyAsCoverage

> **transparencyAsCoverage**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:284](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L284)

Defines if the Alpha blended materials are only applied as coverage.
If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
If true, no extra effects are applied to transparent pixels.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`transparencyAsCoverage`](../classes/GLTFFileLoader.md#transparencyascoverage)

***

### useClipPlane

> **useClipPlane**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:289](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L289)

Defines if the loader should also compile materials with clip planes. Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`useClipPlane`](../classes/GLTFFileLoader.md#useclipplane)

***

### useGltfTextureNames

> **useGltfTextureNames**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:295](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L295)

If true, the loader will derive the name for Babylon textures from the glTF texture name, image name, or image url. Defaults to false.
Note that it is possible for multiple Babylon textures to share the same name when the Babylon textures load from the same glTF texture or image.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`useGltfTextureNames`](../classes/GLTFFileLoader.md#usegltftexturenames)

***

### useMaxMorphTargetInfluencers

> **useMaxMorphTargetInfluencers**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L251)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:318](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L318)

**`Experimental`**

Load the glTF files using the OpenPBR material.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`useOpenPBR`](../classes/GLTFFileLoader.md#useopenpbr)

***

### useRangeRequests

> **useRangeRequests**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L302)

Defines if the loader should use range requests when load binary glTF files from HTTP.
Enabling will disable offline support and glTF validator.
Defaults to false.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`useRangeRequests`](../classes/GLTFFileLoader.md#userangerequests)

***

### useSRGBBuffers

> **useSRGBBuffers**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:307](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L307)

If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`useSRGBBuffers`](../classes/GLTFFileLoader.md#usesrgbbuffers)

***

### validate

> **validate**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:312](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L312)

Defines if the loader should validate the asset.

#### Inherited from

[`GLTFFileLoader`](../classes/GLTFFileLoader.md).[`validate`](../classes/GLTFFileLoader.md#validate)

## Methods

### preprocessUrlAsync()

> **preprocessUrlAsync**(`url`): `Promise`\<`string`\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:456](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L456)

Function called before loading a url referenced by the asset.

#### Parameters

##### url

`string`

url referenced by the asset

#### Returns

`Promise`\<`string`\>

Async url to load
