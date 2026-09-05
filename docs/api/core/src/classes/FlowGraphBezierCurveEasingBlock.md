[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphBezierCurveEasingBlock

# Class: FlowGraphBezierCurveEasingBlock

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts:83](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts#L83)

An easing block that generates a cubic Bézier easing function based on the data provided.

Follows CSS cubic-bezier semantics: for input progress `t`, solve the curve parameter where X
equals `t`, then use the corresponding Y coordinate as the eased output progress.

## Extends

- [`FlowGraphBlock`](FlowGraphBlock.md)

## Constructors

### Constructor

> **new FlowGraphBezierCurveEasingBlock**(`config?`): `FlowGraphBezierCurveEasingBlock`

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts:110](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts#L110)

#### Parameters

##### config?

[`IFlowGraphBlockConfiguration`](../interfaces/IFlowGraphBlockConfiguration.md)

the configuration of the block

#### Returns

`FlowGraphBezierCurveEasingBlock`

#### Overrides

`FlowGraphBlock.constructor`

## Properties

### config?

> `optional` **config?**: [`IFlowGraphBlockConfiguration`](../interfaces/IFlowGraphBlockConfiguration.md)

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts:114](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts#L114)

the configuration of the block

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`config`](FlowGraphBlock.md#config)

***

### controlPoint1

> `readonly` **controlPoint1**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`Vector2`](Vector2.md)\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts:93](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts#L93)

Input connection: Control point 1 for bezier curve.

***

### controlPoint2

> `readonly` **controlPoint2**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`Vector2`](Vector2.md)\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts:97](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts#L97)

Input connection: Control point 2 for bezier curve.

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

### easingFunction

> `readonly` **easingFunction**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<[`EasingFunction`](EasingFunction.md)\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts#L102)

Output connection: The easing function object.

***

### metadata

> **metadata**: `any`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:77](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L77)

Metadata that can be used by the block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`metadata`](FlowGraphBlock.md#metadata)

***

### mode

> `readonly` **mode**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`number`\>

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts#L88)

Input connection: The mode of the easing function.
EasingFunction.EASINGMODE_EASEIN, EasingFunction.EASINGMODE_EASEOUT, EasingFunction.EASINGMODE_EASEINOUT

***

### name

> **name**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphBlock.ts:64](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphBlock.ts#L64)

The name of the block.

#### Inherited from

[`FlowGraphBlock`](FlowGraphBlock.md).[`name`](FlowGraphBlock.md#name)

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

Defined in: [packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts:143](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/Blocks/Execution/Animation/flowGraphBezierCurveEasingBlock.pure.ts#L143)

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
