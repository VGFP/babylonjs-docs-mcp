[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareAttributesForMorphTargets

# Function: PrepareAttributesForMorphTargets()

> **PrepareAttributesForMorphTargets**(`attribs`, `mesh`, `defines`, `usePositionMorph?`): `void`

Defined in: [packages/dev/core/src/Materials/materialHelper.functions.ts:185](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/materialHelper.functions.ts#L185)

Prepares the list of attributes required for morph targets according to the effect defines.

## Parameters

### attribs

`string`[]

The current list of supported attribs

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh to prepare the morph targets attributes for

### defines

`any`

The current Defines of the effect

### usePositionMorph?

`boolean` = `true`

Whether the position morph target is used

## Returns

`void`
