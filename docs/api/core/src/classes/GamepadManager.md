[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GamepadManager

# Class: GamepadManager

Defined in: [packages/dev/core/src/Gamepads/gamepadManager.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Gamepads/gamepadManager.ts#L14)

Manager for handling gamepads

## Constructors

### Constructor

> **new GamepadManager**(`_scene?`): `GamepadManager`

Defined in: [packages/dev/core/src/Gamepads/gamepadManager.ts:41](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Gamepads/gamepadManager.ts#L41)

Initializes the gamepad manager

#### Parameters

##### \_scene?

[`Scene`](Scene.md)

BabylonJS scene

#### Returns

`GamepadManager`

## Properties

### onGamepadConnectedObservable

> **onGamepadConnectedObservable**: [`Observable`](Observable.md)\<[`Gamepad`](Gamepad.md)\>

Defined in: [packages/dev/core/src/Gamepads/gamepadManager.ts:26](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Gamepads/gamepadManager.ts#L26)

observable to be triggered when the gamepad controller has been connected

***

### onGamepadDisconnectedObservable

> **onGamepadDisconnectedObservable**: [`Observable`](Observable.md)\<[`Gamepad`](Gamepad.md)\>

Defined in: [packages/dev/core/src/Gamepads/gamepadManager.ts:31](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Gamepads/gamepadManager.ts#L31)

observable to be triggered when the gamepad controller has been disconnected

## Accessors

### gamepads

#### Get Signature

> **get** **gamepads**(): [`Gamepad`](Gamepad.md)[]

Defined in: [packages/dev/core/src/Gamepads/gamepadManager.ts:125](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Gamepads/gamepadManager.ts#L125)

The gamepads in the game pad manager

##### Returns

[`Gamepad`](Gamepad.md)[]

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Gamepads/gamepadManager.ts:147](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Gamepads/gamepadManager.ts#L147)

Disposes the gamepad manager

#### Returns

`void`

***

### getGamepadByType()

> **getGamepadByType**(`type?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Gamepad`](Gamepad.md)\>

Defined in: [packages/dev/core/src/Gamepads/gamepadManager.ts:134](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Gamepads/gamepadManager.ts#L134)

Get the gamepad controllers based on type

#### Parameters

##### type?

`number` = `Gamepad.XBOX`

The type of gamepad controller

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Gamepad`](Gamepad.md)\>

Nullable gamepad
