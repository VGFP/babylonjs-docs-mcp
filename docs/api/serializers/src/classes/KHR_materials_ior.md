[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / KHR\_materials\_ior

# Class: KHR\_materials\_ior

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_ior.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.pure.ts#L14)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_ior/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new KHR\_materials\_ior**(): `KHR_materials_ior`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_ior.pure.ts:26](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.pure.ts#L26)

#### Returns

`KHR_materials_ior`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_ior.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.pure.ts#L19)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"KHR_materials_ior"` = `NAME`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_ior.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.pure.ts#L16)

Name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_ior.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.pure.ts#L22)

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_ior.pure.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.pure.ts#L29)

Dispose

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportMaterialAsync()?

> `optional` **postExportMaterialAsync**(`context`, `node`, `babylonMaterial`): `Promise`\<`IMaterial`\>

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_ior.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_ior.pure.ts#L57)

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

promise, resolves with the material

#### Implementation of

`IGLTFExporterExtensionV2.postExportMaterialAsync`
