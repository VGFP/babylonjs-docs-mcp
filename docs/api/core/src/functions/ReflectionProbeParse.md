[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ReflectionProbeParse

# Function: ReflectionProbeParse()

> **ReflectionProbeParse**(`parsedReflectionProbe`, `scene`, `rootUrl`): [`Nullable`](../type-aliases/Nullable.md)\<[`ReflectionProbe`](../classes/ReflectionProbe.md)\>

Defined in: [packages/dev/core/src/Probes/reflectionProbe.pure.ts:314](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Probes/reflectionProbe.pure.ts#L314)

Parse the JSON representation of a reflection probe in order to recreate the reflection probe in the given scene.

## Parameters

### parsedReflectionProbe

`any`

Define the JSON representation of the reflection probe

### scene

[`Scene`](../classes/Scene.md)

Define the scene the parsed reflection probe should be instantiated in

### rootUrl

`string`

Define the root url of the parsing sequence in the case of relative dependencies

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`ReflectionProbe`](../classes/ReflectionProbe.md)\>

The parsed reflection probe if successful
