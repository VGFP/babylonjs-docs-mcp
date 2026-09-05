[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IBasePhysicsCollisionEvent

# Interface: IBasePhysicsCollisionEvent

Defined in: [packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:141](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L141)

Base collision object

## Extended by

- [`IPhysicsCollisionEvent`](IPhysicsCollisionEvent.md)

## Properties

### collidedAgainst

> **collidedAgainst**: [`PhysicsBody`](../classes/PhysicsBody.md)

Defined in: [packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:149](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L149)

2nd physics body that collided

***

### collidedAgainstIndex

> **collidedAgainstIndex**: `number`

Defined in: [packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:157](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L157)

index in instances array for the collidedAgainst

***

### collider

> **collider**: [`PhysicsBody`](../classes/PhysicsBody.md)

Defined in: [packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:145](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L145)

1st physics body that collided

***

### colliderIndex

> **colliderIndex**: `number`

Defined in: [packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:153](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L153)

index in instances array for the collider

***

### type

> **type**: [`PhysicsEventType`](../enumerations/PhysicsEventType.md)

Defined in: [packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts:161](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Physics/v2/IPhysicsEnginePlugin.ts#L161)

Event type
