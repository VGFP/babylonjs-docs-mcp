[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfMeshBuilder

# Class: ThreeMfMeshBuilder

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:159](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L159)

Fluent builder for a 3MF object holding a mesh.
Vertices and triangles are generated from Babylon vertex data and can be post processed through handlers.

## Extends

- [`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md)

## Constructors

### Constructor

> **new ThreeMfMeshBuilder**(`id`): `ThreeMfMeshBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:173](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L173)

Creates a new mesh object builder.

#### Parameters

##### id

`number`

The unique resource id of the object within the model.

#### Returns

`ThreeMfMeshBuilder`

#### Overrides

[`ThreeMfObjectBuilder`](ThreeMfObjectBuilder.md).[`constructor`](ThreeMfObjectBuilder.md#constructor)

## Properties

### \_th?

> `optional` **\_th?**: [`TriangleHandler`](../type-aliases/TriangleHandler.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:167](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L167)

Optional handler invoked for every triangle before it is added to the mesh.

***

### \_vh?

> `optional` **\_vh?**: [`VertexHandler`](../type-aliases/VertexHandler.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:163](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L163)

Optional handler invoked for every vertex before it is added to the mesh.

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

### withData()

> **withData**(`data`): `ThreeMfMeshBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:194](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L194)

Builds the mesh content of the object from the provided vertex data.

#### Parameters

##### data

[`I3mfVertexData`](../interfaces/I3mfVertexData.md)

The positions and indices used to generate the mesh.

#### Returns

`ThreeMfMeshBuilder`

This builder, to allow chaining.

***

### withMaterial()

> **withMaterial**(`id`, `i`): `ThreeMfMeshBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:205](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L205)

Assigns the material used by the mesh.

#### Parameters

##### id

`number`

The resource id of the base materials group.

##### i

`number`

The zero based index of the material within the group.

#### Returns

`ThreeMfMeshBuilder`

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

### withPostProcessHandlers()

> **withPostProcessHandlers**(`vertex`, `triangle?`): `ThreeMfMeshBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:183](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L183)

Registers the handlers used to post process the generated geometry.

#### Parameters

##### vertex

[`VertexHandler`](../type-aliases/VertexHandler.md)

The handler invoked for every generated vertex.

##### triangle?

[`TriangleHandler`](../type-aliases/TriangleHandler.md)

The optional handler invoked for every generated triangle.

#### Returns

`ThreeMfMeshBuilder`

This builder, to allow chaining.

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
