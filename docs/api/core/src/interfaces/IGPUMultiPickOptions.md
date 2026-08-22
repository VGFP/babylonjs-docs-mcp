[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGPUMultiPickOptions

# Interface: IGPUMultiPickOptions

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:103](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L103)

Options used to tune multi GPU picking.

## Properties

### individualReadbackAreaRatio?

> `optional` **individualReadbackAreaRatio?**: `number`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:123](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L123)

Minimum rectangle-area / individual-area ratio required before the automatic path uses individual readbacks.
This value is ignored when readbackStrategy is set to GPUMultiPickReadbackStrategy.Rectangle or GPUMultiPickReadbackStrategy.Individual.

Defaults to 16.

***

### maxIndividualReadbackCount?

> `optional` **maxIndividualReadbackCount?**: `number`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:116](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L116)

Maximum number of in-bounds points allowed for the automatic individual readback path.
This value is ignored when readbackStrategy is set to GPUMultiPickReadbackStrategy.Rectangle or GPUMultiPickReadbackStrategy.Individual.

Defaults to 32.

***

### readbackStrategy?

> `optional` **readbackStrategy?**: [`GPUMultiPickReadbackStrategy`](../enumerations/GPUMultiPickReadbackStrategy.md)

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:109](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L109)

Defines how multi pick texture readbacks should be performed.

Defaults to GPUMultiPickReadbackStrategy.Auto.
