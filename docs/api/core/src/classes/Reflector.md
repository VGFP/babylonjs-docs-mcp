[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Reflector

# Class: Reflector

Defined in: [packages/dev/core/src/Misc/reflector.ts:9](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/reflector.ts#L9)

**`Since`**

Class used to connect with the reflector zone of the sandbox via the reflector bridge
 5.0.0

## Constructors

### Constructor

> **new Reflector**(`scene`, `hostname`, `port`): `Reflector`

Defined in: [packages/dev/core/src/Misc/reflector.ts:21](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/reflector.ts#L21)

Constructs a reflector object.

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene to use

##### hostname

`string`

The hostname of the reflector bridge

##### port

`number`

The port of the reflector bridge

#### Returns

`Reflector`

## Methods

### close()

> **close**(): `void`

Defined in: [packages/dev/core/src/Misc/reflector.ts:48](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/reflector.ts#L48)

Closes the reflector connection

#### Returns

`void`
