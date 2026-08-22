[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISimplificationTask

# Interface: ISimplificationTask

Defined in: [packages/dev/core/src/Meshes/meshSimplification.ts:32](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/meshSimplification.ts#L32)

Interface used to define a simplification task

## Properties

### mesh

> **mesh**: [`Mesh`](../classes/Mesh.md)

Defined in: [packages/dev/core/src/Meshes/meshSimplification.ts:44](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/meshSimplification.ts#L44)

Mesh to simplify

***

### parallelProcessing

> **parallelProcessing**: `boolean`

Defined in: [packages/dev/core/src/Meshes/meshSimplification.ts:52](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/meshSimplification.ts#L52)

Defines if parallel processing can be used

***

### settings

> **settings**: [`ISimplificationSettings`](ISimplificationSettings.md)[]

Defined in: [packages/dev/core/src/Meshes/meshSimplification.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/meshSimplification.ts#L36)

Array of settings

***

### simplificationType

> **simplificationType**: [`QUADRATIC`](../enumerations/SimplificationType.md#quadratic)

Defined in: [packages/dev/core/src/Meshes/meshSimplification.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/meshSimplification.ts#L40)

Simplification type

***

### successCallback?

> `optional` **successCallback?**: () => `void`

Defined in: [packages/dev/core/src/Meshes/meshSimplification.ts:48](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/meshSimplification.ts#L48)

Callback called on success

#### Returns

`void`
