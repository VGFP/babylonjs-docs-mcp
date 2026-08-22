[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Immutable

# Type Alias: Immutable\<T\>

> **Immutable**\<`T`\> = `T` *extends* `Primitive` ? `T` : `T` *extends* infer U[] ? `ReadonlyArray`\<`U`\> : [`DeepImmutable`](DeepImmutable.md)\<`T`\>

Defined in: [packages/dev/core/src/types.ts:157](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/types.ts#L157)

Type modifier to make all the properties of an object Readonly

## Type Parameters

### T

`T`
