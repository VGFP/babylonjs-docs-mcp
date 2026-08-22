[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGPUMultiPickingInfo

# Interface: IGPUMultiPickingInfo

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:57](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L57)

Stores the result of a multi GPU picking operation

## Properties

### meshes

> **meshes**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](../classes/AbstractMesh.md)\>[]

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:61](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L61)

Picked mesh

***

### normals?

> `optional` **normals?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](../classes/Vector3.md)\>[]

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:79](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L79)

Reconstructed normals in world space.

Only available when enableDepthPicking is true and enough valid depth neighbors can be read.
Custom picking materials or special material plugins that do not write the depth attachment may return null.

***

### pickedPoints?

> `optional` **pickedPoints?**: [`Nullable`](../type-aliases/Nullable.md)\<[`Vector3`](../classes/Vector3.md)\>[]

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:72](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L72)

Picked points in world space.

Only available when enableDepthPicking is true and a valid depth value can be read.
Custom picking materials or special material plugins that do not write the depth attachment may return null.

***

### thinInstanceIndexes?

> `optional` **thinInstanceIndexes?**: `number`[]

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:65](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L65)

Picked thin instance index
