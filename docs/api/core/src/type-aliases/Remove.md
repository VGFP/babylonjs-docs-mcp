[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Remove

# Type Alias: Remove\<A, B\>

> **Remove**\<`A`, `B`\> = `object`\[[`Empty`](Empty.md) *extends* `B` ? `0` : `1`\]

Defined in: [packages/dev/core/src/types.ts:64](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/types.ts#L64)

Extracts from A what is not B

## Type Parameters

### A

`A`

### B

`B`

## Remarks

It does not remove duplicates (so Remove\<[0, 0, 0], [0, 0]\> yields [0]). This is intended and necessary behavior.
