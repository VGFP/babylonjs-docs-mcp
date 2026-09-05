[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GenerateBase64StringFromPixelData

# Function: GenerateBase64StringFromPixelData()

> **GenerateBase64StringFromPixelData**(`pixels`, `size`, `invertY?`): [`Nullable`](../type-aliases/Nullable.md)\<`string`\>

Defined in: [packages/dev/core/src/Misc/copyTools.ts:14](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/copyTools.ts#L14)

Transform some pixel data to a base64 string

## Parameters

### pixels

`ArrayBufferView`

defines the pixel data to transform to base64

### size

[`ISize`](../interfaces/ISize.md)

defines the width and height of the (texture) data

### invertY?

`boolean` = `false`

true if the data must be inverted for the Y coordinate during the conversion

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

The base64 encoded string or null
