[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MarkDelayActive

# Function: MarkDelayActive()

> **MarkDelayActive**(`context`, `index`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphDelayRegistry.ts:33](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphDelayRegistry.ts#L33)

Marks the given delay handle as active (scheduled and pending) in the context.
Called by `flow/setDelay` when it schedules a new delayed activation.

## Parameters

### context

[`FlowGraphContext`](../classes/FlowGraphContext.md)

the flow graph context owning the delay.

### index

`number`

the unique delay handle produced by `flow/setDelay`.

## Returns

`void`
