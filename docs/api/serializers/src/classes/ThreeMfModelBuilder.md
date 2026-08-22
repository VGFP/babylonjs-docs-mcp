[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfModelBuilder

# Class: ThreeMfModelBuilder

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:338](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L338)

Fluent builder for a 3MF model, the root part of a 3MF document.
It aggregates the resources (materials, meshes and components) and the build items that reference them.

## Constructors

### Constructor

> **new ThreeMfModelBuilder**(): `ThreeMfModelBuilder`

#### Returns

`ThreeMfModelBuilder`

## Properties

### \_model

> **\_model**: [`ThreeMfModel`](ThreeMfModel.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:347](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L347)

The 3MF model currently being built.

***

### \_objects

> **\_objects**: `Map`\<`string`, [`I3mfObject`](../interfaces/I3mfObject.md)\>

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:351](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L351)

The object resources added to the model, indexed by resource id.

***

### KnownMetaSet

> `static` **KnownMetaSet**: `Set`\<`string`\>

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:342](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L342)

The lower cased set of the metadata names defined by the 3MF specification.

## Methods

### build()

> **build**(): [`ThreeMfModel`](ThreeMfModel.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:455](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L455)

Validates and returns the model that has been built.

#### Returns

[`ThreeMfModel`](ThreeMfModel.md)

The built 3MF model.

#### Throws

When the model has no object resource or no build item.

***

### reset()

> **reset**(): `ThreeMfModelBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:444](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L444)

Discards the current model and starts building a new one.

#### Returns

`ThreeMfModelBuilder`

This builder, to allow chaining.

***

### withBuild()

> **withBuild**(`objectid`, `transform?`, `partnumber?`): `ThreeMfModelBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:424](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L424)

Adds a build item, which places an object resource in the build plate.

#### Parameters

##### objectid

`number`

The resource id of the object to place.

##### transform?

[`Matrix3d`](Matrix3d.md)

The optional transform applied to the object.

##### partnumber?

`string`

The optional part number identifying the produced part.

#### Returns

`ThreeMfModelBuilder`

This builder, to allow chaining.

***

### withComponents()

> **withComponents**(`components`): `ThreeMfModelBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:408](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L408)

Adds a components object to the model resources.

#### Parameters

##### components

[`I3mfObject`](../interfaces/I3mfObject.md) \| [`ThreeMfComponentsBuilder`](ThreeMfComponentsBuilder.md)

The object resource, or a builder that produces one.

#### Returns

`ThreeMfModelBuilder`

This builder, to allow chaining.

***

### withMaterial()

> **withMaterial**(`material`): `ThreeMfModelBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:377](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L377)

Adds a base materials group to the model resources.

#### Parameters

##### material

[`I3mfBaseMaterials`](../interfaces/I3mfBaseMaterials.md) \| [`ThreeMfMaterialBuilder`](ThreeMfMaterialBuilder.md)

The base materials resource, or a builder that produces one.

#### Returns

`ThreeMfModelBuilder`

This builder, to allow chaining.

***

### withMesh()

> **withMesh**(`object`): `ThreeMfModelBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:394](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L394)

Adds a mesh object to the model resources.

#### Parameters

##### object

[`I3mfObject`](../interfaces/I3mfObject.md) \| [`ThreeMfMeshBuilder`](ThreeMfMeshBuilder.md)

The object resource, or a builder that produces one.

#### Returns

`ThreeMfModelBuilder`

This builder, to allow chaining.

***

### withMetaData()

> **withMetaData**(`name`, `value`, `preserve?`, `type?`): `ThreeMfModelBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:361](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L361)

Adds a metadata entry to the model.

#### Parameters

##### name

`string`

The metadata name. Names outside of the 3MF specification must be namespace qualified.

##### value

`string`

The metadata value.

##### preserve?

`boolean`

Whether consumers must preserve this entry when editing the document.

##### type?

`string`

The XML schema type of the value. Defaults to `xs:string`.

#### Returns

`ThreeMfModelBuilder`

This builder, to allow chaining.

***

### withUnit()

> **withUnit**(`unit`): `ThreeMfModelBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:435](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L435)

Sets the unit in which the model coordinates are expressed.

#### Parameters

##### unit

[`ST_Unit`](../enumerations/ST_Unit.md)

The 3MF unit (micron, millimeter, centimeter, inch, foot or meter).

#### Returns

`ThreeMfModelBuilder`

This builder, to allow chaining.
