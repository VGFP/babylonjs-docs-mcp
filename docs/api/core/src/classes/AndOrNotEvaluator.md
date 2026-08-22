[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AndOrNotEvaluator

# Class: AndOrNotEvaluator

Defined in: [packages/dev/core/src/Misc/andOrNotEvaluator.ts:4](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/andOrNotEvaluator.ts#L4)

Class used to evaluate queries containing `and` and `or` operators

## Constructors

### Constructor

> **new AndOrNotEvaluator**(): `AndOrNotEvaluator`

#### Returns

`AndOrNotEvaluator`

## Methods

### Eval()

> `static` **Eval**(`query`, `evaluateCallback`): `boolean`

Defined in: [packages/dev/core/src/Misc/andOrNotEvaluator.ts:11](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/andOrNotEvaluator.ts#L11)

Evaluate a query

#### Parameters

##### query

`string`

defines the query to evaluate

##### evaluateCallback

(`val`) => `boolean`

defines the callback used to filter result

#### Returns

`boolean`

true if the query matches
