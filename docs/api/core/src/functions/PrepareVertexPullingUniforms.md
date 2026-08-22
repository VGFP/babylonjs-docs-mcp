[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareVertexPullingUniforms

# Function: PrepareVertexPullingUniforms()

> **PrepareVertexPullingUniforms**(`geometry`): [`Nullable`](../type-aliases/Nullable.md)\<`Map`\<`string`, [`IVertexPullingMetadata`](../interfaces/IVertexPullingMetadata.md)\>\>

Defined in: [packages/dev/core/src/Materials/vertexPullingHelper.functions.ts:38](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/vertexPullingHelper.functions.ts#L38)

Prepares vertex pulling uniforms for the given attributes and mesh

## Parameters

### geometry

[`Geometry`](../classes/Geometry.md)

The geometry containing the vertex buffers

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Map`\<`string`, [`IVertexPullingMetadata`](../interfaces/IVertexPullingMetadata.md)\>\>

A map of attribute names to their metadata, or null if unavailable
