[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICustomAnimationFrameRequester

# Interface: ICustomAnimationFrameRequester

Defined in: [packages/dev/core/src/Misc/customAnimationFrameRequester.ts:4](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/customAnimationFrameRequester.ts#L4)

Interface for any object that can request an animation frame

## Properties

### cancelAnimationFrame?

> `optional` **cancelAnimationFrame?**: `Function`

Defined in: [packages/dev/core/src/Misc/customAnimationFrameRequester.ts:23](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/customAnimationFrameRequester.ts#L23)

Called to cancel the next frame request

***

### renderFunction?

> `optional` **renderFunction?**: `Function`

Defined in: [packages/dev/core/src/Misc/customAnimationFrameRequester.ts:8](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/customAnimationFrameRequester.ts#L8)

This function will be called when the render loop is ready. If this is not populated, the engine's renderloop function will be called

***

### requestAnimationFrame

> **requestAnimationFrame**: `Function`

Defined in: [packages/dev/core/src/Misc/customAnimationFrameRequester.ts:13](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/customAnimationFrameRequester.ts#L13)

Called to request the next frame to render to

#### See

https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

***

### requestID?

> `optional` **requestID?**: `number`

Defined in: [packages/dev/core/src/Misc/customAnimationFrameRequester.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/customAnimationFrameRequester.ts#L19)

You can pass this value to cancelAnimationFrame() to cancel the refresh callback request

#### See

https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame#Return_value
