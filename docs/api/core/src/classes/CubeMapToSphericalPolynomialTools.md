[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CubeMapToSphericalPolynomialTools

# Class: CubeMapToSphericalPolynomialTools

Defined in: [packages/dev/core/src/Misc/HighDynamicRange/cubemapToSphericalPolynomial.ts:29](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/HighDynamicRange/cubemapToSphericalPolynomial.ts#L29)

Helper class dealing with the extraction of spherical polynomial dataArray
from a cube map.

## Constructors

### Constructor

> **new CubeMapToSphericalPolynomialTools**(): `CubeMapToSphericalPolynomialTools`

#### Returns

`CubeMapToSphericalPolynomialTools`

## Methods

### ConvertCubeMapTextureToSphericalPolynomial()

> `static` **ConvertCubeMapTextureToSphericalPolynomial**(`texture`): [`Nullable`](../type-aliases/Nullable.md)\<`Promise`\<[`SphericalPolynomial`](SphericalPolynomial.md)\>\>

Defined in: [packages/dev/core/src/Misc/HighDynamicRange/cubemapToSphericalPolynomial.ts:64](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/HighDynamicRange/cubemapToSphericalPolynomial.ts#L64)

Converts a texture to the according Spherical Polynomial data.
This extracts the first 3 orders only as they are the only one used in the lighting.

#### Parameters

##### texture

[`BaseTexture`](BaseTexture.md)

The texture to extract the information from.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Promise`\<[`SphericalPolynomial`](SphericalPolynomial.md)\>\>

The Spherical Polynomial data.

***

### ConvertCubeMapToSphericalPolynomial()

> `static` **ConvertCubeMapToSphericalPolynomial**(`cubeInfo`, `targetSize?`): [`SphericalPolynomial`](SphericalPolynomial.md)

Defined in: [packages/dev/core/src/Misc/HighDynamicRange/cubemapToSphericalPolynomial.ts:203](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/HighDynamicRange/cubemapToSphericalPolynomial.ts#L203)

Converts a cubemap to the according Spherical Polynomial data.
This extracts the first 3 orders only as they are the only one used in the lighting.

#### Parameters

##### cubeInfo

[`CubeMapInfo`](../interfaces/CubeMapInfo.md)

The Cube map to extract the information from.

##### targetSize?

`number` = `0`

Optional target face size for downsampling before integration. 0 = no downsampling (default).

#### Returns

[`SphericalPolynomial`](SphericalPolynomial.md)

The Spherical Polynomial data.
