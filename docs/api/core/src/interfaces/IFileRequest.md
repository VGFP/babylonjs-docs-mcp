[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFileRequest

# Interface: IFileRequest

Defined in: [packages/dev/core/src/Misc/fileRequest.ts:6](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileRequest.ts#L6)

File request interface

## Properties

### abort

> **abort**: () => `void`

Defined in: [packages/dev/core/src/Misc/fileRequest.ts:15](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileRequest.ts#L15)

Aborts the request for a file.

#### Returns

`void`

***

### onCompleteObservable

> **onCompleteObservable**: [`Observable`](../classes/Observable.md)\<`IFileRequest`\>

Defined in: [packages/dev/core/src/Misc/fileRequest.ts:10](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/fileRequest.ts#L10)

Raised when the request is complete (success or error).
