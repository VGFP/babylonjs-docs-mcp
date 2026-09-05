[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IAssetsProgressEvent

# Interface: IAssetsProgressEvent

Defined in: [packages/dev/core/src/Misc/assetsManager.ts:179](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/assetsManager.ts#L179)

Define the interface used by progress events raised during assets loading

## Properties

### remainingCount

> **remainingCount**: `number`

Defined in: [packages/dev/core/src/Misc/assetsManager.ts:183](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/assetsManager.ts#L183)

Defines the number of remaining tasks to process

***

### task

> **task**: [`AbstractAssetTask`](../classes/AbstractAssetTask.md)

Defined in: [packages/dev/core/src/Misc/assetsManager.ts:191](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/assetsManager.ts#L191)

Defines the task that was just processed

***

### totalCount

> **totalCount**: `number`

Defined in: [packages/dev/core/src/Misc/assetsManager.ts:187](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/assetsManager.ts#L187)

Defines the total number of tasks
