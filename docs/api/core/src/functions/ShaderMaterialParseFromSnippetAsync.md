[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ShaderMaterialParseFromSnippetAsync

# Function: ShaderMaterialParseFromSnippetAsync()

> **ShaderMaterialParseFromSnippetAsync**(`this`, `snippetId`, `scene`, `rootUrl?`): `Promise`\<[`ShaderMaterial`](../classes/ShaderMaterial.md)\>

Defined in: [packages/dev/core/src/Materials/shaderMaterial.pure.ts:1915](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/shaderMaterial.pure.ts#L1915)

Creates a ShaderMaterial from a snippet saved by the Inspector

## Parameters

### this

`void` \| *typeof* [`ShaderMaterial`](../namespaces/ShaderMaterial/README.md)

### snippetId

`string`

defines the snippet to load

### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

### rootUrl?

`string` = `""`

defines the root URL to use to load textures and relative dependencies

## Returns

`Promise`\<[`ShaderMaterial`](../classes/ShaderMaterial.md)\>

a promise that will resolve to the new ShaderMaterial
