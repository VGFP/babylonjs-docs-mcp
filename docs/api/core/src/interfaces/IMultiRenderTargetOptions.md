[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IMultiRenderTargetOptions

# Interface: IMultiRenderTargetOptions

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:15](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L15)

Creation options of the multi render target texture.

## Properties

### createMipMaps?

> `optional` **createMipMaps?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:19](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L19)

Specifies if mipmaps must be created. If undefined, the value from generateMipMaps is taken instead

***

### creationFlags?

> `optional` **creationFlags?**: `number`[]

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:100](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L100)

Define the creation flags of the textures (Constants.TEXTURE_CREATIONFLAG_STORAGE for storage textures, for eg)

***

### defaultType?

> `optional` **defaultType?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:67](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L67)

Define the default type of the buffers we are creating (default: Constants.TEXTURETYPE_UNSIGNED_BYTE). types[] is prioritized over defaultType if provided.

***

### depthTextureFormat?

> `optional` **depthTextureFormat?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L55)

Define depth texture format to use

***

### doNotChangeAspectRatio?

> `optional` **doNotChangeAspectRatio?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L63)

Define if aspect ratio should be adapted to the texture or stay the scene one (default: true)

***

### dontCreateTextures?

> `optional` **dontCreateTextures?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:113](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L113)

Define if the textures should not be created by the MultiRenderTarget (default: false)
If true, you will need to set the textures yourself by calling setTexture on the MultiRenderTarget.

***

### drawOnlyOnFirstAttachmentByDefault?

> `optional` **drawOnlyOnFirstAttachmentByDefault?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L75)

Defines if we should draw into all attachments or the first one only by default (default: false)

***

### faceIndex?

> `optional` **faceIndex?**: `number`[]

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:87](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L87)

Define the face index of each texture in the textures array (if applicable, given the corresponding targetType) at creation time (for Constants.TEXTURE_CUBE_MAP and .TEXTURE_CUBE_MAP_ARRAY).
Can be changed at any time by calling setLayerAndFaceIndices or setLayerAndFaceIndex

***

### formats?

> `optional` **formats?**: `number`[]

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L51)

Define the internal format of the buffer in the RTT (RED, RG, RGB, RGBA (default), ALPHA...) of all the draw buffers (render textures) we want to create

***

### generateDepthBuffer?

> `optional` **generateDepthBuffer?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L39)

Define if a depth buffer is required (default: true)

***

### generateDepthTexture?

> `optional` **generateDepthTexture?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L47)

Define if a depth texture is required instead of a depth buffer (default: false)

***

### generateMipMaps?

> `optional` **generateMipMaps?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L23)

Define if the texture needs to create mip maps after render (default: false).

***

### generateStencilBuffer?

> `optional` **generateStencilBuffer?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L43)

Define if a stencil buffer is required (default: false)

***

### label?

> `optional` **label?**: `string`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L108)

Label of the RenderTargetWrapper (used for debugging only)

***

### labels?

> `optional` **labels?**: `string`[]

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L104)

Define the names of the textures (used for debugging purpose)

***

### layerCounts?

> `optional` **layerCounts?**: `number`[]

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:96](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L96)

Define the number of layer of each texture in the textures array (if applicable, given the corresponding targetType) (for Constants.TEXTURE_3D, .TEXTURE_2D_ARRAY, and .TEXTURE_CUBE_MAP_ARRAY)

***

### layerIndex?

> `optional` **layerIndex?**: `number`[]

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:92](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L92)

Define the layer index of each texture in the textures array (if applicable, given the corresponding targetType) at creation time (for Constants.TEXTURE_3D, .TEXTURE_2D_ARRAY, and .TEXTURE_CUBE_MAP_ARRAY).
Can be changed at any time by calling setLayerAndFaceIndices or setLayerAndFaceIndex

***

### samples?

> `optional` **samples?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:71](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L71)

Defines sample count (1 by default)

***

### samplingModes?

> `optional` **samplingModes?**: `number`[]

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L31)

Define the sampling modes of all the draw buffers (render textures) we want to create

***

### targetTypes?

> `optional` **targetTypes?**: `number`[]

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:82](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L82)

Define the type of texture at each attahment index (of Constants.TEXTURE_2D, .TEXTURE_2D_ARRAY, .TEXTURE_CUBE_MAP, .TEXTURE_CUBE_MAP_ARRAY, .TEXTURE_3D).
You can also use the -1 value to indicate that no texture should be created but that you will assign a texture to that attachment index later.
Can be useful when you want to attach several layers of the same 2DArrayTexture / 3DTexture or several faces of the same CubeMapTexture: Use the setInternalTexture
method for that purpose, after the MultiRenderTarget has been created.

***

### textureCount?

> `optional` **textureCount?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:59](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L59)

Define the number of desired draw buffers (render textures). You can set it to 0 if you don't need any color attachment. (default: 1)

***

### types?

> `optional` **types?**: `number`[]

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L27)

Define the types of all the draw buffers (render textures) we want to create

***

### useSRGBBuffers?

> `optional` **useSRGBBuffers?**: `boolean`[]

Defined in: [packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/multiRenderTarget.pure.ts#L35)

Define if sRGB format should be used for each of the draw buffers (render textures) we want to create
