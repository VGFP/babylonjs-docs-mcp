[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Vector4

# Class: Vector4

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3397](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3397)

Vector4 class created for EulerAngle class conversion to Quaternion

## Implements

- [`Vector`](../interfaces/Vector.md)\<[`Tuple`](../type-aliases/Tuple.md)\<`number`, `4`\>, `IVector4Like`\>

## Constructors

### Constructor

> **new Vector4**(`x?`, `y?`, `z?`, `w?`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3476](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3476)

Creates a Vector4 object from the given floats.

#### Parameters

##### x?

`number` = `0`

x value of the vector

##### y?

`number` = `0`

y value of the vector

##### z?

`number` = `0`

z value of the vector

##### w?

`number` = `0`

w value of the vector

#### Returns

`Vector4`

## Properties

### dimension

> `readonly` **dimension**: readonly \[`4`\]

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3411](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3411)

#### See

Tensor.dimension

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`dimension`](../interfaces/Vector.md#dimension)

***

### rank

> `readonly` **rank**: `1`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3416](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3416)

#### See

Tensor.rank

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`rank`](../interfaces/Vector.md#rank)

***

### \_V8PerformanceHack

> `static` **\_V8PerformanceHack**: [`DeepImmutableObject`](../type-aliases/DeepImmutableObject.md)\<`Vector4`\>

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3405](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3405)

If the first vector is flagged with integers (as everything is 0,0,0,0), V8 stores all of the properties as integers internally because it doesn't know any better yet.
If subsequent vectors are created with non-integer values, V8 determines that it would be best to represent these properties as doubles instead of integers,
and henceforth it will use floating-point representation for all Vector4 instances that it creates.
But the original Vector4 instances are unchanged and has a "deprecated map".
If we keep using the Vector4 instances from step 1, it will now be a poison pill which will mess up optimizations in any code it touches.

## Accessors

### w

#### Get Signature

> **get** **w**(): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3461](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3461)

Gets or sets the w coordinate

##### Returns

`number`

#### Set Signature

> **set** **w**(`value`): `void`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3464](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3464)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IVector4Like.w`

***

### x

#### Get Signature

> **get** **x**(): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3434](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3434)

Gets or sets the x coordinate

##### Returns

`number`

#### Set Signature

> **set** **x**(`value`): `void`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3437](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3437)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IVector4Like.x`

***

### y

#### Get Signature

> **get** **y**(): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3443](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3443)

Gets or sets the y coordinate

##### Returns

`number`

#### Set Signature

> **set** **y**(`value`): `void`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3446](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3446)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IVector4Like.y`

***

### z

#### Get Signature

> **get** **z**(): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3452](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3452)

Gets or sets the z coordinate

##### Returns

`number`

#### Set Signature

> **set** **z**(`value`): `void`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3455](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3455)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Implementation of

`IVector4Like.z`

***

### ZeroReadOnly

#### Get Signature

> **get** `static` **ZeroReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4259](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4259)

Gets a zero Vector4 that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

## Methods

### add()

> **add**(`otherVector`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3587](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3587)

Returns a new Vector4 as the result of the addition of the current Vector4 and the given one.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to add

#### Returns

`Vector4`

the resulting vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`add`](../interfaces/Vector.md#add)

***

### addInPlace()

> **addInPlace**(`otherVector`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3558](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3558)

Adds the given vector to the current Vector4.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

the vector to add

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addInPlace`](../interfaces/Vector.md#addinplace)

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(`x`, `y`, `z`, `w`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3574](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3574)

Adds the given coordinates to the current Vector4

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

##### z

`number`

defines the z coordinate of the operand

##### w

`number`

defines the w coordinate of the operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addInPlaceFromFloats`](../interfaces/Vector.md#addinplacefromfloats)

***

### addToRef()

> **addToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3597](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3597)

Updates the given vector "result" with the result of the addition of the current Vector4 and the given one.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to add

##### result

`T`

the vector to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`addToRef`](../interfaces/Vector.md#addtoref)

***

### asArray()

> **asArray**(): \[`number`, `number`, `number`, `number`\]

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3521](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3521)

Returns a new array populated with 4 elements : the Vector4 coordinates.

#### Returns

\[`number`, `number`, `number`, `number`\]

the resulting array

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`asArray`](../interfaces/Vector.md#asarray)

***

### clone()

> **clone**(): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4058](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4058)

Returns a new Vector4 copied from the current one.

#### Returns

`Vector4`

the new cloned vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`clone`](../interfaces/Vector.md#clone)

***

### copyFrom()

> **copyFrom**(`source`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4066](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4066)

Updates the current Vector4 with the given one coordinates.

#### Parameters

##### source

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the source vector to copy from

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`copyFrom`](../interfaces/Vector.md#copyfrom)

***

### copyFromFloats()

> **copyFromFloats**(`x`, `y`, `z`, `w`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4081](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4081)

Updates the current Vector4 coordinates with the given floats.

#### Parameters

##### x

`number`

float to copy from

##### y

`number`

float to copy from

##### z

`number`

float to copy from

##### w

`number`

float to copy from

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`copyFromFloats`](../interfaces/Vector.md#copyfromfloats)

***

### divide()

> **divide**(`otherVector`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3840](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3840)

Returns a new Vector4 set with the division result of the current Vector4 by the given one.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to devide with

#### Returns

`Vector4`

resulting new vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divide`](../interfaces/Vector.md#divide)

***

### divideInPlace()

> **divideInPlace**(`otherVector`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3862](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3862)

Divides the current Vector3 coordinates by the given ones.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to devide with

#### Returns

`this`

the updated Vector3.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divideInPlace`](../interfaces/Vector.md#divideinplace)

***

### divideToRef()

> **divideToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3849](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3849)

Updates the given vector "result" with the division result of the current Vector4 by the given one.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to devide with

##### result

`T`

vector to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`divideToRef`](../interfaces/Vector.md#dividetoref)

***

### dot()

> **dot**(`otherVector`): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4115](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4115)

Returns the dot product (float) between the current vectors and "otherVector"

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the right operand

#### Returns

`number`

the dot product

***

### equals()

> **equals**(`otherVector`): `boolean`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3758](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3758)

Boolean : True if the current Vector4 coordinates are stricly equal to the given ones.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to compare against

#### Returns

`boolean`

true if they are equal

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equals`](../interfaces/Vector.md#equals)

***

### equalsToFloats()

> **equalsToFloats**(`x`, `y`, `z`, `w`): `boolean`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3786](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3786)

Boolean : True if the given floats are strictly equal to the current Vector4 coordinates.

#### Parameters

##### x

`number`

x value to compare against

##### y

`number`

y value to compare against

##### z

`number`

z value to compare against

##### w

`number`

w value to compare against

#### Returns

`boolean`

true if equal

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equalsToFloats`](../interfaces/Vector.md#equalstofloats)

***

### equalsWithEpsilon()

> **equalsWithEpsilon**(`otherVector`, `epsilon?`): `boolean`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3768](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3768)

Boolean : True if the current Vector4 coordinates are each beneath the distance "epsilon" from the given vector ones.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to compare against

##### epsilon?

`number` = `Epsilon`

(Default: very small number)

#### Returns

`boolean`

true if they are equal

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`equalsWithEpsilon`](../interfaces/Vector.md#equalswithepsilon)

***

### floor()

> **floor**(): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3956](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3956)

Gets a new Vector4 from current Vector4 floored values

#### Returns

`Vector4`

a new Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`floor`](../interfaces/Vector.md#floor)

***

### floorToRef()

> **floorToRef**\<`T`\>(`result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3944](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3944)

Gets the current Vector4's floored values and stores them in result

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### result

`T`

the vector to store the result in

#### Returns

`T`

the result vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`floorToRef`](../interfaces/Vector.md#floortoref)

***

### fract()

> **fract**(): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3977](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3977)

Gets a new Vector4 from current Vector4 fractional values

#### Returns

`Vector4`

a new Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`fract`](../interfaces/Vector.md#fract)

***

### fractToRef()

> **fractToRef**\<`T`\>(`result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3965](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3965)

Gets the current Vector4's fractional values and stores them in result

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### result

`T`

the vector to store the result in

#### Returns

`T`

the result vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`fractToRef`](../interfaces/Vector.md#fracttoref)

***

### fromArray()

> **fromArray**(`array`, `offset?`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3548](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3548)

Update the current vector from an array

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the destination array

##### offset?

`number` = `0`

defines the offset in the destination array

#### Returns

`this`

the current Vector3

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`fromArray`](../interfaces/Vector.md#fromarray)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3495](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3495)

Returns the string "Vector4".

#### Returns

`string`

"Vector4"

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`getClassName`](../interfaces/Vector.md#getclassname)

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3503](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3503)

Returns the Vector4 hash code.

#### Returns

`number`

a unique hash code

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`getHashCode`](../interfaces/Vector.md#gethashcode)

***

### length()

> **length**(): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3986](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3986)

Returns the Vector4 length (float).

#### Returns

`number`

the length

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`length`](../interfaces/Vector.md#length)

***

### lengthSquared()

> **lengthSquared**(): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3993](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3993)

Returns the Vector4 squared length (float).

#### Returns

`number`

the length squared

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`lengthSquared`](../interfaces/Vector.md#lengthsquared)

***

### maximizeInPlace()

> **maximizeInPlace**(`other`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3891](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3891)

Updates the Vector4 coordinates with the maximum values between its own and the given vector ones

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the second operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`maximizeInPlace`](../interfaces/Vector.md#maximizeinplace)

***

### maximizeInPlaceFromFloats()

> **maximizeInPlaceFromFloats**(`x`, `y`, `z`, `w`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3931](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3931)

Updates the current Vector4 with the maximal coordinate values between its and the given coordinates.

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

##### z

`number`

defines the z coordinate of the operand

##### w

`number`

defines the w coordinate of the operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`maximizeInPlaceFromFloats`](../interfaces/Vector.md#maximizeinplacefromfloats)

***

### minimizeInPlace()

> **minimizeInPlace**(`other`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3871](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3871)

Updates the Vector4 coordinates with the minimum values between its own and the given vector ones

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the second operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`minimizeInPlace`](../interfaces/Vector.md#minimizeinplace)

***

### minimizeInPlaceFromFloats()

> **minimizeInPlaceFromFloats**(`x`, `y`, `z`, `w`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3915](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3915)

Updates the current Vector4 with the minimal coordinate values between its and the given coordinates

#### Parameters

##### x

`number`

defines the x coordinate of the operand

##### y

`number`

defines the y coordinate of the operand

##### z

`number`

defines the z coordinate of the operand

##### w

`number`

defines the w coordinate of the operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`minimizeInPlaceFromFloats`](../interfaces/Vector.md#minimizeinplacefromfloats)

***

### multiply()

> **multiply**(`otherVector`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3808](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3808)

Returns a new Vector4 set with the multiplication result of the current Vector4 and the given one.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to multiple with

#### Returns

`Vector4`

resulting new vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiply`](../interfaces/Vector.md#multiply)

***

### multiplyByFloats()

> **multiplyByFloats**(`x`, `y`, `z`, `w`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3832](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3832)

Returns a new Vector4 set with the multiplication result of the given floats and the current Vector4 coordinates.

#### Parameters

##### x

`number`

x value multiply with

##### y

`number`

y value multiply with

##### z

`number`

z value multiply with

##### w

`number`

w value multiply with

#### Returns

`Vector4`

resulting new vector

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyByFloats`](../interfaces/Vector.md#multiplybyfloats)

***

### multiplyInPlace()

> **multiplyInPlace**(`otherVector`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3795](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3795)

Multiplies in place the current Vector4 by the given one.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to multiple with

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyInPlace`](../interfaces/Vector.md#multiplyinplace)

***

### multiplyToRef()

> **multiplyToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3817](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3817)

Updates the given vector "result" with the multiplication result of the current Vector4 and the given one.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

vector to multiple with

##### result

`T`

vector to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`multiplyToRef`](../interfaces/Vector.md#multiplytoref)

***

### negate()

> **negate**(): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3674](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3674)

Returns a new Vector4 set with the current Vector4 negated coordinates.

#### Returns

`Vector4`

a new vector with the negated values

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negate`](../interfaces/Vector.md#negate)

***

### negateInPlace()

> **negateInPlace**(): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3682](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3682)

Negate this vector in place

#### Returns

`this`

this

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negateInPlace`](../interfaces/Vector.md#negateinplace)

***

### negateToRef()

> **negateToRef**\<`T`\>(`result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3695](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3695)

Negate the current Vector4 and stores the result in the given vector "result" coordinates

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### result

`T`

defines the Vector3 object where to store the result

#### Returns

`T`

the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`negateToRef`](../interfaces/Vector.md#negatetoref)

***

### normalize()

> **normalize**(): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4002](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4002)

Normalizes in place the Vector4.

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalize`](../interfaces/Vector.md#normalize)

***

### normalizeFromLength()

> **normalizeFromLength**(`len`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4012](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4012)

Normalize the current Vector4 with the given input length.
Please note that this is an in place operation.

#### Parameters

##### len

`number`

the length of the vector

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeFromLength`](../interfaces/Vector.md#normalizefromlength)

***

### normalizeToNew()

> **normalizeToNew**(): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4024](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4024)

Normalize the current Vector4 to a new vector

#### Returns

`Vector4`

the new Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeToNew`](../interfaces/Vector.md#normalizetonew)

***

### normalizeToRef()

> **normalizeToRef**\<`T`\>(`reference`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4033](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4033)

Normalize the current Vector4 to the reference

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### reference

`T`

define the Vector4 to update

#### Returns

`T`

the updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`normalizeToRef`](../interfaces/Vector.md#normalizetoref)

***

### scale()

> **scale**(`scale`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3721](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3721)

Returns a new Vector4 set with the current Vector4 coordinates multiplied by scale (float).

#### Parameters

##### scale

`number`

the number to scale with

#### Returns

`Vector4`

a new vector with the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scale`](../interfaces/Vector.md#scale)

***

### scaleAndAddToRef()

> **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3745](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3745)

Scale the current Vector4 values by a factor and add the result to a given Vector4

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`T`

defines the Vector4 object where to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleAndAddToRef`](../interfaces/Vector.md#scaleandaddtoref)

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3708](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3708)

Multiplies the current Vector4 coordinates by scale (float).

#### Parameters

##### scale

`number`

the number to scale with

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleInPlace`](../interfaces/Vector.md#scaleinplace)

***

### scaleToRef()

> **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3731](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3731)

Sets the given vector "result" with the current Vector4 coordinates multiplied by scale (float).

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### scale

`number`

the number to scale with

##### result

`T`

a vector to store the result in

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`scaleToRef`](../interfaces/Vector.md#scaletoref)

***

### set()

> **set**(`x`, `y`, `z`, `w`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4096](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4096)

Updates the current Vector4 coordinates with the given floats.

#### Parameters

##### x

`number`

float to set from

##### y

`number`

float to set from

##### z

`number`

float to set from

##### w

`number`

float to set from

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`set`](../interfaces/Vector.md#set)

***

### setAll()

> **setAll**(`v`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4105](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4105)

Copies the given float to the current Vector4 coordinates

#### Parameters

##### v

`number`

defines the x, y, z and w coordinates of the operand

#### Returns

`this`

the current updated Vector4

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`setAll`](../interfaces/Vector.md#setall)

***

### subtract()

> **subtract**(`otherVector`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3623](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3623)

Returns a new Vector4 with the result of the subtraction of the given vector from the current Vector4.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to add

#### Returns

`Vector4`

the new vector with the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtract`](../interfaces/Vector.md#subtract)

***

### subtractFromFloats()

> **subtractFromFloats**(`x`, `y`, `z`, `w`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3649](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3649)

Returns a new Vector4 set with the result of the subtraction of the given floats from the current Vector4 coordinates.

#### Parameters

##### x

`number`

value to subtract

##### y

`number`

value to subtract

##### z

`number`

value to subtract

##### w

`number`

value to subtract

#### Returns

`Vector4`

new vector containing the result

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractFromFloats`](../interfaces/Vector.md#subtractfromfloats)

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `w`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3662](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3662)

Sets the given vector "result" set with the result of the subtraction of the given floats from the current Vector4 coordinates.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### x

`number`

value to subtract

##### y

`number`

value to subtract

##### z

`number`

value to subtract

##### w

`number`

value to subtract

##### result

`T`

the vector to store the result in

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractFromFloatsToRef`](../interfaces/Vector.md#subtractfromfloatstoref)

***

### subtractInPlace()

> **subtractInPlace**(`otherVector`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3610](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3610)

Subtract in place the given vector from the current Vector4.

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to subtract

#### Returns

`this`

the updated Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractInPlace`](../interfaces/Vector.md#subtractinplace)

***

### subtractToRef()

> **subtractToRef**\<`T`\>(`otherVector`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3633](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3633)

Sets the given vector "result" with the result of the subtraction of the given vector from the current Vector4.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### otherVector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to subtract

##### result

`T`

the vector to store the result

#### Returns

`T`

result input

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`subtractToRef`](../interfaces/Vector.md#subtracttoref)

***

### toArray()

> **toArray**(`array`, `index?`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3531](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3531)

Populates the given array from the given index with the Vector4 coordinates.

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

array to populate

##### index?

`number`

index of the array to start at (default: 0)

#### Returns

`this`

the Vector4.

#### Implementation of

[`Vector`](../interfaces/Vector.md).[`toArray`](../interfaces/Vector.md#toarray)

***

### toString()

> **toString**(): `string`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:3487](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L3487)

Returns the string with the Vector4 coordinates.

#### Returns

`string`

a string containing all the vector values

***

### toVector3()

> **toVector3**(): [`Vector3`](Vector3.md)

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4050](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4050)

Returns a new Vector3 from the Vector4 (x, y, z) coordinates.

#### Returns

[`Vector3`](Vector3.md)

this converted to a new vector3

***

### Center()

> `static` **Center**(`value1`, `value2`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4335](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4335)

Returns a new Vector4 located at the center between the vectors "value1" and "value2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the center between

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the center between

#### Returns

`Vector4`

the center between the two vectors

***

### CenterToRef()

> `static` **CenterToRef**\<`T`\>(`value1`, `value2`, `ref`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4346](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4346)

Gets the center of the vectors "value1" and "value2" and stores the result in the vector "ref"

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines first vector

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines second vector

##### ref

`T`

defines third vector

#### Returns

`T`

ref

***

### CheckExtends()

> `static` **CheckExtends**(`v`, `min`, `max`): `void`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4251](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4251)

Checks if a given vector is inside a specific range
Example Playground https://playground.babylonjs.com/#R1F8YU#75

#### Parameters

##### v

`IVector4Like`

defines the vector to test

##### min

`Vector4`

defines the minimum range

##### max

`Vector4`

defines the maximum range

#### Returns

`void`

***

### Clamp()

> `static` **Clamp**(`value`, `min`, `max`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4222](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4222)

Returns a new Vector4 set with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the current value

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the lower range value

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the upper range value

#### Returns

`Vector4`

the new Vector4

***

### ClampToRef()

> `static` **ClampToRef**\<`T`\>(`value`, `min`, `max`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4236](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4236)

Sets the given vector "result" with the coordinates of "value", if the vector "value" is in the cube defined by the vectors "min" and "max"
If a coordinate value of "value" is lower than one of the "min" coordinate, then this "value" coordinate is set with the "min" one
If a coordinate value of "value" is greater than one of the "max" coordinate, then this "value" coordinate is set with the "max" one

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the current value

##### min

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the lower range value

##### max

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the upper range value

##### result

`T`

defines the Vector4 where to store the result

#### Returns

`T`

result input

***

### Distance()

> `static` **Distance**(`value1`, `value2`): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4312](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4312)

Returns the distance (float) between the vectors "value1" and "value2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the distance between

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the distance between

#### Returns

`number`

the distance between the two vectors

***

### DistanceSquared()

> `static` **DistanceSquared**(`value1`, `value2`): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4321](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4321)

Returns the squared distance (float) between the vectors "value1" and "value2".

#### Parameters

##### value1

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the distance between

##### value2

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

value to calulate the distance between

#### Returns

`number`

the distance between the two vectors squared

***

### Dot()

> `static` **Dot**(`left`, `right`): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4472](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4472)

Returns the dot product (float) between the vectors "left" and "right"

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the left operand

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

defines the right operand

#### Returns

`number`

the dot product

***

### FromArray()

> `static` **FromArray**(`array`, `offset?`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4126](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4126)

Returns a new Vector4 set from the starting index of the given array.

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

the array to pull values from

##### offset?

`number`

the offset into the array to start at

#### Returns

`Vector4`

the new vector

***

### FromArrayToRef()

> `static` **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4139](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4139)

Updates the given vector "result" from the starting index of the given array.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

the array to pull values from

##### offset

`number`

the offset into the array to start at

##### result

`T`

the vector to store the result in

#### Returns

`T`

result input

***

### FromFloatArrayToRef()

> `static` **FromFloatArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4153](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4153)

Updates the given vector "result" from the starting index of the given Float32Array.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Float32Array`\>

the array to pull values from

##### offset

`number`

the offset into the array to start at

##### result

`T`

the vector to store the result in

#### Returns

`T`

result input

***

### FromFloatsToRef()

> `static` **FromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `w`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4166](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4166)

Updates the given vector "result" coordinates from the given floats.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### x

`number`

float to set from

##### y

`number`

float to set from

##### z

`number`

float to set from

##### w

`number`

float to set from

##### result

`T`

the vector to the floats in

#### Returns

`T`

result input

***

### FromVector3()

> `static` **FromVector3**(`source`, `w?`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4462](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4462)

Creates a new Vector4 from a Vector3

#### Parameters

##### source

[`Vector3`](Vector3.md)

defines the source data

##### w?

`number` = `0`

defines the 4th component (default is 0)

#### Returns

`Vector4`

a new Vector4

***

### Maximize()

> `static` **Maximize**(`left`, `right`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4300](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4300)

Returns a vector with the maximum values from the left and right vectors

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

left vector to maximize

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

right vector to maximize

#### Returns

`Vector4`

a new vector with the maximum of the left and right vector values

***

### Minimize()

> `static` **Minimize**\<`T`\>(`left`, `right`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4287](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4287)

Returns a vector with the minimum values from the left and right vectors

#### Type Parameters

##### T

`T` *extends* `Vector4`

#### Parameters

##### left

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`T`\>

left vector to minimize

##### right

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

right vector to minimize

#### Returns

`Vector4`

a new vector with the minimum of the left and right vector values

***

### Normalize()

> `static` **Normalize**(`vector`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4267](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4267)

Returns a new normalized Vector4 from the given one.

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

the vector to normalize

#### Returns

`Vector4`

the vector

***

### NormalizeToRef()

> `static` **NormalizeToRef**\<`T`\>(`vector`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4276](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4276)

Updates the given vector "result" from the normalization of the given one.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Vector4`\>

the vector to normalize

##### result

`T`

the vector to store the result in

#### Returns

`T`

result input

***

### One()

> `static` **One**(): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4184](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4184)

Returns a new Vector4 set to (1.0, 1.0, 1.0, 1.0)

#### Returns

`Vector4`

the new vector

***

### Random()

> `static` **Random**(`min?`, `max?`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4194](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4194)

Returns a new Vector4 with random values between min and max

#### Parameters

##### min?

`number` = `0`

the minimum random value

##### max?

`number` = `1`

the maximum random value

#### Returns

`Vector4`

a Vector4 with random values between min and max

***

### RandomToRef()

> `static` **RandomToRef**\<`T`\>(`min?`, `max?`, `ref`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4205](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4205)

Sets a Vector4 with random values between min and max

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### min?

`number` = `0`

the minimum random value

##### max?

`number` = `1`

the maximum random value

##### ref

`T`

the ref to store the values in

#### Returns

`T`

the ref with random values between min and max

***

### TransformCoordinates()

> `static` **TransformCoordinates**(`vector`, `transformation`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4362](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4362)

Returns a new Vector4 set with the result of the transformation by the given matrix of the given vector.
This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
The difference with Vector3.TransformCoordinates is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transformation matrix

#### Returns

`Vector4`

the transformed Vector4

***

### TransformCoordinatesFromFloatsToRef()

> `static` **TransformCoordinatesFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `transformation`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4391](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4391)

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given floats (x, y, z)
This method computes tranformed coordinates only, not transformed direction vectors
The difference with Vector3.TransformCoordinatesFromFloatsToRef is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### x

`number`

define the x coordinate of the source vector

##### y

`number`

define the y coordinate of the source vector

##### z

`number`

define the z coordinate of the source vector

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transformation matrix

##### result

`T`

defines the Vector4 where to store the result

#### Returns

`T`

result input

***

### TransformCoordinatesToRef()

> `static` **TransformCoordinatesToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4375](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4375)

Sets the given vector "result" coordinates with the result of the transformation by the given matrix of the given vector
This method computes tranformed coordinates only, not transformed direction vectors (ie. it takes translation in account)
The difference with Vector3.TransformCoordinatesToRef is that the w component is not used to divide the other coordinates but is returned in the w coordinate instead

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the Vector3 to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

defines the transformation matrix

##### result

`T`

defines the Vector4 where to store the result

#### Returns

`T`

result input

***

### TransformNormal()

> `static` **TransformNormal**(`vector`, `transformation`): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4412](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4412)

Returns a new Vector4 set with the result of the normal transformation by the given matrix of the given vector.
This methods computes transformed normalized direction vectors only.

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

the transformation matrix to apply

#### Returns

`Vector4`

the new vector

***

### TransformNormalFromFloatsToRef()

> `static` **TransformNormalFromFloatsToRef**\<`T`\>(`x`, `y`, `z`, `w`, `transformation`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4447](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4447)

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given floats (x, y, z, w).
This methods computes transformed normalized direction vectors only.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### x

`number`

value to transform

##### y

`number`

value to transform

##### z

`number`

value to transform

##### w

`number`

value to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

the transformation matrix to apply

##### result

`T`

the vector to store the results in

#### Returns

`T`

result input

***

### TransformNormalToRef()

> `static` **TransformNormalToRef**\<`T`\>(`vector`, `transformation`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4424](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4424)

Sets the given vector "result" with the result of the normal transformation by the given matrix of the given vector.
This methods computes transformed normalized direction vectors only.

#### Type Parameters

##### T

`T` *extends* `IVector4Like`

#### Parameters

##### vector

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IVector4Like`\>

the vector to transform

##### transformation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Matrix`](Matrix.md)\>

the transformation matrix to apply

##### result

`T`

the vector to store the result in

#### Returns

`T`

result input

***

### Zero()

> `static` **Zero**(): `Vector4`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:4177](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L4177)

Returns a new Vector4 set to (0.0, 0.0, 0.0, 0.0)

#### Returns

`Vector4`

the new vector
