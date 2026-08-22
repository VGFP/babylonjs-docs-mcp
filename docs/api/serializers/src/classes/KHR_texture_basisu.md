[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / KHR\_texture\_basisu

# Class: KHR\_texture\_basisu

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.pure.ts#L14)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_texture_basisu/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new KHR\_texture\_basisu**(`exporter`): `KHR_texture_basisu`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.pure.ts#L29)

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`KHR_texture_basisu`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.pure.ts#L17)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"KHR_texture_basisu"` = `NAME`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.pure.ts#L15)

The name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `true`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.pure.ts#L19)

Gets a boolean indicating that this extension is required for the file to work

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Accessors

### wasUsed

#### Get Signature

> **get** **wasUsed**(): `boolean`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.pure.ts#L23)

Gets a boolean indicating that this extension was used

##### Returns

`boolean`

#### Implementation of

`IGLTFExporterExtensionV2.wasUsed`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.pure.ts#L33)

Releases all held resources

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportTexture()

> **postExportTexture**(`_`, `textureInfo`): `void`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_texture\_basisu.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_texture_basisu.pure.ts#L40)

Called after a texture is exported to register the encoded image MIME type.

#### Parameters

##### \_

`string`

the name of the exported babylon texture (unused)

##### textureInfo

`ITextureInfo`

the glTF texture info for the exported texture

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.postExportTexture`
