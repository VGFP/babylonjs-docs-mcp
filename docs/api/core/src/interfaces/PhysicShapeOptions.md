[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicShapeOptions

# Interface: PhysicShapeOptions

Defined in: [packages/dev/core/src/Physics/v2/physicsShape.ts:15](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/physicsShape.ts#L15)

Options for creating a physics shape

## Properties

### parameters?

> `optional` **parameters?**: [`PhysicsShapeParameters`](PhysicsShapeParameters.md)

Defined in: [packages/dev/core/src/Physics/v2/physicsShape.ts:23](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/physicsShape.ts#L23)

The parameters of the shape. Varies depending of the shape type.

***

### pluginData?

> `optional` **pluginData?**: `any`

Defined in: [packages/dev/core/src/Physics/v2/physicsShape.ts:27](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/physicsShape.ts#L27)

Reference to an already existing physics shape in the plugin.

***

### type?

> `optional` **type?**: [`PhysicsShapeType`](../enumerations/PhysicsShapeType.md)

Defined in: [packages/dev/core/src/Physics/v2/physicsShape.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/physicsShape.ts#L19)

The type of the shape. This can be one of the following: SPHERE, BOX, CAPSULE, CYLINDER, CONVEX_HULL, MESH, HEIGHTFIELD, CONTAINER
