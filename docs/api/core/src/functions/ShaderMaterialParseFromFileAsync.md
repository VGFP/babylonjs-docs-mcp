[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ShaderMaterialParseFromFileAsync

# Function: ShaderMaterialParseFromFileAsync()

> **ShaderMaterialParseFromFileAsync**(`name`, `url`, `scene`, `rootUrl?`): `Promise`\<[`ShaderMaterial`](../classes/ShaderMaterial.md)\>

Defined in: [packages/dev/core/src/Materials/shaderMaterial.pure.ts:1882](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L1882)

Creates a new ShaderMaterial from a snippet saved in a remote file

## Parameters

### name

[`Nullable`](../type-aliases/Nullable.md)\<`string`\>

defines the name of the ShaderMaterial to create (can be null or empty to use the one from the json data)

### url

`string`

defines the url to load from

### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

## Returns

`Promise`\<[`ShaderMaterial`](../classes/ShaderMaterial.md)\>

a promise that will resolve to the new ShaderMaterial
