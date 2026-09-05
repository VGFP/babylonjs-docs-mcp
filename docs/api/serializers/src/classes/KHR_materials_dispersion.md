[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / KHR\_materials\_dispersion

# Class: KHR\_materials\_dispersion

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_dispersion.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.pure.ts#L14)

**`Experimental`**

[Specification](https://github.com/KhronosGroup/glTF/blob/87bd64a7f5e23c84b6aef2e6082069583ed0ddb4/extensions/2.0/Khronos/KHR_materials_dispersion/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new KHR\_materials\_dispersion**(): `KHR_materials_dispersion`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_dispersion.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.pure.ts#L27)

**`Experimental`**

Constructor

#### Returns

`KHR_materials_dispersion`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_dispersion.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.pure.ts#L19)

**`Experimental`**

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"KHR_materials_dispersion"` = `NAME`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_dispersion.pure.ts:16](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.pure.ts#L16)

**`Experimental`**

Name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_dispersion.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.pure.ts#L22)

**`Experimental`**

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_dispersion.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.pure.ts#L30)

**`Experimental`**

Dispose

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportMaterialAsync()?

> `optional` **postExportMaterialAsync**(`context`, `node`, `babylonMaterial`): `Promise`\<`IMaterial`\>

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/KHR\_materials\_dispersion.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/Extensions/KHR_materials_dispersion.pure.ts#L58)

**`Experimental`**

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
