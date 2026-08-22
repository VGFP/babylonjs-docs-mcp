[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / EXT\_mesh\_gpu\_instancing

# Class: EXT\_mesh\_gpu\_instancing

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.pure.ts#L30)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Vendor/EXT_mesh_gpu_instancing/README.md)

## Implements

- `IGLTFExporterExtensionV2`

## Constructors

### Constructor

> **new EXT\_mesh\_gpu\_instancing**(`exporter`): `EXT_mesh_gpu_instancing`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.pure.ts#L49)

#### Parameters

##### exporter

`GLTFExporter`

#### Returns

`EXT_mesh_gpu_instancing`

## Properties

### enabled

> **enabled**: `boolean` = `true`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.pure.ts#L35)

Defines whether this extension is enabled

#### Implementation of

`IGLTFExporterExtensionV2.enabled`

***

### name

> `readonly` **name**: `"EXT_mesh_gpu_instancing"` = `NAME`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.pure.ts#L32)

Name of this extension

#### Implementation of

`IGLTFExporterExtensionV2.name`

***

### required

> **required**: `boolean` = `false`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.pure.ts#L38)

Defines whether this extension is required

#### Implementation of

`IGLTFExporterExtensionV2.required`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.pure.ts#L53)

Releases all held resources

#### Returns

`void`

#### Implementation of

`IGLTFExporterExtensionV2.dispose`

***

### postExportNodeAsync()

> **postExportNodeAsync**(`context`, `node`, `babylonNode`, `nodeMap`, `convertToRightHanded`, `bufferManager`): `Promise`\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`INode`\>\>

Defined in: [packages/dev/serializers/src/glTF/2.0/Extensions/EXT\_mesh\_gpu\_instancing.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/Extensions/EXT_mesh_gpu_instancing.pure.ts#L70)

After node is exported

#### Parameters

##### context

`string`

the GLTF context when loading the asset

##### node

[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`INode`\>

the node exported

##### babylonNode

[`Node`](../../../core/src/classes/Node.md)

the corresponding babylon node

##### nodeMap

`Map`\<[`Node`](../../../core/src/classes/Node.md), `number`\>

map from babylon node id to node index

##### convertToRightHanded

`boolean`

true if we need to convert data from left hand to right hand system.

##### bufferManager

`BufferManager`

buffer manager

#### Returns

`Promise`\<[`Nullable`](../../../core/src/type-aliases/Nullable.md)\<`INode`\>\>

nullable promise, resolves with the node

#### Implementation of

`IGLTFExporterExtensionV2.postExportNodeAsync`
