[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DeepCopier

# Class: DeepCopier

Defined in: [packages/dev/core/src/Misc/deepCopier.ts:42](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/deepCopier.ts#L42)

Class containing a set of static utilities functions for deep copy.

## Constructors

### Constructor

> **new DeepCopier**(): `DeepCopier`

#### Returns

`DeepCopier`

## Methods

### DeepCopy()

> `static` **DeepCopy**(`source`, `destination`, `doNotCopyList?`, `mustCopyList?`, `shallowCopyValues?`): `void`

Defined in: [packages/dev/core/src/Misc/deepCopier.ts:52](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/deepCopier.ts#L52)

Tries to copy an object by duplicating every property

#### Parameters

##### source

`any`

defines the source object

##### destination

`any`

defines the target object

##### doNotCopyList?

`string`[]

defines a list of properties to avoid

##### mustCopyList?

`string`[]

defines a list of properties to copy (even if they start with _)

##### shallowCopyValues?

`boolean` = `false`

defines wether properties referencing objects (none cloneable) must be shallow copied (false by default)

#### Returns

`void`

#### Remarks

shallowCopyValues will not instantite the copied values which makes it only usable for "JSON objects"
