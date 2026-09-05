[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetBlobBufferSource

# Function: GetBlobBufferSource()

> **GetBlobBufferSource**(`view`): `BufferSource`

Defined in: [packages/dev/core/src/Buffers/bufferUtils.ts:490](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Buffers/bufferUtils.ts#L490)

Gets a BufferSource from an ArrayBufferView, ensuring that the returned ArrayBuffer is not a SharedArrayBuffer.
If the input view's buffer is a SharedArrayBuffer, a new ArrayBuffer is created and the data is copied over.

## Parameters

### view

`ArrayBufferView`

The input ArrayBufferView

## Returns

`BufferSource`

An ArrayBuffer containing the data from the view
