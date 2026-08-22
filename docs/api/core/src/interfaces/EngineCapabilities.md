[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EngineCapabilities

# Interface: EngineCapabilities

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:5](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L5)

Interface used to describe the capabilities of the engine relatively to the current browser

## Properties

### astc

> **astc**: `any`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:51](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L51)

Defines if astc texture compression is supported

***

### blendFloat

> **blendFloat**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:91](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L91)

Defines if float color blending is supported

***

### blendMinMax

> **blendMinMax**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:112](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L112)

Defines if the blend min max extension is supported

***

### blendParametersPerTarget

> **blendParametersPerTarget**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:137](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L137)

Defines if blend parameters can be defined per target

***

### bptc

> **bptc**: `any`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:53](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L53)

Defines if bptc texture compression is supported

***

### canUseGLInstanceID

> **canUseGLInstanceID**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:114](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L114)

In some iOS + WebGL1, gl_InstanceID (and gl_InstanceIDEXT) is undefined even if instancedArrays is true. So don't use gl_InstanceID in those cases

***

### canUseGLVertexID

> **canUseGLVertexID**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:116](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L116)

Defines if gl_vertexID is available

***

### canUseTimestampForTimerQuery

> **canUseTimestampForTimerQuery**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:97](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L97)

Defines if timestamp can be used with timer query

***

### colorBufferFloat

> **colorBufferFloat**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:89](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L89)

Defines if float color buffer are supported

***

### colorBufferHalfFloat?

> `optional` **colorBufferHalfFloat?**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:93](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L93)

Defines if half float color buffer are supported

***

### depthTextureExtension

> **depthTextureExtension**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:87](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L87)

Defines if depth textures are supported

***

### disableMorphTargetTexture

> **disableMorphTargetTexture**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:129](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L129)

Defines if the morph target texture is supported.

***

### drawBuffersExtension

> **drawBuffersExtension**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:85](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L85)

Defines if draw buffers extension is supported

***

### dualSourceBlending

> **dualSourceBlending**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:139](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L139)

Defines if dual source blending is supported

***

### etc1

> **etc1**: `any`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:47](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L47)

Defines if etc1 texture compression is supported

***

### etc2

> **etc2**: `any`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:49](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L49)

Defines if etc2 texture compression is supported

***

### fragmentDepthSupported

> **fragmentDepthSupported**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:69](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L69)

Defines if depth reading in the fragment shader is supported

***

### highPrecisionShaderSupported

> **highPrecisionShaderSupported**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:67](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L67)

Defines if high precision shaders are supported

***

### instancedArrays

> **instancedArrays**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:63](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L63)

Defines if instancing is supported

***

### maxAnisotropy

> **maxAnisotropy**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:61](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L61)

Gets the maximum level of anisotropy supported

***

### maxCombinedTexturesImageUnits

> **maxCombinedTexturesImageUnits**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:11](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L11)

Maximum textures units in the entire pipeline

***

### maxCubemapTextureSize

> **maxCubemapTextureSize**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:19](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L19)

Maximum cube texture size

***

### maxDrawBuffers?

> `optional` **maxDrawBuffers?**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:17](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L17)

Maximum draw buffers

***

### maxFragmentUniformVectors

> **maxFragmentUniformVectors**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L29)

Maximum number of uniforms per fragment shader

***

### maxMSAASamples

> **maxMSAASamples**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:110](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L110)

Max number of texture samples for MSAA

***

### maxRenderTextureSize

> **maxRenderTextureSize**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:21](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L21)

Maximum render texture size

***

### maxSamples?

> `optional` **maxSamples?**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:15](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L15)

Maximum texture samples

***

### maxTexturesImageUnits

> **maxTexturesImageUnits**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:7](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L7)

Maximum textures units per fragment shader

***

### maxTextureSize

> **maxTextureSize**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:13](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L13)

Maximum texture size

***

### maxUniformBuffersPerShaderStage?

> `optional` **maxUniformBuffersPerShaderStage?**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:34](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L34)

Maximum number of uniform buffers that can be bound to a single shader stage.
Only reported by engines where this is a hard, enforced limit (WebGPU). Left undefined elsewhere.

***

### maxVaryingVectors

> **maxVaryingVectors**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:25](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L25)

Maximum number of varyings

***

### maxVertexAttribs

> **maxVertexAttribs**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:23](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L23)

Maximum number of vertex attributes

***

### maxVertexTextureImageUnits

> **maxVertexTextureImageUnits**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:9](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L9)

Maximum texture units per vertex shader

***

### maxVertexUniformVectors

> **maxVertexUniformVectors**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:27](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L27)

Maximum number of uniforms per vertex shader

***

### multiview?

> `optional` **multiview?**: `any`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:101](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L101)

Defines if multiview is supported (https://www.khronos.org/registry/webgl/extensions/WEBGL_multiview/)

***

### oculusMultiview?

> `optional` **oculusMultiview?**: `any`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:103](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L103)

Defines if oculus multiview is supported (https://developer.oculus.com/documentation/oculus-browser/latest/concepts/browser-multiview/)

***

### parallelShaderCompile?

> `optional` **parallelShaderCompile?**: `object`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:105](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L105)

Function used to let the system compiles shaders in background

#### COMPLETION\_STATUS\_KHR

> **COMPLETION\_STATUS\_KHR**: `number`

***

### pvrtc

> **pvrtc**: `any`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:45](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L45)

Defines if pvrtc texture compression is supported

***

### rg11b10ufColorRenderable

> **rg11b10ufColorRenderable**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:133](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L133)

Defines if RG11B10UFloat texture format is color renderable

***

### s3tc?

> `optional` **s3tc?**: `WEBGL_compressed_texture_s3tc`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L40)

Defines if s3tc texture compression is supported

***

### s3tc\_srgb?

> `optional` **s3tc\_srgb?**: `WEBGL_compressed_texture_s3tc_srgb`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:43](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L43)

Defines if s3tc sRGB texture compression is supported

***

### shaderFloatPrecision

> **shaderFloatPrecision**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L36)

The number of bits that can be accurately represented in shader floats

***

### standardDerivatives

> **standardDerivatives**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:38](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L38)

Defines if standard derivatives (dx/dy) are supported

***

### supportComputeShaders

> **supportComputeShaders**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:118](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L118)

Defines if compute shaders are supported by the engine

***

### supportFloatTexturesResolve

> **supportFloatTexturesResolve**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:131](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L131)

Defines if float textures like r32f, rg32f or rgba32f support being used as a resolve target

***

### supportOcclusionQuery

> **supportOcclusionQuery**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:99](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L99)

Defines if occlusion queries are supported by the engine

***

### supportReadWriteStorageTextures

> **supportReadWriteStorageTextures**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:141](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L141)

Defines if read-only and read-write storage textures are supported (WebGPU only, requires the readonly_and_readwrite_storage_textures WGSL language feature)

***

### supportSRGBBuffers

> **supportSRGBBuffers**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:120](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L120)

Defines if sRGB texture formats are supported

***

### supportTransformFeedbacks

> **supportTransformFeedbacks**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:122](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L122)

Defines if transform feedbacks are supported

***

### texelFetch

> **texelFetch**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:83](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L83)

Defines if texelFetch shader command is supported

***

### texture2DArrayMaxLayerCount

> **texture2DArrayMaxLayerCount**: `number`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:127](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L127)

Defines the maximum layer count for a 2D Texture array.

***

### textureAnisotropicFilterExtension?

> `optional` **textureAnisotropicFilterExtension?**: `EXT_texture_filter_anisotropic`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:59](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L59)

Gets the webgl extension for anisotropic filtering (null if not supported)

***

### textureFloat

> **textureFloat**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:55](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L55)

Defines if float textures are supported

***

### textureFloatLinearFiltering

> **textureFloatLinearFiltering**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:71](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L71)

Defines if float texture linear filtering is supported

***

### textureFloatRender

> **textureFloatRender**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:73](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L73)

Defines if rendering to float textures is supported

***

### textureHalfFloat

> **textureHalfFloat**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:75](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L75)

Defines if half float textures are supported

***

### textureHalfFloatLinearFiltering

> **textureHalfFloatLinearFiltering**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:77](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L77)

Defines if half float texture linear filtering is supported

***

### textureHalfFloatRender

> **textureHalfFloatRender**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:79](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L79)

Defines if rendering to half float textures is supported

***

### textureLOD

> **textureLOD**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:81](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L81)

Defines if textureLOD shader command is supported

***

### textureMaxLevel

> **textureMaxLevel**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:124](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L124)

Defines if texture max level are supported

***

### textureNorm16

> **textureNorm16**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:135](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L135)

Defines if EXT_texture_norm16 is available which enables the following texture formats: R16_EXT, RG16_EXT, RGB16_EXT, RGBA16_EXT, R16_SNORM_EXT, RG16_SNORM_EXT, RGB16_SNORM_EXT, RGBA16_SNORM_EXT

***

### timerQuery?

> `optional` **timerQuery?**: `EXT_disjoint_timer_query`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:95](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L95)

Gets disjoint timer query extension (null if not supported)

***

### uintIndices

> **uintIndices**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:65](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L65)

Defines if 32 bits indices are supported

***

### vertexArrayObject

> **vertexArrayObject**: `boolean`

Defined in: [packages/dev/core/src/Engines/engineCapabilities.ts:57](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Engines/engineCapabilities.ts#L57)

Defines if vertex array objects are supported
