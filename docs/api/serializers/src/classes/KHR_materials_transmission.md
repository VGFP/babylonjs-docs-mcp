[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / KHR\_materials\_transmission

# Class: KHR\_materials\_transmission

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.pure.ts#L17)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_transmission/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new KHR\_materials\_transmission**(`exporter`): `KHR_materials_transmission`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.pure.ts#L31)

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`KHR_materials_transmission`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.pure.ts#L22)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"KHR_materials_transmission"` = `NAME`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.pure.ts#L19)

Name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.pure.ts#L25)

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.pure.ts#L36)

Dispose

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportMaterialAdditionalTexturesAsync()?

> `optional` **postExportMaterialAdditionalTexturesAsync**(`context`, `node`, `babylonMaterial`): `Promise`\<[`BaseTexture`](../../../core/src/classes/BaseTexture.md)[]\>

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.pure.ts#L50)

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

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_transmission.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_transmission.pure.ts#L96)

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

true if successful

#### Implementation of

`IGLTFExporterExtensionV2.postExportMaterialAsync`
