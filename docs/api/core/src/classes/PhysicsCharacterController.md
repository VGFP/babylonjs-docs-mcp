[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PhysicsCharacterController

# Class: PhysicsCharacterController

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:214](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L214)

Character controller using physics

## Constructors

### Constructor

> **new PhysicsCharacterController**(`position`, `characterShapeOptions`, `scene`): `PhysicsCharacterController`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:359](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L359)

instanciate a new characterController

#### Parameters

##### position

[`Vector3`](Vector3.md)

Initial position

##### characterShapeOptions

[`CharacterShapeOptions`](../interfaces/CharacterShapeOptions.md)

character physics shape options

##### scene

[`Scene`](Scene.md)

Scene

#### Returns

`PhysicsCharacterController`

## Properties

### acceleration

> **acceleration**: `number` = `0.05`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:328](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L328)

Acceleration factor. A value of 1 means reaching max velocity immediately

***

### characterMass

> **characterMass**: `number` = `0`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:339](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L339)

character mass
default 0

***

### characterStrength

> **characterStrength**: `number` = `1e38`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:323](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L323)

Strength when pushing other bodies
default 1e38

***

### dynamicFriction

> **dynamicFriction**: `number` = `1`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:262](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L262)

friction with dynamic surfaces
default 1

***

### footOffset

> **footOffset**: `number`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:309](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L309)

Distance from the body's `position` to the character's foot along `up`.
Used by `maxStepHeight` to measure how high a contact sits above the foot.
Defaults to half the capsule height passed at construction. Override when
supplying a custom collision shape whose center is not at half-height.

***

### keepContactTolerance

> **keepContactTolerance**: `number` = `0.1`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:242](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L242)

maximum distance to keep contact
default 0.1

***

### keepDistance

> **keepDistance**: `number` = `0.05`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:237](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L237)

minimum distance to make contact
default 0.05

***

### maxAcceleration

> **maxAcceleration**: `number` = `50`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:333](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L333)

maximum acceleration in world space coordinate

***

### maxCastIterations

> **maxCastIterations**: `number` = `10`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:247](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L247)

maximum number of raycast per integration starp
default 10

***

### maxCharacterSpeedForSolver

> **maxCharacterSpeedForSolver**: `number` = `10.0`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:314](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L314)

character maximum speed
default 10

***

### maxSlopeCosine

> **maxSlopeCosine**: `number` = `0.5`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:268](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L268)

cosine value of slope angle that can be climbed
computed as `Math.cos(Math.PI * (angleInDegree / 180.0));`
default 0.5 (value for a 60deg angle)

***

### maxStepHeight

> **maxStepHeight**: `number` = `0`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:302](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L302)

Maximum height the character can automatically step up onto a walkable surface.
When greater than 0 the controller enforces this as a strict cap on step climbing,
independent of the collision shape's geometry:

 - Obstacles whose top is at most maxStepHeight above the character's foot are
   climbed (either rolled over naturally by the capsule, or snapped up via the
   step-up sweep when the simplex would otherwise be blocked).
 - Obstacles taller than maxStepHeight are blocked, even ones the capsule's
   rounded bottom would otherwise glide over.

This is enforced by demoting any "walkable" contact that sits more than
maxStepHeight above the foot into an extra horizontal wall constraint, so the
step-height limit does not depend on the capsule radius. As a documented side
effect, slopes whose contact rises above maxStepHeight (roughly when
`capsuleRadius * (1 - cos(slopeAngle)) > maxStepHeight`) are also treated as
walls. Pick maxStepHeight large enough to clear the slope angles you want to
remain walkable, or rely on `maxSlopeCosine` alone (with maxStepHeight = 0)
when the rounded-capsule riding behavior is acceptable.

Step-up only triggers against STATIC and ANIMATED bodies. Dynamic bodies fall
through to normal contact resolution and pushing behavior.

Thin walls / fences with floor behind them are not considered steppable: the
landing must be measurably higher than the starting position along `up`.

The foot is computed as `position - up * footOffset`. Override `footOffset` if
you supply a custom collision shape whose center is not at half-height.

Assumes `up` is a unit vector.

default 0 (disabled)

***

### onTriggerCollisionObservable

> **onTriggerCollisionObservable**: [`Observable`](Observable.md)\<[`ICharacterControllerCollisionEvent`](../interfaces/ICharacterControllerCollisionEvent.md)\>

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:344](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L344)

Observable for trigger entered and trigger exited events

***

### penetrationRecoverySpeed

> **penetrationRecoverySpeed**: `number` = `1.0`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:252](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L252)

speed when recovery from penetration
default 1.0

***

### staticFriction

> **staticFriction**: `number` = `0`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:257](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L257)

friction with static surfaces
default 0

***

### up

> **up**: [`Vector3`](Vector3.md)

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:318](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L318)

up vector

## Accessors

### shape

#### Get Signature

> **get** **shape**(): [`PhysicsShape`](PhysicsShape.md)

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:407](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L407)

Get shape used for collision

##### Returns

[`PhysicsShape`](PhysicsShape.md)

#### Set Signature

> **set** **shape**(`value`): `void`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:414](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L414)

Set shape used for collision

##### Parameters

###### value

[`PhysicsShape`](PhysicsShape.md)

##### Returns

`void`

***

### shapeOptions

#### Get Signature

> **get** **shapeOptions**(): [`CharacterShapeOptions`](../interfaces/CharacterShapeOptions.md)

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:426](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L426)

Get the shape options used to build the collision shape

##### Returns

[`CharacterShapeOptions`](../interfaces/CharacterShapeOptions.md)

## Methods

### calculateMovement()

> **calculateMovement**(`deltaTime`, `forwardWorld`, `surfaceNormal`, `currentVelocity`, `surfaceVelocity`, `desiredVelocity`, `upWorld`): [`Vector3`](Vector3.md)

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:2165](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L2165)

Helper function to calculate velocity based on surface informations and current velocity state and target

#### Parameters

##### deltaTime

`number`

frame delta time in seconds. When using scene.deltaTime divide by 1000.0

##### forwardWorld

[`Vector3`](Vector3.md)

character forward in world coordinates

##### surfaceNormal

[`Vector3`](Vector3.md)

surface normal direction

##### currentVelocity

[`Vector3`](Vector3.md)

current velocity

##### surfaceVelocity

[`Vector3`](Vector3.md)

velocity induced by the surface

##### desiredVelocity

[`Vector3`](Vector3.md)

desired character velocity

##### upWorld

[`Vector3`](Vector3.md)

up vector in world space

#### Returns

[`Vector3`](Vector3.md)

a new velocity vector

***

### calculateMovementToRef()

> **calculateMovementToRef**(`deltaTime`, `forwardWorld`, `surfaceNormal`, `currentVelocity`, `surfaceVelocity`, `desiredVelocity`, `upWorld`, `result`): `boolean`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:2074](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L2074)

Helper function to calculate velocity based on surface informations and current velocity state and target

#### Parameters

##### deltaTime

`number`

frame delta time in seconds. When using scene.deltaTime divide by 1000.0

##### forwardWorld

[`Vector3`](Vector3.md)

character forward in world coordinates

##### surfaceNormal

[`Vector3`](Vector3.md)

surface normal direction

##### currentVelocity

[`Vector3`](Vector3.md)

current velocity

##### surfaceVelocity

[`Vector3`](Vector3.md)

velocity induced by the surface

##### desiredVelocity

[`Vector3`](Vector3.md)

desired character velocity

##### upWorld

[`Vector3`](Vector3.md)

up vector in world space

##### result

[`Vector3`](Vector3.md)

resulting velocity vector

#### Returns

`boolean`

boolean true if result has been computed

***

### checkSupport()

> **checkSupport**(`deltaTime`, `direction`): [`CharacterSurfaceInfo`](../interfaces/CharacterSurfaceInfo.md)

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:1415](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L1415)

Compute a CharacterSurfaceInfo from current state and a direction

#### Parameters

##### deltaTime

`number`

frame delta time in seconds. When using scene.deltaTime divide by 1000.0

##### direction

[`Vector3`](Vector3.md)

direction to check, usually gravity direction

#### Returns

[`CharacterSurfaceInfo`](../interfaces/CharacterSurfaceInfo.md)

a CharacterSurfaceInfo object

***

### checkSupportToRef()

> **checkSupportToRef**(`deltaTime`, `direction`, `surfaceInfo`): `void`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:1433](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L1433)

Compute a CharacterSurfaceInfo from current state and a direction

#### Parameters

##### deltaTime

`number`

frame delta time in seconds. When using scene.deltaTime divide by 1000.0

##### direction

[`Vector3`](Vector3.md)

direction to check, usually gravity direction

##### surfaceInfo

[`CharacterSurfaceInfo`](../interfaces/CharacterSurfaceInfo.md)

output for surface info

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:391](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L391)

Dispose the character controller

#### Returns

`void`

***

### getPosition()

> **getPosition**(): [`Vector3`](Vector3.md)

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:470](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L470)

Character position

#### Returns

[`Vector3`](Vector3.md)

Character position

***

### getVelocity()

> **getVelocity**(): [`Vector3`](Vector3.md)

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:487](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L487)

Character velocity

#### Returns

[`Vector3`](Vector3.md)

Character velocity vector

***

### integrate()

> **integrate**(`deltaTime`, `surfaceInfo`, `gravity`): `void`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:2029](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L2029)

Update internal state. Must be called once per frame

#### Parameters

##### deltaTime

`number`

frame delta time in seconds. When using scene.deltaTime divide by 1000.0

##### surfaceInfo

[`CharacterSurfaceInfo`](../interfaces/CharacterSurfaceInfo.md)

surface information returned by checkSupport

##### gravity

[`Vector3`](Vector3.md)

gravity applied to the character. Can be different that world gravity

#### Returns

`void`

***

### moveWithCollisions()

> **moveWithCollisions**(`displacement`): `void`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:2007](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L2007)

Move the character with collisions

#### Parameters

##### displacement

[`Vector3`](Vector3.md)

defines the requested displacement vector

#### Returns

`void`

***

### setPosition()

> **setPosition**(`position`): `void`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:478](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L478)

Teleport character to a new position

#### Parameters

##### position

[`Vector3`](Vector3.md)

new position

#### Returns

`void`

***

### setShapeOptions()

> **setShapeOptions**(`characterShapeOptions`, `preserveFootPosition?`): `void`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:441](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L441)

Set new shape options and rebuild the collision shape accordingly.
When the options provide an explicit `shape`, it is used directly; otherwise
a capsule is created from the `capsuleHeight` / `capsuleRadius` values. The
resulting shape is assigned through the shape setter, which releases the
previously owned shape.

#### Parameters

##### characterShapeOptions

[`CharacterShapeOptions`](../interfaces/CharacterShapeOptions.md)

character physics shape options

##### preserveFootPosition?

`boolean` = `true`

when true (default), the controller position is adapted so the
world-space foot position (center - up * footOffset) is kept fixed as the height changes; when
false, the position is left unchanged.

#### Returns

`void`

***

### setVelocity()

> **setVelocity**(`velocity`): `void`

Defined in: [packages/dev/core/src/Physics/v2/characterController.ts:495](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/characterController.ts#L495)

Set velocity vector

#### Parameters

##### velocity

[`Vector3`](Vector3.md)

vector

#### Returns

`void`
