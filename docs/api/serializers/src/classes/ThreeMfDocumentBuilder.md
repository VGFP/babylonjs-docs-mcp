[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfDocumentBuilder

# Class: ThreeMfDocumentBuilder

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:471](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L471)

Fluent builder for a 3MF document, the OPC package that wraps the model.
It gathers the content types, the relationships and the model part.

## Constructors

### Constructor

> **new ThreeMfDocumentBuilder**(): `ThreeMfDocumentBuilder`

#### Returns

`ThreeMfDocumentBuilder`

## Methods

### build()

> **build**(): [`I3mfDocument`](../interfaces/I3mfDocument.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:532](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L532)

Validates and returns the document that has been built.
A default relationship pointing at the model part is generated when none was provided.

#### Returns

[`I3mfDocument`](../interfaces/I3mfDocument.md)

The built 3MF document.

#### Throws

When no model has been set.

***

### withContentType()

> **withContentType**(`type`): `ThreeMfDocumentBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:481](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L481)

Declares an OPC content type. Duplicate declarations are ignored.

#### Parameters

##### type

[`I3mfContentType`](../interfaces/I3mfContentType.md)

The extension to content type mapping to declare.

#### Returns

`ThreeMfDocumentBuilder`

This builder, to allow chaining.

***

### withModel()

> **withModel**(`m`): `ThreeMfDocumentBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:516](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L516)

Sets the model part of the document and ensures the model content type is declared.

#### Parameters

##### m

[`I3mfModel`](../interfaces/I3mfModel.md) \| [`ThreeMfModelBuilder`](ThreeMfModelBuilder.md)

The model resource, or a builder that produces one.

#### Returns

`ThreeMfDocumentBuilder`

This builder, to allow chaining.

***

### withRelationship()

> **withRelationship**(`rel`): `ThreeMfDocumentBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:498](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L498)

Adds an OPC relationship and ensures the relationships content type is declared.
Relationships with an already registered id are ignored.

#### Parameters

##### rel

[`I3mfRelationship`](../interfaces/I3mfRelationship.md)

The relationship to add.

#### Returns

`ThreeMfDocumentBuilder`

This builder, to allow chaining.
