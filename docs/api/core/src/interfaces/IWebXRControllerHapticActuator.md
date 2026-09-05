[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRControllerHapticActuator

# Interface: IWebXRControllerHapticActuator

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:29](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L29)

The haptic capabilities exposed by a WebXR motion controller actuator.

## Properties

### effects?

> `readonly` `optional` **effects?**: readonly `GamepadHapticEffectType`[]

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:33](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L33)

The haptic effects reported as supported by this actuator.

***

### playEffect?

> `optional` **playEffect?**: (`type`, `params?`) => `Promise`\<`GamepadHapticsResult`\>

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L37)

Plays a haptic effect, when advanced haptic playback is supported.

The **`playEffect()`** method of the GamepadHapticActuator interface causes the hardware to play a specific vibration effect.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/GamepadHapticActuator/playEffect)

#### Parameters

##### type

`GamepadHapticEffectType`

##### params?

`GamepadEffectParameters`

#### Returns

`Promise`\<`GamepadHapticsResult`\>

***

### reset?

> `optional` **reset?**: () => `Promise`\<`GamepadHapticsResult`\>

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:41](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L41)

Stops the active haptic effect, when reset is supported.

The **`reset()`** method of the GamepadHapticActuator interface stops the hardware from playing an active vibration effect.

[MDN Reference](https://developer.mozilla.org/docs/Web/API/GamepadHapticActuator/reset)

#### Returns

`Promise`\<`GamepadHapticsResult`\>
