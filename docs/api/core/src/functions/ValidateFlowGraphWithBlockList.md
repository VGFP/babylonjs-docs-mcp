[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ValidateFlowGraphWithBlockList

# Function: ValidateFlowGraphWithBlockList()

> **ValidateFlowGraphWithBlockList**(`flowGraph`, `allKnownBlocks`): [`IFlowGraphValidationResult`](../interfaces/IFlowGraphValidationResult.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:224](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L224)

Extended validation that also checks for unreachable blocks.
Requires a full list of all blocks in the graph (including those not reachable
from event blocks via the normal traversal).

## Parameters

### flowGraph

[`FlowGraph`](../classes/FlowGraph.md)

The flow graph to validate.

### allKnownBlocks

[`FlowGraphBlock`](../classes/FlowGraphBlock.md)[]

Complete list of all blocks (e.g., from the editor's node set).

## Returns

[`IFlowGraphValidationResult`](../interfaces/IFlowGraphValidationResult.md)

The validation result.
