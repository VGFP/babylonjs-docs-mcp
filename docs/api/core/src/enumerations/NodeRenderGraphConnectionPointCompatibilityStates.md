[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraphConnectionPointCompatibilityStates

# Enumeration: NodeRenderGraphConnectionPointCompatibilityStates

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:130](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L130)

Enum used to define the compatibility state between two connection points

## Enumeration Members

### Compatible

> **Compatible**: `0`

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:132](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L132)

Points are compatibles

***

### HierarchyIssue

> **HierarchyIssue**: `2`

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:136](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L136)

Points are incompatible because they are in the same hierarchy *

***

### TypeIncompatible

> **TypeIncompatible**: `1`

Defined in: [packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts:134](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/Node/Types/nodeRenderGraphTypes.ts#L134)

Points are incompatible because of their types
