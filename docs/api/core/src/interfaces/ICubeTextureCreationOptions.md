[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICubeTextureCreationOptions

# Interface: ICubeTextureCreationOptions

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:20](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L20)

Defines the available options when creating a cube texture

## Properties

### buffer?

> `optional` **buffer?**: `ArrayBufferView`\<`ArrayBufferLike`\>

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:31](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L31)

buffer to load instead of loading the data from the url

***

### createPolynomials?

> `optional` **createPolynomials?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L49)

createPolynomials defines whether or not to create polynomial harmonics from the texture data if necessary

***

### extensions?

> `optional` **extensions?**: `string`[]

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:22](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L22)

Defines the suffixes add to the picture name in case six images are in use like _px.jpg

***

### files?

> `optional` **files?**: `string`[]

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L28)

files defines the six files to load for the different faces in that order: px, py, pz, nx, ny, nz

***

### forcedExtension?

> `optional` **forcedExtension?**: `any`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:46](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L46)

forcedExtension defines the extensions to use (force a special type of file to load) in case it is different from the file name

***

### format?

> `optional` **format?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L40)

format defines the internal format to use for the texture once loaded

***

### loaderOptions?

> `optional` **loaderOptions?**: `any`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L58)

loaderOptions options to be passed to the loader

***

### lodOffset?

> `optional` **lodOffset?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:55](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L55)

lodOffset defines the offset applied to environment texture. This manages first LOD level used for IBL according to the roughness

***

### lodScale?

> `optional` **lodScale?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L52)

lodScale defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness

***

### noMipmap?

> `optional` **noMipmap?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L25)

noMipmap defines if mipmaps should be created or not

***

### onError?

> `optional` **onError?**: (`message?`, `exception?`) => `void`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:37](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L37)

onError defines a callback triggered in case of error during load

#### Parameters

##### message?

`string`

##### exception?

`any`

#### Returns

`void`

***

### onLoad?

> `optional` **onLoad?**: () => `void`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:34](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L34)

onLoad defines a callback triggered at the end of the file load if no errors occurred

#### Returns

`void`

***

### prefiltered?

> `optional` **prefiltered?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:43](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L43)

prefiltered defines whether or not the texture is created from prefiltered data

***

### sphericalPolynomialTargetSize?

> `optional` **sphericalPolynomialTargetSize?**: `number`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:64](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L64)

Target face size for spherical polynomial computation. 0 = full resolution (default).

***

### useSRGBBuffer?

> `optional` **useSRGBBuffer?**: `boolean`

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L61)

useSRGBBuffer Defines if the texture must be loaded in a sRGB GPU buffer (if supported by the GPU) (default: false)
