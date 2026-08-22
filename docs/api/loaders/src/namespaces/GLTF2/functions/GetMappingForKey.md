[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / GetMappingForKey

# Function: GetMappingForKey()

> **GetMappingForKey**(`key`): [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\> \| `undefined`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:1733](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L1733)

This function will return the object accessor for the given key in the object model
If the key is not found, it will return undefined

## Parameters

### key

`string`

the key to get the mapping for, for example /materials/{}/emissiveFactor

## Returns

[`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\> \| `undefined`

an object accessor for the given key, or undefined if the key is not found
