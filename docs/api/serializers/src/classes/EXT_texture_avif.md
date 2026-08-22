[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / EXT\_texture\_avif

# Class: EXT\_texture\_avif

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_avif.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_avif.pure.ts#L15)

**`Experimental`**

[Proposed Specification](https://github.com/KhronosGroup/glTF/blob/5cb7518cf9a1bfb8268320026961b21caf5a4aac/extensions/2.0/Vendor/EXT_texture_avif/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new EXT\_texture\_avif**(`exporter`): `EXT_texture_avif`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_avif.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_avif.pure.ts#L30)

**`Experimental`**

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`EXT_texture_avif`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_avif.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_avif.pure.ts#L18)

**`Experimental`**

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"EXT_texture_avif"` = `NAME`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_avif.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_avif.pure.ts#L16)

**`Experimental`**

The name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `true`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_avif.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_avif.pure.ts#L20)

**`Experimental`**

Gets a boolean indicating that this extension is required for the file to work

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Accessors

### wasUsed

#### Get Signature

> **get** **wasUsed**(): `boolean`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_avif.pure.ts:24](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_avif.pure.ts#L24)

**`Experimental`**

Gets a boolean indicating that this extension was used

##### Returns

`boolean`

#### Implementation of

`IGLTFExporterExtensionV2.wasUsed`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_avif.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_avif.pure.ts#L34)

**`Experimental`**

Releases all held resources

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportTexture()

> **postExportTexture**(`_`, `textureInfo`): `void`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_texture\_avif.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_texture_avif.pure.ts#L41)

**`Experimental`**

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
