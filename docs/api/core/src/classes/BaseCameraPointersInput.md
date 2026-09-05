[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BaseCameraPointersInput

# Abstract Class: BaseCameraPointersInput

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:16](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L16)

Base class for Camera Pointer Inputs.
See FollowCameraPointersInput in src/Cameras/Inputs/followCameraPointersInput.ts
for example usage.

## Extended by

- [`FollowCameraPointersInput`](FollowCameraPointersInput.md)

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`Camera`](Camera.md)\>

## Constructors

### Constructor

> **new BaseCameraPointersInput**(): `BaseCameraPointersInput`

#### Returns

`BaseCameraPointersInput`

## Properties

### buttons

> **buttons**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:46](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L46)

Defines the buttons associated with the input to handle camera move.

***

### camera

> `abstract` **camera**: [`Camera`](Camera.md)

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:20](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L20)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L52)

Attach the input controls to a specific dom element to get the input from.

#### Parameters

##### noPreventDefault?

`boolean`

Defines whether event caught by the controls should call preventdefault() (https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`attachControl`](../interfaces/ICameraInput.md#attachcontrol)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:257](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L257)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:291](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L291)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:299](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L299)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)

***

### onButtonDown()

> **onButtonDown**(`_evt`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:357](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L357)

Called each time a new POINTERDOWN event occurs. Ie, for each button
press.
Override this method to provide functionality.

#### Parameters

##### \_evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

Defines the event to track

#### Returns

`void`

***

### onButtonUp()

> **onButtonUp**(`_evt`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:365](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L365)

Called each time a new POINTERUP event occurs. Ie, for each button
release.
Override this method to provide functionality.

#### Parameters

##### \_evt

[`IPointerEvent`](../interfaces/IPointerEvent.md)

Defines the event to track

#### Returns

`void`

***

### onContextMenu()

> **onContextMenu**(`evt`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:347](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L347)

Called on JS contextmenu event.
Override this method to provide functionality.

#### Parameters

##### evt

`PointerEvent`

the event to be handled

#### Returns

`void`

***

### onDoubleTap()

> **onDoubleTap**(`type`, `evt?`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:310](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L310)

Called on pointer POINTERDOUBLETAP event.
Override this method to provide functionality on POINTERDOUBLETAP event.

#### Parameters

##### type

`string`

type of event

##### evt?

[`IPointerEvent`](../interfaces/IPointerEvent.md)

the pointer event that triggered the double tap (carries button / buttons state)

#### Returns

`void`

***

### onLostFocus()

> **onLostFocus**(): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:371](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L371)

Called when window becomes inactive.
Override this method to provide functionality.

#### Returns

`void`

***

### onMultiTouch()

> **onMultiTouch**(`_pointA`, `_pointB`, `previousPinchSquaredDistance`, `pinchSquaredDistance`, `previousMultiTouchPanPosition`, `multiTouchPanPosition`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:333](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L333)

Called on pointer POINTERMOVE event if multiple touches are active.
Override this method to provide functionality.

#### Parameters

##### \_pointA

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

First point in the pair

##### \_pointB

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

Second point in the pair

##### previousPinchSquaredDistance

`number`

Sqr Distance between the points the last time this event was fired (by this input)

##### pinchSquaredDistance

`number`

Sqr Distance between the points this time

##### previousMultiTouchPanPosition

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

Previous center point between the points

##### multiTouchPanPosition

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

Current center point between the points

#### Returns

`void`

***

### onTouch()

> **onTouch**(`point`, `offsetX`, `offsetY`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts:320](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/Inputs/BaseCameraPointersInput.ts#L320)

Called on pointer POINTERMOVE event if only a single touch is active.
Override this method to provide functionality.

#### Parameters

##### point

[`Nullable`](../type-aliases/Nullable.md)\<[`PointerTouch`](../interfaces/PointerTouch.md)\>

The current position of the pointer

##### offsetX

`number`

The offsetX of the pointer when the event occurred

##### offsetY

`number`

The offsetY of the pointer when the event occurred

#### Returns

`void`
