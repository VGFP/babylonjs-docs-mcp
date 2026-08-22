[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / EnvironmentTextureSpecularInfoV1

# Interface: EnvironmentTextureSpecularInfoV1

Defined in: [packages/dev/core/src/Misc/environmentTextureTools.pure.ts:131](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L131)

Defines the specular data enclosed in the file.
This corresponds to the version 1 of the data.

## Properties

### lodGenerationScale

> **lodGenerationScale**: `number`

Defined in: [packages/dev/core/src/Misc/environmentTextureTools.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L140)

Defines the scale applied to environment texture. This manages the range of LOD level used for IBL according to the roughness.

***

### mipmaps

> **mipmaps**: `BufferImageData`[]

Defined in: [packages/dev/core/src/Misc/environmentTextureTools.pure.ts:135](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/environmentTextureTools.pure.ts#L135)

This contains all the images data needed to reconstruct the cubemap.
