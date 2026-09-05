[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphKeyDownEventBlockConfiguration

# Interface: IFlowGraphKeyDownEventBlockConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyDownEventBlock.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyDownEventBlock.pure.ts#L15)

Configuration for the key down event block.

## Extends

- [`IFlowGraphKeyboardEventBlockConfiguration`](IFlowGraphKeyboardEventBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### ignoreRepeat?

> `optional` **ignoreRepeat?**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyDownEventBlock.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyDownEventBlock.pure.ts#L20)

When true, auto-repeat key-down events (the user holding a key) are
ignored and only the initial press fires the block. Defaults to false.

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphKeyboardEventBlockConfiguration`](IFlowGraphKeyboardEventBlockConfiguration.md).[`name`](IFlowGraphKeyboardEventBlockConfiguration.md#name)

***

### stopPropagation?

> `optional` **stopPropagation?**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts:16](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts#L16)

When true, prevent the event from propagating to other listeners.

#### Inherited from

[`IFlowGraphKeyboardEventBlockConfiguration`](IFlowGraphKeyboardEventBlockConfiguration.md).[`stopPropagation`](IFlowGraphKeyboardEventBlockConfiguration.md#stoppropagation)
