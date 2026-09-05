[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICanvas

# Interface: ICanvas

Defined in: [packages/dev/core/src/Engines/ICanvas.ts:4](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/ICanvas.ts#L4)

Class used to abstract a canvas

## Properties

### height

> **height**: `number`

Defined in: [packages/dev/core/src/Engines/ICanvas.ts:13](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/ICanvas.ts#L13)

Canvas height.

***

### width

> **width**: `number`

Defined in: [packages/dev/core/src/Engines/ICanvas.ts:8](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/ICanvas.ts#L8)

Canvas width.

## Methods

### getContext()

> **getContext**(`contextType`, `contextAttributes?`): [`ICanvasRenderingContext`](ICanvasRenderingContext.md)

Defined in: [packages/dev/core/src/Engines/ICanvas.ts:21](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/ICanvas.ts#L21)

returns a drawing context on the canvas.

#### Parameters

##### contextType

`string`

context identifier.

##### contextAttributes?

`any`

context attributes.

#### Returns

[`ICanvasRenderingContext`](ICanvasRenderingContext.md)

ICanvasRenderingContext object.

***

### remove()?

> `optional` **remove**(): `void`

Defined in: [packages/dev/core/src/Engines/ICanvas.ts:34](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/ICanvas.ts#L34)

Removes the canvas from the document.
Offscreen canvases don't have the remove function, so we need to make it optional.

#### Returns

`void`

***

### toDataURL()

> **toDataURL**(`mime`): `string`

Defined in: [packages/dev/core/src/Engines/ICanvas.ts:28](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/ICanvas.ts#L28)

returns a data URI containing a representation of the image in the format specified by the type parameter.

#### Parameters

##### mime

`string`

the image format.

#### Returns

`string`

string containing the requested data URI.
