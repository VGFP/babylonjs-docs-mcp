[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ImageProcessingPostProcessOptions

# Type Alias: ImageProcessingPostProcessOptions

> **ImageProcessingPostProcessOptions** = [`PostProcessOptions`](PostProcessOptions.md) & `object`

Defined in: [packages/dev/core/src/PostProcesses/imageProcessingPostProcess.ts:17](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/imageProcessingPostProcess.ts#L17)

Options used to create an `ImageProcessingPostProcess`.

## Type Declaration

### temperature?

> `optional` **temperature?**: `number`

The correlated color temperature, in Kelvin, of the illuminant to neutralize via white balance - see
`ImageProcessingConfiguration.temperature`. Providing this (or `tint`) also enables white balance.
Defaults to 6500 K.

### tint?

> `optional` **tint?**: `number`

The white balance tint offset to apply, on the green/magenta axis - see `ImageProcessingConfiguration.tint`.
Providing this (or `temperature`) also enables white balance. Defaults to 0 (no tint offset).
