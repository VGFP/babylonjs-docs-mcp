[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphValidationIssue

# Interface: IFlowGraphValidationIssue

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:22](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L22)

A single validation issue found in the flow graph.

## Properties

### block?

> `optional` **block?**: [`FlowGraphBlock`](../classes/FlowGraphBlock.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:28](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L28)

The block where the issue was found (if applicable).

***

### connectionName?

> `optional` **connectionName?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:30](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L30)

The connection name involved (if applicable).

***

### message

> **message**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:26](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L26)

Human-readable description of the issue.

***

### severity

> **severity**: [`FlowGraphValidationSeverity`](../enumerations/FlowGraphValidationSeverity.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:24](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L24)

The severity level.
