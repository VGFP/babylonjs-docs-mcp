[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFrameGraphPass

# Interface: IFrameGraphPass

Defined in: [packages/dev/core/src/FrameGraph/frameGraphTypes.ts:88](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L88)

Defines a pass in the frame graph.

## Properties

### disabled

> **disabled**: `boolean`

Defined in: [packages/dev/core/src/FrameGraph/frameGraphTypes.ts:97](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L97)

Whether the pass is disabled.

***

### name

> **name**: `string`

Defined in: [packages/dev/core/src/FrameGraph/frameGraphTypes.ts:92](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L92)

The name of the pass.

## Methods

### setExecuteFunc()

> **setExecuteFunc**(`func`): `void`

Defined in: [packages/dev/core/src/FrameGraph/frameGraphTypes.ts:110](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L110)

Sets the function to execute when the pass is executed

#### Parameters

##### func

(`context`) => `void`

The function to execute when the pass is executed

#### Returns

`void`

***

### setInitializeFunc()

> **setInitializeFunc**(`func`): `void`

Defined in: [packages/dev/core/src/FrameGraph/frameGraphTypes.ts:104](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FrameGraph/frameGraphTypes.ts#L104)

Initializes the pass.
This function is called once before the first execution of the pass.

#### Parameters

##### func

(`context`) => `void`

The function to initialize the pass.

#### Returns

`void`
