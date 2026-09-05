[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / getRichTypeFromValue

# Function: getRichTypeFromValue()

> **getRichTypeFromValue**\<`T`\>(`value`): [`RichType`](../classes/RichType.md)\<`T`\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts:100](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphRichTypes.pure.ts#L100)

Given a value, try to deduce its rich type.

## Type Parameters

### T

`T`

## Parameters

### value

`T`

the value to deduce the rich type from

## Returns

[`RichType`](../classes/RichType.md)\<`T`\>

the value's rich type, or RichTypeAny if the type could not be deduced.
