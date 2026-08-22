[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphValidationResult

# Interface: IFlowGraphValidationResult

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L36)

The result of validating a flow graph.

## Properties

### errorCount

> **errorCount**: `number`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:42](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L42)

Convenience: number of error-level issues.

***

### issues

> **issues**: [`IFlowGraphValidationIssue`](IFlowGraphValidationIssue.md)[]

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L40)

All issues found, ordered by severity (errors first).

***

### issuesByBlock

> **issuesByBlock**: `Map`\<`string`, [`IFlowGraphValidationIssue`](IFlowGraphValidationIssue.md)[]\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:46](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L46)

Map from block uniqueId to the issues affecting that block.

***

### isValid

> **isValid**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:38](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L38)

Whether the graph passed validation with no errors.

***

### warningCount

> **warningCount**: `number`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphValidator.ts:44](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphValidator.ts#L44)

Convenience: number of warning-level issues.
