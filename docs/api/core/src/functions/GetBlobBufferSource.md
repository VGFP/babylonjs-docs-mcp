[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetBlobBufferSource

# Function: GetBlobBufferSource()

> **GetBlobBufferSource**(`view`): `BufferSource`

Defined in: [packages/dev/core/src/Buffers/bufferUtils.ts:490](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Buffers/bufferUtils.ts#L490)

Gets a BufferSource from an ArrayBufferView, ensuring that the returned ArrayBuffer is not a SharedArrayBuffer.
If the input view's buffer is a SharedArrayBuffer, a new ArrayBuffer is created and the data is copied over.

## Parameters

### view

`ArrayBufferView`

The input ArrayBufferView

## Returns

`BufferSource`

An ArrayBuffer containing the data from the view
