[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlattenTuple

# Type Alias: FlattenTuple\<A\>

> **FlattenTuple**\<`A`\> = `A` *extends* \[infer U, `...(infer Rest)`\] ? `U` *extends* `unknown`[] ? \[`...U`, `...FlattenTuple<Rest>`\] : \[`U`, `...FlattenTuple<Rest>`\] : \[\]

Defined in: [packages/dev/core/src/types.ts:118](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/types.ts#L118)

Flattens a tuple

## Type Parameters

### A

`A` *extends* `unknown`[]
