[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AddSmartAssetManagerCreatedObserver

# Function: AddSmartAssetManagerCreatedObserver()

> **AddSmartAssetManagerCreatedObserver**(`callback`): [`Observer`](../classes/Observer.md)\<[`SmartAssetManager`](../type-aliases/SmartAssetManager.md)\>

Defined in: [packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:158](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L158)

Adds an observer that is notified whenever a SmartAssetManager is created.

## Parameters

### callback

(`manager`) => `void`

The callback to invoke with each newly created manager.

## Returns

[`Observer`](../classes/Observer.md)\<[`SmartAssetManager`](../type-aliases/SmartAssetManager.md)\>

The observer registration.
