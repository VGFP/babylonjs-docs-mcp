[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / GLTFFileLoader

# Class: GLTFFileLoader

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:466](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L466)

File loader for loading glTF files into a scene.

## Extends

- [`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md)

## Implements

- [`IDisposable`](../../../core/src/interfaces/IDisposable.md)
- [`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md)
- [`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md)

## Constructors

### Constructor

> **new GLTFFileLoader**(`options?`): `GLTFFileLoader`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:477](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L477)

Creates a new glTF file loader.

#### Parameters

##### options?

`Partial`\<`Readonly`\<[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md)\>\>

The options for the loader

#### Returns

`GLTFFileLoader`

#### Overrides

`GLTFLoaderOptions.constructor`

## Properties

### alwaysComputeBoundingBox

> **alwaysComputeBoundingBox**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:201](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L201)

Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`alwaysComputeBoundingBox`](../interfaces/GLTFLoaderOptions.md#alwayscomputeboundingbox)

***

### alwaysComputeSkeletonRootNode

> **alwaysComputeSkeletonRootNode**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:207](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L207)

Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
Set this to true if loading assets with invalid `skin.skeleton` values.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`alwaysComputeSkeletonRootNode`](../interfaces/GLTFLoaderOptions.md#alwayscomputeskeletonrootnode)

***

### animationStartMode

> **animationStartMode**: [`GLTFLoaderAnimationStartMode`](../enumerations/GLTFLoaderAnimationStartMode.md) = `GLTFLoaderAnimationStartMode.FIRST`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:212](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L212)

The animation start mode. Defaults to FIRST.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`animationStartMode`](../interfaces/GLTFLoaderOptions.md#animationstartmode)

***

### compileMaterials

> **compileMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L217)

Defines if the loader should compile materials before raising the success callback. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`compileMaterials`](../interfaces/GLTFLoaderOptions.md#compilematerials)

***

### compileShadowGenerators

> **compileShadowGenerators**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L222)

Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`compileShadowGenerators`](../interfaces/GLTFLoaderOptions.md#compileshadowgenerators)

***

### coordinateSystemMode

> **coordinateSystemMode**: [`GLTFLoaderCoordinateSystemMode`](../enumerations/GLTFLoaderCoordinateSystemMode.md) = `GLTFLoaderCoordinateSystemMode.AUTO`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:227](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L227)

The coordinate system mode. Defaults to AUTO.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`coordinateSystemMode`](../interfaces/GLTFLoaderOptions.md#coordinatesystemmode)

***

### createInstances

> **createInstances**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:232](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L232)

Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`createInstances`](../interfaces/GLTFLoaderOptions.md#createinstances)

***

### customRootNode?

> `optional` **customRootNode?**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:402](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L402)

Defines the node to use as the root of the hierarchy when loading the scene (default: undefined). If not defined, a root node will be automatically created.
You can also pass null if you don't want a root node to be created.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`customRootNode`](../interfaces/GLTFLoaderOptions.md#customrootnode)

***

### dontUseTransmissionHelper

> **dontUseTransmissionHelper**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L325)

If true, the loader will not use the transmission helper when loading materials with transmission.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`dontUseTransmissionHelper`](../interfaces/GLTFLoaderOptions.md#dontusetransmissionhelper)

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

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`extensionOptions`](../interfaces/GLTFLoaderOptions.md#extensionoptions)

***

### loadAllMaterials

> **loadAllMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:237](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L237)

If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`loadAllMaterials`](../interfaces/GLTFLoaderOptions.md#loadallmaterials)

***

### loadMorphTargets

> **loadMorphTargets**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L242)

Defines if the loader should load morph targets. Defaults to true.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`loadMorphTargets`](../interfaces/GLTFLoaderOptions.md#loadmorphtargets)

***

### loadNodeAnimations

> **loadNodeAnimations**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:259](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L259)

Defines if the loader should load node animations. Defaults to true.
NOTE: The animation of this node will still load if the node is also a joint of a skin and `loadSkins` is true.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`loadNodeAnimations`](../interfaces/GLTFLoaderOptions.md#loadnodeanimations)

***

### loadOnlyMaterials

> **loadOnlyMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:264](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L264)

If true, load only the materials defined in the file. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`loadOnlyMaterials`](../interfaces/GLTFLoaderOptions.md#loadonlymaterials)

***

### loadSkins

> **loadSkins**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:269](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L269)

Defines if the loader should load skins. Defaults to true.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`loadSkins`](../interfaces/GLTFLoaderOptions.md#loadskins)

***

### name

> `readonly` **name**: `"gltf"` = `GLTFFileLoaderMetadata.name`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:780](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L780)

Name of the loader ("gltf")

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`name`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#name)

***

### onCameraLoadedObservable

> `readonly` **onCameraLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Camera`](../../../core/src/classes/Camera.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:622](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L622)

Observable raised when the loader creates a camera after parsing the glTF properties of the camera.

***

### onCompleteObservable

> `readonly` **onCompleteObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`void`\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:643](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L643)

Observable raised when the asset is completely loaded, immediately before the loader is disposed.
For assets with LODs, raised when all of the LODs are complete.
For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`void`\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:679](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L679)

Observable raised after the loader is disposed.

***

### onErrorObservable

> `readonly` **onErrorObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`any`\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:662](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L662)

Observable raised when an error occurs.

***

### onExtensionLoadedObservable

> `readonly` **onExtensionLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:697](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L697)

Observable raised after a loader extension is created.
Set additional options for a loader extension in this event.

***

### onLoaderStateChangedObservable

> **onLoaderStateChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`GLTFLoaderState`](../enumerations/GLTFLoaderState.md)\>\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:1092](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L1092)

Observable raised when the loader state changes.

***

### onMaterialLoadedObservable

> `readonly` **onMaterialLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:603](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L603)

Observable raised when the loader creates a material after parsing the glTF properties of the material.

***

### onMeshLoadedObservable

> `readonly` **onMeshLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L541)

Observable raised when the loader creates a mesh after parsing the glTF properties of the mesh.
Note that the observable is raised as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)

***

### onParsedObservable

> **onParsedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`IGLTFLoaderData`](../interfaces/IGLTFLoaderData.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:494](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L494)

Raised when the asset has been parsed

***

### onSkinLoadedObservable

> `readonly` **onSkinLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<\{ `node`: [`TransformNode`](../../../core/src/classes/TransformNode.md); `skinnedNode`: [`TransformNode`](../../../core/src/classes/TransformNode.md); \}\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:564](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L564)

Observable raised when the loader creates a skin after parsing the glTF properties of the skin node.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh

#### Param

**node**

the transform node that corresponds to the original glTF skin node used for animations

#### Param

**skinnedNode**

the transform node that is the skinned mesh itself or the parent of the skinned meshes

***

### onTextureLoadedObservable

> `readonly` **onTextureLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:584](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L584)

Observable raised when the loader creates a texture after parsing the glTF properties of the texture.

***

### onValidatedObservable

> `readonly` **onValidatedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`IGLTFValidationResults`\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:758](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L758)

Observable raised after validation when validate is set to true. The event data is the result of the validation.

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

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`preprocessUrlAsync`](../interfaces/GLTFLoaderOptions.md#preprocessurlasync)

***

### skipMaterials

> **skipMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:274](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L274)

If true, do not load any materials defined in the file. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`skipMaterials`](../interfaces/GLTFLoaderOptions.md#skipmaterials)

***

### targetFps

> **targetFps**: `number` = `60`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:279](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L279)

When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`targetFps`](../interfaces/GLTFLoaderOptions.md#targetfps)

***

### transparencyAsCoverage

> **transparencyAsCoverage**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:286](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L286)

Defines if the Alpha blended materials are only applied as coverage.
If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
If true, no extra effects are applied to transparent pixels.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`transparencyAsCoverage`](../interfaces/GLTFLoaderOptions.md#transparencyascoverage)

***

### useClipPlane

> **useClipPlane**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:291](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L291)

Defines if the loader should also compile materials with clip planes. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useClipPlane`](../interfaces/GLTFLoaderOptions.md#useclipplane)

***

### useGltfTextureNames

> **useGltfTextureNames**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L297)

If true, the loader will derive the name for Babylon textures from the glTF texture name, image name, or image url. Defaults to false.
Note that it is possible for multiple Babylon textures to share the same name when the Babylon textures load from the same glTF texture or image.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useGltfTextureNames`](../interfaces/GLTFLoaderOptions.md#usegltftexturenames)

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

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useMaxMorphTargetInfluencers`](../interfaces/GLTFLoaderOptions.md#usemaxmorphtargetinfluencers)

***

### useOpenPBR

> **useOpenPBR**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L320)

**`Experimental`**

Load the glTF files using the OpenPBR material.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useOpenPBR`](../interfaces/GLTFLoaderOptions.md#useopenpbr)

***

### useRangeRequests

> **useRangeRequests**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L304)

Defines if the loader should use range requests when load binary glTF files from HTTP.
Enabling will disable offline support and glTF validator.
Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useRangeRequests`](../interfaces/GLTFLoaderOptions.md#userangerequests)

***

### useSRGBBuffers

> **useSRGBBuffers**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:309](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L309)

If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useSRGBBuffers`](../interfaces/GLTFLoaderOptions.md#usesrgbbuffers)

***

### validate

> **validate**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:314](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L314)

Defines if the loader should validate the asset.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`validate`](../interfaces/GLTFLoaderOptions.md#validate)

## Accessors

### capturePerformanceCounters

#### Get Signature

> **get** **capturePerformanceCounters**(): `boolean`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:735](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L735)

Defines if the loader should capture performance counters.

##### Returns

`boolean`

#### Set Signature

> **set** **capturePerformanceCounters**(`value`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:739](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L739)

Defines if the loader should capture performance counters.

##### Parameters

###### value

`boolean`

##### Returns

`void`

Defines if the loader should capture performance counters.

#### Overrides

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`capturePerformanceCounters`](../interfaces/GLTFLoaderOptions.md#captureperformancecounters)

***

### loaderState

#### Get Signature

> **get** **loaderState**(): [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`GLTFLoaderState`](../enumerations/GLTFLoaderState.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:1085](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L1085)

The loader state or null if the loader is not active.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`GLTFLoaderState`](../enumerations/GLTFLoaderState.md)\>

***

### loggingEnabled

#### Get Signature

> **get** **loggingEnabled**(): `boolean`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:714](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L714)

Defines if the loader logging is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **loggingEnabled**(`value`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:718](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L718)

If true, enable logging for the loader. Defaults to false.

##### Parameters

###### value

`boolean`

##### Returns

`void`

If true, enable logging for the loader. Defaults to false.

#### Overrides

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`loggingEnabled`](../interfaces/GLTFLoaderOptions.md#loggingenabled)

***

### onCameraLoaded

#### Set Signature

> **set** **onCameraLoaded**(`callback`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:629](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L629)

Callback raised when the loader creates a camera after parsing the glTF properties of the camera.

##### Parameters

###### callback

((`camera`) => `void`) \| `undefined`

##### Returns

`void`

Callback raised when the loader creates a camera after parsing the glTF properties of the camera.

#### Overrides

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`onCameraLoaded`](../interfaces/GLTFLoaderOptions.md#oncameraloaded)

***

### onComplete

#### Set Signature

> **set** **onComplete**(`callback`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:652](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L652)

Callback raised when the asset is completely loaded, immediately before the loader is disposed.
For assets with LODs, raised when all of the LODs are complete.
For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:686](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L686)

Callback raised after the loader is disposed.

##### Parameters

###### callback

() => `void`

##### Returns

`void`

***

### onError

#### Set Signature

> **set** **onError**(`callback`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:669](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L669)

Callback raised when an error occurs.

##### Parameters

###### callback

(`reason`) => `void`

##### Returns

`void`

***

### onExtensionLoaded

#### Set Signature

> **set** **onExtensionLoaded**(`callback`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:704](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L704)

Callback raised after a loader extension is created.

##### Parameters

###### callback

(`extension`) => `void`

##### Returns

`void`

***

### onMaterialLoaded

#### Set Signature

> **set** **onMaterialLoaded**(`callback`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:610](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L610)

Callback raised when the loader creates a material after parsing the glTF properties of the material.

##### Parameters

###### callback

((`material`) => `void`) \| `undefined`

##### Returns

`void`

Callback raised when the loader creates a material after parsing the glTF properties of the material.

#### Overrides

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`onMaterialLoaded`](../interfaces/GLTFLoaderOptions.md#onmaterialloaded)

***

### onMeshLoaded

#### Set Signature

> **set** **onMeshLoaded**(`callback`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:549](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L549)

Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)

##### Parameters

###### callback

((`mesh`) => `void`) \| `undefined`

##### Returns

`void`

Callback raised when the loader creates a mesh after parsing the glTF properties of the mesh.
Note that the callback is called as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)

#### Overrides

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`onMeshLoaded`](../interfaces/GLTFLoaderOptions.md#onmeshloaded)

***

### onParsed

#### Set Signature

> **set** **onParsed**(`callback`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:501](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L501)

Raised when the asset has been parsed

##### Parameters

###### callback

((`loaderData`) => `void`) \| `undefined`

##### Returns

`void`

Raised when the asset has been parsed

#### Overrides

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`onParsed`](../interfaces/GLTFLoaderOptions.md#onparsed)

***

### onSkinLoaded

#### Set Signature

> **set** **onSkinLoaded**(`callback`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:572](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L572)

Callback raised when the loader creates a skin after parsing the glTF properties of the skin node.

##### See

https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh

##### Parameters

###### callback

((`node`, `skinnedNode`) => `void`) \| `undefined`

##### Returns

`void`

Callback raised when the loader creates a skin after parsing the glTF properties of the skin node.

#### See

https://doc.babylonjs.com/features/featuresDeepDive/importers/glTF/glTFSkinning#ignoring-the-transform-of-the-skinned-mesh

#### Overrides

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`onSkinLoaded`](../interfaces/GLTFLoaderOptions.md#onskinloaded)

***

### onTextureLoaded

#### Set Signature

> **set** **onTextureLoaded**(`callback`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:591](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L591)

Callback raised when the loader creates a texture after parsing the glTF properties of the texture.

##### Parameters

###### callback

((`texture`) => `void`) \| `undefined`

##### Returns

`void`

Callback raised when the loader creates a texture after parsing the glTF properties of the texture.

#### Overrides

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`onTextureLoaded`](../interfaces/GLTFLoaderOptions.md#ontextureloaded)

***

### onValidated

#### Set Signature

> **set** **onValidated**(`callback`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:765](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L765)

Callback raised after the asset is validated.

##### Parameters

###### callback

(`results`) => `void`

##### Returns

`void`

Callback raised after the asset is validated.

#### Overrides

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`onValidated`](../interfaces/GLTFLoaderOptions.md#onvalidated)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:788](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L788)

Disposes the loader, releases resources during load, and cancels any outstanding requests.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../../../core/src/interfaces/IDisposable.md).[`dispose`](../../../core/src/interfaces/IDisposable.md#dispose)

***

### rewriteRootURL()?

> `optional` **rewriteRootURL**(`rootUrl`, `responseURL?`): `string`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:1075](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L1075)

The callback that allows custom handling of the root url based on the response url.

#### Parameters

##### rootUrl

`string`

the original root url

##### responseURL?

`string`

the response url if available

#### Returns

`string`

the new root url

#### Implementation of

[`ISceneLoaderPluginAsync`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md).[`rewriteRootURL`](../../../core/src/interfaces/ISceneLoaderPluginAsync.md#rewriterooturl)

***

### whenCompleteAsync()

> **whenCompleteAsync**(): `Promise`\<`void`\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:1098](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L1098)

Returns a promise that resolves when the asset is completely loaded.

#### Returns

`Promise`\<`void`\>

a promise that resolves when the asset is completely loaded.
