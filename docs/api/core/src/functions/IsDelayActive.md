[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IsDelayActive

# Function: IsDelayActive()

> **IsDelayActive**(`context`, `index`): `boolean`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphDelayRegistry.ts:54](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphDelayRegistry.ts#L54)

Returns whether the given delay handle is currently active, i.e. scheduled and not yet fired or
cancelled.

## Parameters

### context

[`FlowGraphContext`](../classes/FlowGraphContext.md)

the flow graph context to query.

### index

`number`

the delay handle to test.

## Returns

`boolean`

true if the delay is currently scheduled and has not yet fired or been cancelled.
