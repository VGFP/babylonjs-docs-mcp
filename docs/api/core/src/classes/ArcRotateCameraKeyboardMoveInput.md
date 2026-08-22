[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ArcRotateCameraKeyboardMoveInput

# Class: ArcRotateCameraKeyboardMoveInput

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:17](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L17)

Manage the keyboard inputs to control the movement of an arc rotate camera.

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`ArcRotateCamera`](ArcRotateCamera.md)\>

## Constructors

### Constructor

> **new ArcRotateCameraKeyboardMoveInput**(): `ArcRotateCameraKeyboardMoveInput`

#### Returns

`ArcRotateCameraKeyboardMoveInput`

## Properties

### angularSpeed

> **angularSpeed**: `number` = `0.01`

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:86](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L86)

Rotation speed of the camera

***

### camera

> **camera**: [`ArcRotateCamera`](ArcRotateCamera.md)

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:21](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L21)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### keysDown

> **keysDown**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:33](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L33)

Defines the list of key codes associated with the down action (decrease alpha)

***

### keysLeft

> **keysLeft**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:39](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L39)

Defines the list of key codes associated with the left action (increase beta)

***

### keysReset

> **keysReset**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:52](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L52)

Defines the list of key codes associated with the reset action.
Those keys reset the camera to its last stored state (with the method camera.storeState())

***

### keysRight

> **keysRight**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:45](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L45)

Defines the list of key codes associated with the right action (decrease beta)

***

### keysUp

> **keysUp**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:27](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L27)

Defines the list of key codes associated with the up action (increase alpha)

***

### keysZoomIn

> **keysZoomIn**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:59](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L59)

Defines the list of key codes associated with the zoom in action.
Only used when CameraMovement is active — these keys always trigger zoom regardless of modifiers.

***

### keysZoomOut

> **keysZoomOut**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:66](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L66)

Defines the list of key codes associated with the zoom out action.
Only used when CameraMovement is active — these keys always trigger zoom regardless of modifiers.

***

### panningSensibility

> **panningSensibility**: `number` = `50.0`

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:73](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L73)

Defines the panning sensibility of the inputs.
(How fast is the camera panning)

***

### zoomingSensibility

> **zoomingSensibility**: `number` = `25.0`

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:80](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L80)

Defines the zooming sensibility of the inputs.
(How fast is the camera zooming)

## Accessors

### useAltToZoom

#### Get Signature

> **get** **useAltToZoom**(): `boolean`

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:97](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L97)

Defines whether alt+arrows/wasd triggers zoom instead of rotation/pan.
When disabled, alt+keyboard events are ignored by the zoom inputMap entry.
Setting this updates the corresponding inputMap entry on the camera's movement system.
If set before the camera is attached, the value is cached and applied during `attachControl`.

##### Returns

`boolean`

#### Set Signature

> **set** **useAltToZoom**(`value`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:101](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L101)

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:151](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L151)

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

### checkInputs()

> **checkInputs**(): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:245](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L245)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:226](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L226)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:339](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L339)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts:347](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/arcRotateCameraKeyboardMoveInput.ts#L347)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
