[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IsTuple

# Type Alias: IsTuple\<T\>

> **IsTuple**\<`T`\> = `T` *extends* \[\] ? `false` : `T` *extends* \[infer Head, `...(infer Rest)`\] ? `true` : `false`

Defined in: [packages/dev/core/src/types.ts:113](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/types.ts#L113)

Whether T is a tuple

## Type Parameters

### T

`T`
