[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / GLTFData

# Class: GLTFData

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFData.ts:7](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/glTFData.ts#L7)

Class for holding and downloading glTF file data

## Constructors

### Constructor

> **new GLTFData**(): `GLTFData`

#### Returns

`GLTFData`

## Properties

### files

> `readonly` **files**: `object` = `{}`

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFData.ts:11](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/glTFData.ts#L11)

Object which contains the file name as the key and its data as the value

#### Index Signature

\[`fileName`: `string`\]: `string` \| `Blob`

## Accessors

### glTFFiles

#### Get Signature

> **get** **glTFFiles**(): `object`

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFData.ts:16](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/glTFData.ts#L16)

##### Deprecated

Use files instead

##### Returns

`object`

## Methods

### downloadFiles()

> **downloadFiles**(): `void`

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFData.ts:23](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/glTF/2.0/glTFData.ts#L23)

Downloads the glTF data as files based on their names and data

#### Returns

`void`
