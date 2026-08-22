[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GeospatialCameraKeyboardInput

# Class: GeospatialCameraKeyboardInput

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:20](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L20)

Manage the keyboard inputs to control the movement of a geospatial camera.
Arrow keys + Modifier key (ctrl/alt/option on mac): rotate
Arrow keys alone: pan
+ / - keys: zoom in/out

## See

https://doc.babylonjs.com/features/featuresDeepDive/cameras/customizingCameraInputs

## Implements

- [`ICameraInput`](../interfaces/ICameraInput.md)\<[`GeospatialCamera`](GeospatialCamera.md)\>

## Constructors

### Constructor

> **new GeospatialCameraKeyboardInput**(): `GeospatialCameraKeyboardInput`

#### Returns

`GeospatialCameraKeyboardInput`

## Properties

### camera

> **camera**: [`GeospatialCamera`](GeospatialCamera.md)

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:24](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L24)

Defines the camera the input is attached to.

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`camera`](../interfaces/ICameraInput.md#camera)

***

### keysDown

> **keysDown**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L36)

Defines the list of key codes associated with the down action (pan down)

***

### keysLeft

> **keysLeft**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:42](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L42)

Defines the list of key codes associated with the left action (pan left)

***

### keysRight

> **keysRight**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:48](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L48)

Defines the list of key codes associated with the right action (pan right)

***

### keysUp

> **keysUp**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:30](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L30)

Defines the list of key codes associated with the up action (pan up)

***

### keysZoomIn

> **keysZoomIn**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:54](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L54)

Defines the list of key codes associated with zoom in (+ or =)

***

### keysZoomOut

> **keysZoomOut**: `number`[]

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:60](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L60)

Defines the list of key codes associated with zoom out (-)

## Accessors

### panSensitivity

#### Get Signature

> **get** **panSensitivity**(): `number`

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:85](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L85)

Defines the panning sensitivity of the inputs.
(How many pixels of pointer input to apply per keypress, before pan speed factor is applied by movement class)

##### Deprecated

Use the `sensitivity` field on the keyboard pan entry in `camera.movement.input.inputMap` instead.

##### Returns

`number`

#### Set Signature

> **set** **panSensitivity**(`value`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:90](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L90)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### rotationSensitivity

#### Get Signature

> **get** **rotationSensitivity**(): `number`

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:68](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L68)

Defines the rotation sensitivity of the inputs.
(How many pixels of pointer input to apply per keypress, before rotation speed factor is applied by movement class)

##### Deprecated

Use the `sensitivity` field on the keyboard rotate entry in `camera.movement.input.inputMap` instead.

##### Returns

`number`

#### Set Signature

> **set** **rotationSensitivity**(`value`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:73](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L73)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### zoomSensitivity

#### Get Signature

> **get** **zoomSensitivity**(): `number`

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:102](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L102)

Defines the zooming sensitivity of the inputs.
(How many pixels of pointer input to apply per keypress, before zoom speed factor is applied by movement class)

##### Deprecated

Use the `sensitivity` field on the keyboard zoom entry in `camera.movement.input.inputMap` instead.

##### Returns

`number`

#### Set Signature

> **set** **zoomSensitivity**(`value`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:107](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L107)

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### attachControl()

> **attachControl**(`noPreventDefault?`): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:140](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L140)

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

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:235](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L235)

Update the current camera state depending on the inputs that have been used this frame.
This is a dynamically created lambda to avoid the performance penalty of looping for inputs in the render loop.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`checkInputs`](../interfaces/ICameraInput.md#checkinputs)

***

### detachControl()

> **detachControl**(): `void`

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:220](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L220)

Detach the current controls from the specified dom element.

#### Returns

`void`

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`detachControl`](../interfaces/ICameraInput.md#detachcontrol)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:317](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L317)

Gets the class name of the current input.

#### Returns

`string`

the class name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getClassName`](../interfaces/ICameraInput.md#getclassname)

***

### getSimpleName()

> **getSimpleName**(): `string`

Defined in: [packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts:325](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/Inputs/geospatialCameraKeyboardInput.ts#L325)

Get the friendly name associated with the input class.

#### Returns

`string`

the input friendly name

#### Implementation of

[`ICameraInput`](../interfaces/ICameraInput.md).[`getSimpleName`](../interfaces/ICameraInput.md#getsimplename)
