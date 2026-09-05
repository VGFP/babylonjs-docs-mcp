[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfComponentsBuilder

# Class: ThreeMfComponentsBuilder

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:132](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L132)

Fluent builder for a 3MF object made of components.
A components object references other objects instead of defining its own geometry.

## Extends

- [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

## Constructors

### Constructor

> **new ThreeMfComponentsBuilder**(`id`, `type?`): `ThreeMfComponentsBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:138](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L138)

Creates a new components object builder.

#### Parameters

##### id

`number`

The unique resource id of the object within the model.

##### type?

[`ST_ObjectType`](../enumerations/ST_ObjectType.md) = `ST_ObjectType.model`

The 3MF object type. Defaults to `ST_ObjectType.model`.

#### Returns

`ThreeMfComponentsBuilder`

#### Overrides

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`constructor`](ThreeMfObjectBuilder.md#constructor)

## Methods

### build()

> **build**(): [`I3mfObject`](../interfaces/I3mfObject.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:114](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L114)

Returns the object that has been built.

#### Returns

[`I3mfObject`](../interfaces/I3mfObject.md)

The built 3MF object resource.

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`build`](ThreeMfObjectBuilder.md#build)

***

### reset()

> **reset**(`id`, `type`): `void`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:123](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L123)

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

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`reset`](ThreeMfObjectBuilder.md#reset)

***

### withComponent()

> **withComponent**(`id`, `t?`): `ThreeMfComponentsBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:149](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L149)

Adds a component referencing another object resource.

#### Parameters

##### id

`number`

The resource id of the referenced object.

##### t?

[`Matrix3d`](Matrix3d.md)

The optional transform applied to the referenced object.

#### Returns

`ThreeMfComponentsBuilder`

This builder, to allow chaining.

***

### withName()

> **withName**(`name`): [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:83](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L83)

Sets the human readable name of the object.

#### Parameters

##### name

`string`

The name to assign to the object.

#### Returns

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

This builder, to allow chaining.

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`withName`](ThreeMfObjectBuilder.md#withname)

***

### withProperty()

> **withProperty**(`id`, `index?`): [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:104](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L104)

Assigns the property resource used by the object.

#### Parameters

##### id

`number`

The resource id of the property group (for example a base materials group).

##### index?

`number` = `0`

The zero based index of the property within the group. Defaults to 0.

#### Returns

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

This builder, to allow chaining.

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`withProperty`](ThreeMfObjectBuilder.md#withproperty)

***

### withThumbnail()

> **withThumbnail**(`thumbnail`): [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:93](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L93)

Sets the thumbnail of the object.

#### Parameters

##### thumbnail

`string`

The package relative path of the thumbnail part.

#### Returns

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

This builder, to allow chaining.

#### Inherited from

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`withThumbnail`](ThreeMfObjectBuilder.md#withthumbnail)
