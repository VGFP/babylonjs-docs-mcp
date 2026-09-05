[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXROculusHandController

# Class: WebXROculusHandController

Defined in: [packages/dev/core/src/XR/motionController/webXROculusHandController.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXROculusHandController.pure.ts#L19)

Oculus hand controller class that supports microgestures

## Extends

- [`WebXRAbstractMotionController`](WebXRAbstractMotionController.md)

## Constructors

### Constructor

> **new WebXROculusHandController**(`scene`, `gamepadObject`, `handedness`): `WebXROculusHandController`

Defined in: [packages/dev/core/src/XR/motionController/webXROculusHandController.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXROculusHandController.pure.ts#L28)

Create a new hand controller object, without loading a controller model

#### Parameters

##### scene

[`Scene`](Scene.md)

the scene to use to create this controller

##### gamepadObject

[`IMinimalMotionControllerObject`](../interfaces/IMinimalMotionControllerObject.md)

the corresponding gamepad object

##### handedness

[`MotionControllerHandedness`](../type-aliases/MotionControllerHandedness.md)

the handedness of the controller

#### Returns

`WebXROculusHandController`

#### Overrides

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`constructor`](WebXRAbstractMotionController.md#constructor)

## Properties

### components

> `readonly` **components**: `object` = `{}`

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:282](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L282)

A map of components (WebXRControllerComponent) in this motion controller
Components have a ComponentType and can also have both button and axis definitions

#### Index Signature

\[`id`: `string`\]: [`WebXRControllerComponent`](WebXRControllerComponent.md)

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`components`](WebXRAbstractMotionController.md#components)

***

### disableAnimation

> **disableAnimation**: `boolean` = `false`

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:289](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L289)

Disable the model's animation. Can be set at any time.

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`disableAnimation`](WebXRAbstractMotionController.md#disableanimation)

***

### gamepadObject

> **gamepadObject**: [`IMinimalMotionControllerObject`](../interfaces/IMinimalMotionControllerObject.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:320](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L320)

The gamepad object correlating to this controller

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`gamepadObject`](WebXRAbstractMotionController.md#gamepadobject)

***

### handedness

> **handedness**: [`MotionControllerHandedness`](../type-aliases/MotionControllerHandedness.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:324](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L324)

handedness (left/right/none) of this controller

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`handedness`](WebXRAbstractMotionController.md#handedness)

***

### onModelLoadedObservable

> **onModelLoadedObservable**: [`Observable`](Observable.md)\<[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md)\>

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:293](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L293)

Observers registered here will be triggered when the model of this controller is done loading

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`onModelLoadedObservable`](WebXRAbstractMotionController.md#onmodelloadedobservable)

***

### profileId

> **profileId**: `string` = `"oculus-hand"`

Defined in: [packages/dev/core/src/XR/motionController/webXROculusHandController.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXROculusHandController.pure.ts#L20)

The profile id of this motion controller

#### Overrides

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`profileId`](WebXRAbstractMotionController.md#profileid)

***

### rootMesh

> **rootMesh**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:301](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L301)

The root mesh of the model. It is null if the model was not yet initialized

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`rootMesh`](WebXRAbstractMotionController.md#rootmesh)

## Accessors

### handness

#### Get Signature

> **get** **handness**(): [`MotionControllerHandedness`](../type-aliases/MotionControllerHandedness.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:489](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L489)

Backwards compatibility due to a deeply-integrated typo

##### Returns

[`MotionControllerHandedness`](../type-aliases/MotionControllerHandedness.md)

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`handness`](WebXRAbstractMotionController.md#handness)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:349](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L349)

Dispose this controller, the model mesh and all its components

#### Returns

`void`

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`dispose`](WebXRAbstractMotionController.md#dispose)

***

### getAllComponentsOfType()

> **getAllComponentsOfType**(`type`): [`WebXRControllerComponent`](WebXRControllerComponent.md)[]

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:369](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L369)

Returns all components of specific type

#### Parameters

##### type

[`MotionControllerComponentType`](../type-aliases/MotionControllerComponentType.md)

the type to search for

#### Returns

[`WebXRControllerComponent`](WebXRControllerComponent.md)[]

an array of components with this type

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`getAllComponentsOfType`](WebXRAbstractMotionController.md#getallcomponentsoftype)

***

### getComponent()

> **getComponent**(`id`): [`WebXRControllerComponent`](WebXRControllerComponent.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:380](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L380)

get a component based an its component id as defined in layout.components

#### Parameters

##### id

`string`

the id of the component

#### Returns

[`WebXRControllerComponent`](WebXRControllerComponent.md)

the component correlates to the id or undefined if not found

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`getComponent`](WebXRAbstractMotionController.md#getcomponent)

***

### getComponentIds()

> **getComponentIds**(): `string`[]

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:388](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L388)

Get the list of components available in this motion controller

#### Returns

`string`[]

an array of strings correlating to available components

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`getComponentIds`](WebXRAbstractMotionController.md#getcomponentids)

***

### getComponentOfType()

> **getComponentOfType**(`type`): [`Nullable`](../type-aliases/Nullable.md)\<[`WebXRControllerComponent`](WebXRControllerComponent.md)\>

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:397](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L397)

Get the first component of specific type

#### Parameters

##### type

[`MotionControllerComponentType`](../type-aliases/MotionControllerComponentType.md)

type of component to find

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`WebXRControllerComponent`](WebXRControllerComponent.md)\>

a controller component or null if not found

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`getComponentOfType`](WebXRAbstractMotionController.md#getcomponentoftype)

***

### getHapticEffects()

> **getHapticEffects**(`hapticActuatorIndex?`): readonly `GamepadHapticEffectType`[]

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:501](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L501)

Gets the haptic effects reported as supported by an actuator.
See https://playground.babylonjs.com/#ULVR1X#0 for an interactive example.

#### Parameters

##### hapticActuatorIndex?

`number` = `0`

index of the actuator (usually 0)

#### Returns

readonly `GamepadHapticEffectType`[]

the effects reported by the actuator, or an empty array when effect discovery is unavailable

#### Throws

a RangeError when the actuator index is invalid

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`getHapticEffects`](WebXRAbstractMotionController.md#gethapticeffects)

***

### getMainComponent()

> **getMainComponent**(): [`WebXRControllerComponent`](WebXRControllerComponent.md)

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:405](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L405)

Get the main (Select) component of this controller as defined in the layout

#### Returns

[`WebXRControllerComponent`](WebXRControllerComponent.md)

the main component of this controller

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`getMainComponent`](WebXRAbstractMotionController.md#getmaincomponent)

***

### loadModel()

> **loadModel**(): `Promise`\<`boolean`\>

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:415](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L415)

Loads the model correlating to this controller
When the mesh is loaded, the onModelLoadedObservable will be triggered

#### Returns

`Promise`\<`boolean`\>

A promise fulfilled with the result of the model loading

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`loadModel`](WebXRAbstractMotionController.md#loadmodel)

***

### playHapticEffectAsync()

> **playHapticEffectAsync**(`effectType`, `parameters?`, `hapticActuatorIndex?`): `Promise`\<`GamepadHapticsResult`\>

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:514](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L514)

Plays an advanced haptic effect on this controller.

#### Parameters

##### effectType

`GamepadHapticEffectType`

the standard Gamepad haptic effect to play

##### parameters?

`GamepadEffectParameters`

effect duration, delay, and motor magnitudes

##### hapticActuatorIndex?

`number` = `0`

index of the actuator (usually 0)

#### Returns

`Promise`\<`GamepadHapticsResult`\>

the native completion result from the actuator

#### Throws

an Error when the actuator or requested effect is unsupported, or a RangeError when the actuator index is invalid

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`playHapticEffectAsync`](WebXRAbstractMotionController.md#playhapticeffectasync)

***

### pulse()

> **pulse**(`value`, `duration`, `hapticActuatorIndex?`): `Promise`\<`boolean`\>

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:556](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L556)

Pulse (vibrate) this controller
If the controller does not support pulses, this function will fail silently and return Promise<false> directly after called
Consecutive calls to this function will cancel the last pulse call

#### Parameters

##### value

`number`

the strength of the pulse in 0.0...1.0 range

##### duration

`number`

Duration of the pulse in milliseconds

##### hapticActuatorIndex?

`number` = `0`

optional index of actuator (will usually be 0)

#### Returns

`Promise`\<`boolean`\>

a promise that will send true when the pulse has ended and false if the device doesn't support pulse or an error accrued

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`pulse`](WebXRAbstractMotionController.md#pulse)

***

### resetHapticActuatorAsync()

> **resetHapticActuatorAsync**(`hapticActuatorIndex?`): `Promise`\<`GamepadHapticsResult`\>

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:536](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L536)

Stops the active haptic effect on an actuator.

#### Parameters

##### hapticActuatorIndex?

`number` = `0`

index of the actuator (usually 0)

#### Returns

`Promise`\<`GamepadHapticsResult`\>

the native completion result from the actuator

#### Throws

an Error when reset is unsupported, or a RangeError when the actuator index is invalid

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`resetHapticActuatorAsync`](WebXRAbstractMotionController.md#resethapticactuatorasync)

***

### updateFromXRFrame()

> **updateFromXRFrame**(`xrFrame`): `void`

Defined in: [packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts:479](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/motionController/webXRAbstractMotionController.ts#L479)

Update this model using the current XRFrame

#### Parameters

##### xrFrame

`XRFrame`

the current xr frame to use and update the model

#### Returns

`void`

#### Inherited from

[`WebXRAbstractMotionController`](WebXRAbstractMotionController.md).[`updateFromXRFrame`](WebXRAbstractMotionController.md#updatefromxrframe)
