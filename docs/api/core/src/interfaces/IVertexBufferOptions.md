[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IVertexBufferOptions

# Interface: IVertexBufferOptions

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:289](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L289)

Options to be used when creating a vertex buffer

## Properties

### divisor?

> `optional` **divisor?**: `number`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:329](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L329)

defines the instance divisor to use (default: 1, only used if instanced is true)

***

### instanced?

> `optional` **instanced?**: `boolean`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:305](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L305)

whether the buffer is instanced (default: false)

***

### label?

> `optional` **label?**: `string`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:337](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L337)

label to use for this vertex buffer (debugging purpose)

***

### normalized?

> `optional` **normalized?**: `boolean`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:321](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L321)

whether the data contains normalized data (default: false)

***

### offset?

> `optional` **offset?**: `number`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:309](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L309)

the offset of the data (default: 0)

***

### postponeInternalCreation?

> `optional` **postponeInternalCreation?**: `boolean`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L297)

whether to postpone creating the internal WebGL buffer (default: false)

***

### size?

> `optional` **size?**: `number`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:313](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L313)

the number of components (will be automatically computed from the kind parameter if not specified)

***

### stride?

> `optional` **stride?**: `number`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:301](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L301)

the stride (will be automatically computed from the kind parameter if not specified)

***

### takeBufferOwnership?

> `optional` **takeBufferOwnership?**: `boolean`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:333](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L333)

defines if the buffer should be released when the vertex buffer is disposed (default: false)

***

### type?

> `optional` **type?**: `number`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:317](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L317)

the type of the component (will be deduce from the data parameter if not specified)

***

### updatable?

> `optional` **updatable?**: `boolean`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:293](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L293)

whether the data is updatable (default: false)

***

### useBytes?

> `optional` **useBytes?**: `boolean`

Defined in: [packages/dev/core/src/Buffers/buffer.pure.ts:325](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/buffer.pure.ts#L325)

set to true if stride and offset are in bytes (default: false)
