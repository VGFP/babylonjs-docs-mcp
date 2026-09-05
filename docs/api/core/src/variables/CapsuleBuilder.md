[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CapsuleBuilder

# ~~Variable: CapsuleBuilder~~

> `const` **CapsuleBuilder**: `object`

Defined in: [packages/dev/core/src/Meshes/Builders/capsuleBuilder.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/Builders/capsuleBuilder.pure.ts#L288)

Class containing static functions to help procedurally build meshes

## Type Declaration

### ~~CreateCapsule~~

> **CreateCapsule**: (`name`, `options`, `scene`) => [`Mesh`](../classes/Mesh.md)

Creates a capsule or a pill mesh

#### Parameters

##### name

`string`

defines the name of the mesh

##### options?

[`ICreateCapsuleOptions`](../interfaces/ICreateCapsuleOptions.md) = `...`

The constructors options.

##### scene?

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\> = `null`

The scene the mesh is scoped to.

#### Returns

[`Mesh`](../classes/Mesh.md)

Capsule Mesh

## Deprecated

please use CreateCapsule directly
