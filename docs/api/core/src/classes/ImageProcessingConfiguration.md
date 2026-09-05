[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ImageProcessingConfiguration

# Class: ImageProcessingConfiguration

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L23)

This groups together the common properties used for image processing either in direct forward pass
or through post processing effect depending on the use of the image processing pipeline in your scene
or not.

## Constructors

### Constructor

> **new ImageProcessingConfiguration**(): `ImageProcessingConfiguration`

#### Returns

`ImageProcessingConfiguration`

## Properties

### colorCurves

> **colorCurves**: [`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L45)

Color curves setup used in the effect if colorCurvesEnabled is set to true

***

### onUpdateParameters

> **onUpdateParameters**: [`Observable`](Observable.md)\<`ImageProcessingConfiguration`\>

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:552](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L552)

An event triggered when the configuration changes and requires Shader to Update some parameters.

***

### outputTextureHeight

> **outputTextureHeight**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:547](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L547)

Height of the output texture used in the post process. If not provided, uses the height of the screen.

***

### outputTextureWidth

> **outputTextureWidth**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:541](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L541)

Width of the output texture used in the post process. If not provided, uses the width of the screen.

***

### vignetteCameraFov

> **vignetteCameraFov**: `number` = `0.5`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:389](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L389)

Camera field of view used by the Vignette effect.

***

### vignetteCenterX

> **vignetteCenterX**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:342](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L342)

Vignette center X Offset.

***

### vignetteCenterY

> **vignetteCenterY**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:348](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L348)

Vignette center Y Offset.

***

### vignetteColor

> **vignetteColor**: [`Color4`](Color4.md)

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:383](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L383)

Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)
if vignetteEnabled is set to true.

***

### vignetteStretch

> **vignetteStretch**: `number` = `0`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L336)

Vignette stretch size.

***

### vignetteWeight

> **vignetteWeight**: `number` = `1.5`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:376](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L376)

Vignette weight or intensity of the vignette effect.

***

### PrepareSamplers

> `static` **PrepareSamplers**: (`samplersList`, `defines`) => `void` = `PrepareSamplersForImageProcessing`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:581](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L581)

Prepare the list of samplers associated with the Image Processing effects.

#### Parameters

##### samplersList

`string`[]

The list of uniforms used in the effect

##### defines

`IImageProcessingConfigurationDefines`

the list of defines currently in use

#### Returns

`void`

***

### PrepareUniforms

> `static` **PrepareUniforms**: (`uniforms`, `defines`) => `void` = `PrepareUniformsForImageProcessing`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:574](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L574)

Prepare the list of uniforms associated with the Image Processing effects.

#### Parameters

##### uniforms

`string`[]

The list of uniforms used in the effect

##### defines

`IImageProcessingConfigurationDefines`

the list of defines currently in use

#### Returns

`void`

***

### TONEMAPPING\_ACES

> `readonly` `static` **TONEMAPPING\_ACES**: `1` = `1`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L33)

ACES Tone mapping (used by default in unreal and unity). This can help getting closer
to other engines rendering to increase portability.

***

### TONEMAPPING\_KHR\_PBR\_NEUTRAL

> `readonly` `static` **TONEMAPPING\_KHR\_PBR\_NEUTRAL**: `2` = `2`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L39)

Neutral Tone mapping developped by the Khronos group in order to constrain
values between 0 and 1 without shifting Hue.

***

### TONEMAPPING\_STANDARD

> `readonly` `static` **TONEMAPPING\_STANDARD**: `0` = `0`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L27)

Default tone mapping applied in BabylonJS.

## Accessors

### applyByPostProcess

#### Get Signature

> **get** **applyByPostProcess**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:502](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L502)

Gets whether the image processing is applied through a post process or not.

##### Returns

`boolean`

#### Set Signature

> **set** **applyByPostProcess**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:508](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L508)

Sets whether the image processing is applied through a post process or not.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorCurvesEnabled

#### Get Signature

> **get** **colorCurvesEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L52)

Gets whether the color curves effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **colorCurvesEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L58)

Sets whether the color curves effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorGradingBGR

#### Get Signature

> **get** **colorGradingBGR**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L132)

Gets whether the color grading texture contains BGR values.

##### Returns

`boolean`

#### Set Signature

> **set** **colorGradingBGR**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:138](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L138)

Sets whether the color grading texture contains BGR values.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorGradingEnabled

#### Get Signature

> **get** **colorGradingEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:92](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L92)

Gets whether the color grading effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **colorGradingEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:98](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L98)

Sets whether the color grading effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorGradingTexture

#### Get Signature

> **get** **colorGradingTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:72](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L72)

Color grading LUT texture used in the effect if colorGradingEnabled is set to true

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **colorGradingTexture**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:78](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L78)

Color grading LUT texture used in the effect if colorGradingEnabled is set to true

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

***

### colorGradingWithGreenDepth

#### Get Signature

> **get** **colorGradingWithGreenDepth**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L112)

Gets whether the color grading effect is using a green depth for the 3d Texture.

##### Returns

`boolean`

#### Set Signature

> **set** **colorGradingWithGreenDepth**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:118](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L118)

Sets whether the color grading effect is using a green depth for the 3d Texture.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### contrast

#### Get Signature

> **get** **contrast**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:213](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L213)

Gets the contrast used in the effect.

##### Returns

`number`

#### Set Signature

> **set** **contrast**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:219](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L219)

Sets the contrast used in the effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ditheringEnabled

#### Get Signature

> **get** **ditheringEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:437](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L437)

Gets whether the dithering effect is enabled.
The dithering effect can be used to reduce banding.

##### Returns

`boolean`

#### Set Signature

> **set** **ditheringEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:444](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L444)

Sets whether the dithering effect is enabled.
The dithering effect can be used to reduce banding.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ditheringIntensity

#### Get Signature

> **get** **ditheringIntensity**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:458](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L458)

Gets the dithering intensity. 0 is no dithering. Default is 1.0 / 255.0.

##### Returns

`number`

#### Set Signature

> **set** **ditheringIntensity**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:464](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L464)

Sets the dithering intensity. 0 is no dithering. Default is 1.0 / 255.0.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### exposure

#### Get Signature

> **get** **exposure**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:153](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L153)

Gets the Exposure used in the effect.

##### Returns

`number`

#### Set Signature

> **set** **exposure**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:159](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L159)

Sets the Exposure used in the effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### isEnabled

#### Get Signature

> **get** **isEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:522](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L522)

Gets whether the image processing is enabled or not.

##### Returns

`boolean`

#### Set Signature

> **set** **isEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:528](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L528)

Sets whether the image processing is enabled or not.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### skipFinalColorClamp

#### Get Signature

> **get** **skipFinalColorClamp**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:480](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L480)

If apply by post process is set to true, setting this to true will skip the final color clamp step in the fragment shader
Applies to PBR materials.

##### Returns

`boolean`

#### Set Signature

> **set** **skipFinalColorClamp**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:487](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L487)

If apply by post process is set to true, setting this to true will skip the final color clamp step in the fragment shader
Applies to PBR materials.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### temperature

#### Get Signature

> **get** **temperature**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:257](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L257)

Gets the correlated color temperature, in Kelvin, of the illuminant to neutralize when whiteBalanceEnabled
is set to true - i.e. the light the scene is assumed to have been lit with, not a "warm"/"cool" creative
adjustment. Lower values (e.g. ~2000-3500 K) correspond to warm/orange sources such as tungsten or candle
light; higher values (e.g. ~7000-10000 K) correspond to cool/blue sources such as shade or overcast sky.
Clamped to the tabulated range (roughly 1667 K and above) - the getter reflects the clamped value. Default is 6500.

##### Returns

`number`

#### Set Signature

> **set** **temperature**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:267](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L267)

Sets the correlated color temperature, in Kelvin, of the illuminant to neutralize when whiteBalanceEnabled
is set to true - i.e. the light the scene is assumed to have been lit with, not a "warm"/"cool" creative
adjustment. Lower values (e.g. ~2000-3500 K) correspond to warm/orange sources such as tungsten or candle
light; higher values (e.g. ~7000-10000 K) correspond to cool/blue sources such as shade or overcast sky.
Clamped to the tabulated range (roughly 1667 K and above) - the getter reflects the clamped value. Default is 6500.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### tint

#### Get Signature

> **get** **tint**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:287](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L287)

Gets the white balance tint offset used in the effect if whiteBalanceEnabled is set to true, on the
green/magenta axis perpendicular to temperature - e.g. to correct for illuminants (such as some
fluorescent lights) that a color temperature alone can't fully neutralize. Positive values shift the
corrected image toward magenta (compensating a green-tinted illuminant); negative values shift it toward
green (compensating a magenta-tinted illuminant). Clamped to [-150, 150] - the getter reflects the clamped value. Default is 0 (no tint offset).

##### Returns

`number`

#### Set Signature

> **set** **tint**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:297](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L297)

Sets the white balance tint offset used in the effect if whiteBalanceEnabled is set to true, on the
green/magenta axis perpendicular to temperature - e.g. to correct for illuminants (such as some
fluorescent lights) that a color temperature alone can't fully neutralize. Positive values shift the
corrected image toward magenta (compensating a green-tinted illuminant); negative values shift it toward
green (compensating a magenta-tinted illuminant). Clamped to [-150, 150] - the getter reflects the clamped value. Default is 0 (no tint offset).

##### Parameters

###### value

`number`

##### Returns

`void`

***

### toneMappingEnabled

#### Get Signature

> **get** **toneMappingEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:173](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L173)

Gets whether the tone mapping effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **toneMappingEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:179](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L179)

Sets whether the tone mapping effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### toneMappingType

#### Get Signature

> **get** **toneMappingType**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:193](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L193)

Gets the type of tone mapping effect.

##### Returns

`number`

#### Set Signature

> **set** **toneMappingType**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:199](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L199)

Sets the type of tone mapping effect used in BabylonJS.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteBlendMode

#### Get Signature

> **get** **vignetteBlendMode**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:396](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L396)

Gets the vignette blend mode allowing different kind of effect.

##### Returns

`number`

#### Set Signature

> **set** **vignetteBlendMode**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:402](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L402)

Sets the vignette blend mode allowing different kind of effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCentreX

#### Get Signature

> **get** **vignetteCentreX**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:365](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L365)

Back Compat: Vignette center X Offset.

##### Deprecated

use vignetteCenterX instead

##### Returns

`number`

#### Set Signature

> **set** **vignetteCentreX**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:368](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L368)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCentreY

#### Get Signature

> **get** **vignetteCentreY**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:354](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L354)

Back Compat: Vignette center Y Offset.

##### Deprecated

use vignetteCenterY instead

##### Returns

`number`

#### Set Signature

> **set** **vignetteCentreY**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:357](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L357)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteEnabled

#### Get Signature

> **get** **vignetteEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:416](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L416)

Gets whether the vignette effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **vignetteEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:422](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L422)

Sets whether the vignette effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### whiteBalanceEnabled

#### Get Signature

> **get** **whiteBalanceEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:233](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L233)

Gets whether the white balance effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **whiteBalanceEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:239](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L239)

Sets whether the white balance effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### VIGNETTEMODE\_MULTIPLY

#### Get Signature

> **get** `static` **VIGNETTEMODE\_MULTIPLY**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:747](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L747)

Used to apply the vignette as a mix with the pixel color.

##### Returns

`number`

***

### VIGNETTEMODE\_OPAQUE

#### Get Signature

> **get** `static` **VIGNETTEMODE\_OPAQUE**(): `number`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:754](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L754)

Used to apply the vignette as a replacement of the pixel color.

##### Returns

`number`

## Methods

### bind()

> **bind**(`effect`, `overrideAspectRatio?`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:665](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L665)

Binds the image processing to the shader.

#### Parameters

##### effect

[`Effect`](Effect.md)

The effect to bind to

##### overrideAspectRatio?

`number`

Override the aspect ratio of the effect

#### Returns

`void`

***

### clone()

> **clone**(): `ImageProcessingConfiguration`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:728](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L728)

Clones the current image processing instance.

#### Returns

`ImageProcessingConfiguration`

The cloned image processing

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:565](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L565)

Gets the current class name.

#### Returns

`string`

"ImageProcessingConfiguration"

***

### isReady()

> **isReady**(): `boolean`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:655](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L655)

Returns true if all the image processing information are ready.

#### Returns

`boolean`

True if ready, otherwise, false

***

### prepareDefines()

> **prepareDefines**(`defines`, `forPostProcess?`): `void`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:588](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L588)

Prepare the list of defines associated to the shader.

#### Parameters

##### defines

`IImageProcessingConfigurationDefines`

the list of defines to complete

##### forPostProcess?

`boolean` = `false`

Define if we are currently in post process mode or not

#### Returns

`void`

***

### serialize()

> **serialize**(): `any`

Defined in: [packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts:736](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/imageProcessingConfiguration.pure.ts#L736)

Serializes the current image processing instance to a json representation.

#### Returns

`any`

a JSON representation
