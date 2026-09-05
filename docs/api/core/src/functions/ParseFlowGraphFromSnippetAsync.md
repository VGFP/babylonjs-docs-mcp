[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParseFlowGraphFromSnippetAsync

# Function: ParseFlowGraphFromSnippetAsync()

> **ParseFlowGraphFromSnippetAsync**(`snippetId`, `options`): `Promise`\<[`FlowGraph`](../classes/FlowGraph.md)\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphParser.ts:133](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphParser.ts#L133)

Parses a flow graph from a snippet saved by the Flow Graph Editor.
If the snippet contains multiple graphs, all graphs are parsed into the provided coordinator and the active graph is returned.

## Parameters

### snippetId

`string`

the snippet id to load. Versioned ids such as "ABC123#4" are supported.

### options

[`IFlowGraphParseOptions`](../interfaces/IFlowGraphParseOptions.md)

options for parsing the graph.

## Returns

`Promise`\<[`FlowGraph`](../classes/FlowGraph.md)\>

the parsed flow graph.
