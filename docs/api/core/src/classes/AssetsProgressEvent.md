[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AssetsProgressEvent

# Class: AssetsProgressEvent

Defined in: [packages/dev/core/src/Misc/assetsManager.ts:197](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/assetsManager.ts#L197)

Class used to share progress information about assets loading

## Implements

- [`IAssetsProgressEvent`](../interfaces/IAssetsProgressEvent.md)

## Constructors

### Constructor

> **new AssetsProgressEvent**(`remainingCount`, `totalCount`, `task`): `AssetsProgressEvent`

Defined in: [packages/dev/core/src/Misc/assetsManager.ts:217](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/assetsManager.ts#L217)

Creates a AssetsProgressEvent

#### Parameters

##### remainingCount

`number`

defines the number of remaining tasks to process

##### totalCount

`number`

defines the total number of tasks

##### task

[`AbstractAssetTask`](AbstractAssetTask.md)

defines the task that was just processed

#### Returns

`AssetsProgressEvent`

## Properties

### remainingCount

> **remainingCount**: `number`

Defined in: [packages/dev/core/src/Misc/assetsManager.ts:201](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/assetsManager.ts#L201)

Defines the number of remaining tasks to process

#### Implementation of

[`IAssetsProgressEvent`](../interfaces/IAssetsProgressEvent.md).[`remainingCount`](../interfaces/IAssetsProgressEvent.md#remainingcount)

***

### task

> **task**: [`AbstractAssetTask`](AbstractAssetTask.md)

Defined in: [packages/dev/core/src/Misc/assetsManager.ts:209](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/assetsManager.ts#L209)

Defines the task that was just processed

#### Implementation of

[`IAssetsProgressEvent`](../interfaces/IAssetsProgressEvent.md).[`task`](../interfaces/IAssetsProgressEvent.md#task)

***

### totalCount

> **totalCount**: `number`

Defined in: [packages/dev/core/src/Misc/assetsManager.ts:205](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/assetsManager.ts#L205)

Defines the total number of tasks

#### Implementation of

[`IAssetsProgressEvent`](../interfaces/IAssetsProgressEvent.md).[`totalCount`](../interfaces/IAssetsProgressEvent.md#totalcount)
