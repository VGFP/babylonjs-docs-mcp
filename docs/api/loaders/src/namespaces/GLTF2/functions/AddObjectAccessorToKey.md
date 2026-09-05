[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / AddObjectAccessorToKey

# Function: AddObjectAccessorToKey()

> **AddObjectAccessorToKey**\<`GLTFTargetType`, `BabylonTargetType`, `BabylonValueType`\>(`key`, `accessor`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:1779](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L1779)

This will ad a new object accessor in the object model at the given key.
Note that this will NOT change the typescript types. To do that you will need to change the interface itself (extending it in the module that uses it)

## Type Parameters

### GLTFTargetType

`GLTFTargetType` = `any`

### BabylonTargetType

`BabylonTargetType` = `any`

### BabylonValueType

`BabylonValueType` = `any`

## Parameters

### key

`string`

the key to add the object accessor at. For example /cameras/{}/perspective/aspectRatio

### accessor

[`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`GLTFTargetType`, `BabylonTargetType`, `BabylonValueType`\>

the object accessor to add

## Returns

`void`
