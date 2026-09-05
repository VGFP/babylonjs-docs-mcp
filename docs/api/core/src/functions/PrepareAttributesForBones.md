[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareAttributesForBones

# Function: PrepareAttributesForBones()

> **PrepareAttributesForBones**(`attribs`, `mesh`, `defines`, `fallbacks`): `void`

Defined in: [packages/dev/core/src/Materials/materialHelper.functions.ts:596](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/materialHelper.functions.ts#L596)

Prepares the list of attributes required for bones according to the effect defines.

## Parameters

### attribs

`string`[]

The current list of supported attribs

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh to prepare the bones attributes for

### defines

`any`

The current Defines of the effect

### fallbacks

[`EffectFallbacks`](../classes/EffectFallbacks.md)

The current effect fallback strategy

## Returns

`void`
