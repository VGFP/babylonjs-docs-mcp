[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParseFlowGraphAsync

# Function: ParseFlowGraphAsync()

> **ParseFlowGraphAsync**(`serializationObject`, `options`): `Promise`\<[`FlowGraph`](../classes/FlowGraph.md)\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphParser.ts:158](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphParser.ts#L158)

Parses a graph from a given serialization object

## Parameters

### serializationObject

[`ISerializedFlowGraph`](../interfaces/ISerializedFlowGraph.md)

the object where the values are written

### options

[`IFlowGraphParseOptions`](../interfaces/IFlowGraphParseOptions.md)

options for parsing the graph

## Returns

`Promise`\<[`FlowGraph`](../classes/FlowGraph.md)\>

the parsed graph
