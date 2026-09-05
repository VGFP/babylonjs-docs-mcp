[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / blockFactory

# Function: blockFactory()

> **blockFactory**(`blockName`): () => `Promise`\<*typeof* [`FlowGraphBlock`](../classes/FlowGraphBlock.md)\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/flowGraphBlockFactory.ts:63](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/flowGraphBlockFactory.ts#L63)

a function to get a factory function for a block.

## Parameters

### blockName

`string`

the block name to initialize. If the block comes from an external module, the name should be in the format "module/blockName"

## Returns

an async factory function that will return the block class when called.

() => `Promise`\<*typeof* [`FlowGraphBlock`](../classes/FlowGraphBlock.md)\>
