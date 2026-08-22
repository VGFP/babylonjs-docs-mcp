[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphPathConverterComponent

# Class: FlowGraphPathConverterComponent

Defined in: [packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:34](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L34)

**`Experimental`**

A component that converts a path to an object accessor.

## Constructors

### Constructor

> **new FlowGraphPathConverterComponent**(`path`, `ownerBlock`): `FlowGraphPathConverterComponent`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:44](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L44)

**`Experimental`**

#### Parameters

##### path

`string`

##### ownerBlock

[`FlowGraphBlock`](FlowGraphBlock.md)

#### Returns

`FlowGraphPathConverterComponent`

## Properties

### ownerBlock

> **ownerBlock**: [`FlowGraphBlock`](FlowGraphBlock.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:46](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L46)

**`Experimental`**

***

### path

> **path**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:45](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L45)

**`Experimental`**

***

### templatedInputs

> `readonly` **templatedInputs**: [`FlowGraphDataConnection`](FlowGraphDataConnection.md)\<`any`\>[] = `[]`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:39](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L39)

**`Experimental`**

The templated inputs for the provided path. Values may be FlowGraphInteger, number, or
string (an opaque reference encoded as a JSON Pointer).

***

### templateInfos

> `readonly` **templateInfos**: `IPathTemplateInfo`[] = `[]`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:42](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L42)

**`Experimental`**

Per-template metadata (name + bracket style + input connection).

## Methods

### getAccessor()

> **getAccessor**(`pathConverter`, `context`): [`IObjectInfo`](../interfaces/IObjectInfo.md)\<[`IObjectAccessor`](../interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\>\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts:81](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphPathConverterComponent.ts#L81)

**`Experimental`**

Get the accessor for the path.

#### Parameters

##### pathConverter

[`IPathToObjectConverter`](../interfaces/IPathToObjectConverter.md)\<[`IObjectAccessor`](../interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\>\>

the path converter to use to convert the path to an object accessor.

##### context

[`FlowGraphContext`](FlowGraphContext.md)

the context to use.

#### Returns

[`IObjectInfo`](../interfaces/IObjectInfo.md)\<[`IObjectAccessor`](../interfaces/IObjectAccessor.md)\<`any`, `any`, `any`\>\>

the accessor for the path.

#### Throws

if the value for a templated input is invalid.
