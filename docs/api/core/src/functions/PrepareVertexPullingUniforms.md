[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareVertexPullingUniforms

# Function: PrepareVertexPullingUniforms()

> **PrepareVertexPullingUniforms**(`geometry`): [`Nullable`](../type-aliases/Nullable.md)\<`Map`\<`string`, [`IVertexPullingMetadata`](../interfaces/IVertexPullingMetadata.md)\>\>

Defined in: [packages/dev/core/src/Materials/vertexPullingHelper.functions.ts:38](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/vertexPullingHelper.functions.ts#L38)

Prepares vertex pulling uniforms for the given attributes and mesh

## Parameters

### geometry

[`Geometry`](../classes/Geometry.md)

The geometry containing the vertex buffers

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Map`\<`string`, [`IVertexPullingMetadata`](../interfaces/IVertexPullingMetadata.md)\>\>

A map of attribute names to their metadata, or null if unavailable
