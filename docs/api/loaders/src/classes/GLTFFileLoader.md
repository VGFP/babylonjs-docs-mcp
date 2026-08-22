[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / GLTFFileLoader

# Class: GLTFFileLoader

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:462](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L462)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:473](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L473)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:199](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L199)

Defines if the loader should always compute the bounding boxes of meshes and not use the min/max values from the position accessor. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`alwaysComputeBoundingBox`](../interfaces/GLTFLoaderOptions.md#alwayscomputeboundingbox)

***

### alwaysComputeSkeletonRootNode

> **alwaysComputeSkeletonRootNode**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L205)

Defines if the loader should always compute the nearest common ancestor of the skeleton joints instead of using `skin.skeleton`. Defaults to false.
Set this to true if loading assets with invalid `skin.skeleton` values.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`alwaysComputeSkeletonRootNode`](../interfaces/GLTFLoaderOptions.md#alwayscomputeskeletonrootnode)

***

### animationStartMode

> **animationStartMode**: [`GLTFLoaderAnimationStartMode`](../enumerations/GLTFLoaderAnimationStartMode.md) = `GLTFLoaderAnimationStartMode.FIRST`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:210](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L210)

The animation start mode. Defaults to FIRST.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`animationStartMode`](../interfaces/GLTFLoaderOptions.md#animationstartmode)

***

### compileMaterials

> **compileMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:215](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L215)

Defines if the loader should compile materials before raising the success callback. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`compileMaterials`](../interfaces/GLTFLoaderOptions.md#compilematerials)

***

### compileShadowGenerators

> **compileShadowGenerators**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:220](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L220)

Defines if the loader should compile shadow generators before raising the success callback. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`compileShadowGenerators`](../interfaces/GLTFLoaderOptions.md#compileshadowgenerators)

***

### coordinateSystemMode

> **coordinateSystemMode**: [`GLTFLoaderCoordinateSystemMode`](../enumerations/GLTFLoaderCoordinateSystemMode.md) = `GLTFLoaderCoordinateSystemMode.AUTO`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L225)

The coordinate system mode. Defaults to AUTO.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`coordinateSystemMode`](../interfaces/GLTFLoaderOptions.md#coordinatesystemmode)

***

### createInstances

> **createInstances**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:230](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L230)

Defines if the loader should create instances when multiple glTF nodes point to the same glTF mesh. Defaults to true.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`createInstances`](../interfaces/GLTFLoaderOptions.md#createinstances)

***

### customRootNode?

> `optional` **customRootNode?**: [`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../core/src/classes/TransformNode.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:400](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L400)

Defines the node to use as the root of the hierarchy when loading the scene (default: undefined). If not defined, a root node will be automatically created.
You can also pass null if you don't want a root node to be created.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`customRootNode`](../interfaces/GLTFLoaderOptions.md#customrootnode)

***

### dontUseTransmissionHelper

> **dontUseTransmissionHelper**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:323](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L323)

If true, the loader will not use the transmission helper when loading materials with transmission.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`dontUseTransmissionHelper`](../interfaces/GLTFLoaderOptions.md#dontusetransmissionhelper)

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

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`extensionOptions`](../interfaces/GLTFLoaderOptions.md#extensionoptions)

***

### loadAllMaterials

> **loadAllMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:235](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L235)

If true, load all materials defined in the file, even if not used by any mesh. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`loadAllMaterials`](../interfaces/GLTFLoaderOptions.md#loadallmaterials)

***

### loadMorphTargets

> **loadMorphTargets**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:240](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L240)

Defines if the loader should load morph targets. Defaults to true.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`loadMorphTargets`](../interfaces/GLTFLoaderOptions.md#loadmorphtargets)

***

### loadNodeAnimations

> **loadNodeAnimations**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:257](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L257)

Defines if the loader should load node animations. Defaults to true.
NOTE: The animation of this node will still load if the node is also a joint of a skin and `loadSkins` is true.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`loadNodeAnimations`](../interfaces/GLTFLoaderOptions.md#loadnodeanimations)

***

### loadOnlyMaterials

> **loadOnlyMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L262)

If true, load only the materials defined in the file. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`loadOnlyMaterials`](../interfaces/GLTFLoaderOptions.md#loadonlymaterials)

***

### loadSkins

> **loadSkins**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L267)

Defines if the loader should load skins. Defaults to true.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`loadSkins`](../interfaces/GLTFLoaderOptions.md#loadskins)

***

### name

> `readonly` **name**: `"gltf"` = `GLTFFileLoaderMetadata.name`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:771](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L771)

Name of the loader ("gltf")

#### Implementation of

[`ISceneLoaderPluginFactory`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md).[`name`](../../../core/src/interfaces/ISceneLoaderPluginFactory.md#name)

***

### onCameraLoadedObservable

> `readonly` **onCameraLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Camera`](../../../core/src/classes/Camera.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:613](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L613)

Observable raised when the loader creates a camera after parsing the glTF properties of the camera.

***

### onCompleteObservable

> `readonly` **onCompleteObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`void`\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:634](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L634)

Observable raised when the asset is completely loaded, immediately before the loader is disposed.
For assets with LODs, raised when all of the LODs are complete.
For assets without LODs, raised when the model is complete, immediately after the loader resolves the returned promise.

***

### onDisposeObservable

> `readonly` **onDisposeObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`void`\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:670](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L670)

Observable raised after the loader is disposed.

***

### onErrorObservable

> `readonly` **onErrorObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`any`\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:653](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L653)

Observable raised when an error occurs.

***

### onExtensionLoadedObservable

> `readonly` **onExtensionLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:688](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L688)

Observable raised after a loader extension is created.
Set additional options for a loader extension in this event.

***

### onLoaderStateChangedObservable

> **onLoaderStateChangedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`GLTFLoaderState`](../enumerations/GLTFLoaderState.md)\>\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:1083](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L1083)

Observable raised when the loader state changes.

***

### onMaterialLoadedObservable

> `readonly` **onMaterialLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`Material`](../../../core/src/classes/Material.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:594](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L594)

Observable raised when the loader creates a material after parsing the glTF properties of the material.

***

### onMeshLoadedObservable

> `readonly` **onMeshLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`AbstractMesh`](../../../core/src/classes/AbstractMesh.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:532](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L532)

Observable raised when the loader creates a mesh after parsing the glTF properties of the mesh.
Note that the observable is raised as soon as the mesh object is created, meaning some data may not have been setup yet for this mesh (vertex data, morph targets, material, ...)

***

### onParsedObservable

> **onParsedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<[`IGLTFLoaderData`](../interfaces/IGLTFLoaderData.md)\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:485](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L485)

Raised when the asset has been parsed

***

### onSkinLoadedObservable

> `readonly` **onSkinLoadedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<\{ `node`: [`TransformNode`](../../../core/src/classes/TransformNode.md); `skinnedNode`: [`TransformNode`](../../../core/src/classes/TransformNode.md); \}\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:555](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L555)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:575](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L575)

Observable raised when the loader creates a texture after parsing the glTF properties of the texture.

***

### onValidatedObservable

> `readonly` **onValidatedObservable**: [`Observable`](../../../core/src/classes/Observable.md)\<`IGLTFValidationResults`\>

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:749](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L749)

Observable raised after validation when validate is set to true. The event data is the result of the validation.

***

### skipMaterials

> **skipMaterials**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:272](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L272)

If true, do not load any materials defined in the file. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`skipMaterials`](../interfaces/GLTFLoaderOptions.md#skipmaterials)

***

### targetFps

> **targetFps**: `number` = `60`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L277)

When loading glTF animations, which are defined in seconds, target them to this FPS. Defaults to 60.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`targetFps`](../interfaces/GLTFLoaderOptions.md#targetfps)

***

### transparencyAsCoverage

> **transparencyAsCoverage**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:284](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L284)

Defines if the Alpha blended materials are only applied as coverage.
If false, (default) The luminance of each pixel will reduce its opacity to simulate the behaviour of most physical materials.
If true, no extra effects are applied to transparent pixels.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`transparencyAsCoverage`](../interfaces/GLTFLoaderOptions.md#transparencyascoverage)

***

### useClipPlane

> **useClipPlane**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:289](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L289)

Defines if the loader should also compile materials with clip planes. Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useClipPlane`](../interfaces/GLTFLoaderOptions.md#useclipplane)

***

### useGltfTextureNames

> **useGltfTextureNames**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:295](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L295)

If true, the loader will derive the name for Babylon textures from the glTF texture name, image name, or image url. Defaults to false.
Note that it is possible for multiple Babylon textures to share the same name when the Babylon textures load from the same glTF texture or image.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useGltfTextureNames`](../interfaces/GLTFLoaderOptions.md#usegltftexturenames)

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

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useMaxMorphTargetInfluencers`](../interfaces/GLTFLoaderOptions.md#usemaxmorphtargetinfluencers)

***

### useOpenPBR

> **useOpenPBR**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:318](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L318)

**`Experimental`**

Load the glTF files using the OpenPBR material.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useOpenPBR`](../interfaces/GLTFLoaderOptions.md#useopenpbr)

***

### useRangeRequests

> **useRangeRequests**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:302](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L302)

Defines if the loader should use range requests when load binary glTF files from HTTP.
Enabling will disable offline support and glTF validator.
Defaults to false.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useRangeRequests`](../interfaces/GLTFLoaderOptions.md#userangerequests)

***

### useSRGBBuffers

> **useSRGBBuffers**: `boolean` = `true`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:307](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L307)

If true, load the color (gamma encoded) textures into sRGB buffers (if supported by the GPU), which will yield more accurate results when sampling the texture. Defaults to true.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`useSRGBBuffers`](../interfaces/GLTFLoaderOptions.md#usesrgbbuffers)

***

### validate

> **validate**: `boolean` = `false`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:312](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L312)

Defines if the loader should validate the asset.

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`validate`](../interfaces/GLTFLoaderOptions.md#validate)

## Accessors

### capturePerformanceCounters

#### Get Signature

> **get** **capturePerformanceCounters**(): `boolean`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:726](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L726)

Defines if the loader should capture performance counters.

##### Returns

`boolean`

#### Set Signature

> **set** **capturePerformanceCounters**(`value`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:730](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L730)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:1076](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L1076)

The loader state or null if the loader is not active.

##### Returns

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<[`GLTFLoaderState`](../enumerations/GLTFLoaderState.md)\>

***

### loggingEnabled

#### Get Signature

> **get** **loggingEnabled**(): `boolean`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:705](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L705)

Defines if the loader logging is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **loggingEnabled**(`value`): `void`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:709](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L709)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:620](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L620)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:643](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L643)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:677](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L677)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:660](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L660)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:695](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L695)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:601](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L601)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:540](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L540)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:492](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L492)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:563](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L563)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:582](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L582)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:756](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L756)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:779](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L779)

Disposes the loader, releases resources during load, and cancels any outstanding requests.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../../../core/src/interfaces/IDisposable.md).[`dispose`](../../../core/src/interfaces/IDisposable.md#dispose)

***

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

#### Inherited from

[`GLTFLoaderOptions`](../interfaces/GLTFLoaderOptions.md).[`preprocessUrlAsync`](../interfaces/GLTFLoaderOptions.md#preprocessurlasync)

***

### rewriteRootURL()?

> `optional` **rewriteRootURL**(`rootUrl`, `responseURL?`): `string`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:1066](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L1066)

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

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:1089](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L1089)

Returns a promise that resolves when the asset is completely loaded.

#### Returns

`Promise`\<`void`\>

a promise that resolves when the asset is completely loaded.
