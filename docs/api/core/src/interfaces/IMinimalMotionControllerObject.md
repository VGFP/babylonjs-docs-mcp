[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMinimalMotionControllerObject

# Interface: IMinimalMotionControllerObject

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:213](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L213)

The elements needed for change-detection of the gamepad objects in motion controllers

## Properties

### axes

> **axes**: `number`[]

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:217](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L217)

Available axes of this controller

***

### buttons

> **buttons**: `object`[]

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:221](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L221)

An array of available buttons

#### pressed

> **pressed**: `boolean`

If the button/trigger is currently pressed

#### touched

> **touched**: `boolean`

If the button/trigger is currently touched

#### value

> **value**: `number`

Value of the button/trigger

***

### hapticActuators?

> `optional` **hapticActuators?**: [`IWebXRControllerHapticActuator`](IWebXRControllerHapticActuator.md) & `object`[]

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:239](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L239)

EXPERIMENTAL haptic support.

***

### vibrationActuator?

> `optional` **vibrationActuator?**: [`IWebXRControllerHapticActuator`](IWebXRControllerHapticActuator.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:251](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L251)

The primary Gamepad vibration actuator used for advanced haptic effects.
