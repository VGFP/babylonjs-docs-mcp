[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFObjectModelTreeCamerasObject

# Interface: IGLTFObjectModelTreeCamerasObject

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:114](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L114)

Accessor tree describing the `/cameras` section of the glTF Object Model.
Exposes orthographic and perspective camera properties.

## Properties

### \_\_array\_\_

> **\_\_array\_\_**: `object`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:117](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L117)

#### \_\_target\_\_

> **\_\_target\_\_**: `boolean`

#### orthographic

> **orthographic**: `object`

##### orthographic.xmag

> **xmag**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`ICamera`](ICamera.md), [`ICamera`](ICamera.md), [`Vector2`](../../../../../core/src/classes/Vector2.md)\>

##### orthographic.ymag

> **ymag**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`ICamera`](ICamera.md), [`ICamera`](ICamera.md), [`Vector2`](../../../../../core/src/classes/Vector2.md)\>

##### orthographic.zfar

> **zfar**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`ICamera`](ICamera.md), [`ICamera`](ICamera.md), `number`\>

##### orthographic.znear

> **znear**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`ICamera`](ICamera.md), [`ICamera`](ICamera.md), `number`\>

#### perspective

> **perspective**: `object`

##### perspective.aspectRatio

> **aspectRatio**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`ICamera`](ICamera.md), [`ICamera`](ICamera.md), [`Nullable`](../../../../../core/src/type-aliases/Nullable.md)\<`number`\>\>

##### perspective.yfov

> **yfov**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`ICamera`](ICamera.md), [`ICamera`](ICamera.md), `number`\>

##### perspective.zfar

> **zfar**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`ICamera`](ICamera.md), [`ICamera`](ICamera.md), `number`\>

##### perspective.znear

> **znear**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`ICamera`](ICamera.md), [`ICamera`](ICamera.md), `number`\>

***

### length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<[`ICamera`](ICamera.md)[], `any`, [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:116](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L116)

Number of cameras in the array.
