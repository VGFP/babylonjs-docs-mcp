[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGPUPickingInfo

# Interface: IGPUPickingInfo

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L29)

Class used to store the result of a GPU picking operation

## Properties

### mesh

> **mesh**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:33](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L33)

Picked mesh

***

### normal?

> `optional` **normal?**: [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:51](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L51)

Reconstructed normal in world space.

Only available when enableDepthPicking is true and enough valid depth neighbors can be read.
Custom picking materials or special material plugins that do not write the depth attachment may return undefined.

***

### pickedPoint?

> `optional` **pickedPoint?**: [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:44](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L44)

Picked point in world space.

Only available when enableDepthPicking is true and a valid depth value can be read.
Custom picking materials or special material plugins that do not write the depth attachment may return undefined.

***

### thinInstanceIndex?

> `optional` **thinInstanceIndex?**: `number`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:37](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L37)

Picked thin instance index
