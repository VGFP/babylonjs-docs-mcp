[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRDefaultExperience

# Class: WebXRDefaultExperience

Defined in: [packages/dev/core/src/XR/webXRDefaultExperience.ts:104](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRDefaultExperience.ts#L104)

Default experience for webxr

## Properties

### baseExperience

> **baseExperience**: [`WebXRExperienceHelper`](WebXRExperienceHelper.md)

Defined in: [packages/dev/core/src/XR/webXRDefaultExperience.ts:108](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRDefaultExperience.ts#L108)

Base experience

***

### enterExitUI

> **enterExitUI**: [`WebXREnterExitUI`](WebXREnterExitUI.md)

Defined in: [packages/dev/core/src/XR/webXRDefaultExperience.ts:112](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRDefaultExperience.ts#L112)

Enables ui for entering/exiting xr

***

### input

> **input**: [`WebXRInput`](WebXRInput.md)

Defined in: [packages/dev/core/src/XR/webXRDefaultExperience.ts:116](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRDefaultExperience.ts#L116)

Input experience extension

***

### nearInteraction

> **nearInteraction**: [`WebXRNearInteraction`](WebXRNearInteraction.md)

Defined in: [packages/dev/core/src/XR/webXRDefaultExperience.ts:133](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRDefaultExperience.ts#L133)

Enables near interaction for hands/controllers

***

### pointerSelection

> **pointerSelection**: [`WebXRControllerPointerSelection`](WebXRControllerPointerSelection.md)

Defined in: [packages/dev/core/src/XR/webXRDefaultExperience.ts:120](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRDefaultExperience.ts#L120)

Enables laser pointer and selection

***

### renderTarget

> **renderTarget**: [`WebXRRenderTarget`](../interfaces/WebXRRenderTarget.md)

Defined in: [packages/dev/core/src/XR/webXRDefaultExperience.ts:124](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRDefaultExperience.ts#L124)

Default target xr should render to

***

### teleportation

> **teleportation**: [`WebXRMotionControllerTeleportation`](WebXRMotionControllerTeleportation.md)

Defined in: [packages/dev/core/src/XR/webXRDefaultExperience.ts:128](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRDefaultExperience.ts#L128)

Enables teleportation

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/webXRDefaultExperience.ts:265](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRDefaultExperience.ts#L265)

Disposes of the experience helper

#### Returns

`void`

***

### CreateAsync()

> `static` **CreateAsync**(`scene`, `options?`): `Promise`\<`WebXRDefaultExperience`\>

Defined in: [packages/dev/core/src/XR/webXRDefaultExperience.ts:143](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRDefaultExperience.ts#L143)

Creates the default xr experience

#### Parameters

##### scene

[`Scene`](Scene.md)

scene

##### options?

[`WebXRDefaultExperienceOptions`](WebXRDefaultExperienceOptions.md) = `{}`

options for basic configuration

#### Returns

`Promise`\<`WebXRDefaultExperience`\>

resulting WebXRDefaultExperience
