[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PointerInfoBase

# Class: PointerInfoBase

Defined in: [packages/dev/core/src/Events/pointerEvents.ts:46](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Events/pointerEvents.ts#L46)

Base class of pointer info types.

## Extended by

- [`PointerInfoPre`](PointerInfoPre.md)
- [`PointerInfo`](PointerInfo.md)

## Constructors

### Constructor

> **new PointerInfoBase**(`type`, `event`): `PointerInfoBase`

Defined in: [packages/dev/core/src/Events/pointerEvents.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Events/pointerEvents.ts#L52)

Instantiates the base class of pointers info.

#### Parameters

##### type

`number`

Defines the type of event (PointerEventTypes)

##### event

[`IMouseEvent`](../interfaces/IMouseEvent.md)

Defines the related dom event

#### Returns

`PointerInfoBase`

## Properties

### event

> **event**: [`IMouseEvent`](../interfaces/IMouseEvent.md)

Defined in: [packages/dev/core/src/Events/pointerEvents.ts:60](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Events/pointerEvents.ts#L60)

Defines the related dom event

***

### type

> **type**: `number`

Defined in: [packages/dev/core/src/Events/pointerEvents.ts:56](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Events/pointerEvents.ts#L56)

Defines the type of event (PointerEventTypes)
