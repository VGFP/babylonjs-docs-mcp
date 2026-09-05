[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / KHR\_node\_selectability

# Class: KHR\_node\_selectability

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_node\_selectability.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_node_selectability.pure.ts#L19)

Loader extension for KHR_selectability

## Implements

- [`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md)

## Properties

### enabled

> **enabled**: `boolean`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_node\_selectability.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_node_selectability.pure.ts#L27)

Defines whether this extension is enabled.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`enabled`](../interfaces/IGLTFLoaderExtension.md#enabled)

***

### name

> `readonly` **name**: `"KHR_node_selectability"` = `NAME`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_node\_selectability.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_node_selectability.pure.ts#L23)

The name of this extension.

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`name`](../interfaces/IGLTFLoaderExtension.md#name)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_node\_selectability.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_node_selectability.pure.ts#L50)

Releases all held resources

#### Returns

`void`

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`dispose`](../interfaces/IGLTFLoaderExtension.md#dispose)

***

### onReady()

> **onReady**(): `Promise`\<`void`\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_node\_selectability.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_node_selectability.pure.ts#L40)

Called after the loader state changes to READY.

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`IGLTFLoaderExtension`](../interfaces/IGLTFLoaderExtension.md).[`onReady`](../interfaces/IGLTFLoaderExtension.md#onready)
