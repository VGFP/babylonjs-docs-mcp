[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphKeyDownEventBlockConfiguration

# Interface: IFlowGraphKeyDownEventBlockConfiguration

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyDownEventBlock.ts:13](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyDownEventBlock.ts#L13)

Configuration for the key down event block.

## Extends

- [`IFlowGraphKeyboardEventBlockConfiguration`](IFlowGraphKeyboardEventBlockConfiguration.md)

## Indexable

> \[`extraPropertyKey`: `string`\]: `any`

## Properties

### ignoreRepeat?

> `optional` **ignoreRepeat?**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyDownEventBlock.ts:18](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyDownEventBlock.ts#L18)

When true, auto-repeat key-down events (the user holding a key) are
ignored and only the initial press fires the block. Defaults to false.

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:47](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L47)

The name of the block.

#### Inherited from

[`IFlowGraphKeyboardEventBlockConfiguration`](IFlowGraphKeyboardEventBlockConfiguration.md).[`name`](IFlowGraphKeyboardEventBlockConfiguration.md#name)

***

### stopPropagation?

> `optional` **stopPropagation?**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts:16](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Event/flowGraphKeyboardEventBlock.ts#L16)

When true, prevent the event from propagating to other listeners.

#### Inherited from

[`IFlowGraphKeyboardEventBlockConfiguration`](IFlowGraphKeyboardEventBlockConfiguration.md).[`stopPropagation`](IFlowGraphKeyboardEventBlockConfiguration.md#stoppropagation)
