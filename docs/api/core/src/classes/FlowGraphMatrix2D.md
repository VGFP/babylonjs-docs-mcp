[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphMatrix2D

# Class: FlowGraphMatrix2D

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:176](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L176)

A 2x2 matrix, stored in column-major order.

BREAKING: this class was row-major in earlier releases — see [IFlowGraphMatrix](../interfaces/IFlowGraphMatrix.md) for the full
behaviour change (flat-array construction, transform, and multiply operand order).

## Implements

- [`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md)\<[`Vector2`](Vector2.md)\>

## Constructors

### Constructor

> **new FlowGraphMatrix2D**(`m?`): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:182](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L182)

#### Parameters

##### m?

`number`[] = `...`

#### Returns

`FlowGraphMatrix2D`

## Accessors

### m

#### Get Signature

> **get** **m**(): `number`[]

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:186](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L186)

The matrix elements stored in column-major order.

##### Returns

`number`[]

The matrix elements stored in column-major order.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`m`](../interfaces/IFlowGraphMatrix.md#m)

## Methods

### add()

> **add**(`other`): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:265](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L265)

Adds another matrix to this matrix.

#### Parameters

##### other

`FlowGraphMatrix2D`

The matrix to add.

#### Returns

`FlowGraphMatrix2D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`add`](../interfaces/IFlowGraphMatrix.md#add)

***

### addToRef()

> **addToRef**(`other`, `result`): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:252](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L252)

Adds another matrix to this matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix2D`

The matrix to add.

##### result

`FlowGraphMatrix2D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix2D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`addToRef`](../interfaces/IFlowGraphMatrix.md#addtoref)

***

### asArray()

> **asArray**(): `number`[]

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:200](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L200)

Returns the matrix elements as an array.

#### Returns

`number`[]

The matrix elements as an array.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`asArray`](../interfaces/IFlowGraphMatrix.md#asarray)

***

### determinant()

> **determinant**(): `number`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:291](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L291)

Computes the determinant of this matrix.

#### Returns

`number`

The determinant of the matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`determinant`](../interfaces/IFlowGraphMatrix.md#determinant)

***

### divide()

> **divide**(`other`): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:248](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L248)

Divides this matrix by another matrix.

#### Parameters

##### other

`FlowGraphMatrix2D`

The matrix to divide by.

#### Returns

`FlowGraphMatrix2D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`divide`](../interfaces/IFlowGraphMatrix.md#divide)

***

### divideToRef()

> **divideToRef**(`other`, `result`): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:235](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L235)

Divides this matrix by another matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix2D`

The matrix to divide by.

##### result

`FlowGraphMatrix2D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix2D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`divideToRef`](../interfaces/IFlowGraphMatrix.md#dividetoref)

***

### equals()

> **equals**(`other`, `epsilon?`): `boolean`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:306](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L306)

Checks if this matrix is equal to another matrix within an optional epsilon.

#### Parameters

##### other

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md)\<[`Vector2`](Vector2.md)\>

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

> **fromArray**(`array`): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:211](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L211)

Sets the matrix elements from an array.

#### Parameters

##### array

`number`[]

The array containing the matrix elements.

#### Returns

`FlowGraphMatrix2D`

The updated matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`fromArray`](../interfaces/IFlowGraphMatrix.md#fromarray)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:315](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L315)

Gets the class name of this matrix.

#### Returns

`string`

The class name.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`getClassName`](../interfaces/IFlowGraphMatrix.md#getclassname)

***

### inverse()

> **inverse**(): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:296](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L296)

Computes the inverse of this matrix.

#### Returns

`FlowGraphMatrix2D`

The inverse of the matrix.

#### Throws

Error if the matrix is not invertible.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`inverse`](../interfaces/IFlowGraphMatrix.md#inverse)

***

### multiply()

> **multiply**(`other`): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:231](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L231)

Multiplies this matrix with another matrix.
To staz conform with the Matrix class, this does B * A

#### Parameters

##### other

`FlowGraphMatrix2D`

The matrix to multiply with.

#### Returns

`FlowGraphMatrix2D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`multiply`](../interfaces/IFlowGraphMatrix.md#multiply)

***

### multiplyToRef()

> **multiplyToRef**(`other`, `result`): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:218](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L218)

Multiplies this matrix with another matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix2D`

The matrix to multiply with.

##### result

`FlowGraphMatrix2D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix2D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`multiplyToRef`](../interfaces/IFlowGraphMatrix.md#multiplytoref)

***

### subtract()

> **subtract**(`other`): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:282](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L282)

Subtracts another matrix from this matrix.

#### Parameters

##### other

`FlowGraphMatrix2D`

The matrix to subtract.

#### Returns

`FlowGraphMatrix2D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`subtract`](../interfaces/IFlowGraphMatrix.md#subtract)

***

### subtractToRef()

> **subtractToRef**(`other`, `result`): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:269](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L269)

Subtracts another matrix from this matrix and stores the result in a reference matrix.

#### Parameters

##### other

`FlowGraphMatrix2D`

The matrix to subtract.

##### result

`FlowGraphMatrix2D`

The matrix to store the result.

#### Returns

`FlowGraphMatrix2D`

The result matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`subtractToRef`](../interfaces/IFlowGraphMatrix.md#subtracttoref)

***

### toArray()

> **toArray**(`emptyArray?`): `number`[]

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:204](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L204)

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

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:319](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L319)

Returns a string representation of an object.

#### Returns

`string`

***

### transformVector()

> **transformVector**(`v`): [`Vector2`](Vector2.md)

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:190](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L190)

Transforms a vector using this matrix.

#### Parameters

##### v

[`Vector2`](Vector2.md)

The vector to transform.

#### Returns

[`Vector2`](Vector2.md)

The transformed vector.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`transformVector`](../interfaces/IFlowGraphMatrix.md#transformvector)

***

### transformVectorToRef()

> **transformVectorToRef**(`v`, `result`): [`Vector2`](Vector2.md)

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:194](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L194)

Transforms a vector using this matrix and stores the result in a reference vector.

#### Parameters

##### v

[`Vector2`](Vector2.md)

The vector to transform.

##### result

[`Vector2`](Vector2.md)

The vector to store the result.

#### Returns

[`Vector2`](Vector2.md)

The transformed vector.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`transformVectorToRef`](../interfaces/IFlowGraphMatrix.md#transformvectortoref)

***

### transpose()

> **transpose**(): `FlowGraphMatrix2D`

Defined in: [packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts:286](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/CustomTypes/flowGraphMatrix.ts#L286)

Transposes this matrix.

#### Returns

`FlowGraphMatrix2D`

The transposed matrix.

#### Implementation of

[`IFlowGraphMatrix`](../interfaces/IFlowGraphMatrix.md).[`transpose`](../interfaces/IFlowGraphMatrix.md#transpose)
