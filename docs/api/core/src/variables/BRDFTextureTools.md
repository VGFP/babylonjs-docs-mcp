[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BRDFTextureTools

# Variable: BRDFTextureTools

> `const` **BRDFTextureTools**: `object`

Defined in: [packages/dev/core/src/Misc/brdfTextureTools.ts:115](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/brdfTextureTools.ts#L115)

Class used to host texture specific utilities

## Type Declaration

### GetEnvironmentBRDFTexture

> **GetEnvironmentBRDFTexture**: (`scene`) => [`BaseTexture`](../classes/BaseTexture.md)

Gets a default environment BRDF for MS-BRDF Height Correlated BRDF

Gets a default environment BRDF for MS-BRDF Height Correlated BRDF

#### Parameters

##### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

#### Returns

[`BaseTexture`](../classes/BaseTexture.md)

the environment BRDF texture

#### Param

**scene**

defines the hosting scene

#### Returns

the environment BRDF texture

### GetEnvironmentFuzzBRDFTexture

> **GetEnvironmentFuzzBRDFTexture**: (`scene`) => [`BaseTexture`](../classes/BaseTexture.md)

Gets a default environment fuzz BRDF texture

Gets a default environment fuzz BRDF texture

#### Parameters

##### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

#### Returns

[`BaseTexture`](../classes/BaseTexture.md)

the environment fuzz BRDF texture

#### Param

**scene**

defines the hosting scene

#### Returns

the environment fuzz BRDF texture

### GetOpenPBREnvironmentBRDFTexture

> **GetOpenPBREnvironmentBRDFTexture**: (`scene`) => [`BaseTexture`](../classes/BaseTexture.md)

Gets the OpenPBR environment BRDF texture (3-channel F82 LUT)

Gets the OpenPBR environment BRDF texture (3-channel F82 LUT)

#### Parameters

##### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

#### Returns

[`BaseTexture`](../classes/BaseTexture.md)

the OpenPBR environment BRDF texture

#### Param

**scene**

defines the hosting scene

#### Returns

the OpenPBR environment BRDF texture
