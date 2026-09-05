[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / AreIndices32Bits

# Function: AreIndices32Bits()

> **AreIndices32Bits**(`indices`, `count`, `start?`, `offset?`): `boolean`

Defined in: [packages/dev/core/src/Buffers/bufferUtils.ts:450](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/bufferUtils.ts#L450)

Utility function to determine if an IndicesArray is an Uint32Array. If indices is an Array, determines whether at least one index is 32 bits.

## Parameters

### indices

[`IndicesArray`](../type-aliases/IndicesArray.md)

The IndicesArray to check.

### count

`number`

The number of indices. Only used if indices is an Array.

### start?

`number` = `0`

The offset to start at (default: 0). Only used if indices is an Array.

### offset?

`number` = `0`

The offset to substract from the indices before testing (default: 0). Only used if indices is an Array.

## Returns

`boolean`

True if the indices use 32 bits
