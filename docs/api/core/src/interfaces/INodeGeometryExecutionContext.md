[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / INodeGeometryExecutionContext

# Interface: INodeGeometryExecutionContext

Defined in: [packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:4](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L4)

Interface used to convey context through execution nodes

## Methods

### getExecutionFaceIndex()

> **getExecutionFaceIndex**(): `number`

Defined in: [packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L14)

Gets the current face index in the current flow

#### Returns

`number`

the current face index

***

### getExecutionIndex()

> **getExecutionIndex**(): `number`

Defined in: [packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:9](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L9)

Gets the current vertex index in the current flow

#### Returns

`number`

the current index

***

### getExecutionLoopIndex()

> **getExecutionLoopIndex**(): `number`

Defined in: [packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:19](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L19)

Gets the current loop index in the current flow

#### Returns

`number`

the current loop index

***

### getOverrideNormalsContextualValue()?

> `optional` **getOverrideNormalsContextualValue**(): `any`

Defined in: [packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:31](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L31)

Gets the value associated with a contextual normals

#### Returns

`any`

the value associated with the source

***

### getOverridePositionsContextualValue()?

> `optional` **getOverridePositionsContextualValue**(): `any`

Defined in: [packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:25](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L25)

Gets the value associated with a contextual positions

#### Returns

`any`

the value associated with the source

***

### getOverrideUVs1ContextualValue()?

> `optional` **getOverrideUVs1ContextualValue**(): `any`

Defined in: [packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/Node/Interfaces/nodeGeometryExecutionContext.ts#L37)

Gets the value associated with a contextual UV1 set

#### Returns

`any`

the value associated with the source
