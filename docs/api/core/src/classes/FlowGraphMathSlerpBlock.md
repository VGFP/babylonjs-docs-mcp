[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphMathSlerpBlock

# Class: FlowGraphMathSlerpBlock

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:728](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L728)

Spherical linear interpolation between two unit quaternions, matching the
quaternion slerp operation. The two inputs are treated as
Babylon `Quaternion` values regardless of their concrete class (the spec
defines them as `float4`), and the output is a `Quaternion`.

The underlying implementation is `Quaternion.Slerp`, whose algorithm matches
the spec step-for-step (dot product, conditional sign-flip on `b`, sin-based
weighting, and a near-identity short-circuit to a linear blend).

## Extends

- `FlowGraphTernaryOperationBlock`\<[`Quaternion`](Quaternion.md), [`Quaternion`](Quaternion.md), `number`, [`Quaternion`](Quaternion.md)\>

## Constructors

### Constructor

> **new FlowGraphMathSlerpBlock**(`config?`): `FlowGraphMathSlerpBlock`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:729](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L729)

#### Parameters

##### config?

[`IFlowGraphBlockConfiguration`](../interfaces/IFlowGraphBlockConfiguration.md)

#### Returns

`FlowGraphMathSlerpBlock`

#### Overrides

`FlowGraphTernaryOperationBlock<Quaternion, Quaternion, number, Quaternion>.constructor`

## Properties

### a

> **a**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.ts:14](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.ts#L14)

First input of this block

#### Inherited from

`FlowGraphTernaryOperationBlock.a`

***

### b

> **b**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.ts:18](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.ts#L18)

Second input of this block

#### Inherited from

`FlowGraphTernaryOperationBlock.b`

***

### c

> **c**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.ts:22](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.ts#L22)

Third input of this block

#### Inherited from

`FlowGraphTernaryOperationBlock.c`

***

### config?

> `optional` **config?**: [`IFlowGraphBlockConfiguration`](../interfaces/IFlowGraphBlockConfiguration.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:87](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L87)

the configuration of the block

#### Inherited from

`FlowGraphTernaryOperationBlock.config`

***

### dataInputs

> **dataInputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L68)

The data inputs of the block.

#### Inherited from

`FlowGraphTernaryOperationBlock.dataInputs`

***

### dataOutputs

> **dataOutputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L72)

The data outputs of the block.

#### Inherited from

`FlowGraphTernaryOperationBlock.dataOutputs`

***

### isValid

> `readonly` **isValid**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`boolean`\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.ts:22](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.ts#L22)

Output connection: Whether the value is valid.

#### Inherited from

`FlowGraphTernaryOperationBlock.isValid`

***

### metadata

> **metadata**: `any`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

Metadata that can be used by the block.

#### Inherited from

`FlowGraphTernaryOperationBlock.metadata`

***

### name

> **name**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L64)

The name of the block.

#### Inherited from

`FlowGraphTernaryOperationBlock.name`

***

### uniqueId

> **uniqueId**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L60)

A randomly generated GUID for each block.

#### Inherited from

`FlowGraphTernaryOperationBlock.uniqueId`

***

### value

> `readonly` **value**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`Quaternion`](Quaternion.md)\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.ts:17](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphCachedOperationBlock.ts#L17)

The output of the operation

#### Inherited from

`FlowGraphTernaryOperationBlock.value`

## Methods

### \_doOperation()

> **\_doOperation**(`context`): [`Quaternion`](Quaternion.md)

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.ts:44](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.ts#L44)

the operation performed by this block

#### Parameters

##### context

[`FlowGraphContext`](FlowGraphContext.md)

the graph context

#### Returns

[`Quaternion`](Quaternion.md)

the result of the operation

#### Inherited from

`FlowGraphTernaryOperationBlock._doOperation`

***

### deserialize()

> **deserialize**(`_serializationObject`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L181)

Deserializes this block

#### Parameters

##### \_serializationObject

[`ISerializedFlowGraphBlock`](../interfaces/ISerializedFlowGraphBlock.md)

the object to deserialize from

#### Returns

`void`

#### Inherited from

`FlowGraphTernaryOperationBlock.deserialize`

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.ts:52](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/Blocks/Data/flowGraphTernaryOperationBlock.ts#L52)

Gets the class name of this block

#### Returns

`string`

the class name

#### Inherited from

`FlowGraphTernaryOperationBlock.getClassName`

***

### getDataInput()

> **getDataInput**(`name`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:134](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L134)

Given the name of a data input, returns the connection if it exists

#### Parameters

##### name

`string`

the name of the input

#### Returns

[`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

the connection if it exists, undefined otherwise

#### Inherited from

`FlowGraphTernaryOperationBlock.getDataInput`

***

### getDataOutput()

> **getDataOutput**(`name`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L143)

Given the name of a data output, returns the connection if it exists

#### Parameters

##### name

`string`

the name of the output

#### Returns

[`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

the connection if it exists, undefined otherwise

#### Inherited from

`FlowGraphTernaryOperationBlock.getDataOutput`

***

### registerDataInput()

> **registerDataInput**\<`T`\>(`name`, `richType`, `defaultValue?`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:110](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L110)

Registers a data input on the block.

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

the name of the input

##### richType

[`RichType`](RichType.md)\<`T`\>

the type of the input

##### defaultValue?

`T`

optional default value of the input. If not set, the rich type's default value will be used.

#### Returns

[`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

the created connection

#### Inherited from

`FlowGraphTernaryOperationBlock.registerDataInput`

***

### registerDataOutput()

> **registerDataOutput**\<`T`\>(`name`, `richType`, `defaultValue?`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L123)

Registers a data output on the block.

#### Type Parameters

##### T

`T`

#### Parameters

##### name

`string`

the name of the input

##### richType

[`RichType`](RichType.md)\<`T`\>

the type of the input

##### defaultValue?

`T`

optional default value of the input. If not set, the rich type's default value will be used.

#### Returns

[`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

the created connection

#### Inherited from

`FlowGraphTernaryOperationBlock.registerDataOutput`

***

### serialize()

> **serialize**(`serializationObject?`, `_valueSerializeFunction?`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:152](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L152)

Serializes this block

#### Parameters

##### serializationObject?

`any` = `{}`

the object to serialize to

##### \_valueSerializeFunction?

(`key`, `value`, `serializationObject`) => `any`

a function that serializes a specific value

#### Returns

`void`

#### Inherited from

`FlowGraphTernaryOperationBlock.serialize`
