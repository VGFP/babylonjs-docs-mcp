[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / KHR\_materials\_volume\_scatter

# Class: KHR\_materials\_volume\_scatter

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume\_scatter.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume_scatter.pure.ts#L27)

TODO: In-progress specification
[Specification](https://github.com/KhronosGroup/glTF/blob/7ea427ed55d44427e83c0a6d1c87068b1a4151c5/extensions/2.0/Khronos/KHR_materials_volume_scatter/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new KHR\_materials\_volume\_scatter**(`exporter`): `KHR_materials_volume_scatter`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume\_scatter.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume_scatter.pure.ts#L41)

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`KHR_materials_volume_scatter`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume\_scatter.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume_scatter.pure.ts#L32)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"KHR_materials_volume_scatter"` = `NAME`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume\_scatter.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume_scatter.pure.ts#L29)

Name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume\_scatter.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume_scatter.pure.ts#L35)

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume\_scatter.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume_scatter.pure.ts#L45)

Releases all held resources

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportMaterialAdditionalTexturesAsync()?

> `optional` **postExportMaterialAdditionalTexturesAsync**(`context`, `node`, `babylonMaterial`): `Promise`\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]\>

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume\_scatter.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume_scatter.pure.ts#L59)

After exporting a material, deal with additional textures

#### Parameters

##### context

`string`

GLTF context of the material

##### node

`IMaterial`

exported GLTF node

##### babylonMaterial

[`Material`](../../../core/src/classes/Material.md)

corresponding babylon material

#### Returns

`Promise`\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]\>

array of additional textures to export

#### Implementation of

`IGLTFExporterExtensionV2.postExportMaterialAdditionalTexturesAsync`

***

### postExportMaterialAsync()?

> `optional` **postExportMaterialAsync**(`context`, `node`, `babylonMaterial`): `Promise`\<`IMaterial`\>

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_volume\_scatter.pure.ts:100](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_volume_scatter.pure.ts#L100)

After exporting a material

#### Parameters

##### context

`string`

GLTF context of the material

##### node

`IMaterial`

exported GLTF node

##### babylonMaterial

[`Material`](../../../core/src/classes/Material.md)

corresponding babylon material

#### Returns

`Promise`\<`IMaterial`\>

promise that resolves with the updated node

#### Implementation of

`IGLTFExporterExtensionV2.postExportMaterialAsync`
