[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeMaterialParseFromFileAsync

# Function: NodeMaterialParseFromFileAsync()

> **NodeMaterialParseFromFileAsync**(`name`, `url`, `scene`, `rootUrl?`, `skipBuild?`, `targetMaterial?`, `urlRewriter?`, `options?`): `Promise`\<[`NodeMaterial`](../classes/NodeMaterial.md)\>

Defined in: [packages/dev/core/src/Materials/Node/nodeMaterial.pure.ts:2731](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Node/nodeMaterial.pure.ts#L2731)

Creates a node material from a snippet saved in a remote file

## Parameters

### name

`string`

defines the name of the material to create

### url

`string`

defines the url to load from

### scene

[`Scene`](../classes/Scene.md)

defines the hosting scene

### rootUrl?

`string` = `""`

defines the root URL for nested url in the node material

### skipBuild?

`boolean` = `false`

defines whether to build the node material

### targetMaterial?

[`NodeMaterial`](../classes/NodeMaterial.md)

defines a material to use instead of creating a new one

### urlRewriter?

(`url`) => `string`

defines a function used to rewrite urls

### options?

`Partial`\<[`INodeMaterialOptions`](../interfaces/INodeMaterialOptions.md)\>

defines options to be used with the node material

## Returns

`Promise`\<[`NodeMaterial`](../classes/NodeMaterial.md)\>

a promise that will resolve to the new node material
