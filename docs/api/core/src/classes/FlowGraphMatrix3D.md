[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphMatrix3D

# Class: FlowGraphMatrix3D

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:330](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L330)

A 3x3 matrix, stored in column-major order.

BREAKING: this class was row-major in earlier releases — see [IFlowGraphMatrix](../interfaces/IFlowGraphMatrix.md) for the full
behaviour change (flat-array construction, transform, and multiply operand order).

## Implements

- [`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md)\<[`Vector3`](Vector3.md)\>

## Constructors

### Constructor

> **new FlowGraphMatrix3D**(`array?`): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:336](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L336)

#### Parameters

##### array?

`number`[] = `...`

#### Returns

`FlowGraphMatrix3D`

## Accessors

### m

#### Get Signature

> **get** **m**(): `number`[]

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:340](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L340)

The matrix elements stored in column-major order.

##### Returns

`number`[]

The matrix elements stored in column-major order.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`m`](../interfaces/IFlowGraphMatrix.md#m)

## Methods

### add()

> **add**(`other`): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:420](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L420)

Adds another matrix to this matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to add.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`add`](../interfaces/IFlowGraphMatrix.md#add)

***

### addToRef()

> **addToRef**(`other`, `result`): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:402](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L402)

Adds another matrix to this matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to add.

##### result

`FlowGraphMatrix3D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`addToRef`](../interfaces/IFlowGraphMatrix.md#addtoref)

***

### asArray()

> **asArray**(): `number`[]

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:453](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L453)

Returns the matrix elements as an array.

#### Returns

`number`[]

The matrix elements as an array.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`asArray`](../interfaces/IFlowGraphMatrix.md#asarray)

***

### determinant()

> **determinant**(): `number`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:469](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L469)

Computes the determinant of this matrix.

#### Returns

`number`

The determinant of the matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`determinant`](../interfaces/IFlowGraphMatrix.md#determinant)

***

### divide()

> **divide**(`other`): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:398](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L398)

Divides this matrix by another matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to divide by.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`divide`](../interfaces/IFlowGraphMatrix.md#divide)

***

### divideToRef()

> **divideToRef**(`other`, `result`): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:380](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L380)

Divides this matrix by another matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to divide by.

##### result

`FlowGraphMatrix3D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`divideToRef`](../interfaces/IFlowGraphMatrix.md#dividetoref)

***

### equals()

> **equals**(`other`, `epsilon?`): `boolean`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:494](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L494)

Checks if this matrix is equal to another matrix within an optional epsilon.

#### Parameters

##### other

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md)\<[`Vector3`](Vector3.md)\>

The matrix to compare with.

##### epsilon?

`number` = `0`

The optional epsilon for comparison.

#### Returns

`boolean`

True if the matrices are equal, false otherwise.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`equals`](../interfaces/IFlowGraphMatrix.md#equals)

***

### fromArray()

> **fromArray**(`array`): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:457](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L457)

Sets the matrix elements from an array.

#### Parameters

##### array

`number`[]

The array containing the matrix elements.

#### Returns

`FlowGraphMatrix3D`

The updated matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`fromArray`](../interfaces/IFlowGraphMatrix.md#fromarray)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:514](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L514)

Gets the class name of this matrix.

#### Returns

`string`

The class name.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`getClassName`](../interfaces/IFlowGraphMatrix.md#getclassname)

***

### inverse()

> **inverse**(): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:474](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L474)

Computes the inverse of this matrix.

#### Returns

`FlowGraphMatrix3D`

The inverse of the matrix.

#### Throws

Error if the matrix is not invertible.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`inverse`](../interfaces/IFlowGraphMatrix.md#inverse)

***

### multiply()

> **multiply**(`other`): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:376](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L376)

Multiplies this matrix with another matrix.
To staz conform with the Matrix class, this does B * A

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to multiply with.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`multiply`](../interfaces/IFlowGraphMatrix.md#multiply)

***

### multiplyToRef()

> **multiplyToRef**(`other`, `result`): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:356](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L356)

Multiplies this matrix with another matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to multiply with.

##### result

`FlowGraphMatrix3D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`multiplyToRef`](../interfaces/IFlowGraphMatrix.md#multiplytoref)

***

### subtract()

> **subtract**(`other`): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:442](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L442)

Subtracts another matrix from this matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to subtract.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`subtract`](../interfaces/IFlowGraphMatrix.md#subtract)

***

### subtractToRef()

> **subtractToRef**(`other`, `result`): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:424](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L424)

Subtracts another matrix from this matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix3D`

The matrix to subtract.

##### result

`FlowGraphMatrix3D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix3D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`subtractToRef`](../interfaces/IFlowGraphMatrix.md#subtracttoref)

***

### toArray()

> **toArray**(`emptyArray?`): `number`[]

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:446](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L446)

Copies the matrix elements to an array.

#### Parameters

##### emptyArray?

`number`[] = `[]`

The array to copy the elements to.

#### Returns

`number`[]

The array with the matrix elements.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`toArray`](../interfaces/IFlowGraphMatrix.md#toarray)

***

### toString()

> **toString**(): `string`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:518](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L518)

Returns a string representation of an object.

#### Returns

`string`

***

### transformVector()

> **transformVector**(`v`): [`Vector3`](Vector3.md)

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:344](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L344)

Transforms a vector using this matrix.

#### Parameters

##### v

[`Vector3`](Vector3.md)

The vector to transform.

#### Returns

[`Vector3`](Vector3.md)

The transformed vector.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`transformVector`](../interfaces/IFlowGraphMatrix.md#transformvector)

***

### transformVectorToRef()

> **transformVectorToRef**(`v`, `result`): [`Vector3`](Vector3.md)

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:348](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L348)

Transforms a vector using this matrix and stores the result in a reference vector.

#### Parameters

##### v

[`Vector3`](Vector3.md)

The vector to transform.

##### result

[`Vector3`](Vector3.md)

The vector to store the result.

#### Returns

[`Vector3`](Vector3.md)

The transformed vector.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`transformVectorToRef`](../interfaces/IFlowGraphMatrix.md#transformvectortoref)

***

### transpose()

> **transpose**(): `FlowGraphMatrix3D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:464](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L464)

Transposes this matrix.

#### Returns

`FlowGraphMatrix3D`

The transposed matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`transpose`](../interfaces/IFlowGraphMatrix.md#transpose)
