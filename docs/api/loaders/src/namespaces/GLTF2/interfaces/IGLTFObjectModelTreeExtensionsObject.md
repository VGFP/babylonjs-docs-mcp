[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / IGLTFObjectModelTreeExtensionsObject

# Interface: IGLTFObjectModelTreeExtensionsObject

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:365](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L365)

Accessor tree describing root-level glTF extensions exposed through the
Object Model. Currently covers the punctual / area / IES / image-based
light extension families.

## Properties

### EXT\_lights\_area

> **EXT\_lights\_area**: `object`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:383](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L383)

Accessor tree for `/extensions/EXT_lights_area`.

#### lights

> **lights**: `object`

##### lights.\_\_array\_\_

> **\_\_array\_\_**: `object`

##### lights.\_\_array\_\_.\_\_target\_\_

> **\_\_target\_\_**: `boolean`

##### lights.\_\_array\_\_.color

> **color**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsArea_Light`, [`Light`](../../../../../core/src/classes/Light.md), [`Color3`](../../../../../core/src/classes/Color3.md)\>

##### lights.\_\_array\_\_.intensity

> **intensity**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsArea_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.\_\_array\_\_.rect

> **rect**: `object`

##### lights.\_\_array\_\_.rect.aspect

> **aspect**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsArea_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.\_\_array\_\_.size

> **size**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsArea_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsArea_Light`[], [`Light`](../../../../../core/src/classes/Light.md)[], [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

***

### EXT\_lights\_ies

> **EXT\_lights\_ies**: `object`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:398](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L398)

Accessor tree for `/extensions/EXT_lights_ies`.

#### lights

> **lights**: `object`

##### lights.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`[], [`Light`](../../../../../core/src/classes/Light.md)[], [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

***

### EXT\_lights\_image\_based

> **EXT\_lights\_image\_based**: `object`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:404](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L404)

Accessor tree for `/extensions/EXT_lights_image_based`.

#### lights

> **lights**: `object`

##### lights.\_\_array\_\_

> **\_\_array\_\_**: `object`

##### lights.\_\_array\_\_.\_\_target\_\_

> **\_\_target\_\_**: `boolean`

##### lights.\_\_array\_\_.intensity

> **intensity**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsImageBased_LightImageBased`, [`BaseTexture`](../../../../../core/src/classes/BaseTexture.md), `number`\>

##### lights.\_\_array\_\_.rotation

> **rotation**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsImageBased_LightImageBased`, [`BaseTexture`](../../../../../core/src/classes/BaseTexture.md), [`Quaternion`](../../../../../core/src/classes/Quaternion.md)\>

##### lights.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IEXTLightsImageBased_LightImageBased`[], [`BaseTexture`](../../../../../core/src/classes/BaseTexture.md)[], [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>

***

### KHR\_lights\_punctual

> **KHR\_lights\_punctual**: `object`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts:367](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/objectModelMapping.ts#L367)

Accessor tree for `/extensions/KHR_lights_punctual`.

#### lights

> **lights**: `object`

##### lights.\_\_array\_\_

> **\_\_array\_\_**: `object`

##### lights.\_\_array\_\_.\_\_target\_\_

> **\_\_target\_\_**: `boolean`

##### lights.\_\_array\_\_.color

> **color**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`, [`Light`](../../../../../core/src/classes/Light.md), [`Color3`](../../../../../core/src/classes/Color3.md)\>

##### lights.\_\_array\_\_.intensity

> **intensity**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.\_\_array\_\_.range

> **range**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.\_\_array\_\_.spot

> **spot**: `object`

##### lights.\_\_array\_\_.spot.innerConeAngle

> **innerConeAngle**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.\_\_array\_\_.spot.outerConeAngle

> **outerConeAngle**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`, [`Light`](../../../../../core/src/classes/Light.md), `number`\>

##### lights.length

> **length**: [`IObjectAccessor`](../../../../../core/src/interfaces/IObjectAccessor.md)\<`IKHRLightsPunctual_Light`[], [`Light`](../../../../../core/src/classes/Light.md)[], [`FlowGraphInteger`](../../../../../core/src/classes/FlowGraphInteger.md)\>
