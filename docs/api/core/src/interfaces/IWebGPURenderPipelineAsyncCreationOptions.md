[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebGPURenderPipelineAsyncCreationOptions

# Interface: IWebGPURenderPipelineAsyncCreationOptions

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:209](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L209)

Options for pre-warming a render pipeline asynchronously.
All render state properties are optional and default to the most common opaque rendering state.

## Properties

### alphaMode?

> `optional` **alphaMode?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:238](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L238)

The alpha blending mode (e.g. Constants.ALPHA_DISABLE, Constants.ALPHA_COMBINE).
Defaults to Constants.ALPHA_DISABLE.

***

### colorFormat?

> `optional` **colorFormat?**: `GPUTextureFormat`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:229](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L229)

The color render target format. Defaults to the engine's current canvas color format.

***

### cullEnabled?

> `optional` **cullEnabled?**: `boolean`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:254](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L254)

Whether back-face culling is enabled. Defaults to true.

***

### cullFace?

> `optional` **cullFace?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:258](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L258)

Which face to cull (1 = back, 2 = front). Defaults to 1 (back).

***

### depthCompare?

> `optional` **depthCompare?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L250)

The depth comparison function (e.g. Constants.LEQUAL). Defaults to Constants.LEQUAL.

***

### depthStencilFormat?

> `optional` **depthStencilFormat?**: `GPUTextureFormat`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L233)

The depth-stencil render target format. Defaults to the engine's current depth format.

***

### depthTest?

> `optional` **depthTest?**: `boolean`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:246](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L246)

Whether depth testing is enabled. Defaults to true.

***

### depthWrite?

> `optional` **depthWrite?**: `boolean`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:242](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L242)

Whether depth writing is enabled. Defaults to true.

***

### effect

> **effect**: [`Effect`](../classes/Effect.md)

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:213](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L213)

The compiled effect (shader stages) for the pipeline.

***

### fillMode?

> `optional` **fillMode?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:221](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L221)

The fill mode / primitive topology. Defaults to Constants.MATERIAL_TriangleFillMode.

***

### frontFace?

> `optional` **frontFace?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:262](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L262)

Front face winding order (1 = CCW, 2 = CW). Defaults to 2 (CW).

***

### mesh

> **mesh**: [`AbstractMesh`](../classes/AbstractMesh.md)

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:217](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L217)

The mesh whose vertex buffer layout to use.

***

### sampleCount?

> `optional` **sampleCount?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:225](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L225)

The MSAA sample count. Defaults to the engine's current sample count.

***

### stencilEnabled?

> `optional` **stencilEnabled?**: `boolean`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:270](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L270)

Whether stencil testing is enabled. Defaults to false.

***

### writeMask?

> `optional` **writeMask?**: `number`

Defined in: [packages/dev/core/src/Engines/webgpuEngine.pure.ts:266](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/webgpuEngine.pure.ts#L266)

Color channel write mask (bitmask of RGBA channels). Defaults to 0xF (all channels).
