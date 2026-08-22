[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfVertices

# Interface: I3mfVertices

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:169](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L169)

Container for vertices.
Matches the XML structure <vertices>\<vertex .../\>...</vertices>.

## Properties

### vertex

> **vertex**: [`I3mfVertex`](I3mfVertex.md)[]

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:171](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L171)

Array of vertices. Order matters because triangles reference indices.
