[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ThreeMfMaterialBuilder

# Class: ThreeMfMaterialBuilder

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:273](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L273)

Fluent builder for a 3MF base materials resource.
Colors are stored as sRGB hexadecimal strings as required by the 3MF specification.

## Constructors

### Constructor

> **new ThreeMfMaterialBuilder**(`id`): `ThreeMfMaterialBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:280](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L280)

Creates a new base materials builder.

#### Parameters

##### id

`number`

The unique resource id of the base materials group within the model.

#### Returns

`ThreeMfMaterialBuilder`

## Methods

### build()

> **build**(): [`I3mfBaseMaterials`](../interfaces/I3mfBaseMaterials.md)

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:306](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L306)

Returns the base materials group that has been built.

#### Returns

[`I3mfBaseMaterials`](../interfaces/I3mfBaseMaterials.md)

The built base materials resource.

***

### withColor()

> **withColor**(`name`, `color`): `ThreeMfMaterialBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.builder.ts:290](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.builder.ts#L290)

Adds a named color to the group, or updates it when the name already exists.

#### Parameters

##### name

`string`

The name of the material. The lookup is case insensitive.

##### color

[`I3mfRGBAColor`](../interfaces/I3mfRGBAColor.md)

The linear RGBA color, converted to an sRGB hexadecimal string.

#### Returns

`ThreeMfMaterialBuilder`

This builder, to allow chaining.
