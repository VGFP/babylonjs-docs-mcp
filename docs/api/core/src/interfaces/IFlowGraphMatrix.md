[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphMatrix

# Interface: IFlowGraphMatrix\<VectorType\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L14)

Interface representing a generic flow graph matrix.

BREAKING (since the KHR_interactivity work): [FlowGraphMatrix2D](../classes/FlowGraphMatrix2D.md) and [FlowGraphMatrix3D](../classes/FlowGraphMatrix3D.md)
now store their elements in column-major order, matching core [Matrix](../classes/Matrix.md) and the
glTF/KHR_interactivity convention. Previous releases stored them row-major. This changes the result
of building a matrix from a flat array (`fromArray`/`set`), of `transformVector`/`transformVectorToRef`,
and of `multiply`/`multiplyToRef` (which now computes `this * other` rather than `other * this`).
There is no compile error — graphs that relied on the old ordering or operand order get silently
different numbers, so any code constructing these from raw arrays should be re-checked.

## Type Parameters

### VectorType

`VectorType`

## Properties

### m

> **m**: `number`[]

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:18](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L18)

The matrix elements stored in column-major order.

## Methods

### add()

> **add**(`other`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:110](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L110)

Adds another matrix to this matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to add.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### addToRef()

> **addToRef**(`other`, `result`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:102](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L102)

Adds another matrix to this matrix and stores the result in a reference matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to add.

##### result

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to store the result.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### asArray()

> **asArray**(): `number`[]

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:42](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L42)

Returns the matrix elements as an array.

#### Returns

`number`[]

The matrix elements as an array.

***

### determinant()

> **determinant**(): `number`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:141](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L141)

Computes the determinant of this matrix.

#### Returns

`number`

The determinant of the matrix.

***

### divide()

> **divide**(`other`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:93](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L93)

Divides this matrix by another matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to divide by.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### divideToRef()

> **divideToRef**(`other`, `result`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:85](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L85)

Divides this matrix by another matrix and stores the result in a reference matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to divide by.

##### result

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to store the result.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### equals()

> **equals**(`other`, `epsilon?`): `boolean`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:165](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L165)

Checks if this matrix is equal to another matrix within an optional epsilon.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to compare with.

##### epsilon?

`number`

The optional epsilon for comparison.

#### Returns

`boolean`

True if the matrices are equal, false otherwise.

***

### fromArray()

> **fromArray**(`array`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:58](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L58)

Sets the matrix elements from an array.

#### Parameters

##### array

`number`[]

The array containing the matrix elements.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The updated matrix.

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:156](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L156)

Gets the class name of this matrix.

#### Returns

`string`

The class name.

***

### inverse()

> **inverse**(): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:149](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L149)

Computes the inverse of this matrix.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The inverse of the matrix.

#### Throws

Error if the matrix is not invertible.

***

### multiply()

> **multiply**(`other`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:76](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L76)

Multiplies this matrix with another matrix.
To staz conform with the Matrix class, this does B * A

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to multiply with.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### multiplyToRef()

> **multiplyToRef**(`other`, `result`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:67](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L67)

Multiplies this matrix with another matrix and stores the result in a reference matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to multiply with.

##### result

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to store the result.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### subtract()

> **subtract**(`other`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:127](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L127)

Subtracts another matrix from this matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to subtract.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### subtractToRef()

> **subtractToRef**(`other`, `result`): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:119](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L119)

Subtracts another matrix from this matrix and stores the result in a reference matrix.

#### Parameters

##### other

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to subtract.

##### result

`IFlowGraphMatrix`\<`VectorType`\>

The matrix to store the result.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The result matrix.

***

### toArray()

> **toArray**(`emptyArray`): `number`[]

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:50](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L50)

Copies the matrix elements to an array.

#### Parameters

##### emptyArray

`number`[]

The array to copy the elements to.

#### Returns

`number`[]

The array with the matrix elements.

***

### transformVector()

> **transformVector**(`v`): `VectorType`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:26](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L26)

Transforms a vector using this matrix.

#### Parameters

##### v

`VectorType`

The vector to transform.

#### Returns

`VectorType`

The transformed vector.

***

### transformVectorToRef()

> **transformVectorToRef**(`v`, `result`): `VectorType`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L35)

Transforms a vector using this matrix and stores the result in a reference vector.

#### Parameters

##### v

`VectorType`

The vector to transform.

##### result

`VectorType`

The vector to store the result.

#### Returns

`VectorType`

The transformed vector.

***

### transpose()

> **transpose**(): `IFlowGraphMatrix`\<`VectorType`\>

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:134](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L134)

Transposes this matrix.

#### Returns

`IFlowGraphMatrix`\<`VectorType`\>

The transposed matrix.
