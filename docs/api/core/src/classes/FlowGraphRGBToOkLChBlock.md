[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphRGBToOkLChBlock

# Class: FlowGraphRGBToOkLChBlock

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1427](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1427)

Block that converts a linear sRGB color (r, g, b) to OkLCh (l, c, h). Hue is in radians.

## Extends

- [`FlowGraphBlock`](FlowGraphBlock.md)

## Constructors

### Constructor

> **new FlowGraphRGBToOkLChBlock**(`config?`): `FlowGraphRGBToOkLChBlock`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1453](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1453)

#### Parameters

##### config?

[`IFlowGraphBlockConfiguration`](../interfaces/IFlowGraphBlockConfiguration.md)

#### Returns

`FlowGraphRGBToOkLChBlock`

#### Overrides

`FlowGraphBlock.constructor`

## Properties

### b

> `readonly` **b**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1439](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1439)

Input connection: the linear blue component.

***

### c

> `readonly` **c**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1447](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1447)

Output connection: the OkLCh chroma.

***

### config?

> `optional` **config?**: [`IFlowGraphBlockConfiguration`](../interfaces/IFlowGraphBlockConfiguration.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:87](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L87)

the configuration of the block

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`config`](FlowGraphBlock.md#config)

***

### dataInputs

> **dataInputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:68](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L68)

The data inputs of the block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`dataInputs`](FlowGraphBlock.md#datainputs)

***

### dataOutputs

> **dataOutputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[]

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:72](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L72)

The data outputs of the block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`dataOutputs`](FlowGraphBlock.md#dataoutputs)

***

### g

> `readonly` **g**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1435](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1435)

Input connection: the linear green component.

***

### h

> `readonly` **h**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1451](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1451)

Output connection: the OkLCh hue, in radians.

***

### l

> `readonly` **l**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1443](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1443)

Output connection: the OkLCh lightness.

***

### metadata

> **metadata**: `any`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

Metadata that can be used by the block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`metadata`](FlowGraphBlock.md#metadata)

***

### name

> **name**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L64)

The name of the block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`name`](FlowGraphBlock.md#name)

***

### r

> `readonly` **r**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1431](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1431)

Input connection: the linear red component.

***

### uniqueId

> **uniqueId**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:60](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L60)

A randomly generated GUID for each block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`uniqueId`](FlowGraphBlock.md#uniqueid)

## Methods

### deserialize()

> **deserialize**(`_serializationObject`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:181](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L181)

Deserializes this block

#### Parameters

##### \_serializationObject

[`ISerializedFlowGraphBlock`](../interfaces/ISerializedFlowGraphBlock.md)

the object to deserialize from

#### Returns

`void`

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`deserialize`](FlowGraphBlock.md#deserialize)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts:1470](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Data/Math/flowGraphMathBlocks.pure.ts#L1470)

Gets the class name of this block

#### Returns

`string`

the class name

#### Overrides

[`FlowGraphBlock`](FlowGraphBlock.md).[`getClassName`](FlowGraphBlock.md#getclassname)

***

### getDataInput()

> **getDataInput**(`name`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:134](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L134)

Given the name of a data input, returns the connection if it exists

#### Parameters

##### name

`string`

the name of the input

#### Returns

[`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

the connection if it exists, undefined otherwise

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`getDataInput`](FlowGraphBlock.md#getdatainput)

***

### getDataOutput()

> **getDataOutput**(`name`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:143](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L143)

Given the name of a data output, returns the connection if it exists

#### Parameters

##### name

`string`

the name of the output

#### Returns

[`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\> \| `undefined`

the connection if it exists, undefined otherwise

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`getDataOutput`](FlowGraphBlock.md#getdataoutput)

***

### registerDataInput()

> **registerDataInput**\<`T`\>(`name`, `richType`, `defaultValue?`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:110](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L110)

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

[`FlowGraphBlock`](FlowGraphBlock.md).[`registerDataInput`](FlowGraphBlock.md#registerdatainput)

***

### registerDataOutput()

> **registerDataOutput**\<`T`\>(`name`, `richType`, `defaultValue?`): [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`T`\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:123](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L123)

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

[`FlowGraphBlock`](FlowGraphBlock.md).[`registerDataOutput`](FlowGraphBlock.md#registerdataoutput)

***

### serialize()

> **serialize**(`serializationObject?`, `_valueSerializeFunction?`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:152](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L152)

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

[`FlowGraphBlock`](FlowGraphBlock.md).[`serialize`](FlowGraphBlock.md#serialize)
