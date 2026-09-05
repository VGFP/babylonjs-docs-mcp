[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IOfflineProvider

# Interface: IOfflineProvider

Defined in: [packages/dev/core/src/Offline/IOfflineProvider.ts:5](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Offline/IOfflineProvider.ts#L5)

Class used to enable access to offline support

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/optimizeCached

## Properties

### enableSceneOffline

> **enableSceneOffline**: `boolean`

Defined in: [packages/dev/core/src/Offline/IOfflineProvider.ts:9](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Offline/IOfflineProvider.ts#L9)

Gets a boolean indicating if scene must be saved in the database

***

### enableTexturesOffline

> **enableTexturesOffline**: `boolean`

Defined in: [packages/dev/core/src/Offline/IOfflineProvider.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Offline/IOfflineProvider.ts#L14)

Gets a boolean indicating if textures must be saved in the database

## Methods

### loadFile()

> **loadFile**(`url`, `sceneLoaded`, `progressCallBack?`, `errorCallback?`, `useArrayBuffer?`): `void`

Defined in: [packages/dev/core/src/Offline/IOfflineProvider.ts:38](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Offline/IOfflineProvider.ts#L38)

Loads a file from offline support

#### Parameters

##### url

`string`

defines the URL to load from

##### sceneLoaded

(`data`) => `void`

defines a callback to call on success

##### progressCallBack?

(`data`) => `void`

defines a callback to call when progress changed

##### errorCallback?

() => `void`

defines a callback to call on error

##### useArrayBuffer?

`boolean`

defines a boolean to use array buffer instead of text string

#### Returns

`void`

***

### loadImage()

> **loadImage**(`url`, `image`): `void`

Defined in: [packages/dev/core/src/Offline/IOfflineProvider.ts:28](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Offline/IOfflineProvider.ts#L28)

Loads an image from the offline support

#### Parameters

##### url

`string`

defines the url to load from

##### image

`HTMLImageElement`

defines the target DOM image

#### Returns

`void`

***

### open()

> **open**(`successCallback`, `errorCallback`): `void`

Defined in: [packages/dev/core/src/Offline/IOfflineProvider.ts:21](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Offline/IOfflineProvider.ts#L21)

Open the offline support and make it available

#### Parameters

##### successCallback

() => `void`

defines the callback to call on success

##### errorCallback

() => `void`

defines the callback to call on error

#### Returns

`void`
