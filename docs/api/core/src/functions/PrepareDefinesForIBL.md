[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareDefinesForIBL

# Function: PrepareDefinesForIBL()

> **PrepareDefinesForIBL**(`scene`, `reflectionTexture`, `defines`, `realTimeFiltering?`, `realTimeFilteringQuality?`, `forceSHInVertex?`): `boolean`

Defined in: [packages/dev/core/src/Materials/materialHelper.functions.ts:863](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/materialHelper.functions.ts#L863)

Prepare defines relating to IBL logic.

## Parameters

### scene

[`Scene`](../classes/Scene.md)

The scene

### reflectionTexture

[`Nullable`](../type-aliases/Nullable.md)\<[`BaseTexture`](../classes/BaseTexture.md)\>

The texture to use for IBL

### defines

`any`

The defines to update

### realTimeFiltering?

`boolean` = `false`

Whether realtime filting of IBL texture is being used

### realTimeFilteringQuality?

`number` = `Constants.TEXTURE_FILTERING_QUALITY_LOW`

The quality of realtime filtering

### forceSHInVertex?

`boolean` = `false`

Whether the SH are handled in the vertex shader

## Returns

`boolean`

true if the defines were updated
