[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GreasedLinePointsOptions

# Interface: GreasedLinePointsOptions

Defined in: [packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:93](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L93)

Options for converting the points to the internal number[][] format used by GreasedLine

## Properties

### floatArrayStride?

> `optional` **floatArrayStride?**: `number`

Defined in: [packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts:100](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GreasedLine/greasedLineBaseMesh.ts#L100)

If defined and a Float32Array is used for the points parameter,
it will create multiple disconnected lines.
This parameter defines how many entries from the array to use for one line.
One entry = 3 float values.
