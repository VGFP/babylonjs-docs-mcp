[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IsTuple

# Type Alias: IsTuple\<T\>

> **IsTuple**\<`T`\> = `T` *extends* \[\] ? `false` : `T` *extends* \[infer Head, `...(infer Rest)`\] ? `true` : `false`

Defined in: [packages/dev/core/src/types.ts:113](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/types.ts#L113)

Whether T is a tuple

## Type Parameters

### T

`T`
