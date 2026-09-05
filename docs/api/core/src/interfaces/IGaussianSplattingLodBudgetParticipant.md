[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IGaussianSplattingLodBudgetParticipant

# Interface: IGaussianSplattingLodBudgetParticipant

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:100](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L100)

**`Experimental`**

A LOD engine (e.g. a streamed part) that participates in a compound's shared splat budget. The compound
apportions [GaussianSplattingMesh.splatBudget](../classes/GaussianSplattingMesh.md#splatbudget) (net of static parts) across all registered participants
by demand and pushes each its allocation. Defined here (core) so the compound never depends on the loader's
streaming engine; the engine implements this and registers via
[GaussianSplattingMesh.registerLodBudgetParticipant](../classes/GaussianSplattingMesh.md#registerlodbudgetparticipant).

## Methods

### getBudgetDemand()

> **getBudgetDemand**(): `number`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:102](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L102)

**`Experimental`**

The number of splats this participant would render at full (distance-optimal) detail — its budget demand.

#### Returns

`number`

***

### setBudgetAllocation()

> **setBudgetAllocation**(`splats`): `void`

Defined in: [packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/GaussianSplatting/gaussianSplattingMesh.pure.ts#L108)

**`Experimental`**

Sets the participant's apportioned share of the compound budget (in splats). `null` clears coordination so
the participant reverts to its own budget; `0` keeps it coordinated at the coarsest level.

#### Parameters

##### splats

[`Nullable`](../type-aliases/Nullable.md)\<`number`\>

the apportioned splat allocation, or null to release coordination

#### Returns

`void`
