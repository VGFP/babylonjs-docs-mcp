[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ThinMatrix

# Class: ThinMatrix

Defined in: [packages/dev/core/src/Maths/ThinMaths/thinMath.matrix.ts:8](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/ThinMaths/thinMath.matrix.ts#L8)

A thin matrix class that is used for size reasons.
The class is identity by default

## Constructors

### Constructor

> **new ThinMatrix**(): `ThinMatrix`

#### Returns

`ThinMatrix`

## Properties

### updateFlag

> **updateFlag**: `number` = `0`

Defined in: [packages/dev/core/src/Maths/ThinMaths/thinMath.matrix.ts:24](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/ThinMaths/thinMath.matrix.ts#L24)

Gets the update flag of the matrix which is an unique number for the matrix.
It will be incremented every time the matrix data change.
You can use it to speed the comparison between two versions of the same matrix.

#### Implementation of

`IMatrixLike.updateFlag`

## Methods

### asArray()

> **asArray**(): \[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

Defined in: [packages/dev/core/src/Maths/ThinMaths/thinMath.matrix.ts:15](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Maths/ThinMaths/thinMath.matrix.ts#L15)

Returns the matrix as a Array<number>

#### Returns

\[`number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`, `number`\]

the matrix underlying array.

#### Implementation of

`IMatrixLike.asArray`
