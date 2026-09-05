[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EventState

# Class: EventState

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L12)

A class serves as a medium between the observable and its observers

## Constructors

### Constructor

> **new EventState**(`mask`, `skipNextObservers?`, `target?`, `currentTarget?`): `EventState`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L20)

Create a new EventState

#### Parameters

##### mask

`number`

defines the mask associated with this state

##### skipNextObservers?

`boolean` = `false`

defines a flag which will instruct the observable to skip following observers when set to true

##### target?

`any`

defines the original target of the state

##### currentTarget?

`any`

defines the current target of the state

#### Returns

`EventState`

## Properties

### currentTarget?

> `optional` **currentTarget?**: `any`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L58)

The current object in the bubbling phase

***

### lastReturnValue?

> `optional` **lastReturnValue?**: `any`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L64)

This will be populated with the return value of the last function that was executed.
If it is the first function in the callback chain it will be the event data.

***

### mask

> **mask**: `number`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L48)

Get the mask value that were used to trigger the event corresponding to this EventState object

***

### skipNextObservers

> **skipNextObservers**: `boolean`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L43)

An Observer can set this property to true to prevent subsequent observers of being notified

***

### target?

> `optional` **target?**: `any`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L53)

The object that originally notified the event

***

### userInfo?

> `optional` **userInfo?**: `any`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L69)

User defined information that will be sent to observers

## Methods

### initialize()

> **initialize**(`mask`, `skipNextObservers?`, `target?`, `currentTarget?`): `EventState`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:32](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L32)

Initialize the current event state

#### Parameters

##### mask

`number`

defines the mask associated with this state

##### skipNextObservers?

`boolean` = `false`

defines a flag which will instruct the observable to skip following observers when set to true

##### target?

`any`

defines the original target of the state

##### currentTarget?

`any`

defines the current target of the state

#### Returns

`EventState`

the current event state
