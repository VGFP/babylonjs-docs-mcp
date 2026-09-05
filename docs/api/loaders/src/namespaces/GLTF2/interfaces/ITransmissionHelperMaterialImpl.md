[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / ITransmissionHelperMaterialImpl

# Interface: ITransmissionHelperMaterialImpl

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:21](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L21)

Describes a material class and its corresponding loading adapter.
Passed to TransmissionHelper so it can classify and interact with materials
independently of any specific loader instance.

## Properties

### adapterClass

> **adapterClass**: (`material`) => `IMaterialLoadingAdapter`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:25](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L25)

The adapter class constructor

#### Parameters

##### material

[`Material`](../../../../../core/src/classes/Material.md)

#### Returns

`IMaterialLoadingAdapter`

***

### materialClass

> **materialClass**: *typeof* [`Material`](../../../../../core/src/classes/Material.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:23](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L23)

The material class constructor
