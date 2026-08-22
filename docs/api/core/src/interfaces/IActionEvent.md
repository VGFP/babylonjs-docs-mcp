[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IActionEvent

# Interface: IActionEvent

Defined in: [packages/dev/core/src/Actions/actionEvent.ts:10](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Actions/actionEvent.ts#L10)

Interface used to define ActionEvent

## Properties

### additionalData?

> `optional` **additionalData?**: `any`

Defined in: [packages/dev/core/src/Actions/actionEvent.ts:22](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Actions/actionEvent.ts#L22)

additional data for the event

***

### meshUnderPointer

> **meshUnderPointer**: [`Nullable`](../type-aliases/Nullable.md)\<[`AbstractMesh`](../classes/AbstractMesh.md)\>

Defined in: [packages/dev/core/src/Actions/actionEvent.ts:18](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Actions/actionEvent.ts#L18)

The mesh that is currently pointed at (can be null)

***

### pointerX

> **pointerX**: `number`

Defined in: [packages/dev/core/src/Actions/actionEvent.ts:14](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Actions/actionEvent.ts#L14)

The X mouse cursor position at the time of the event

***

### pointerY

> **pointerY**: `number`

Defined in: [packages/dev/core/src/Actions/actionEvent.ts:16](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Actions/actionEvent.ts#L16)

The Y mouse cursor position at the time of the event

***

### source

> **source**: `any`

Defined in: [packages/dev/core/src/Actions/actionEvent.ts:12](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Actions/actionEvent.ts#L12)

The mesh or sprite that triggered the action

***

### sourceEvent?

> `optional` **sourceEvent?**: `any`

Defined in: [packages/dev/core/src/Actions/actionEvent.ts:20](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Actions/actionEvent.ts#L20)

the original (browser) event that triggered the ActionEvent
