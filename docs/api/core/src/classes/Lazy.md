[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Lazy

# Class: Lazy\<T\>

Defined in: [packages/dev/core/src/Misc/lazy.ts:4](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/lazy.ts#L4)

A class that lazily initializes a value given a factory function.

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new Lazy**\<`T`\>(`factory`): `Lazy`\<`T`\>

Defined in: [packages/dev/core/src/Misc/lazy.ts:12](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/lazy.ts#L12)

Creates a new instance of the Lazy class.

#### Parameters

##### factory

() => `T`

A function that creates the value.

#### Returns

`Lazy`\<`T`\>

## Accessors

### value

#### Get Signature

> **get** **value**(): `T`

Defined in: [packages/dev/core/src/Misc/lazy.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/lazy.ts#L19)

Gets the lazily initialized value.

##### Returns

`T`
