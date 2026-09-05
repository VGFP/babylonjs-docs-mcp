[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CubeTextureCreateFromPrefilteredData

# Function: CubeTextureCreateFromPrefilteredData()

> **CubeTextureCreateFromPrefilteredData**(`url`, `scene`, `forcedExtension?`, `createPolynomials?`): [`CubeTexture`](../classes/CubeTexture.md)

Defined in: [packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts:545](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/cubeTexture.pure.ts#L545)

Creates and return a texture created from prefilterd data by tools like IBL Baker or Lys.

## Parameters

### url

`string`

defines the url of the prefiltered texture

### scene

[`Scene`](../classes/Scene.md)

defines the scene the texture is attached to

### forcedExtension?

`any` = `null`

defines the extension of the file if different from the url

### createPolynomials?

`boolean` = `true`

defines whether or not to create polynomial harmonics from the texture data if necessary

## Returns

[`CubeTexture`](../classes/CubeTexture.md)

the prefiltered texture
