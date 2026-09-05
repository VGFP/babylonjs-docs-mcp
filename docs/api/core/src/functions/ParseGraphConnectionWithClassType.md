[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ParseGraphConnectionWithClassType

# Function: ParseGraphConnectionWithClassType()

> **ParseGraphConnectionWithClassType**\<`BlockT`\>(`serializationObject?`, `ownerBlock`, `classType`): [`FlowGraphConnection`](../classes/FlowGraphConnection.md)\<`BlockT`, [`IConnectable`](../interfaces/IConnectable.md)\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphParser.ts:424](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphParser.ts#L424)

Parses a connection from an object

## Type Parameters

### BlockT

`BlockT` *extends* [`FlowGraphBlock`](../classes/FlowGraphBlock.md)

## Parameters

### serializationObject?

`any` = `{}`

the object to parse from.

### ownerBlock

`BlockT`

the block that owns the connection.

### classType

*typeof* [`FlowGraphConnection`](../classes/FlowGraphConnection.md)

the class type of the connection.

## Returns

[`FlowGraphConnection`](../classes/FlowGraphConnection.md)\<`BlockT`, [`IConnectable`](../interfaces/IConnectable.md)\>

the parsed connection.
