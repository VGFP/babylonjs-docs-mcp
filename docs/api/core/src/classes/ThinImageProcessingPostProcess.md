[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ThinImageProcessingPostProcess

# Class: ThinImageProcessingPostProcess

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:80](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L80)

Post process used to apply image processing to a scene

## Extends

- [`EffectWrapper`](EffectWrapper.md)

## Constructors

### Constructor

> **new ThinImageProcessingPostProcess**(`name`, `engine?`, `options?`): `ThinImageProcessingPostProcess`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:557](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L557)

Constructs a new image processing post process

#### Parameters

##### name

`string`

Name of the effect

##### engine?

[`Nullable`](../type-aliases/Nullable.md)\<[`AbstractEngine`](AbstractEngine.md)\> = `null`

Engine to use to render the effect. If not provided, the last created engine will be used

##### options?

[`ThinImageProcessingPostProcessOptions`](../interfaces/ThinImageProcessingPostProcessOptions.md)

Options to configure the effect

#### Returns

`ThinImageProcessingPostProcess`

#### Overrides

[`EffectWrapper`](EffectWrapper.md).[`constructor`](EffectWrapper.md#constructor)

## Properties

### alphaMode

> **alphaMode**: `number` = `Constants.ALPHA_DISABLE`

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:356](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L356)

Type of alpha mode to use when applying the effect (default: Engine.ALPHA_DISABLE). Used only if useAsPostProcess is true.

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`alphaMode`](EffectWrapper.md#alphamode)

***

### onApplyObservable

> **onApplyObservable**: [`Observable`](Observable.md)\<\{ \}\>

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:388](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L388)

Event that is fired (only when the EffectWrapper is used with an EffectRenderer) right before the effect is drawn (should be used to update uniforms)

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`onApplyObservable`](EffectWrapper.md#onapplyobservable)

***

### onEffectCreatedObservable

> **onEffectCreatedObservable**: [`Observable`](Observable.md)\<[`Effect`](Effect.md)\>

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:362](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L362)

Executed when the effect is created

#### Returns

effect that was created for this effect wrapper

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`onEffectCreatedObservable`](EffectWrapper.md#oneffectcreatedobservable)

***

### options

> `readonly` **options**: `Required`\<[`NonNullableFields`](../type-aliases/NonNullableFields.md)\<[`ThinImageProcessingPostProcessOptions`](../interfaces/ThinImageProcessingPostProcessOptions.md)\>\>

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:549](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L549)

Options used to create the effect wrapper

#### Overrides

[`EffectWrapper`](EffectWrapper.md).[`options`](EffectWrapper.md#options)

***

### overrideAspectRatio?

> `optional` **overrideAspectRatio?**: `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:524](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L524)

Gets/sets the aspect ratio used to override the default one.

***

### ForceGLSL

> `static` **ForceGLSL**: `boolean` = `false`

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:320](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L320)

Force code to compile to glsl even on WebGPU engines.
False by default. This is mostly meant for backward compatibility.

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`ForceGLSL`](EffectWrapper.md#forceglsl)

***

### FragmentUrl

> `readonly` `static` **FragmentUrl**: `"imageProcessing"` = `"imageProcessing"`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:84](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L84)

The fragment shader url

## Accessors

### colorCurves

#### Get Signature

> **get** **colorCurves**(): [`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:178](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L178)

Gets Color curves setup used in the effect if colorCurvesEnabled is set to true .

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

#### Set Signature

> **set** **colorCurves**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:184](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L184)

Sets Color curves setup used in the effect if colorCurvesEnabled is set to true .

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`ColorCurves`](ColorCurves.md)\>

##### Returns

`void`

***

### colorCurvesEnabled

#### Get Signature

> **get** **colorCurvesEnabled**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:191](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L191)

Gets whether the color curves effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **colorCurvesEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:197](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L197)

Sets whether the color curves effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorGradingEnabled

#### Get Signature

> **get** **colorGradingEnabled**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:217](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L217)

Gets whether the color grading effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **colorGradingEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:223](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L223)

Gets whether the color grading effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### colorGradingTexture

#### Get Signature

> **get** **colorGradingTexture**(): [`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:204](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L204)

Gets Color grading LUT texture used in the effect if colorGradingEnabled is set to true.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

#### Set Signature

> **set** **colorGradingTexture**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:210](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L210)

Sets Color grading LUT texture used in the effect if colorGradingEnabled is set to true.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](BaseTexture.md)\>

##### Returns

`void`

***

### contrast

#### Get Signature

> **get** **contrast**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:269](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L269)

Gets contrast used in the effect.

##### Returns

`number`

#### Set Signature

> **set** **contrast**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:275](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L275)

Sets contrast used in the effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### ditheringEnabled

#### Get Signature

> **get** **ditheringEnabled**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:464](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L464)

Gets whether the dithering effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **ditheringEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:470](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L470)

Sets whether the dithering effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ditheringIntensity

#### Get Signature

> **get** **ditheringIntensity**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:451](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L451)

Gets intensity of the dithering effect.

##### Returns

`number`

#### Set Signature

> **set** **ditheringIntensity**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:457](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L457)

Sets intensity of the dithering effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### drawWrapper

#### Get Signature

> **get** **drawWrapper**(): [`DrawWrapper`](DrawWrapper.md)

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:381](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L381)

Get the draw wrapper associated with the effect wrapper

##### Returns

[`DrawWrapper`](DrawWrapper.md)

the draw wrapper associated with the effect wrapper

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`drawWrapper`](EffectWrapper.md#drawwrapper)

***

### effect

#### Get Signature

> **get** **effect**(): [`Effect`](Effect.md)

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:393](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L393)

The underlying effect

##### Returns

[`Effect`](Effect.md)

#### Set Signature

> **set** **effect**(`effect`): `void`

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:397](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L397)

##### Parameters

###### effect

[`Effect`](Effect.md)

##### Returns

`void`

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`effect`](EffectWrapper.md#effect)

***

### exposure

#### Get Signature

> **get** **exposure**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:230](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L230)

Gets exposure used in the effect.

##### Returns

`number`

#### Set Signature

> **set** **exposure**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:236](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L236)

Sets exposure used in the effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### fromLinearSpace

#### Get Signature

> **get** **fromLinearSpace**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:478](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L478)

Gets whether the input of the processing is in Gamma or Linear Space.

##### Returns

`boolean`

#### Set Signature

> **set** **fromLinearSpace**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:484](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L484)

Sets whether the input of the processing is in Gamma or Linear Space.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### imageProcessingConfiguration

#### Get Signature

> **get** **imageProcessingConfiguration**(): [`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:103](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L103)

Gets the image processing configuration used either in this material.

##### Returns

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

#### Set Signature

> **set** **imageProcessingConfiguration**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:112](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L112)

Sets the Default image processing configuration used either in the this material.

If sets to null, the scene one is in use.

##### Parameters

###### value

[`ImageProcessingConfiguration`](ImageProcessingConfiguration.md)

##### Returns

`void`

***

### name

#### Get Signature

> **get** **name**(): `string`

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:345](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L345)

Gets or sets the name of the effect wrapper

##### Returns

`string`

#### Set Signature

> **set** **name**(`value`): `void`

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:349](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L349)

##### Parameters

###### value

`string`

##### Returns

`void`

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`name`](EffectWrapper.md#name)

***

### outputTextureHeight

#### Get Signature

> **get** **outputTextureHeight**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:510](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L510)

* Gets the height of the output texture used to store the result of the post process.

##### Returns

`number`

#### Set Signature

> **set** **outputTextureHeight**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:517](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L517)

* Sets the height of the output texture used to store the result of the post process.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### outputTextureWidth

#### Get Signature

> **get** **outputTextureWidth**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:496](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L496)

* Gets the width of the output texture used to store the result of the post process.

##### Returns

`number`

#### Set Signature

> **set** **outputTextureWidth**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:503](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L503)

* Sets the width of the output texture used to store the result of the post process.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### temperature

#### Get Signature

> **get** **temperature**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:295](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L295)

Gets the white balance correlated color temperature, in Kelvin, used in the effect.

##### Returns

`number`

#### Set Signature

> **set** **temperature**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:301](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L301)

Sets the white balance correlated color temperature, in Kelvin, used in the effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### tint

#### Get Signature

> **get** **tint**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:308](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L308)

Gets the white balance tint offset used in the effect.

##### Returns

`number`

#### Set Signature

> **set** **tint**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:314](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L314)

Sets the white balance tint offset used in the effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### toneMappingEnabled

#### Get Signature

> **get** **toneMappingEnabled**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:243](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L243)

Gets whether tonemapping is enabled or not.

##### Returns

`boolean`

#### Set Signature

> **set** **toneMappingEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:249](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L249)

Sets whether tonemapping is enabled or not

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### toneMappingType

#### Get Signature

> **get** **toneMappingType**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:256](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L256)

Gets the type of tone mapping effect.

##### Returns

`number`

#### Set Signature

> **set** **toneMappingType**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:262](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L262)

Sets the type of tone mapping effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteBlendMode

#### Get Signature

> **get** **vignetteBlendMode**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:425](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L425)

Gets the vignette blend mode allowing different kind of effect.

##### Returns

`number`

#### Set Signature

> **set** **vignetteBlendMode**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:431](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L431)

Sets the vignette blend mode allowing different kind of effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCameraFov

#### Get Signature

> **get** **vignetteCameraFov**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:412](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L412)

Gets Camera field of view used by the Vignette effect.

##### Returns

`number`

#### Set Signature

> **set** **vignetteCameraFov**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:418](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L418)

Sets Camera field of view used by the Vignette effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCenterX

#### Get Signature

> **get** **vignetteCenterX**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:374](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L374)

Vignette center X Offset.

##### Returns

`number`

#### Set Signature

> **set** **vignetteCenterX**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:377](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L377)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCenterY

#### Get Signature

> **get** **vignetteCenterY**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:364](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L364)

Vignette center Y Offset.

##### Returns

`number`

#### Set Signature

> **set** **vignetteCenterY**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:367](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L367)

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCentreX

#### Get Signature

> **get** **vignetteCentreX**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:335](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L335)

Gets Vignette center X Offset.

##### Deprecated

use vignetteCenterX instead

##### Returns

`number`

#### Set Signature

> **set** **vignetteCentreX**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:342](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L342)

Sets Vignette center X Offset.

##### Deprecated

use vignetteCenterX instead

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteCentreY

#### Get Signature

> **get** **vignetteCentreY**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:350](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L350)

Gets Vignette center Y Offset.

##### Deprecated

use vignetteCenterY instead

##### Returns

`number`

#### Set Signature

> **set** **vignetteCentreY**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:357](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L357)

Sets Vignette center Y Offset.

##### Deprecated

use vignetteCenterY instead

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteColor

#### Get Signature

> **get** **vignetteColor**(): [`Color4`](Color4.md)

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:398](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L398)

Gets Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)
if vignetteEnabled is set to true.

##### Returns

[`Color4`](Color4.md)

#### Set Signature

> **set** **vignetteColor**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:405](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L405)

Sets Color of the vignette applied on the screen through the chosen blend mode (vignetteBlendMode)
if vignetteEnabled is set to true.

##### Parameters

###### value

[`Color4`](Color4.md)

##### Returns

`void`

***

### vignetteEnabled

#### Get Signature

> **get** **vignetteEnabled**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:438](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L438)

Gets whether the vignette effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **vignetteEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:444](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L444)

Sets whether the vignette effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### vignetteStretch

#### Get Signature

> **get** **vignetteStretch**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:321](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L321)

Gets Vignette stretch size.

##### Returns

`number`

#### Set Signature

> **set** **vignetteStretch**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:327](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L327)

Sets Vignette stretch size.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### vignetteWeight

#### Get Signature

> **get** **vignetteWeight**(): `number`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:384](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L384)

Gets Vignette weight or intensity of the vignette effect.

##### Returns

`number`

#### Set Signature

> **set** **vignetteWeight**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:390](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L390)

Sets Vignette weight or intensity of the vignette effect.

##### Parameters

###### value

`number`

##### Returns

`void`

***

### whiteBalanceEnabled

#### Get Signature

> **get** **whiteBalanceEnabled**(): `boolean`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:282](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L282)

Gets whether the white balance effect is enabled.

##### Returns

`boolean`

#### Set Signature

> **set** **whiteBalanceEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:288](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L288)

Sets whether the white balance effect is enabled.

##### Parameters

###### value

`boolean`

##### Returns

`void`

## Methods

### bind()

> **bind**(`noDefaultBindings?`): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:621](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L621)

Binds the data to the effect.

#### Parameters

##### noDefaultBindings?

`boolean` = `false`

if true, the default bindings (scale and alpha mode) will not be set.

#### Returns

`void`

#### Overrides

[`EffectWrapper`](EffectWrapper.md).[`bind`](EffectWrapper.md#bind)

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts:626](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/PostProcesses/thinImageProcessingPostProcess.ts#L626)

Disposes of the effect wrapper

#### Returns

`void`

#### Overrides

[`EffectWrapper`](EffectWrapper.md).[`dispose`](EffectWrapper.md#dispose)

***

### isReady()

> **isReady**(): `boolean`

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:373](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L373)

Get a value indicating if the effect is ready to be used

#### Returns

`boolean`

true if the post-process is ready (shader is compiled)

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`isReady`](EffectWrapper.md#isready)

***

### updateEffect()

> **updateEffect**(`defines?`, `uniforms?`, `samplers?`, `indexParameters?`, `onCompiled?`, `onError?`, `vertexUrl?`, `fragmentUrl?`): `void`

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:549](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L549)

Updates the effect with the current effect wrapper compile time values and recompiles the shader.

#### Parameters

##### defines?

[`Nullable`](../type-aliases/Nullable.md)\<`string`\> = `null`

Define statements that should be added at the beginning of the shader. (default: null)

##### uniforms?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

Set of uniform variables that will be passed to the shader. (default: null)

##### samplers?

[`Nullable`](../type-aliases/Nullable.md)\<`string`[]\> = `null`

Set of Texture2D variables that will be passed to the shader. (default: null)

##### indexParameters?

`any`

The index parameters to be used for babylons include syntax "#include<kernelBlurVaryingDeclaration>[0..varyingCount]". (default: undefined) See usage in babylon.blurPostProcess.ts and kernelBlur.vertex.fx

##### onCompiled?

(`effect`) => `void`

Called when the shader has been compiled.

##### onError?

(`effect`, `errors`) => `void`

Called if there is an error when compiling a shader.

##### vertexUrl?

`string`

The url of the vertex shader to be used (default: the one given at construction time)

##### fragmentUrl?

`string`

The url of the fragment shader to be used (default: the one given at construction time)

#### Returns

`void`

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`updateEffect`](EffectWrapper.md#updateeffect)

***

### RegisterShaderCodeProcessing()

> `static` **RegisterShaderCodeProcessing**(`effectWrapperName`, `customShaderCodeProcessing?`): `void`

Defined in: [packages/dev/core/src/Materials/effectRenderer.pure.ts:329](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effectRenderer.pure.ts#L329)

Registers a shader code processing with an effect wrapper name.

#### Parameters

##### effectWrapperName

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

name of the effect wrapper. Use null for the fallback shader code processing. This is the shader code processing that will be used in case no specific shader code processing has been associated to an effect wrapper name

##### customShaderCodeProcessing?

[`EffectWrapperCustomShaderCodeProcessing`](../type-aliases/EffectWrapperCustomShaderCodeProcessing.md)

shader code processing to associate to the effect wrapper name

#### Returns

`void`

#### Inherited from

[`EffectWrapper`](EffectWrapper.md).[`RegisterShaderCodeProcessing`](EffectWrapper.md#registershadercodeprocessing)
