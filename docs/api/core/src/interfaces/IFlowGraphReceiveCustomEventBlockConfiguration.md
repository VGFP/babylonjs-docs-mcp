[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphReceiveCustomEventBlockConfiguration

# Interface: IFlowGraphReceiveCustomEventBlockConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts#L17)

Parameters used to create a FlowGraphReceiveCustomEventBlock.

## Extends

- [`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### eventData

> **eventData**: `object`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts#L27)

The names of the data outputs for that event. Should be in the same order as the event data in
SendCustomEvent

#### Index Signature

\[`key`: `string`\]: `object`

***

### eventId

> **eventId**: `string`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphReceiveCustomEventBlock.pure.ts#L22)

The id of the event to receive.
This event id is unique to the environment (not the context).

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphBlockConfiguration`](IFlowGraphBlockConfiguration.md).[`name`](IFlowGraphBlockConfiguration.md#name)
