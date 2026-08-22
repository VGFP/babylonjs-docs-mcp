[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / addAccessorsForMaterialProperty

# Function: addAccessorsForMaterialProperty()

> **addAccessorsForMaterialProperty**(`setCallback`, `sourceKey?`): \<`This`, `V`\>(`_value`, `context`) => `ClassAccessorDecoratorResult`\<`This`, `V`\>

Defined in: [packages/dev/core/src/Misc/decorators.ts:218](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/decorators.ts#L218)

Adds accessors for a material property.
Applied to an auto-accessor field. Reads/writes from a private backing field named by sourceKey (default: "_" + property name).
The backing field is expected to have a `.value` property.

## Parameters

### setCallback

`string`

The name of the callback function to call when the property is set.

### sourceKey?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

The name of the private field that stores the value (defaults to "_" + accessor name).

## Returns

An accessor decorator.

\<`This`, `V`\>(`_value`, `context`) => `ClassAccessorDecoratorResult`\<`This`, `V`\>
