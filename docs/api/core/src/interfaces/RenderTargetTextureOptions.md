[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RenderTargetTextureOptions

# Interface: RenderTargetTextureOptions

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L35)

Options for the RenderTargetTexture constructor

## Extended by

- [`IProceduralTextureCreationOptions`](IProceduralTextureCreationOptions.md)

## Properties

### colorAttachment?

> `optional` **colorAttachment?**: [`InternalTexture`](../classes/InternalTexture.md)

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:76](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L76)

Specifies the internal texture to use directly instead of creating one (ignores `noColorAttachment` flag when set) *

***

### creationFlags?

> `optional` **creationFlags?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:70](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L70)

specific flags to use when creating the texture (e.g., Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures)

***

### delayAllocation?

> `optional` **delayAllocation?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L64)

True (default: false) if the texture allocation should be delayed

***

### doNotChangeAspectRatio?

> `optional` **doNotChangeAspectRatio?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L40)

True (default) to not change the aspect ratio of the scene in the RTT

***

### enableClusteredLights?

> `optional` **enableClusteredLights?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:88](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L88)

True to enable clustered lights (default: false)

***

### existingObjectRenderer?

> `optional` **existingObjectRenderer?**: [`ObjectRenderer`](../classes/ObjectRenderer.md)

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:85](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L85)

If not provided (default), a new object renderer instance will be created

***

### format?

> `optional` **format?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L61)

The internal format of the buffer in the RTT (RED, RG, RGB, RGBA (default), ALPHA...)

***

### gammaSpace?

> `optional` **gammaSpace?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L82)

Defines the underlying texture texture space

***

### generateDepthBuffer?

> `optional` **generateDepthBuffer?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L52)

True (default) to generate a depth buffer

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L37)

True (default: false) if mipmaps need to be generated after render

***

### generateStencilBuffer?

> `optional` **generateStencilBuffer?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L55)

True (default: false) to generate a stencil buffer

***

### isCube?

> `optional` **isCube?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L46)

True (default: false) if a cube texture needs to be created

***

### isMulti?

> `optional` **isMulti?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L58)

True (default: false) if multiple textures need to be created (Draw Buffers)

***

### noColorAttachment?

> `optional` **noColorAttachment?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:73](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L73)

True (default: false) to indicate that no color target should be created. (e.g., if you only want to write to the depth buffer)

***

### samples?

> `optional` **samples?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L67)

Sample count to use when creating the RTT

***

### samplingMode?

> `optional` **samplingMode?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L49)

The sampling mode to be used with the render target (Trilinear (default), Linear, Nearest...)

***

### type?

> `optional` **type?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L43)

The type of the buffer in the RTT (byte (default), half float, float...)

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/renderTargetTexture.pure.ts#L79)

True (default: false) to create a SRGB texture
