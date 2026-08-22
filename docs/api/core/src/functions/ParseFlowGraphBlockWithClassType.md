[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParseFlowGraphBlockWithClassType

# Function: ParseFlowGraphBlockWithClassType()

> **ParseFlowGraphBlockWithClassType**(`serializationObject`, `parseOptions`, `classType`): [`FlowGraphBlock`](../classes/FlowGraphBlock.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphParser.ts:365](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphParser.ts#L365)

Parses a block from a serialization object

## Parameters

### serializationObject

[`ISerializedFlowGraphBlock`](../interfaces/ISerializedFlowGraphBlock.md)

the object to parse from

### parseOptions

[`IFlowGraphBlockParseOptions`](../interfaces/IFlowGraphBlockParseOptions.md)

options for parsing the block

### classType

*typeof* [`FlowGraphBlock`](../classes/FlowGraphBlock.md)

the class type of the block. This is used when the class is not loaded asynchronously

## Returns

[`FlowGraphBlock`](../classes/FlowGraphBlock.md)

the parsed block
