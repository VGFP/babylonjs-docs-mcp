[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareUniformsAndSamplersList

# Function: PrepareUniformsAndSamplersList()

> **PrepareUniformsAndSamplersList**(`uniformsListOrOptions`, `samplersList?`, `defines?`, `maxSimultaneousLights?`): `void`

Defined in: [packages/dev/core/src/Materials/materialHelper.functions.ts:1639](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/materialHelper.functions.ts#L1639)

Prepares the uniforms and samplers list to be used in the effect

## Parameters

### uniformsListOrOptions

`string`[] \| [`IEffectCreationOptions`](../interfaces/IEffectCreationOptions.md)

The uniform names to prepare or an EffectCreationOptions containing the list and extra information

### samplersList?

`string`[]

The sampler list

### defines?

`any`

The defines helping in the list generation

### maxSimultaneousLights?

`number` = `4`

The maximum number of simultaneous light allowed in the effect

## Returns

`void`
