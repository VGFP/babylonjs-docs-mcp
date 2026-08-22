[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DeepImmutable

# Type Alias: DeepImmutable\<T\>

> **DeepImmutable**\<`T`\> = `T` *extends* `Primitive` ? `T` : `T` *extends* infer U[] ? `DeepImmutableArray`\<`U`\> : [`DeepImmutableObject`](DeepImmutableObject.md)\<`T`\>

Defined in: [packages/dev/core/src/types.ts:167](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/types.ts#L167)

Type modifier to make all the properties of an object Readonly recursively

## Type Parameters

### T

`T`
