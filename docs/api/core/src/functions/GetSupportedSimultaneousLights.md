[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetSupportedSimultaneousLights

# Function: GetSupportedSimultaneousLights()

> **GetSupportedSimultaneousLights**(`scene`, `maxSimultaneousLights`): `number`

Defined in: [packages/dev/core/src/Materials/materialHelper.functions.ts:533](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/materialHelper.functions.ts#L533)

Returns the number of simultaneous lights the engine can actually render, which may be lower than the
requested maximum.

Engines that declare one uniform buffer per light in the vertex shader (WebGPU, through
lightVxUboDeclaration) are bounded by maxUniformBuffersPerShaderStage: past that limit every pipeline
creation is rejected by the WebGPU validator and nothing renders at all, with only a CreateBindGroupLayout
validation error to go on. maxUniformBuffersPerShaderStage is 12 both as the WebGPU spec default and as
the maximum a D3D12 adapter reports, so it cannot be raised through requiredLimits either.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene that will be rendered

### maxSimultaneousLights

`number`

The requested maximum number of simultaneous lights

## Returns

`number`

The number of simultaneous lights supported, clamped to the engine's capabilities
