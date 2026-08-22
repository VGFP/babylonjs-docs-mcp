[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / TypedArrayConstructor

# Interface: TypedArrayConstructor\<T\>

Defined in: [packages/dev/core/src/types.ts:217](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/types.ts#L217)

Interface for a constructor of a TypedArray.

## Type Parameters

### T

`T` *extends* [`TypedArray`](../type-aliases/TypedArray.md) = [`TypedArray`](../type-aliases/TypedArray.md)

## Constructors

### Constructor

> **new TypedArrayConstructor**(`length`): `T`

Defined in: [packages/dev/core/src/types.ts:218](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/types.ts#L218)

#### Parameters

##### length

`number`

#### Returns

`T`

### Constructor

> **new TypedArrayConstructor**(`elements`): `T`

Defined in: [packages/dev/core/src/types.ts:219](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/types.ts#L219)

#### Parameters

##### elements

`Iterable`\<`number`\>

#### Returns

`T`

### Constructor

> **new TypedArrayConstructor**(`buffer`, `byteOffset?`, `length?`): `T`

Defined in: [packages/dev/core/src/types.ts:220](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/types.ts#L220)

#### Parameters

##### buffer

`ArrayBufferLike`

##### byteOffset?

`number`

##### length?

`number`

#### Returns

`T`

## Properties

### BYTES\_PER\_ELEMENT

> `readonly` **BYTES\_PER\_ELEMENT**: `number`

Defined in: [packages/dev/core/src/types.ts:224](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/types.ts#L224)

The size in bytes of each element in the array.
