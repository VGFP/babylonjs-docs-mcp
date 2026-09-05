[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SpriteSceneComponent

# Class: SpriteSceneComponent

Defined in: [packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts#L27)

Defines the sprite scene component responsible to manage sprites
in a given scene.

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new SpriteSceneComponent**(`scene`): `SpriteSceneComponent`

Defined in: [packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts#L45)

Creates a new instance of the component for the given scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`SpriteSceneComponent`

## Properties

### name

> `readonly` **name**: `"Sprite"` = `SceneComponentConstants.NAME_SPRITE`

Defined in: [packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts#L31)

The component name helpfull to identify the component in the list of scene components.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts#L36)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts:80](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts#L80)

Disposes the component and the associated resources.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts#L73)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Sprites/spriteSceneComponent.pure.ts#L63)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)
