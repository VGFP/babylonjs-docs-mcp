[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / GLTFLoader

# Class: GLTFLoader

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:197](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L197)

The glTF 2.0 loader

## Properties

### \_babylonLights

> **\_babylonLights**: [`Light`](../../../../../core/src/classes/Light.md)[] = `[]`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:205](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L205)

Storage

***

### DefaultSampler

> `readonly` `static` **DefaultSampler**: [`ISampler`](../interfaces/ISampler.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:261](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L261)

The default glTF sampler.

## Accessors

### babylonScene

#### Get Signature

> **get** **babylonScene**(): [`Scene`](../../../../../core/src/classes/Scene.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:311](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L311)

The Babylon scene when loading the asset.

##### Returns

[`Scene`](../../../../../core/src/classes/Scene.md)

***

### bin

#### Get Signature

> **get** **bin**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`IDataBuffer`](../../../../../core/src/interfaces/IDataBuffer.md)\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L297)

The BIN chunk of a binary glTF.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`IDataBuffer`](../../../../../core/src/interfaces/IDataBuffer.md)\>

***

### gltf

#### Get Signature

> **get** **gltf**(): [`IGLTF`](../interfaces/IGLTF.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:286](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L286)

The object that represents the glTF JSON.

##### Returns

[`IGLTF`](../interfaces/IGLTF.md)

***

### parent

#### Get Signature

> **get** **parent**(): [`GLTFFileLoader`](../../../classes/GLTFFileLoader.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:304](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L304)

The parent file loader.

##### Returns

[`GLTFFileLoader`](../../../classes/GLTFFileLoader.md)

***

### rootBabylonMesh

#### Get Signature

> **get** **rootBabylonMesh**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../../../core/src/classes/TransformNode.md)\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:322](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L322)

The root Babylon node when loading the asset.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`TransformNode`](../../../../../core/src/classes/TransformNode.md)\>

***

### rootUrl

#### Get Signature

> **get** **rootUrl**(): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string`\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:329](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L329)

The root url when loading the asset.

##### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string`\>

## Methods

### createMaterial()

> **createMaterial**(`context`, `material`, `babylonDrawMode`): [`Material`](../../../../../core/src/classes/Material.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:2440](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L2440)

Creates a Babylon material from a glTF material.

#### Parameters

##### context

`string`

The context when loading the asset

##### material

[`IMaterial`](../interfaces/IMaterial.md)

The glTF material property

##### babylonDrawMode

`number`

The draw mode for the Babylon material

#### Returns

[`Material`](../../../../../core/src/classes/Material.md)

The Babylon material

***

### endPerformanceCounter()

> **endPerformanceCounter**(`counterName`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:3251](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L3251)

Ends a performance counter.

#### Parameters

##### counterName

`string`

The name of the performance counter

#### Returns

`void`

***

### isExtensionUsed()

> **isExtensionUsed**(`name`): `boolean`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:3212](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L3212)

Checks for presence of an extension.

#### Parameters

##### name

`string`

The name of the extension to check

#### Returns

`boolean`

A boolean indicating the presence of the given extension name in `extensionsUsed`

***

### isMatchingMaterialType()

> **isMatchingMaterialType**(`material`): `boolean`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:245](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L245)

Test if the given material is an instance of any PBR material type known to this loader.

#### Parameters

##### material

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<[`Material`](../../../../../core/src/classes/Material.md)\>

The material to test

#### Returns

`boolean`

true if the material matches one of the loaded PBR implementations

***

### loadAnimationAsync()

> **loadAnimationAsync**(`context`, `animation`): `Promise`\<[`AnimationGroup`](../../../../../core/src/classes/AnimationGroup.md)\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:1786](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L1786)

Loads a glTF animation.

#### Parameters

##### context

`string`

The context when loading the asset

##### animation

[`IAnimation`](../interfaces/IAnimation.md)

The glTF animation property

#### Returns

`Promise`\<[`AnimationGroup`](../../../../../core/src/classes/AnimationGroup.md)\>

A promise that resolves with the loaded Babylon animation group when the load is complete

***

### loadBufferAsync()

> **loadBufferAsync**(`context`, `buffer`, `byteOffset`, `byteLength`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:2043](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L2043)

Loads a glTF buffer.

#### Parameters

##### context

`string`

The context when loading the asset

##### buffer

[`IBuffer`](../interfaces/IBuffer.md)

The glTF buffer property

##### byteOffset

`number`

The byte offset to use

##### byteLength

`number`

The byte length to use

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

A promise that resolves with the loaded data when the load is complete

***

### loadBufferViewAsync()

> **loadBufferViewAsync**(`context`, `bufferView`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:2076](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L2076)

Loads a glTF buffer view.

#### Parameters

##### context

`string`

The context when loading the asset

##### bufferView

[`IBufferView`](../interfaces/IBufferView.md)

The glTF buffer view property

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

A promise that resolves with the loaded data when the load is complete

***

### loadCameraAsync()

> **loadCameraAsync**(`context`, `camera`, `assign?`): `Promise`\<[`Camera`](../../../../../core/src/classes/Camera.md)\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:1692](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L1692)

Loads a glTF camera.

#### Parameters

##### context

`string`

The context when loading the asset

##### camera

[`ICamera`](../interfaces/ICamera.md)

The glTF camera property

##### assign?

(`babylonCamera`) => `void`

A function called synchronously after parsing the glTF properties

#### Returns

`Promise`\<[`Camera`](../../../../../core/src/classes/Camera.md)\>

A promise that resolves with the loaded Babylon camera when the load is complete

***

### loadImageAsync()

> **loadImageAsync**(`context`, `image`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:2742](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L2742)

Loads a glTF image.

#### Parameters

##### context

`string`

The context when loading the asset

##### image

[`IImage`](../interfaces/IImage.md)

The glTF image property

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

A promise that resolves with the loaded data when the load is complete

***

### loadMaterialAlphaProperties()

> **loadMaterialAlphaProperties**(`context`, `material`, `babylonMaterial`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:2561](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L2561)

Loads the alpha properties from a glTF material into a Babylon material.
Must be called after the setting the albedo texture of the Babylon material when the material has an albedo texture.

#### Parameters

##### context

`string`

The context when loading the asset

##### material

[`IMaterial`](../interfaces/IMaterial.md)

The glTF material property

##### babylonMaterial

[`Material`](../../../../../core/src/classes/Material.md)

The Babylon material

#### Returns

`void`

***

### loadMaterialBasePropertiesAsync()

> **loadMaterialBasePropertiesAsync**(`context`, `material`, `babylonMaterial`): `Promise`\<`void`\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:2485](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L2485)

Loads the normal, occlusion, and emissive properties from a glTF material into a Babylon material.

#### Parameters

##### context

`string`

The context when loading the asset

##### material

[`IMaterial`](../interfaces/IMaterial.md)

The glTF material property

##### babylonMaterial

[`Material`](../../../../../core/src/classes/Material.md)

The Babylon material

#### Returns

`Promise`\<`void`\>

A promise that resolves when the load is complete

***

### loadMaterialPropertiesAsync()

> **loadMaterialPropertiesAsync**(`context`, `material`, `babylonMaterial`): `Promise`\<`void`\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:2459](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L2459)

Loads properties from a glTF material into a Babylon material.

#### Parameters

##### context

`string`

The context when loading the asset

##### material

[`IMaterial`](../interfaces/IMaterial.md)

The glTF material property

##### babylonMaterial

[`Material`](../../../../../core/src/classes/Material.md)

The Babylon material

#### Returns

`Promise`\<`void`\>

A promise that resolves when the load is complete

***

### loadNodeAsync()

> **loadNodeAsync**(`context`, `node`, `assign?`): `Promise`\<[`TransformNode`](../../../../../core/src/classes/TransformNode.md)\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:952](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L952)

Loads a glTF node.

#### Parameters

##### context

`string`

The context when loading the asset

##### node

[`INode`](../interfaces/INode.md)

The glTF node property

##### assign?

(`babylonTransformNode`) => `void`

A function called synchronously after parsing the glTF properties

#### Returns

`Promise`\<[`TransformNode`](../../../../../core/src/classes/TransformNode.md)\>

A promise that resolves with the loaded Babylon mesh when the load is complete

***

### loadSceneAsync()

> **loadSceneAsync**(`context`, `scene`): `Promise`\<`void`\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:791](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L791)

Loads a glTF scene.

#### Parameters

##### context

`string`

The context when loading the asset

##### scene

[`IScene`](../interfaces/IScene.md)

The glTF scene property

#### Returns

`Promise`\<`void`\>

A promise that resolves when the load is complete

***

### loadTextureInfoAsync()

> **loadTextureInfoAsync**(`context`, `textureInfo`, `assign?`): `Promise`\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:2606](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L2606)

Loads a glTF texture info.

#### Parameters

##### context

`string`

The context when loading the asset

##### textureInfo

[`ITextureInfo`](../interfaces/ITextureInfo.md)

The glTF texture info property

##### assign?

(`babylonTexture`) => `void`

A function called synchronously after parsing the glTF properties

#### Returns

`Promise`\<[`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)\>

A promise that resolves with the loaded Babylon texture when the load is complete

***

### loadUriAsync()

> **loadUriAsync**(`context`, `property`, `uri`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:2766](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L2766)

Loads a glTF uri.

#### Parameters

##### context

`string`

The context when loading the asset

##### property

`IProperty`

The glTF property associated with the uri

##### uri

`string`

The base64 or relative uri

#### Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\>\>

A promise that resolves with the loaded data when the load is complete

***

### log()

> **log**(`message`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:3235](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L3235)

Logs a message

#### Parameters

##### message

`string`

The message to log

#### Returns

`void`

***

### logClose()

> **logClose**(): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:3227](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L3227)

Decrements the indentation level.

#### Returns

`void`

***

### logOpen()

> **logOpen**(`message`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:3220](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L3220)

Increments the indentation level and logs a message.

#### Parameters

##### message

`string`

The message to log

#### Returns

`void`

***

### startPerformanceCounter()

> **startPerformanceCounter**(`counterName`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:3243](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L3243)

Starts a performance counter.

#### Parameters

##### counterName

`string`

The name of the performance counter

#### Returns

`void`

***

### AddPointerMetadata()

> `static` **AddPointerMetadata**(`babylonObject`, `pointer`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:2809](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L2809)

Adds a JSON pointer to the _internalMetadata of the Babylon object at `<object>._internalMetadata.gltf.pointers`.

#### Parameters

##### babylonObject

`IWithMetadata`

the Babylon object with _internalMetadata

##### pointer

`string`

the JSON pointer

#### Returns

`void`

***

### LoadExtensionAsync()

> `static` **LoadExtensionAsync**\<`TExtension`, `TResult`\>(`context`, `property`, `extensionName`, `actionAsync`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:3158](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L3158)

Helper method called by a loader extension to load an glTF extension.

#### Type Parameters

##### TExtension

`TExtension` = `unknown`

##### TResult

`TResult` = `void`

#### Parameters

##### context

`string`

The context when loading the asset

##### property

`IProperty`

The glTF property to load the extension from

##### extensionName

`string`

The name of the extension to load

##### actionAsync

(`extensionContext`, `extension`) => [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

The action to run

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

The promise returned by actionAsync or null if the extension does not exist

***

### LoadExtraAsync()

> `static` **LoadExtraAsync**\<`TExtra`, `TResult`\>(`context`, `property`, `extensionName`, `actionAsync`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:3187](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L3187)

Helper method called by a loader extension to load a glTF extra.

#### Type Parameters

##### TExtra

`TExtra` = `unknown`

##### TResult

`TResult` = `void`

#### Parameters

##### context

`string`

The context when loading the asset

##### property

`IProperty`

The glTF property to load the extra from

##### extensionName

`string`

The name of the extension to load

##### actionAsync

(`extraContext`, `extra`) => [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

The action to run

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`Promise`\<`TResult`\>\>

The promise returned by actionAsync or null if the extra does not exist

***

### ~~RegisterExtension()~~

> `static` **RegisterExtension**(`name`, `factory`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:269](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L269)

Registers a loader extension.

#### Parameters

##### name

`string`

The name of the loader extension.

##### factory

[`GLTFExtensionFactory`](../type-aliases/GLTFExtensionFactory.md)

The factory function that creates the loader extension.

#### Returns

`void`

#### Deprecated

Please use registerGLTFExtension instead.

***

### ~~UnregisterExtension()~~

> `static` **UnregisterExtension**(`name`): `boolean`

Defined in: [packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts:279](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/glTFLoader.pure.ts#L279)

Unregisters a loader extension.

#### Parameters

##### name

`string`

The name of the loader extension.

#### Returns

`boolean`

A boolean indicating whether the extension has been unregistered

#### Deprecated

Please use unregisterGLTFExtension instead.
