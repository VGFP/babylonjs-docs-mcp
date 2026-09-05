[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / Matrix

# Class: Matrix

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6152](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6152)

Class used to store matrix data (4x4)
Note on matrix definitions in Babylon.js for setting values directly
rather than using one of the methods available.
Matrix size is given by rows x columns.
A Vector3 is a 1 X 3 matrix [x, y, z].

In Babylon.js multiplying a 1 x 3 matrix by a 4 x 4 matrix
is done using BABYLON.Vector4.TransformCoordinates(Vector3, Matrix).
and extending the passed Vector3 to a Vector4, V = [x, y, z, 1].
Let M be a matrix with elements m(row, column), so that
m(2, 3) is the element in row 2 column 3 of M.

Multiplication is of the form VM and has the resulting Vector4
VM = [xm(0, 0) + ym(1, 0) + zm(2, 0) + m(3, 0), xm(0, 1) + ym(1, 1) + zm(2, 1) + m(3, 1), xm(0, 2) + ym(1, 2) + zm(2, 2) + m(3, 2), xm(0, 3) + ym(1, 3) + zm(2, 3) + m(3, 3)].
On the web you will find many examples that use the opposite convention of MV,
in which case to make use of the examples you will need to transpose the matrix.

Example Playground - Overview Linear Algebra - https://playground.babylonjs.com/#AV9X17
Example Playground - Overview Transformation - https://playground.babylonjs.com/#AV9X17#1
Example Playground - Overview Projection - https://playground.babylonjs.com/#AV9X17#2

## Implements

- `Tensor`\<[`Tuple`](../type-aliases/Tuple.md)\<[`Tuple`](../type-aliases/Tuple.md)\<`number`, `4`\>, `4`\>, `Matrix`\>

## Constructors

### Constructor

> **new Matrix**(): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6213](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6213)

Creates an empty matrix (filled with zeros)

#### Returns

`Matrix`

## Properties

### dimension

> `readonly` **dimension**: readonly \[`4`, `4`\]

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6156](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6156)

#### See

Tensor.dimension

#### Implementation of

`Tensor.dimension`

***

### rank

> `readonly` **rank**: `2`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6161](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6161)

#### See

Tensor.rank

#### Implementation of

`Tensor.rank`

***

### updateFlag

> **updateFlag**: `number` = `-1`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6181](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6181)

Gets the update flag of the matrix which is an unique number for the matrix.
It will be incremented every time the matrix data change.
You can use it to speed the comparison between two versions of the same matrix.

#### Implementation of

`IMatrixLike.updateFlag`

## Accessors

### m

#### Get Signature

> **get** **m**(): `DeepImmutableArray`\<`number`\>

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6188](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6188)

Gets the internal data of the matrix

##### Returns

`DeepImmutableArray`\<`number`\>

***

### IdentityReadOnly

#### Get Signature

> **get** `static` **IdentityReadOnly**(): [`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7396](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7396)

Gets an identity matrix that must not be updated

##### Returns

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

***

### Use64Bits

#### Get Signature

> **get** `static` **Use64Bits**(): `boolean`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6166](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6166)

Gets the precision of matrix computations

##### Returns

`boolean`

## Methods

### add()

> **add**(`other`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6448](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6448)

Adds the current matrix with a second one
Example Playground - https://playground.babylonjs.com/#AV9X17#44

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the matrix to add

#### Returns

`Matrix`

a new matrix as the addition of the current matrix and the given one

#### Implementation of

`Tensor.add`

***

### addAtIndex()

> **addAtIndex**(`index`, `value`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6592](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6592)

add a value at the specified position in the current Matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#47

#### Parameters

##### index

`number`

the index of the value within the matrix. between 0 and 15.

##### value

`number`

the value to be added

#### Returns

`this`

the current updated matrix

***

### addInPlace()

> **addInPlace**(`other`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6501](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6501)

Set the instance coordinates by adding the given instance coordinates

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the other instance

#### Returns

`this`

the current updated instance

#### Implementation of

`Tensor.addInPlace`

***

### addInPlaceFromFloats()

> **addInPlaceFromFloats**(...`floats`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6511](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6511)

Adds the given coordinates to the current instance

#### Parameters

##### floats

...\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

the floats to add

#### Returns

`this`

the current updated instance

#### Implementation of

`Tensor.addInPlaceFromFloats`

***

### addToRef()

> **addToRef**\<`T`\>(`other`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6461](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6461)

Sets the given matrix "result" to the addition of the current matrix and the given one
Example Playground - https://playground.babylonjs.com/#AV9X17#45

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the matrix to add

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

#### Implementation of

`Tensor.addToRef`

***

### addToSelf()

> **addToSelf**(`other`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6478](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6478)

Adds in place the given matrix to the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#46

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the second operand

#### Returns

`this`

the current updated matrix

***

### addTranslationFromFloats()

> **addTranslationFromFloats**(`x`, `y`, `z`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6635](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6635)

Adds the translation vector (using 3 floats) in the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#20
Example Playground - https://playground.babylonjs.com/#AV9X17#48

#### Parameters

##### x

`number`

defines the 1st component of the translation

##### y

`number`

defines the 2nd component of the translation

##### z

`number`

defines the 3rd component of the translation

#### Returns

`this`

the current updated matrix

***

### asArray()

> **asArray**(): \[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6378](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6378)

Returns the matrix as a Float32Array or Array<number>
Example Playground - https://playground.babylonjs.com/#AV9X17#114

#### Returns

\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

the matrix underlying array.

#### Implementation of

`Tensor.asArray`

***

### clone()

> **clone**(): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6986](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6986)

Clone the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#18

#### Returns

`Matrix`

a new matrix from the current matrix

#### Implementation of

`Tensor.clone`

***

### copyFrom()

> **copyFrom**(`other`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6692](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6692)

Copy the current matrix from the given one
Example Playground - https://playground.babylonjs.com/#AV9X17#21

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the source matrix

#### Returns

`this`

the current updated matrix

#### Implementation of

`Tensor.copyFrom`

***

### copyFromFloats()

> **copyFromFloats**(...`floats`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6391](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6391)

Sets all the matrix values from a float array

#### Parameters

##### floats

...\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

the 16 float values to set

#### Returns

`this`

the current updated matrix

#### Implementation of

`Tensor.copyFromFloats`

***

### copyToArray()

> **copyToArray**(`array`, `offset?`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6706](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6706)

Populates the given array from the starting index with the current matrix values

#### Parameters

##### array

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

defines the target array

##### offset?

`number` = `0`

defines the offset in the target array where to start storing values

#### Returns

`this`

the current matrix

***

### decompose()

> **decompose**(`scale?`, `rotation?`, `translation?`, `preserveScalingNode?`, `useAbsoluteScaling?`): `boolean`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7032](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7032)

Decomposes the current Matrix into a translation, rotation and scaling components
Example Playground - https://playground.babylonjs.com/#AV9X17#12

#### Parameters

##### scale?

[`Vector3`](Vector3.md)

defines the scale vector3 given as a reference to update

##### rotation?

[`Quaternion`](Quaternion.md)

defines the rotation quaternion given as a reference to update

##### translation?

[`Vector3`](Vector3.md)

defines the translation vector3 given as a reference to update

##### preserveScalingNode?

[`TransformNode`](TransformNode.md)

Use scaling sign coming from this node. Otherwise scaling sign might change.

##### useAbsoluteScaling?

`boolean` = `true`

Use scaling sign coming from this absoluteScaling when true or scaling otherwise.

#### Returns

`boolean`

true if operation was successful

***

### decomposeToTransformNode()

> **decomposeToTransformNode**(`node`): `boolean`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7018](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7018)

Decomposes the current Matrix into a translation, rotation and scaling components of the provided node
Example Playground - https://playground.babylonjs.com/#AV9X17#13

#### Parameters

##### node

[`TransformNode`](TransformNode.md)

the node to decompose the matrix to

#### Returns

`boolean`

true if operation was successful

***

### determinant()

> **determinant**(): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6293](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6293)

Gets the determinant of the matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#34

#### Returns

`number`

the matrix determinant

***

### divide()

> **divide**(`other`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6807](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6807)

Returns a new instance set with the instance coordinates divided by the given one coordinates

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the other instance

#### Returns

`Matrix`

a new instance

#### Implementation of

`Tensor.divide`

***

### divideInPlace()

> **divideInPlace**(`other`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6822](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6822)

Divides the current instance coordinates by the given ones

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the other instance

#### Returns

`this`

the current updated instance

#### Implementation of

`Tensor.divideInPlace`

***

### divideToRef()

> **divideToRef**\<`T`\>(`other`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6811](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6811)

Sets the "result" coordinates with the instance coordinates divided by the given one coordinates

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the other instance

##### result

`T`

defines the target instance

#### Returns

`T`

result input

#### Implementation of

`Tensor.divideToRef`

***

### equals()

> **equals**(`value`): `boolean`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6898](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6898)

Check equality between this matrix and a second one

#### Parameters

##### value

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the second matrix to compare

#### Returns

`boolean`

true is the current matrix and the given one values are strictly equal

#### Implementation of

`Tensor.equals`

***

### equalsToFloats()

> **equalsToFloats**(...`floats`): `boolean`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6943](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6943)

Returns true if the current Vectoe coordinates equals the given floats

#### Parameters

##### floats

...\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

defines the coordinates to compare against

#### Returns

`boolean`

true if both instances are equal

#### Implementation of

`Tensor.equalsToFloats`

***

### equalsWithEpsilon()

> **equalsWithEpsilon**(`other`, `epsilon?`): `boolean`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6932](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6932)

Gets a boolean if two instances are equals (using an epsilon value)

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the other instance

##### epsilon?

`number` = `0`

defines the minimal distance to consider equality

#### Returns

`boolean`

true if the given instance coordinates are close to the current ones by a distance of epsilon.

#### Implementation of

`Tensor.equalsWithEpsilon`

***

### floor()

> **floor**(): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6953](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6953)

Gets a new instance from current instance floored values
eg (1.2, 2.31) returns (1, 2)

#### Returns

`Matrix`

a new instance

#### Implementation of

`Tensor.floor`

***

### floorToRef()

> **floorToRef**\<`T`\>(`result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6957](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6957)

Gets the current instance's floored values and stores them in result

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### result

`T`

the instance to store the result in

#### Returns

`T`

the result instance

#### Implementation of

`Tensor.floorToRef`

***

### fract()

> **fract**(): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6967](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6967)

Gets a new instance from current instance fractional values
eg (1.2, 2.31) returns (0.2, 0.31)

#### Returns

`Matrix`

a new instance

#### Implementation of

`Tensor.fract`

***

### fractToRef()

> **fractToRef**\<`T`\>(`result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6971](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6971)

Gets the current instance's fractional values and stores them in result

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### result

`T`

the instance to store the result in

#### Returns

`T`

the result instance

#### Implementation of

`Tensor.fractToRef`

***

### fromArray()

> **fromArray**(`array`, `index?`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6382](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6382)

Update the current instance from an array

#### Parameters

##### array

[`FloatArray`](../type-aliases/FloatArray.md)

defines the destination array

##### index?

`number` = `0`

defines the offset in the destination array

#### Returns

`this`

the current instance

#### Implementation of

`Tensor.fromArray`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6996](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6996)

Returns the name of the current matrix class

#### Returns

`string`

the string "Matrix"

#### Implementation of

`Tensor.getClassName`

***

### getHashCode()

> **getHashCode**(): `number`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7004](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7004)

Gets the hash code of the current matrix

#### Returns

`number`

the hash code

#### Implementation of

`Tensor.getHashCode`

***

### getRotationMatrix()

> **getRotationMatrix**(): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7264](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7264)

Gets only rotation part of the current matrix

#### Returns

`Matrix`

a new matrix sets to the extracted rotation matrix from the current one

***

### getRotationMatrixToRef()

> **getRotationMatrixToRef**\<`T`\>(`result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7275](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7275)

Extracts the rotation matrix from the current one and sets it as the given "result"

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### result

`T`

defines the target matrix to store data to

#### Returns

`T`

result input

***

### getRow()

> **getRow**(`index`): [`Nullable`](../type-aliases/Nullable.md)\<[`Vector4`](Vector4.md)\>

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7114](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7114)

Gets specific row of the matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#36

#### Parameters

##### index

`number`

defines the number of the row to get

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Vector4`](Vector4.md)\>

the index-th row of the current matrix as a new Vector4

***

### getRowToRef()

> **getRowToRef**\<`T`\>(`index`, `rowVector`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7129](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7129)

Gets specific row of the matrix to ref
Example Playground - https://playground.babylonjs.com/#AV9X17#36

#### Type Parameters

##### T

`T` *extends* [`Vector4`](Vector4.md)

#### Parameters

##### index

`number`

defines the number of the row to get

##### rowVector

`T`

vector to store the index-th row of the current matrix

#### Returns

`T`

result input

***

### getTranslation()

> **getTranslation**(): [`Vector3`](Vector3.md)

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6658](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6658)

Gets the translation value of the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#122

#### Returns

[`Vector3`](Vector3.md)

a new Vector3 as the extracted translation from the matrix

***

### getTranslationToRef()

> **getTranslationToRef**\<`T`\>(`result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6668](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6668)

Fill a Vector3 with the extracted translation from the matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#123

#### Type Parameters

##### T

`T` *extends* [`Vector3`](Vector3.md)

#### Parameters

##### result

`T`

defines the Vector3 where to store the translation

#### Returns

`T`

the current matrix

***

### invert()

> **invert**(): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6428](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6428)

Inverts the current matrix in place
Example Playground - https://playground.babylonjs.com/#AV9X17#118

#### Returns

`this`

the current inverted matrix

***

### invertToRef()

> **invertToRef**\<`T`\>(`other`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6571](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6571)

Sets the given matrix to the current inverted Matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#119

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### other

`T`

defines the target matrix

#### Returns

`T`

result input

***

### isIdentity()

> **isIdentity**(): `boolean`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6229](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6229)

Check if the current matrix is identity

#### Returns

`boolean`

true is the matrix is the identity matrix

***

### isIdentityAs3x2()

> **isIdentityAs3x2**(): `boolean`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6259](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6259)

Check if the current matrix is identity as a texture matrix (3x2 store in 4x4)

#### Returns

`boolean`

true is the matrix is the identity matrix

***

### markAsUpdated()

> **markAsUpdated**(): `void`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6195](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6195)

Update the updateFlag to indicate that the matrix has been updated

#### Returns

`void`

***

### maximizeInPlace()

> **maximizeInPlace**(`other`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6851](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6851)

Updates the current instance with the maximal coordinate values between its and the given instance ones.

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the other instance

#### Returns

`this`

this current updated instance

#### Implementation of

`Tensor.maximizeInPlace`

***

### maximizeInPlaceFromFloats()

> **maximizeInPlaceFromFloats**(...`floats`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6861](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6861)

Updates the current instance with the maximal coordinate values between its and the given floats.

#### Parameters

##### floats

...\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

defines the floats to compare against

#### Returns

`this`

this current updated instance

#### Implementation of

`Tensor.maximizeInPlaceFromFloats`

***

### minimizeInPlace()

> **minimizeInPlace**(`other`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6832](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6832)

Updates the current instance with the minmal coordinate values between its and the given instance ones.

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the other instance

#### Returns

`this`

this current updated instance

#### Implementation of

`Tensor.minimizeInPlace`

***

### minimizeInPlaceFromFloats()

> **minimizeInPlaceFromFloats**(...`floats`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6842](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6842)

Updates the current instance with the minmal coordinate values between its and the given floats.

#### Parameters

##### floats

...\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

defines the floats to compare against

#### Returns

`this`

this current updated instance

#### Implementation of

`Tensor.minimizeInPlaceFromFloats`

***

### multiply()

> **multiply**(`other`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6718](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6718)

Multiply two matrices
Example Playground - https://playground.babylonjs.com/#AV9X17#15
A.multiply(B) means apply B to A so result is B x A

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the second operand

#### Returns

`Matrix`

a new matrix set with the multiplication result of the current Matrix and the given one

#### Implementation of

`Tensor.multiply`

***

### multiplyAtIndex()

> **multiplyAtIndex**(`index`, `value`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6604](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6604)

mutiply the specified position in the current Matrix by a value

#### Parameters

##### index

`number`

the index of the value within the matrix. between 0 and 15.

##### value

`number`

the value to be added

#### Returns

`this`

the current updated matrix

***

### multiplyByFloats()

> **multiplyByFloats**(...`floats`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6746](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6746)

This method performs a component-by-component multiplication of the current matrix with the array of transmitted numbers.
Use multiply or multiplyToRef for matrix multiplication.

#### Parameters

##### floats

...\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

defines the array of numbers to multiply the matrix by

#### Returns

`this`

the current updated matrix

#### Implementation of

`Tensor.multiplyByFloats`

***

### multiplyByFloatsToRef()

> **multiplyByFloatsToRef**\<`T`\>(...`args`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6760](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6760)

Multiples the current matrix by the given floats and stores them in the given ref

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### args

...\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `T`\]

The floats and ref

#### Returns

`T`

The updated ref

***

### multiplyInPlace()

> **multiplyInPlace**(`other`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6730](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6730)

This method performs component-by-component in-place multiplication, rather than true matrix multiplication.
Use multiply or multiplyToRef for matrix multiplication.

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the second operand

#### Returns

`this`

the current updated matrix

#### Implementation of

`Tensor.multiplyInPlace`

***

### multiplyToArray()

> **multiplyToArray**(`other`, `result`, `offset`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6802](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6802)

Sets the Float32Array "result" from the given index "offset" with the multiplication of the current matrix and the given one

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the second operand

##### result

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

defines the array where to store the multiplication

##### offset

`number`

defines the offset in the target array where to start storing values

#### Returns

`this`

the current matrix

***

### multiplyToRef()

> **multiplyToRef**\<`T`\>(`other`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6780](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6780)

Sets the given matrix "result" with the multiplication result of the current Matrix and the given one
A.multiplyToRef(B, R) means apply B to A and store in R and R = B x A
Example Playground - https://playground.babylonjs.com/#AV9X17#16

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the second operand

##### result

`T`

defines the matrix where to store the multiplication

#### Returns

`T`

result input

#### Implementation of

`Tensor.multiplyToRef`

***

### negate()

> **negate**(): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6870](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6870)

Gets a new instance with current instance negated coordinates

#### Returns

`Matrix`

a new instance

#### Implementation of

`Tensor.negate`

***

### negateInPlace()

> **negateInPlace**(): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6874](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6874)

Negate this instance in place

#### Returns

`this`

this

#### Implementation of

`Tensor.negateInPlace`

***

### negateToRef()

> **negateToRef**\<`T`\>(`result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6883](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6883)

Negate the current instance and stores the result in the given instance "result" coordinates

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### result

`T`

defines the instance object where to store the result

#### Returns

`T`

the result

#### Implementation of

`Tensor.negateToRef`

***

### removeRotationAndScaling()

> **removeRotationAndScaling**(): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6679](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6679)

Remove rotation and scaling part from the matrix

#### Returns

`this`

the updated matrix

***

### reset()

> **reset**(): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6436](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6436)

Sets all the matrix elements to zero

#### Returns

`this`

the current matrix

***

### scale()

> **scale**(`scale`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7202](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7202)

Compute a new matrix set with the current matrix values multiplied by scale (float)

#### Parameters

##### scale

`number`

defines the scale factor

#### Returns

`Matrix`

a new matrix

#### Implementation of

`Tensor.scale`

***

### scaleAndAddToRef()

> **scaleAndAddToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7228](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7228)

Scale the current matrix values by a factor and add the result to a given matrix

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`T`

defines the Matrix to store the result

#### Returns

`T`

result input

#### Implementation of

`Tensor.scaleAndAddToRef`

***

### scaleInPlace()

> **scaleInPlace**(`scale`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7236](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7236)

Multiply the instance coordinates by

#### Parameters

##### scale

`number`

defines the scaling factor

#### Returns

`this`

the current updated instance

#### Implementation of

`Tensor.scaleInPlace`

***

### scaleToRef()

> **scaleToRef**\<`T`\>(`scale`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7214](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7214)

Scale the current matrix values by a factor to a given result matrix

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### scale

`number`

defines the scale factor

##### result

`T`

defines the matrix to store the result

#### Returns

`T`

result input

#### Implementation of

`Tensor.scaleToRef`

***

### set()

> **set**(...`values`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6400](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6400)

Sets the matrix values

#### Parameters

##### values

...\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

the 16 values to set

#### Returns

`this`

the current updated matrix

#### Implementation of

`Tensor.set`

***

### setAll()

> **setAll**(`value`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6414](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6414)

Sets all the matrix values to the given value

#### Parameters

##### value

`number`

the value to set

#### Returns

`this`

the current updated matrix

#### Implementation of

`Tensor.setAll`

***

### setRow()

> **setRow**(`index`, `row`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7147](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7147)

Sets the index-th row of the current matrix to the vector4 values
Example Playground - https://playground.babylonjs.com/#AV9X17#36

#### Parameters

##### index

`number`

defines the number of the row to set

##### row

[`Vector4`](Vector4.md)

defines the target vector4

#### Returns

`this`

the updated current matrix

***

### setRowFromFloats()

> **setRowFromFloats**(`index`, `x`, `y`, `z`, `w`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7183](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7183)

Sets the index-th row of the current matrix with the given 4 x float values
Example Playground - https://playground.babylonjs.com/#AV9X17#36

#### Parameters

##### index

`number`

defines the row index

##### x

`number`

defines the x component to set

##### y

`number`

defines the y component to set

##### z

`number`

defines the z component to set

##### w

`number`

defines the w component to set

#### Returns

`this`

the updated current matrix

***

### setTranslation()

> **setTranslation**(`vector3`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6649](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6649)

Inserts the translation vector in the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#121

#### Parameters

##### vector3

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the translation to insert

#### Returns

`this`

the current updated matrix

***

### setTranslationFromFloats()

> **setTranslationFromFloats**(`x`, `y`, `z`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6618](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6618)

Inserts the translation vector (using 3 floats) in the current matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#120

#### Parameters

##### x

`number`

defines the 1st component of the translation

##### y

`number`

defines the 2nd component of the translation

##### z

`number`

defines the 3rd component of the translation

#### Returns

`this`

the current updated matrix

***

### subtract()

> **subtract**(`other`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6520](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6520)

Returns a new instance set with the subtracted coordinates of other's coordinates from the current coordinates.

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the other instance

#### Returns

`this`

a new instance

#### Implementation of

`Tensor.subtract`

***

### subtractFromFloats()

> **subtractFromFloats**(...`floats`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6549](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6549)

Returns a new instance set with the subtraction of the given floats from the current instance coordinates

#### Parameters

##### floats

...\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

the coordinates to subtract

#### Returns

`Matrix`

the resulting instance

#### Implementation of

`Tensor.subtractFromFloats`

***

### subtractFromFloatsToRef()

> **subtractFromFloatsToRef**\<`T`\>(...`args`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6553](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6553)

Subtracts the given floats from the current instance coordinates and set the given instance "result" with this result
Note: Implementation uses array magic so types may be confusing.

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### args

...\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `T`\]

the coordinates to subtract with the last element as the result

#### Returns

`T`

the result

#### Implementation of

`Tensor.subtractFromFloatsToRef`

***

### subtractInPlace()

> **subtractInPlace**(`other`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6539](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6539)

Sets the current instance coordinates by subtracting from it the given one coordinates

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the other instance

#### Returns

`this`

the current updated instance

#### Implementation of

`Tensor.subtractInPlace`

***

### subtractToRef()

> **subtractToRef**\<`T`\>(`other`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6529](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6529)

Sets the "result" coordinates with the subtraction of the other's coordinates from the current coordinates.

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### other

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the other instance

##### result

`T`

defines the target instance

#### Returns

`T`

result input

#### Implementation of

`Tensor.subtractToRef`

***

### toArray()

#### Call Signature

> **toArray**(): [`FloatArray`](../type-aliases/FloatArray.md)

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6352](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6352)

Returns the matrix as a Float32Array or Array<number>

##### Returns

[`FloatArray`](../type-aliases/FloatArray.md)

##### Deprecated

Use asArray

##### Implementation of

`Tensor.toArray`

#### Call Signature

> **toArray**(`array`, `index`): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6361](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6361)

Stores the matrix in a Float32Array or Array<number>
Example Playground - https://playground.babylonjs.com/#AV9X17#49

##### Parameters

###### array

[`FloatArray`](../type-aliases/FloatArray.md)

The destination array

###### index

`number`

The destination index to start ay

##### Returns

`this`

the matrix

##### Implementation of

`Tensor.toArray`

***

### toggleModelMatrixHandInPlace()

> **toggleModelMatrixHandInPlace**(): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7294](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7294)

Toggles model matrix from being right handed to left handed in place and vice versa

#### Returns

`this`

the current updated matrix

***

### toggleProjectionMatrixHandInPlace()

> **toggleProjectionMatrixHandInPlace**(): `this`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7309](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7309)

Toggles projection matrix from being right handed to left handed in place and vice versa

#### Returns

`this`

the current updated matrix

***

### toNormalMatrix()

> **toNormalMatrix**\<`T`\>(`ref`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7251](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7251)

Writes to the given matrix a normal matrix, computed from this one (using values from identity matrix for fourth row and column).
Example Playground - https://playground.babylonjs.com/#AV9X17#17

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### ref

`T`

matrix to store the result

#### Returns

`T`

the reference matrix

***

### toString()

> **toString**(): `string`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:6344](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L6344)

Gets a string with the Matrix values

#### Returns

`string`

a string with the Matrix values

***

### transpose()

> **transpose**(): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7156](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7156)

Compute the transpose of the matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#40

#### Returns

`Matrix`

the new transposed matrix

***

### transposeToRef()

> **transposeToRef**\<`T`\>(`result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7168](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7168)

Compute the transpose of the matrix and store it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#41

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### Compose()

> `static` **Compose**(`scale`, `rotation`, `translation`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7528](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7528)

Creates a new matrix composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
Example Playground - https://playground.babylonjs.com/#AV9X17#24

#### Parameters

##### scale

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the scale vector3

##### rotation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Quaternion`](Quaternion.md)\>

defines the rotation quaternion

##### translation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the translation vector3

#### Returns

`Matrix`

a new matrix

***

### ComposeToRef()

> `static` **ComposeToRef**\<`T`\>(`scale`, `rotation`, `translation`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7543](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7543)

Sets a matrix to a value composed by merging scale (vector3), rotation (quaternion) and translation (vector3)
Example Playground - https://playground.babylonjs.com/#AV9X17#25

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### scale

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the scale vector3

##### rotation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Quaternion`](Quaternion.md)\>

defines the rotation quaternion

##### translation

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the translation vector3

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### DecomposeLerp()

> `static` **DecomposeLerp**(`startValue`, `endValue`, `gradient`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7957](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7957)

Builds a new matrix whose values are computed by:
* decomposing the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
* interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
* recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
Example Playground - https://playground.babylonjs.com/#AV9X17#22
Example Playground - https://playground.babylonjs.com/#AV9X17#51

#### Parameters

##### startValue

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the first matrix

##### endValue

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the second matrix

##### gradient

`number`

defines the gradient between the two matrices

#### Returns

`Matrix`

the new matrix

***

### DecomposeLerpToRef()

> `static` **DecomposeLerpToRef**\<`T`\>(`startValue`, `endValue`, `gradient`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7976](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7976)

Update a matrix to values which are computed by:
* decomposing the "startValue" and "endValue" matrices into their respective scale, rotation and translation matrices
* interpolating for "gradient" (float) the values between each of these decomposed matrices between the start and the end
* recomposing a new matrix from these 3 interpolated scale, rotation and translation matrices
Example Playground - https://playground.babylonjs.com/#AV9X17#23
Example Playground - https://playground.babylonjs.com/#AV9X17#53

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### startValue

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the first matrix

##### endValue

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the second matrix

##### gradient

`number`

defines the gradient between the two matrices

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### FromArray()

> `static` **FromArray**(`array`, `offset?`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7341](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7341)

Creates a matrix from an array
Example Playground - https://playground.babylonjs.com/#AV9X17#42

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the source array

##### offset?

`number` = `0`

defines an offset in the source array

#### Returns

`Matrix`

a new Matrix set from the starting index of the given array

***

### FromArrayToRef()

> `static` **FromArrayToRef**\<`T`\>(`array`, `offset`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7355](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7355)

Copy the content of an array into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#43

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`ArrayLike`\<`number`\>\>

defines the source array

##### offset

`number`

defines an offset in the source array

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### FromFloat32ArrayToRefScaled()

> `static` **FromFloat32ArrayToRefScaled**\<`T`\>(`array`, `offset`, `scale`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7372](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7372)

Stores an array into a matrix after having multiplied each component by a given factor
Example Playground - https://playground.babylonjs.com/#AV9X17#50

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### array

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`number`[] \| `Float32Array`\<`ArrayBufferLike`\>\>

defines the source array

##### offset

`number`

defines the offset in the source array

##### scale

`number`

defines the scaling factor

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### FromQuaternionToRef()

> `static` **FromQuaternionToRef**\<`T`\>(`quat`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8863](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8863)

Creates a rotation matrix from a quaternion and stores it in a target matrix

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### quat

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Quaternion`](Quaternion.md)\>

defines the quaternion to use

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### FromValues()

> `static` **FromValues**(`initialM11`, `initialM12`, `initialM13`, `initialM14`, `initialM21`, `initialM22`, `initialM23`, `initialM24`, `initialM31`, `initialM32`, `initialM33`, `initialM34`, `initialM41`, `initialM42`, `initialM43`, `initialM44`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7480](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7480)

Creates new matrix from a list of values (16)

#### Parameters

##### initialM11

`number`

defines 1st value of 1st row

##### initialM12

`number`

defines 2nd value of 1st row

##### initialM13

`number`

defines 3rd value of 1st row

##### initialM14

`number`

defines 4th value of 1st row

##### initialM21

`number`

defines 1st value of 2nd row

##### initialM22

`number`

defines 2nd value of 2nd row

##### initialM23

`number`

defines 3rd value of 2nd row

##### initialM24

`number`

defines 4th value of 2nd row

##### initialM31

`number`

defines 1st value of 3rd row

##### initialM32

`number`

defines 2nd value of 3rd row

##### initialM33

`number`

defines 3rd value of 3rd row

##### initialM34

`number`

defines 4th value of 3rd row

##### initialM41

`number`

defines 1st value of 4th row

##### initialM42

`number`

defines 2nd value of 4th row

##### initialM43

`number`

defines 3rd value of 4th row

##### initialM44

`number`

defines 4th value of 4th row

#### Returns

`Matrix`

the new matrix

***

### FromValuesToRef()

> `static` **FromValuesToRef**(`initialM11`, `initialM12`, `initialM13`, `initialM14`, `initialM21`, `initialM22`, `initialM23`, `initialM24`, `initialM31`, `initialM32`, `initialM33`, `initialM34`, `initialM41`, `initialM42`, `initialM43`, `initialM44`, `result`): `void`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7420](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7420)

Stores a list of values (16) inside a given matrix

#### Parameters

##### initialM11

`number`

defines 1st value of 1st row

##### initialM12

`number`

defines 2nd value of 1st row

##### initialM13

`number`

defines 3rd value of 1st row

##### initialM14

`number`

defines 4th value of 1st row

##### initialM21

`number`

defines 1st value of 2nd row

##### initialM22

`number`

defines 2nd value of 2nd row

##### initialM23

`number`

defines 3rd value of 2nd row

##### initialM24

`number`

defines 4th value of 2nd row

##### initialM31

`number`

defines 1st value of 3rd row

##### initialM32

`number`

defines 2nd value of 3rd row

##### initialM33

`number`

defines 3rd value of 3rd row

##### initialM34

`number`

defines 4th value of 3rd row

##### initialM41

`number`

defines 1st value of 4th row

##### initialM42

`number`

defines 2nd value of 4th row

##### initialM43

`number`

defines 3rd value of 4th row

##### initialM44

`number`

defines 4th value of 4th row

##### result

`Matrix`

defines the target matrix

#### Returns

`void`

***

### FromXYZAxesToRef()

> `static` **FromXYZAxesToRef**\<`T`\>(`xaxis`, `yaxis`, `zaxis`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8852](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8852)

Sets the given matrix as a rotation matrix composed from the 3 left handed axes

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### xaxis

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the value of the 1st axis

##### yaxis

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the value of the 2nd axis

##### zaxis

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the value of the 3rd axis

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### GetAsMatrix2x2()

> `static` **GetAsMatrix2x2**(`matrix`): `number`[] \| `Float32Array`\<`ArrayBufferLike`\>

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8714](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8714)

Extracts a 2x2 matrix from a given matrix and store the result in a Float32Array

#### Parameters

##### matrix

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the matrix to use

#### Returns

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

a new Float32Array array with 4 elements : the 2x2 matrix extracted from the given matrix

***

### GetAsMatrix3x3()

> `static` **GetAsMatrix3x3**(`matrix`): `number`[] \| `Float32Array`\<`ArrayBufferLike`\>

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8724](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8724)

Extracts a 3x3 matrix from a given matrix and store the result in a Float32Array

#### Parameters

##### matrix

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the matrix to use

#### Returns

`number`[] \| `Float32Array`\<`ArrayBufferLike`\>

a new Float32Array array with 9 elements : the 3x3 matrix extracted from the given matrix

***

### GetFinalMatrix()

> `static` **GetFinalMatrix**(`viewport`, `world`, `view`, `projection`, `zmin`, `zmax`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8688](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8688)

Computes a complete transformation matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#113

#### Parameters

##### viewport

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Viewport`](Viewport.md)\>

defines the viewport to use

##### world

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the world matrix

##### view

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the view matrix

##### projection

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the projection matrix

##### zmin

`number`

defines the near clip plane

##### zmax

`number`

defines the far clip plane

#### Returns

`Matrix`

the transformation matrix

***

### Identity()

> `static` **Identity**(): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7594](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7594)

Creates a new identity matrix

#### Returns

`Matrix`

a new identity matrix

***

### IdentityToRef()

> `static` **IdentityToRef**\<`T`\>(`result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7605](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7605)

Creates a new identity matrix and stores the result in a given matrix

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### Invert()

> `static` **Invert**(`source`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7639](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7639)

Creates a new matrix as the invert of a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#124

#### Parameters

##### source

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the source matrix

#### Returns

`Matrix`

the new matrix

***

### Lerp()

> `static` **Lerp**(`startValue`, `endValue`, `gradient`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7919](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7919)

Returns a new Matrix whose values are the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
Example Playground - https://playground.babylonjs.com/#AV9X17#55

#### Parameters

##### startValue

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the start value

##### endValue

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the end value

##### gradient

`number`

defines the gradient factor

#### Returns

`Matrix`

the new matrix

***

### LerpToRef()

> `static` **LerpToRef**\<`T`\>(`startValue`, `endValue`, `gradient`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7934](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7934)

Set the given matrix "result" as the interpolated values for "gradient" (float) between the ones of the matrices "startValue" and "endValue".
Example Playground - https://playground.babylonjs.com/#AV9X17#54

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### startValue

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the start value

##### endValue

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the end value

##### gradient

`number`

defines the gradient factor

##### result

`T`

defines the Matrix object where to store data

#### Returns

`T`

result input

***

### LookAtLH()

> `static` **LookAtLH**(`eye`, `target`, `up`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8009](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8009)

Creates a new matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
This function generates a matrix suitable for a left handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#58
Example Playground - https://playground.babylonjs.com/#AV9X17#59

#### Parameters

##### eye

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the final position of the entity

##### target

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines where the entity should look at

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity

#### Returns

`Matrix`

the new matrix

***

### LookAtLHToRef()

> `static` **LookAtLHToRef**(`eye`, `target`, `up`, `result`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8026](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8026)

Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
This function generates a matrix suitable for a left handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#60
Example Playground - https://playground.babylonjs.com/#AV9X17#61

#### Parameters

##### eye

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the final position of the entity

##### target

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines where the entity should look at

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity

##### result

`Matrix`

defines the target matrix

#### Returns

`Matrix`

result input

***

### LookAtRH()

> `static` **LookAtRH**(`eye`, `target`, `up`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8068](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8068)

Creates a new matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
This function generates a matrix suitable for a right handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#62
Example Playground - https://playground.babylonjs.com/#AV9X17#63

#### Parameters

##### eye

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the final position of the entity

##### target

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines where the entity should look at

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity

#### Returns

`Matrix`

the new matrix

***

### LookAtRHToRef()

> `static` **LookAtRHToRef**\<`T`\>(`eye`, `target`, `up`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8085](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8085)

Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes three vectors as arguments that together describe the position and orientation of the camera.
This function generates a matrix suitable for a right handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#64
Example Playground - https://playground.babylonjs.com/#AV9X17#65

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### eye

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the final position of the entity

##### target

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines where the entity should look at

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### LookDirectionLH()

> `static` **LookDirectionLH**(`forward`, `up`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8125](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8125)

Creates a new matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
This function generates a matrix suitable for a left handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#66

#### Parameters

##### forward

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the forward direction - Must be normalized and orthogonal to up.

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity - Must be normalized and orthogonal to forward.

#### Returns

`Matrix`

the new matrix

***

### LookDirectionLHToRef()

> `static` **LookDirectionLHToRef**\<`T`\>(`forward`, `up`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8140](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8140)

Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
This function generates a matrix suitable for a left handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#67

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### forward

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the forward direction - Must be normalized and orthogonal to up.

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity - Must be normalized and orthogonal to forward.

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### LookDirectionRH()

> `static` **LookDirectionRH**(`forward`, `up`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8160](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8160)

Creates a new matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
This function generates a matrix suitable for a right handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#68

#### Parameters

##### forward

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the forward direction - Must be normalized and orthogonal to up.

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity - Must be normalized and orthogonal to forward.

#### Returns

`Matrix`

the new matrix

***

### LookDirectionRHToRef()

> `static` **LookDirectionRHToRef**\<`T`\>(`forward`, `up`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8175](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8175)

Sets the given "result" Matrix to a matrix that transforms vertices from world space to camera space. It takes two vectors as arguments that together describe the orientation of the camera. The position is assumed to be at the origin (0,0,0)
This function generates a matrix suitable for a right handed coordinate system
Example Playground - https://playground.babylonjs.com/#AV9X17#69

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### forward

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the forward direction - Must be normalized and orthogonal to up.

##### up

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the up vector for the entity - Must be normalized and orthogonal to forward.

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### ObliqueOffCenterLHToRef()

> `static` **ObliqueOffCenterLHToRef**\<`T`\>(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `length`, `angle`, `distance`, `result`, `halfZRange?`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8306](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8306)

Stores a left-handed oblique projection into a given matrix

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### left

`number`

defines the viewport left coordinate

##### right

`number`

defines the viewport right coordinate

##### bottom

`number`

defines the viewport bottom coordinate

##### top

`number`

defines the viewport top coordinate

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane

##### length

`number`

Length of the shear

##### angle

`number`

Angle (along X/Y Plane) to apply shear

##### distance

`number`

Distance from shear point

##### result

`T`

defines the target matrix

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

#### Returns

`T`

result input

***

### ObliqueOffCenterRHToRef()

> `static` **ObliqueOffCenterRHToRef**\<`T`\>(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `length`, `angle`, `distance`, `result`, `halfZRange?`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8395](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8395)

Stores a right-handed oblique projection into a given matrix

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### left

`number`

defines the viewport left coordinate

##### right

`number`

defines the viewport right coordinate

##### bottom

`number`

defines the viewport bottom coordinate

##### top

`number`

defines the viewport top coordinate

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane

##### length

`number`

Length of the shear

##### angle

`number`

Angle (along X/Y Plane) to apply shear

##### distance

`number`

Distance from shear point

##### result

`T`

defines the target matrix

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

#### Returns

`T`

result input

***

### OrthoLH()

> `static` **OrthoLH**(`width`, `height`, `znear`, `zfar`, `halfZRange?`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8194](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8194)

Create a left-handed orthographic projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#70

#### Parameters

##### width

`number`

defines the viewport width

##### height

`number`

defines the viewport height

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

#### Returns

`Matrix`

a new matrix as a left-handed orthographic projection matrix

***

### OrthoLHToRef()

> `static` **OrthoLHToRef**\<`T`\>(`width`, `height`, `znear`, `zfar`, `result`, `halfZRange?`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8211](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8211)

Store a left-handed orthographic projection to a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#71

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### width

`number`

defines the viewport width

##### height

`number`

defines the viewport height

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane

##### result

`T`

defines the target matrix

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

#### Returns

`T`

result input

***

### OrthoOffCenterLH()

> `static` **OrthoOffCenterLH**(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `halfZRange?`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8242](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8242)

Create a left-handed orthographic projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#72

#### Parameters

##### left

`number`

defines the viewport left coordinate

##### right

`number`

defines the viewport right coordinate

##### bottom

`number`

defines the viewport bottom coordinate

##### top

`number`

defines the viewport top coordinate

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

#### Returns

`Matrix`

a new matrix as a left-handed orthographic projection matrix

***

### OrthoOffCenterLHToRef()

> `static` **OrthoOffCenterLHToRef**\<`T`\>(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `result`, `halfZRange?`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8261](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8261)

Stores a left-handed orthographic projection into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#73

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### left

`number`

defines the viewport left coordinate

##### right

`number`

defines the viewport right coordinate

##### bottom

`number`

defines the viewport bottom coordinate

##### top

`number`

defines the viewport top coordinate

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane

##### result

`T`

defines the target matrix

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

#### Returns

`T`

result input

***

### OrthoOffCenterRH()

> `static` **OrthoOffCenterRH**(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `halfZRange?`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8346](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8346)

Creates a right-handed orthographic projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#76

#### Parameters

##### left

`number`

defines the viewport left coordinate

##### right

`number`

defines the viewport right coordinate

##### bottom

`number`

defines the viewport bottom coordinate

##### top

`number`

defines the viewport top coordinate

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

#### Returns

`Matrix`

a new matrix as a right-handed orthographic projection matrix

***

### OrthoOffCenterRHToRef()

> `static` **OrthoOffCenterRHToRef**\<`T`\>(`left`, `right`, `bottom`, `top`, `znear`, `zfar`, `result`, `halfZRange?`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8365](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8365)

Stores a right-handed orthographic projection into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#77

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### left

`number`

defines the viewport left coordinate

##### right

`number`

defines the viewport right coordinate

##### bottom

`number`

defines the viewport bottom coordinate

##### top

`number`

defines the viewport top coordinate

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane

##### result

`T`

defines the target matrix

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

#### Returns

`T`

result input

***

### PerspectiveFovLH()

> `static` **PerspectiveFovLH**(`fov`, `aspect`, `znear`, `zfar`, `halfZRange?`, `projectionPlaneTilt?`, `reverseDepthBufferMode?`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8468](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8468)

Creates a left-handed perspective projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#78

#### Parameters

##### fov

`number`

defines the horizontal field of view

##### aspect

`number`

defines the aspect ratio

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane. If 0, assume we are in "infinite zfar" mode

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

##### projectionPlaneTilt?

`number` = `0`

optional tilt angle of the projection plane around the X axis (horizontal)

##### reverseDepthBufferMode?

`boolean` = `false`

true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function)

#### Returns

`Matrix`

a new matrix as a left-handed perspective projection matrix

***

### PerspectiveFovLHToRef()

> `static` **PerspectiveFovLHToRef**\<`T`\>(`fov`, `aspect`, `znear`, `zfar`, `result`, `isVerticalFovFixed?`, `halfZRange?`, `projectionPlaneTilt?`, `reverseDepthBufferMode?`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8496](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8496)

Stores a left-handed perspective projection into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#81

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### fov

`number`

defines the horizontal field of view

##### aspect

`number`

defines the aspect ratio

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane. If 0, assume we are in "infinite zfar" mode

##### result

`T`

defines the target matrix

##### isVerticalFovFixed?

`boolean` = `true`

defines it the fov is vertically fixed (default) or horizontally

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

##### projectionPlaneTilt?

`number` = `0`

optional tilt angle of the projection plane around the X axis (horizontal)

##### reverseDepthBufferMode?

`boolean` = `false`

true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function)

#### Returns

`T`

result input

***

### PerspectiveFovReverseLHToRef()

> `static` **PerspectiveFovReverseLHToRef**\<`T`\>(`fov`, `aspect`, `znear`, `zfar`, `result`, `isVerticalFovFixed?`, `halfZRange?`, `projectionPlaneTilt?`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8540](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8540)

Stores a left-handed perspective projection into a given matrix with depth reversed
Example Playground - https://playground.babylonjs.com/#AV9X17#89

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### fov

`number`

defines the horizontal field of view

##### aspect

`number`

defines the aspect ratio

##### znear

`number`

defines the near clip plane

##### zfar

`number`

not used as infinity is used as far clip

##### result

`T`

defines the target matrix

##### isVerticalFovFixed?

`boolean` = `true`

defines it the fov is vertically fixed (default) or horizontally

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

##### projectionPlaneTilt?

`number` = `0`

optional tilt angle of the projection plane around the X axis (horizontal)

#### Returns

`T`

result input

***

### PerspectiveFovReverseRHToRef()

> `static` **PerspectiveFovReverseRHToRef**\<`T`\>(`fov`, `aspect`, `znear`, `zfar`, `result`, `isVerticalFovFixed?`, `halfZRange?`, `projectionPlaneTilt?`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8652](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8652)

Stores a right-handed perspective projection into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#90

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### fov

`number`

defines the horizontal field of view

##### aspect

`number`

defines the aspect ratio

##### znear

`number`

defines the near clip plane

##### zfar

`number`

not used as infinity is used as far clip

##### result

`T`

defines the target matrix

##### isVerticalFovFixed?

`boolean` = `true`

defines it the fov is vertically fixed (default) or horizontally

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

##### projectionPlaneTilt?

`number` = `0`

optional tilt angle of the projection plane around the X axis (horizontal)

#### Returns

`T`

result input

***

### PerspectiveFovRH()

> `static` **PerspectiveFovRH**(`fov`, `aspect`, `znear`, `zfar`, `halfZRange?`, `projectionPlaneTilt?`, `reverseDepthBufferMode?`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8575](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8575)

Creates a right-handed perspective projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#83

#### Parameters

##### fov

`number`

defines the horizontal field of view

##### aspect

`number`

defines the aspect ratio

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane. If 0, assume we are in "infinite zfar" mode

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

##### projectionPlaneTilt?

`number` = `0`

optional tilt angle of the projection plane around the X axis (horizontal)

##### reverseDepthBufferMode?

`boolean` = `false`

true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function)

#### Returns

`Matrix`

a new matrix as a right-handed perspective projection matrix

***

### PerspectiveFovRHToRef()

> `static` **PerspectiveFovRHToRef**\<`T`\>(`fov`, `aspect`, `znear`, `zfar`, `result`, `isVerticalFovFixed?`, `halfZRange?`, `projectionPlaneTilt?`, `reverseDepthBufferMode?`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8603](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8603)

Stores a right-handed perspective projection into a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#84

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### fov

`number`

defines the horizontal field of view

##### aspect

`number`

defines the aspect ratio

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane. If 0, assume we are in "infinite zfar" mode

##### result

`T`

defines the target matrix

##### isVerticalFovFixed?

`boolean` = `true`

defines it the fov is vertically fixed (default) or horizontally

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

##### projectionPlaneTilt?

`number` = `0`

optional tilt angle of the projection plane around the X axis (horizontal)

##### reverseDepthBufferMode?

`boolean` = `false`

true to indicate that we are in a reverse depth buffer mode (meaning znear and zfar have been inverted when calling the function)

#### Returns

`T`

result input

***

### PerspectiveLH()

> `static` **PerspectiveLH**(`width`, `height`, `znear`, `zfar`, `halfZRange?`, `projectionPlaneTilt?`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8434](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8434)

Creates a left-handed perspective projection matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#85

#### Parameters

##### width

`number`

defines the viewport width

##### height

`number`

defines the viewport height

##### znear

`number`

defines the near clip plane

##### zfar

`number`

defines the far clip plane

##### halfZRange?

`boolean`

true to generate NDC coordinates between 0 and 1 instead of -1 and 1 (default: false)

##### projectionPlaneTilt?

`number` = `0`

optional tilt angle of the projection plane around the X axis (horizontal)

#### Returns

`Matrix`

a new matrix as a left-handed perspective projection matrix

***

### Reflection()

> `static` **Reflection**(`plane`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8801](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8801)

Computes a reflection matrix from a plane
Example Playground - https://playground.babylonjs.com/#AV9X17#87

#### Parameters

##### plane

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IPlaneLike`\>

defines the reflection plane

#### Returns

`Matrix`

a new matrix

***

### ReflectionToRef()

> `static` **ReflectionToRef**\<`T`\>(`plane`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8814](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8814)

Computes a reflection matrix from a plane
Example Playground - https://playground.babylonjs.com/#AV9X17#88

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### plane

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`IPlaneLike`\>

defines the reflection plane

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### RotationAlignToRef()

> `static` **RotationAlignToRef**\<`T`\>(`from`, `to`, `result`, `useYAxisForCoplanar?`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7779](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7779)

Takes normalised vectors and returns a rotation matrix to align "from" with "to".
Taken from http://www.iquilezles.org/www/articles/noacos/noacos.htm
Example Playground - https://playground.babylonjs.com/#AV9X17#93

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### from

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the vector to align

##### to

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the vector to align to

##### result

`T`

defines the target matrix

##### useYAxisForCoplanar?

`boolean` = `false`

defines a boolean indicating that we should favor Y axis for coplanar vectors (default is false)

#### Returns

`T`

result input

***

### RotationAxis()

> `static` **RotationAxis**(`axis`, `angle`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7724](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7724)

Creates a new rotation matrix for "angle" radians around the given axis
Example Playground - https://playground.babylonjs.com/#AV9X17#96

#### Parameters

##### axis

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the axis to use

##### angle

`number`

defines the angle (in radians) to use

#### Returns

`Matrix`

the new matrix

***

### RotationAxisToRef()

> `static` **RotationAxisToRef**\<`T`\>(`axis`, `angle`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7738](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7738)

Creates a new rotation matrix for "angle" radians around the given axis and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#94

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### axis

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<[`Vector3`](Vector3.md)\>

defines the axis to use

##### angle

`number`

defines the angle (in radians) to use

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### RotationX()

> `static` **RotationX**(`angle`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7627](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7627)

Creates a new rotation matrix for "angle" radians around the X axis
Example Playground - https://playground.babylonjs.com/#AV9X17#97

#### Parameters

##### angle

`number`

defines the angle (in radians) to use

#### Returns

`Matrix`

the new matrix

***

### RotationXToRef()

> `static` **RotationXToRef**\<`T`\>(`angle`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7652](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7652)

Creates a new rotation matrix for "angle" radians around the X axis and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#98

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### angle

`number`

defines the angle (in radians) to use

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### RotationY()

> `static` **RotationY**(`angle`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7667](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7667)

Creates a new rotation matrix for "angle" radians around the Y axis
Example Playground - https://playground.babylonjs.com/#AV9X17#99

#### Parameters

##### angle

`number`

defines the angle (in radians) to use

#### Returns

`Matrix`

the new matrix

***

### RotationYawPitchRoll()

> `static` **RotationYawPitchRoll**(`yaw`, `pitch`, `roll`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7831](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7831)

Creates a rotation matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#103
Example Playground - https://playground.babylonjs.com/#AV9X17#105

#### Parameters

##### yaw

`number`

defines the yaw angle in radians (Y axis)

##### pitch

`number`

defines the pitch angle in radians (X axis)

##### roll

`number`

defines the roll angle in radians (Z axis)

#### Returns

`Matrix`

the new rotation matrix

***

### RotationYawPitchRollToRef()

> `static` **RotationYawPitchRollToRef**\<`T`\>(`yaw`, `pitch`, `roll`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7846](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7846)

Creates a rotation matrix and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#104

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### yaw

`number`

defines the yaw angle in radians (Y axis)

##### pitch

`number`

defines the pitch angle in radians (X axis)

##### roll

`number`

defines the roll angle in radians (Z axis)

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### RotationYToRef()

> `static` **RotationYToRef**\<`T`\>(`angle`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7680](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7680)

Creates a new rotation matrix for "angle" radians around the Y axis and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#100

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### angle

`number`

defines the angle (in radians) to use

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### RotationZ()

> `static` **RotationZ**(`angle`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7695](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7695)

Creates a new rotation matrix for "angle" radians around the Z axis
Example Playground - https://playground.babylonjs.com/#AV9X17#101

#### Parameters

##### angle

`number`

defines the angle (in radians) to use

#### Returns

`Matrix`

the new matrix

***

### RotationZToRef()

> `static` **RotationZToRef**\<`T`\>(`angle`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7708](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7708)

Creates a new rotation matrix for "angle" radians around the Z axis and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#102

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### angle

`number`

defines the angle (in radians) to use

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### Scaling()

> `static` **Scaling**(`x`, `y`, `z`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7860](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7860)

Creates a scaling matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#107

#### Parameters

##### x

`number`

defines the scale factor on X axis

##### y

`number`

defines the scale factor on Y axis

##### z

`number`

defines the scale factor on Z axis

#### Returns

`Matrix`

the new matrix

***

### ScalingToRef()

> `static` **ScalingToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7875](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7875)

Creates a scaling matrix and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#108

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### x

`number`

defines the scale factor on X axis

##### y

`number`

defines the scale factor on Y axis

##### z

`number`

defines the scale factor on Z axis

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### Translation()

> `static` **Translation**(`x`, `y`, `z`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7890](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7890)

Creates a translation matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#109

#### Parameters

##### x

`number`

defines the translation on X axis

##### y

`number`

defines the translation on Y axis

##### z

`number`

defines the translationon Z axis

#### Returns

`Matrix`

the new matrix

***

### TranslationToRef()

> `static` **TranslationToRef**\<`T`\>(`x`, `y`, `z`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7905](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7905)

Creates a translation matrix and stores it in a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#110

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### x

`number`

defines the translation on X axis

##### y

`number`

defines the translation on Y axis

##### z

`number`

defines the translationon Z axis

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### Transpose()

> `static` **Transpose**(`matrix`): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8736](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8736)

Compute the transpose of a given matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#111

#### Parameters

##### matrix

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the matrix to transpose

#### Returns

`Matrix`

the new matrix

***

### TransposeToRef()

> `static` **TransposeToRef**\<`T`\>(`matrix`, `result`): `T`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:8749](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L8749)

Compute the transpose of a matrix and store it in a target matrix
Example Playground - https://playground.babylonjs.com/#AV9X17#112

#### Type Parameters

##### T

`T` *extends* `Matrix`

#### Parameters

##### matrix

[`DeepImmutable`](../type-aliases/DeepImmutable.md)\<`Matrix`\>

defines the matrix to transpose

##### result

`T`

defines the target matrix

#### Returns

`T`

result input

***

### Zero()

> `static` **Zero**(): `Matrix`

Defined in: [packages/dev/core/src/Maths/math.vector.pure.ts:7615](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/math.vector.pure.ts#L7615)

Creates a new zero matrix

#### Returns

`Matrix`

a new zero matrix
