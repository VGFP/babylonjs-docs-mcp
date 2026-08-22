[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ConvertToNodeParticleSystemSetAsync

# Function: ConvertToNodeParticleSystemSetAsync()

> **ConvertToNodeParticleSystemSetAsync**(`name`, `particleSystemsList`): `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`NodeParticleSystemSet`](../classes/NodeParticleSystemSet.md)\>\>

Defined in: [packages/dev/core/src/Particles/Node/nodeParticleSystemSet.helper.ts:81](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Particles/Node/nodeParticleSystemSet.helper.ts#L81)

Converts a ParticleSystem to a NodeParticleSystemSet.

## Parameters

### name

`string`

The name of the node particle system set.

### particleSystemsList

[`ParticleSystem`](../classes/ParticleSystem.md)[]

The particle systems to convert.

## Returns

`Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`NodeParticleSystemSet`](../classes/NodeParticleSystemSet.md)\>\>

The converted node particle system set or null if conversion failed.
