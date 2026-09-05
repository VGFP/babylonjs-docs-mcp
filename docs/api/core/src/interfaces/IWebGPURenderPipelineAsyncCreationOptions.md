[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebGPURenderPipelineAsyncCreationOptions

# Interface: IWebGPURenderPipelineAsyncCreationOptions

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:210](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L210)

Options for pre-warming a render pipeline asynchronously.
All render state properties are optional and default to the most common opaque rendering state.

## Properties

### alphaMode?

> `optional` **alphaMode?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L239)

The alpha blending mode (e.g. Constants.ALPHA_DISABLE, Constants.ALPHA_COMBINE).
Defaults to Constants.ALPHA_DISABLE.

***

### colorFormat?

> `optional` **colorFormat?**: `GPUTextureFormat`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:230](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L230)

The color render target format. Defaults to the engine's current canvas color format.

***

### cullEnabled?

> `optional` **cullEnabled?**: `boolean`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:255](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L255)

Whether back-face culling is enabled. Defaults to true.

***

### cullFace?

> `optional` **cullFace?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:259](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L259)

Which face to cull (1 = back, 2 = front). Defaults to 1 (back).

***

### depthCompare?

> `optional` **depthCompare?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:251](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L251)

The depth comparison function (e.g. Constants.LEQUAL). Defaults to Constants.LEQUAL.

***

### depthStencilFormat?

> `optional` **depthStencilFormat?**: `GPUTextureFormat`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:234](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L234)

The depth-stencil render target format. Defaults to the engine's current depth format.

***

### depthTest?

> `optional` **depthTest?**: `boolean`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:247](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L247)

Whether depth testing is enabled. Defaults to true.

***

### depthWrite?

> `optional` **depthWrite?**: `boolean`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:243](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L243)

Whether depth writing is enabled. Defaults to true.

***

### effect

> **effect**: [`Effect`](../classes/Effect.md)

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:214](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L214)

The compiled effect (shader stages) for the pipeline.

***

### fillMode?

> `optional` **fillMode?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:222](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L222)

The fill mode / primitive topology. Defaults to Constants.MATERIAL_TriangleFillMode.

***

### frontFace?

> `optional` **frontFace?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:263](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L263)

Front face winding order (1 = CCW, 2 = CW). Defaults to 2 (CW).

***

### mesh

> **mesh**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:218](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L218)

The mesh whose vertex buffer layout to use.

***

### sampleCount?

> `optional` **sampleCount?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:226](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L226)

The MSAA sample count. Defaults to the engine's current sample count.

***

### stencilEnabled?

> `optional` **stencilEnabled?**: `boolean`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:271](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L271)

Whether stencil testing is enabled. Defaults to false.

***

### writeMask?

> `optional` **writeMask?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L267)

Color channel write mask (bitmask of RGBA channels). Defaults to 0xF (all channels).
