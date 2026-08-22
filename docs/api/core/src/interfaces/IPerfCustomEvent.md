[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPerfCustomEvent

# Interface: IPerfCustomEvent

Defined in: [packages/dev/core/src/Misc/interfaces/iPerfViewer.ts:46](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts#L46)

Defines the shape of a custom user registered event.

## Properties

### name

> **name**: `string`

Defined in: [packages/dev/core/src/Misc/interfaces/iPerfViewer.ts:50](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts#L50)

The name of the event.

***

### value?

> `optional` **value?**: `number`

Defined in: [packages/dev/core/src/Misc/interfaces/iPerfViewer.ts:54](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts#L54)

The value for the event, if set we will use it as the value, otherwise we will count the number of occurrences.
