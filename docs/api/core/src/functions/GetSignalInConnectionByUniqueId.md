[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetSignalInConnectionByUniqueId

# Function: GetSignalInConnectionByUniqueId()

> **GetSignalInConnectionByUniqueId**(`blocks`, `uniqueId`): [`FlowGraphSignalConnection`](../classes/FlowGraphSignalConnection.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphParser.ts:72](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphParser.ts#L72)

Given a list of blocks, find an input signal connection that has a specific unique id

## Parameters

### blocks

[`FlowGraphBlock`](../classes/FlowGraphBlock.md)[]

a list of flow graph blocks

### uniqueId

`string`

the unique id of a connection

## Returns

[`FlowGraphSignalConnection`](../classes/FlowGraphSignalConnection.md)

the connection that has this unique id. throws an error if none was found
