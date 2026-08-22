[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IInspectorContextMenuItem

# Interface: IInspectorContextMenuItem

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:89](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Debug/debugLayer.pure.ts#L89)

Context menu item

## Properties

### action

> **action**: (`entity?`) => `void`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:98](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Debug/debugLayer.pure.ts#L98)

Callback function that will be called when the menu item is selected

#### Parameters

##### entity?

`unknown`

the entity that is currently selected in the scene explorer

#### Returns

`void`

***

### label

> **label**: `string`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Debug/debugLayer.pure.ts#L93)

Display label - menu item
