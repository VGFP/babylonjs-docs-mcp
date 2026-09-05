[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRVertexData

# Interface: IWebXRVertexData

Defined in: [packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:50](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L50)

A babylon interface for a XR mesh's vertex data.

## Properties

### id

> **id**: `number`

Defined in: [packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L54)

A babylon-assigned ID for this mesh

***

### indices?

> `optional` **indices?**: `Uint32Array`\<`ArrayBufferLike`\>

Defined in: [packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L78)

An array of indices in babylon space. Indices have a counterclockwise winding order.
Indices will only be populated if convertCoordinateSystems is set to true in the IWebXRMeshDetectorOptions.

***

### mesh?

> `optional` **mesh?**: [`Mesh`](../classes/Mesh.md)

Defined in: [packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L96)

If generateMeshes is set to true in the IWebXRMeshDetectorOptions, this will be the generated mesh.
This mesh will be updated with the vertex data provided and not regenerated every time.

***

### normals?

> `optional` **normals?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L84)

An array of vertex normals in babylon space. right/left hand system is taken into account.
Normals will not be calculated if convertCoordinateSystems is undefined in the IWebXRMeshDetectorOptions.
Different platforms may or may not support mesh normals when convertCoordinateSystems is set to true.

***

### positions?

> `optional` **positions?**: `Float32Array`\<`ArrayBufferLike`\>

Defined in: [packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L73)

An array of vertex positions in babylon space. right/left hand system is taken into account.
Positions will only be calculated if convertCoordinateSystems is set to true in the IWebXRMeshDetectorOptions.

***

### semanticLabel?

> `optional` **semanticLabel?**: `string` \| `null`

Defined in: [packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L63)

The semantic classification supplied by the XR runtime.
This is undefined when the runtime does not expose semantic labels and null when the mesh has no known classification.

***

### transformationMatrix?

> `optional` **transformationMatrix?**: [`Matrix`](../classes/Matrix.md)

Defined in: [packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:90](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L90)

A transformation matrix to apply on the mesh that will be built using the meshDefinition.
Local vs. World are decided if worldParentNode was provided or not in the options when constructing the module.
TransformationMatrix will only be calculated if convertCoordinateSystems is set to true in the IWebXRMeshDetectorOptions.

***

### worldParentNode?

> `optional` **worldParentNode?**: [`TransformNode`](../classes/TransformNode.md)

Defined in: [packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:68](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L68)

The node to use to transform the local results to world coordinates.
WorldParentNode will only exist if it was declared in the IWebXRMeshDetectorOptions.

***

### xrMesh

> **xrMesh**: `XRMesh`

Defined in: [packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRMeshDetector.pure.ts#L58)

Data required for constructing a mesh in Babylon.js.
