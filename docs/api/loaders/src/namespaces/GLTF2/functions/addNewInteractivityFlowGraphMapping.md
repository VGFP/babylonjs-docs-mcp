[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / addNewInteractivityFlowGraphMapping

# Function: addNewInteractivityFlowGraphMapping()

> **addNewInteractivityFlowGraphMapping**(`key`, `extension`, `mapping`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/declarationMapper.ts:245](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/declarationMapper.ts#L245)

This function will add new mapping to glTF interactivity.
Other extensions can define new types of blocks, this is the way to let interactivity know how to parse them.

## Parameters

### key

`string`

the type of node, i.e. "variable/get"

### extension

`string`

the extension of the interactivity operation, i.e. "KHR_selectability"

### mapping

[`IGLTFToFlowGraphMapping`](../interfaces/IGLTFToFlowGraphMapping.md)

The mapping object. See documentation or examples below.

## Returns

`void`
