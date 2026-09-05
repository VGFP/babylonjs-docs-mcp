[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForFrameBoundValues

# Function: PrepareDefinesForFrameBoundValues()

> **PrepareDefinesForFrameBoundValues**(`scene`, `engine`, `material`, `defines`, `useInstances`, `useClipPlane?`, `useThinInstances?`): `void`

Defined in: [packages/dev/core/src/Materials/materialHelper.functions.ts:1111](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/materialHelper.functions.ts#L1111)

Helper used to prepare the list of defines associated with frame values for shader compilation

## Parameters

### scene

[`Scene`](../classes/Scene.md)

defines the current scene

### engine

[`AbstractEngine`](../classes/AbstractEngine.md)

defines the current engine

### material

[`Material`](../classes/Material.md)

defines the material we are compiling the shader for

### defines

`any`

specifies the list of active defines

### useInstances

`boolean`

defines if instances have to be turned on

### useClipPlane?

[`Nullable`](../type-aliases/Nullable.md)\<`boolean`\> = `null`

defines if clip plane have to be turned on

### useThinInstances?

`boolean` = `false`

defines if thin instances have to be turned on

## Returns

`void`
