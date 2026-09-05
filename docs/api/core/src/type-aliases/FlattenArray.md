[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlattenArray

# Type Alias: FlattenArray\<A, D\>

> **FlattenArray**\<`A`, `D`\> = `A` *extends* infer U[] ? [`Member`](Member.md)\<`Exclude`\<`U`, `A`\>, `D`\>[] : `A` *extends* `unknown`[] ? `{ [K in keyof A]: Member<A[K], D> }` : `A`

Defined in: [packages/dev/core/src/types.ts:108](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/types.ts#L108)

Flattens an array

## Type Parameters

### A

`A` *extends* `unknown`[]

### D

`D` = `null`
