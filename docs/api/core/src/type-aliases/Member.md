[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Member

# Type Alias: Member\<T, D\>

> **Member**\<`T`, `D`\> = `D` *extends* `0` ? `T` : `T` *extends* infer U[] ? `Member`\<`U`, `D` *extends* `number` ? [`Decrement`](Decrement.md)\<`D`\> : `null`\> : `T`

Defined in: [packages/dev/core/src/types.ts:103](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/types.ts#L103)

Gets the type of an array's members

## Type Parameters

### T

`T`

### D

`D` = `null`
