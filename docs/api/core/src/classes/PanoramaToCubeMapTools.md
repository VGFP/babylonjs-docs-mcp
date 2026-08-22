[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PanoramaToCubeMapTools

# Class: PanoramaToCubeMapTools

Defined in: [packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:76](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L76)

Helper class useful to convert panorama picture to their cubemap representation in 6 faces.

## Constructors

### Constructor

> **new PanoramaToCubeMapTools**(): `PanoramaToCubeMapTools`

#### Returns

`PanoramaToCubeMapTools`

## Methods

### ConvertPanoramaToCubemap()

> `static` **ConvertPanoramaToCubemap**(`float32Array`, `inputWidth`, `inputHeight`, `size`, `supersample?`, `invertY?`): [`CubeMapInfo`](../interfaces/CubeMapInfo.md)

Defined in: [packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts:95](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/HighDynamicRange/panoramaToCubemap.ts#L95)

Converts a panorama stored in RGB right to left up to down format into a cubemap (6 faces).

#### Parameters

##### float32Array

`Float32Array`

The source data.

##### inputWidth

`number`

The width of the input panorama.

##### inputHeight

`number`

The height of the input panorama.

##### size

`number`

The willing size of the generated cubemap (each faces will be size * size pixels)

##### supersample?

`boolean` = `false`

enable supersampling the cubemap

##### invertY?

`boolean` = `true`

defines if the Y axis must be inverted

#### Returns

[`CubeMapInfo`](../interfaces/CubeMapInfo.md)

The cubemap data
