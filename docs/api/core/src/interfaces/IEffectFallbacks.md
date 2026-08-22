[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEffectFallbacks

# Interface: IEffectFallbacks

Defined in: [packages/dev/core/src/Materials/iEffectFallbacks.ts:6](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/iEffectFallbacks.ts#L6)

Interface used to define common properties for effect fallbacks

## Properties

### hasMoreFallbacks

> **hasMoreFallbacks**: `boolean`

Defined in: [packages/dev/core/src/Materials/iEffectFallbacks.ts:23](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/iEffectFallbacks.ts#L23)

Checks to see if more fallbacks are still available.

## Methods

### reduce()

> **reduce**(`currentDefines`, `effect`): `string`

Defined in: [packages/dev/core/src/Materials/iEffectFallbacks.ts:13](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/iEffectFallbacks.ts#L13)

Removes the defines that should be removed when falling back.

#### Parameters

##### currentDefines

`string`

defines the current define statements for the shader.

##### effect

[`Effect`](../classes/Effect.md)

defines the current effect we try to compile

#### Returns

`string`

The resulting defines with defines of the current rank removed.

***

### unBindMesh()

> **unBindMesh**(): `void`

Defined in: [packages/dev/core/src/Materials/iEffectFallbacks.ts:18](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/iEffectFallbacks.ts#L18)

Removes the fallback from the bound mesh.

#### Returns

`void`
