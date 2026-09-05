[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IObserver

# Interface: IObserver

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L75)

Represent an observer registered to a given IObservable object.

## Methods

### remove()

> **remove**(`defer?`): `void`

Defined in: [packages/dev/core/src/Misc/observable.pure.ts:80](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/observable.pure.ts#L80)

Remove the observer from its observable

#### Parameters

##### defer?

`boolean`

if true, the removal will be deferred to avoid callback skipping (default: false)

#### Returns

`void`
