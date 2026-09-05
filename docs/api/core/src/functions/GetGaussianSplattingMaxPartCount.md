[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetGaussianSplattingMaxPartCount

# Function: GetGaussianSplattingMaxPartCount()

> **GetGaussianSplattingMaxPartCount**(`engine`): `number`

Defined in: [packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts:41](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/GaussianSplatting/gaussianSplattingMaterial.pure.ts#L41)

Computes the maximum number of Gaussian Splatting compound parts supported by the given engine.
The limit is derived from the engine's maximum vertex uniform vectors capability.

## Parameters

### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

The engine to compute the limit for

## Returns

`number`

The maximum number of parts supported
