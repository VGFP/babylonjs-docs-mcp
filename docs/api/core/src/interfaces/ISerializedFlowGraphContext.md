[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISerializedFlowGraphContext

# Interface: ISerializedFlowGraphContext

Defined in: [packages/dev/core/src/FlowGraph/typeDefinitions.ts:74](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L74)

A Serialized Flow Graph Context

## Properties

### \_assetsContext?

> `optional` **\_assetsContext?**: `object`

Defined in: [packages/dev/core/src/FlowGraph/typeDefinitions.ts:100](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L100)

Assets context, if not the scene

#### Index Signature

\[`key`: `string`\]: `any`

***

### \_connectionValues

> **\_connectionValues**: `object`

Defined in: [packages/dev/core/src/FlowGraph/typeDefinitions.ts:95](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L95)

Values of the connection points

#### Index Signature

\[`key`: `string`\]: `any`

***

### \_userVariables

> **\_userVariables**: `object`

Defined in: [packages/dev/core/src/FlowGraph/typeDefinitions.ts:86](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L86)

User variables

#### Index Signature

\[`key`: `string`\]: `any`

***

### \_variableTypes?

> `optional` **\_variableTypes?**: `object`

Defined in: [packages/dev/core/src/FlowGraph/typeDefinitions.ts:91](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L91)

Optional type annotations for user variables.
Keys are variable names; values are type name strings.

#### Index Signature

\[`key`: `string`\]: `string`

***

### enableLogging?

> `optional` **enableLogging?**: `boolean`

Defined in: [packages/dev/core/src/FlowGraph/typeDefinitions.ts:105](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L105)

Should logging be enabled?

***

### name?

> `optional` **name?**: `string`

Defined in: [packages/dev/core/src/FlowGraph/typeDefinitions.ts:82](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L82)

An optional user-facing name for the context

***

### uniqueId

> **uniqueId**: `string`

Defined in: [packages/dev/core/src/FlowGraph/typeDefinitions.ts:78](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/typeDefinitions.ts#L78)

The unique id of the context
