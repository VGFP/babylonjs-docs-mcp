[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Observer

# Class: Observer\<T\>

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:86](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L86)

Represent an observer registered to a given Observable object.

## Type Parameters

### T

`T`

## Implements

- [`IObserver`](../interfaces/IObserver.md)

## Constructors

### Constructor

> **new Observer**\<`T`\>(`callback`, `mask`, `scope?`): `Observer`\<`T`\>

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:107](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L107)

Creates a new observer

#### Parameters

##### callback

(`eventData`, `eventState`) => `void`

defines the callback to call when the observer is notified

##### mask

`number`

defines the mask of the observer (used to filter notifications)

##### scope?

`any` = `null`

defines the current scope used to restore the JS context

#### Returns

`Observer`\<`T`\>

## Properties

### callback

> **callback**: (`eventData`, `eventState`) => `void`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:111](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L111)

Defines the callback to call when the observer is notified

#### Parameters

##### eventData

`T`

##### eventState

[`EventState`](EventState.md)

#### Returns

`void`

***

### mask

> **mask**: `number`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:115](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L115)

Defines the mask of the observer (used to filter notifications)

***

### scope

> **scope**: `any` = `null`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:119](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L119)

[null] Defines the current scope used to restore the JS context

***

### unregisterOnNextCall

> **unregisterOnNextCall**: `boolean` = `false`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:92](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L92)

Gets or sets a property defining that the observer as to be unregistered after the next notification

## Methods

### remove()

> **remove**(`defer?`): `void`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:127](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L127)

Remove the observer from its observable
This can be used instead of using the observable's remove function.

#### Parameters

##### defer?

`boolean` = `false`

if true, the removal will be deferred to avoid callback skipping (default: false)

#### Returns

`void`

#### Implementation of

[`IObserver`](../interfaces/IObserver.md).[`remove`](../interfaces/IObserver.md#remove)
