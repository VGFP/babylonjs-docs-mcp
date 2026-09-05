[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForLights

# Function: PrepareDefinesForLights()

> **PrepareDefinesForLights**(`scene`, `mesh`, `defines`, `specularSupported`, `maxSimultaneousLights?`, `disableLighting?`): `boolean`

Defined in: [packages/dev/core/src/Materials/materialHelper.functions.ts:765](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/materialHelper.functions.ts#L765)

Prepares the defines related to the light information passed in parameter

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene we are intending to draw

### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh the effect is compiling for

### defines

`any`

The defines to update

### specularSupported

`boolean`

Specifies whether specular is supported or not (override lights data)

### maxSimultaneousLights?

`number` = `4`

Specifies how manuy lights can be added to the effect at max

### disableLighting?

`boolean` = `false`

Specifies whether the lighting is disabled (override scene and light)

## Returns

`boolean`

true if normals will be required for the rest of the effect
