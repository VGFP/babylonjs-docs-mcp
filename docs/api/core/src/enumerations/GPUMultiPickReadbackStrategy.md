[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GPUMultiPickReadbackStrategy

# Enumeration: GPUMultiPickReadbackStrategy

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:85](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Collisions/gpuPicker.ts#L85)

Defines how multi pick texture readbacks should be performed.

## Enumeration Members

### Auto

> **Auto**: `0`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:89](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Collisions/gpuPicker.ts#L89)

Chooses between a single rectangle readback and small per-point readbacks using the thresholds in IGPUMultiPickOptions.

***

### Individual

> **Individual**: `2`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:97](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Collisions/gpuPicker.ts#L97)

Always reads each picked point independently. This minimizes transferred pixels for sparse point sets but can be slower when many points are picked.

***

### Rectangle

> **Rectangle**: `1`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:93](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Collisions/gpuPicker.ts#L93)

Always reads the full bounding rectangle of the picked points. This minimizes readback calls and is best for dense point sets.
