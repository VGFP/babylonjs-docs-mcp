[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfObjectBuilder

# Class: ThreeMfObjectBuilder

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:63](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L63)

Fluent builder for a 3MF object resource.
An object is the base resource of a 3MF model and is either a mesh or a set of components.

## Extended by

- [`ThreeMfComponentsBuilder`](ThreeMfComponentsBuilder.md)
- [`ThreeMfMeshBuilder`](ThreeMfMeshBuilder.md)

## Constructors

### Constructor

> **new ThreeMfObjectBuilder**(`id`, `type`): `ThreeMfObjectBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:74](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L74)

Creates a new object builder.

#### Parameters

##### id

`number`

The unique resource id of the object within the model.

##### type

[`ST_ObjectType`](../enumerations/ST_ObjectType.md)

The 3MF object type (model, support, solidsupport, surface or other).

#### Returns

`ThreeMfObjectBuilder`

## Methods

### build()

> **build**(): [`I3mfObject`](../interfaces/I3mfObject.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:114](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L114)

Returns the object that has been built.

#### Returns

[`I3mfObject`](../interfaces/I3mfObject.md)

The built 3MF object resource.

***

### reset()

> **reset**(`id`, `type`): `void`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:123](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L123)

Discards the current object and starts building a new one.

#### Parameters

##### id

`number`

The unique resource id of the new object.

##### type

[`ST_ObjectType`](../enumerations/ST_ObjectType.md)

The 3MF object type of the new object.

#### Returns

`void`

***

### withName()

> **withName**(`name`): `ThreeMfObjectBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:83](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L83)

Sets the human readable name of the object.

#### Parameters

##### name

`string`

The name to assign to the object.

#### Returns

`ThreeMfObjectBuilder`

This builder, to allow chaining.

***

### withProperty()

> **withProperty**(`id`, `index?`): `ThreeMfObjectBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:104](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L104)

Assigns the property resource used by the object.

#### Parameters

##### id

`number`

The resource id of the property group (for example a base materials group).

##### index?

`number` = `0`

The zero based index of the property within the group. Defaults to 0.

#### Returns

`ThreeMfObjectBuilder`

This builder, to allow chaining.

***

### withThumbnail()

> **withThumbnail**(`thumbnail`): `ThreeMfObjectBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:93](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L93)

Sets the thumbnail of the object.

#### Parameters

##### thumbnail

`string`

The package relative path of the thumbnail part.

#### Returns

`ThreeMfObjectBuilder`

This builder, to allow chaining.
