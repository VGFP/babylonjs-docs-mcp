[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CapsuleBuilder

# ~~Variable: CapsuleBuilder~~

> `const` **CapsuleBuilder**: `object`

Defined in: [packages/dev/core/src/Meshes/Builders/capsuleBuilder.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Meshes/Builders/capsuleBuilder.pure.ts#L288)

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
