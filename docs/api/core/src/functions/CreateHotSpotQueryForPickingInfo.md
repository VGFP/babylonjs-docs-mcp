[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateHotSpotQueryForPickingInfo

# Function: CreateHotSpotQueryForPickingInfo()

> **CreateHotSpotQueryForPickingInfo**(`pickingInfo`): [`HotSpotQuery`](../type-aliases/HotSpotQuery.md)

Defined in: [packages/dev/core/src/Meshes/abstractMesh.hotSpot.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/abstractMesh.hotSpot.ts#L27)

Create a HotSpotQuery from a picking info

## Parameters

### pickingInfo

[`PickingInfo`](../classes/PickingInfo.md)

picking info to use

## Returns

[`HotSpotQuery`](../type-aliases/HotSpotQuery.md)

the created HotSpotQuery

## Remarks

If there is no pickedMesh or the pickedMesh has no indices, the faceId is used as the base index
