[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / GLTF2Export

# Class: GLTF2Export

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:73](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L73)

Class for generating glTF data from a Babylon scene.

## Constructors

### Constructor

> **new GLTF2Export**(): `GLTF2Export`

#### Returns

`GLTF2Export`

## Methods

### GLBAsync()

> `static` **GLBAsync**(`scene`, `fileName`, `options?`): `Promise`\<[`GLTFData`](GLTFData.md)\>

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:100](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L100)

Exports the scene to .glb file format

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

Babylon scene

##### fileName

`string`

Name to use for the .glb file

##### options?

[`IExportOptions`](../interfaces/IExportOptions.md)

Exporter options

#### Returns

`Promise`\<[`GLTFData`](GLTFData.md)\>

Returns the exported data

***

### GLTFAsync()

> `static` **GLTFAsync**(`scene`, `fileName`, `options?`): `Promise`\<[`GLTFData`](GLTFData.md)\>

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:81](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L81)

Exports the scene to .gltf file format

#### Parameters

##### scene

[`Scene`](../../../core/src/classes/Scene.md)

Babylon scene

##### fileName

`string`

Name to use for the .gltf file

##### options?

[`IExportOptions`](../interfaces/IExportOptions.md)

Exporter options

#### Returns

`Promise`\<[`GLTFData`](GLTFData.md)\>

Returns the exported data
