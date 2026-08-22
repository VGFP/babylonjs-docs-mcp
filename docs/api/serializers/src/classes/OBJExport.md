[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / OBJExport

# Class: OBJExport

Defined in: [packages/dev/serializers/src/OBJ/objSerializer.ts:12](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/OBJ/objSerializer.ts#L12)

Class for generating OBJ data from a Babylon scene.

## Constructors

### Constructor

> **new OBJExport**(): `OBJExport`

#### Returns

`OBJExport`

## Methods

### MTL()

> `static` **MTL**(`mesh`, `materialName?`): `string`

Defined in: [packages/dev/serializers/src/OBJ/objSerializer.ts:149](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/OBJ/objSerializer.ts#L149)

Exports the material(s) of a mesh in .MTL file format (text)

#### Parameters

##### mesh

[`Mesh`](../../../core/src/classes/Mesh.md)

defines the mesh to extract the material from

##### materialName?

`string` = `"mat1"`

defines the name of the material in the output (default is 'mat1')

#### Returns

`string`

the mtl content

***

### OBJ()

> `static` **OBJ**(`meshes`, `materials?`, `matlibname?`, `globalposition?`): `string`

Defined in: [packages/dev/serializers/src/OBJ/objSerializer.ts:21](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/OBJ/objSerializer.ts#L21)

Exports the geometry of a Mesh array in .OBJ file format (text)

#### Parameters

##### meshes

[`Mesh`](../../../core/src/classes/Mesh.md)[]

defines the list of meshes to serialize

##### materials?

`boolean`

defines if materials should be exported

##### matlibname?

`string`

defines the name of the associated mtl file

##### globalposition?

`boolean`

defines if the exported positions are globals or local to the exported mesh

#### Returns

`string`

the OBJ content
