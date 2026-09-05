[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / MarkDelayInactive

# Function: MarkDelayInactive()

> **MarkDelayInactive**(`context`, `index`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphDelayRegistry.ts:43](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphDelayRegistry.ts#L43)

Marks the given delay handle as no longer active. Called when a delay fires, is cancelled via
the `cancel` input, or is cancelled by `flow/cancelDelay`.

## Parameters

### context

[`FlowGraphContext`](../classes/FlowGraphContext.md)

the flow graph context owning the delay.

### index

`number`

the unique delay handle to clear.

## Returns

`void`
