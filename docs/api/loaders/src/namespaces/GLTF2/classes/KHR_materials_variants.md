[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / KHR\_materials\_variants

# Class: KHR\_materials\_variants

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.pure.ts#L43)

[Specification](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_variants/README.md)

## Implements

- [`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.pure.ts#L52)

Defines whether this extension is enabled.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`enabled`](../interfaces/IGLTFLoaderExtension.md#enabled)

***

### name

> `readonly` **name**: `"KHR_materials_variants"` = `NAME`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.pure.ts#L47)

The name of this extension.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`name`](../interfaces/IGLTFLoaderExtension.md#name)

## Methods

### getAvailableVariants()

> **getAvailableVariants**(`rootNode`): `string`[]

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.pure.ts:90](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.pure.ts#L90)

Gets the list of available variant names for this asset.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

`string`[]

the list of all the variant names for this model

***

### getLastSelectedVariant()

> **getLastSelectedVariant**(`rootNode`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string` \| `string`[]\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.pure.ts:178](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.pure.ts#L178)

Gets the last selected variant name(s) or null if original.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string` \| `string`[]\>

The selected variant name(s).

***

### reset()

> **reset**(`rootNode`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.pure.ts:155](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.pure.ts#L155)

Reset back to the original before selecting a variant.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

`void`

***

### selectVariant()

> **selectVariant**(`rootNode`, `variantName`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.pure.ts:130](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.pure.ts#L130)

Select a variant given a variant name or a list of variant names.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

##### variantName

`string` \| `string`[]

The variant name(s) to select.

#### Returns

`void`

***

### GetAvailableVariants()

> `static` **GetAvailableVariants**(`rootNode`): `string`[]

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.pure.ts#L76)

Gets the list of available variant names for this asset.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

`string`[]

the list of all the variant names for this model

***

### GetLastSelectedVariant()

> `static` **GetLastSelectedVariant**(`rootNode`): [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string` \| `string`[]\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.pure.ts#L164)

Gets the last selected variant name(s) or null if original.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

[`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`string` \| `string`[]\>

The selected variant name(s).

***

### Reset()

> `static` **Reset**(`rootNode`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.pure.ts#L138)

Reset back to the original before selecting a variant.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

#### Returns

`void`

***

### SelectVariant()

> `static` **SelectVariant**(`rootNode`, `variantName`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_materials\_variants.pure.ts:99](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_materials_variants.pure.ts#L99)

Select a variant given a variant name or a list of variant names.

#### Parameters

##### rootNode

[`TransformNode`](../../../../../core/src/classes/TransformNode.md)

The glTF root node

##### variantName

`string` \| `string`[]

The variant name(s) to select.

#### Returns

`void`
