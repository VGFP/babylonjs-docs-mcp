[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AsyncLoop

# Class: AsyncLoop

Defined in: [packages/dev/core/src/Misc/tools.pure.ts:1641](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/tools.pure.ts#L1641)

An implementation of a loop for asynchronous functions.

## Constructors

### Constructor

> **new AsyncLoop**(`iterations`, `func`, `successCallback`, `offset?`): `AsyncLoop`

Defined in: [packages/dev/core/src/Misc/tools.pure.ts:1657](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/tools.pure.ts#L1657)

Constructor.

#### Parameters

##### iterations

`number`

the number of iterations.

##### func

(`asyncLoop`) => `void`

the function to run each iteration

##### successCallback

() => `void`

the callback that will be called upon successful execution

##### offset?

`number` = `0`

starting offset.

#### Returns

`AsyncLoop`

## Properties

### index

> **index**: `number`

Defined in: [packages/dev/core/src/Misc/tools.pure.ts:1645](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/tools.pure.ts#L1645)

Defines the current index of the loop.

***

### iterations

> **iterations**: `number`

Defined in: [packages/dev/core/src/Misc/tools.pure.ts:1661](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/tools.pure.ts#L1661)

Defines the number of iterations for the loop

## Methods

### breakLoop()

> **breakLoop**(): `void`

Defined in: [packages/dev/core/src/Misc/tools.pure.ts:1689](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/tools.pure.ts#L1689)

Break the loop and run the success callback.

#### Returns

`void`

***

### executeNext()

> **executeNext**(): `void`

Defined in: [packages/dev/core/src/Misc/tools.pure.ts:1675](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/tools.pure.ts#L1675)

Execute the next iteration. Must be called after the last iteration was finished.

#### Returns

`void`

***

### Run()

> `static` **Run**(`iterations`, `fn`, `successCallback`, `offset?`): `AsyncLoop`

Defined in: [packages/dev/core/src/Misc/tools.pure.ts:1702](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/tools.pure.ts#L1702)

Create and run an async loop.

#### Parameters

##### iterations

`number`

the number of iterations.

##### fn

(`asyncLoop`) => `void`

the function to run each iteration

##### successCallback

() => `void`

the callback that will be called upon successful execution

##### offset?

`number` = `0`

starting offset.

#### Returns

`AsyncLoop`

the created async loop object

***

### SyncAsyncForLoop()

> `static` **SyncAsyncForLoop**(`iterations`, `syncedIterations`, `fn`, `callback`, `breakFunction?`, `timeout?`): `AsyncLoop`

Defined in: [packages/dev/core/src/Misc/tools.pure.ts:1720](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/tools.pure.ts#L1720)

A for-loop that will run a given number of iterations synchronous and the rest async.

#### Parameters

##### iterations

`number`

total number of iterations

##### syncedIterations

`number`

number of synchronous iterations in each async iteration.

##### fn

(`iteration`) => `void`

the function to call each iteration.

##### callback

() => `void`

a success call back that will be called when iterating stops.

##### breakFunction?

() => `boolean`

a break condition (optional)

##### timeout?

`number` = `0`

timeout settings for the setTimeout function. default - 0.

#### Returns

`AsyncLoop`

the created async loop object
