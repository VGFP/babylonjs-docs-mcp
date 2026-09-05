[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFObjectModelTree

# Interface: IGLTFObjectModelTree

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:42](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L42)

Top-level shape of the glTF Object Model accessor tree. Each property
describes a navigable section of the JSON-Pointer namespace (e.g. `/nodes`,
`/materials`, `/scenes`) that KHR_interactivity, KHR_animation_pointer and
other extensions consume via [GetMappingForKey](../functions/GetMappingForKey.md).

## Properties

### animations

> **animations**: `object`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:54](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L54)

Accessor tree for `/animations`.

#### \_\_array\_\_

> **\_\_array\_\_**: `object`

#### length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`IAnimation`](IAnimation.md)[], [`AnimationGroup`](../../../../../core/src/classes/AnimationGroup.md)[], [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

***

### cameras

> **cameras**: [`IGLTFObjectModelTreeCamerasObject`](IGLTFObjectModelTreeCamerasObject.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:46](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L46)

Accessor tree for `/cameras`.

***

### extensions

> **extensions**: [`IGLTFObjectModelTreeExtensionsObject`](IGLTFObjectModelTreeExtensionsObject.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L52)

Accessor tree for `/extensions` (root-level glTF extensions).

***

### materials

> **materials**: [`IGLTFObjectModelTreeMaterialsObject`](IGLTFObjectModelTreeMaterialsObject.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:50](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L50)

Accessor tree for `/materials`.

***

### meshes

> **meshes**: [`IGLTFObjectModelTreeMeshesObject`](IGLTFObjectModelTreeMeshesObject.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:59](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L59)

Accessor tree for `/meshes`.

***

### nodes

> **nodes**: [`IGLTFObjectModelTreeNodesObject`](IGLTFObjectModelTreeNodesObject.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:48](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L48)

Accessor tree for `/nodes`.

***

### scene

> **scene**: `object` & [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`number` \| `undefined`, `any`, `number`\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:44](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L44)

Read-only accessor for the active scene index (`/scene`).

#### Type Declaration

##### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

***

### scenes

> **scenes**: [`IGLTFObjectModelTreeScenesObject`](IGLTFObjectModelTreeScenesObject.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:61](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L61)

Accessor tree for `/scenes`.

***

### skins

> **skins**: [`IGLTFObjectModelTreeSkinsObject`](IGLTFObjectModelTreeSkinsObject.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:63](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L63)

Accessor tree for `/skins`.
