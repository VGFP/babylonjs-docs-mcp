[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParseFlowGraphCoordinatorFromSnippetAsync

# Function: ParseFlowGraphCoordinatorFromSnippetAsync()

> **ParseFlowGraphCoordinatorFromSnippetAsync**(`snippetId`, `options`): `Promise`\<[`FlowGraphCoordinator`](../classes/FlowGraphCoordinator.md)\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphParser.ts:113](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphParser.ts#L113)

Parses a flow graph coordinator from a snippet saved by the Flow Graph Editor.

## Parameters

### snippetId

`string`

the snippet id to load. Versioned ids such as "ABC123#4" are supported.

### options

[`IFlowGraphCoordinatorParseOptions`](../interfaces/IFlowGraphCoordinatorParseOptions.md)

options for parsing the coordinator.

## Returns

`Promise`\<[`FlowGraphCoordinator`](../classes/FlowGraphCoordinator.md)\>

the parsed flow graph coordinator.
