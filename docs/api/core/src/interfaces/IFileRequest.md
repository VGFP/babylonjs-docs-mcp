[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFileRequest

# Interface: IFileRequest

Defined in: [packages/dev/core/src/Misc/fileRequest.ts:6](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/fileRequest.ts#L6)

File request interface

## Properties

### abort

> **abort**: () => `void`

Defined in: [packages/dev/core/src/Misc/fileRequest.ts:15](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/fileRequest.ts#L15)

Aborts the request for a file.

#### Returns

`void`

***

### onCompleteObservable

> **onCompleteObservable**: [`Observable`](../classes/Observable.md)\<`IFileRequest`\>

Defined in: [packages/dev/core/src/Misc/fileRequest.ts:10](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/fileRequest.ts#L10)

Raised when the request is complete (success or error).
