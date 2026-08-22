[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IExplorerAdditionalChild

# Interface: IExplorerAdditionalChild

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Debug/debugLayer.pure.ts#L53)

Defines a new node that will be displayed as top level node in the explorer

## Properties

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](IInspectable.md)[]

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Debug/debugLayer.pure.ts#L66)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

***

### name

> **name**: `string`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Debug/debugLayer.pure.ts#L57)

Gets the name of the additional node

## Methods

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Debug/debugLayer.pure.ts#L61)

Function used to return the class name of the child node

#### Returns

`string`
