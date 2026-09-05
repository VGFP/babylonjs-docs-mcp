[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlattenTuple

# Type Alias: FlattenTuple\<A\>

> **FlattenTuple**\<`A`\> = `A` *extends* \[infer U, `...(infer Rest)`\] ? `U` *extends* `unknown`[] ? \[`...U`, `...FlattenTuple<Rest>`\] : \[`U`, `...FlattenTuple<Rest>`\] : \[\]

Defined in: [packages/dev/core/src/types.ts:118](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/types.ts#L118)

Flattens a tuple

## Type Parameters

### A

`A` *extends* `unknown`[]
