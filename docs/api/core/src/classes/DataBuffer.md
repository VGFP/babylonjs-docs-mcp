[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DataBuffer

# Class: DataBuffer

Defined in: [packages/dev/core/src/Buffers/dataBuffer.ts:4](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/dataBuffer.ts#L4)

Class used to store gfx data (like WebGLBuffer)

## Constructors

### Constructor

> **new DataBuffer**(): `DataBuffer`

Defined in: [packages/dev/core/src/Buffers/dataBuffer.ts:33](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/dataBuffer.ts#L33)

Constructs the buffer

#### Returns

`DataBuffer`

## Properties

### capacity

> **capacity**: `number` = `0`

Defined in: [packages/dev/core/src/Buffers/dataBuffer.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/dataBuffer.ts#L12)

Gets or sets the size of the underlying buffer

***

### is32Bits

> **is32Bits**: `boolean` = `false`

Defined in: [packages/dev/core/src/Buffers/dataBuffer.ts:16](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/dataBuffer.ts#L16)

Gets or sets a boolean indicating if the buffer contains 32bits indices

***

### references

> **references**: `number` = `0`

Defined in: [packages/dev/core/src/Buffers/dataBuffer.ts:10](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/dataBuffer.ts#L10)

Gets or sets the number of objects referencing this buffer

***

### uniqueId

> `readonly` **uniqueId**: `number`

Defined in: [packages/dev/core/src/Buffers/dataBuffer.ts:28](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/dataBuffer.ts#L28)

Gets the unique id of this buffer

## Accessors

### underlyingResource

#### Get Signature

> **get** **underlyingResource**(): `any`

Defined in: [packages/dev/core/src/Buffers/dataBuffer.ts:21](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/dataBuffer.ts#L21)

Gets the underlying buffer

##### Returns

`any`
