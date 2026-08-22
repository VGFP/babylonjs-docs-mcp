[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / IExportOptions

# Interface: IExportOptions

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:15](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L15)

Holds a collection of exporter options and parameters

## Properties

### animationSampleRate?

> `optional` **animationSampleRate?**: `number`

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:41](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L41)

The sample rate to bake animation curves. Defaults to 1 / 60.

***

### exportUnusedUVs?

> `optional` **exportUnusedUVs?**: `boolean`

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:51](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L51)

Indicates if unused vertex uv attributes should be included in export. Defaults to false.

***

### exportWithoutWaitingForScene?

> `optional` **exportWithoutWaitingForScene?**: `boolean`

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:46](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L46)

Begin serialization without waiting for the scene to be ready. Defaults to false.

***

### ~~includeCoordinateSystemConversionNodes?~~

> `optional` **includeCoordinateSystemConversionNodes?**: `boolean`

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:62](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L62)

Indicates if coordinate system swapping root nodes should be included in export. Defaults to false.

#### Deprecated

Please use removeNoopRootNodes instead

***

### meshCompressionMethod?

> `optional` **meshCompressionMethod?**: [`MeshCompressionMethod`](../type-aliases/MeshCompressionMethod.md)

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:67](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L67)

Indicates what compression method to apply to mesh data.

***

### removeNoopRootNodes?

> `optional` **removeNoopRootNodes?**: `boolean`

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:56](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L56)

Remove no-op root nodes when possible. Defaults to true.

## Methods

### metadataSelector()?

> `optional` **metadataSelector**(`metadata`): `any`

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:36](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L36)

Function to extract the part of the scene or node's `metadata` that will populate the corresponding
glTF object's `extras` field. If not defined, `node.metadata.gltf.extras` will be used.

#### Parameters

##### metadata

`any`

source metadata to read from

#### Returns

`any`

the data to store into the glTF extras field

***

### shouldExportAnimation()?

> `optional` **shouldExportAnimation**(`animation`): `boolean`

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:28](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L28)

Function which indicates whether an animation on the scene should be exported or not

#### Parameters

##### animation

[`Animation`](../../../core/src/classes/Animation.md)

source animation

#### Returns

`boolean`

boolean, which indicates whether the animation should be exported (true) or not (false)

***

### shouldExportNode()?

> `optional` **shouldExportNode**(`node`): `boolean`

Defined in: [packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts:21](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/glTF/2.0/glTFSerializer.ts#L21)

Function which indicates whether a babylon node should be exported or not

#### Parameters

##### node

[`Node`](../../../core/src/classes/Node.md)

source Babylon node. It is used to check whether it should be exported to glTF or not

#### Returns

`boolean`

boolean, which indicates whether the node should be exported (true) or not (false)
