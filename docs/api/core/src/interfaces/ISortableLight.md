[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ISortableLight

# Interface: ISortableLight

Defined in: [packages/dev/core/src/Lights/lightConstants.ts:118](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Lights/lightConstants.ts#L118)

Defines the common interface of sortable lights

## Properties

### renderPriority

> **renderPriority**: `number`

Defined in: [packages/dev/core/src/Lights/lightConstants.ts:128](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Lights/lightConstants.ts#L128)

Defines the rendering priority of the lights. It can help in case of fallback or number of lights
exceeding the number allowed of the materials.

***

### shadowEnabled

> **shadowEnabled**: `boolean`

Defined in: [packages/dev/core/src/Lights/lightConstants.ts:123](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Lights/lightConstants.ts#L123)

Gets or sets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
the current shadow generator.
