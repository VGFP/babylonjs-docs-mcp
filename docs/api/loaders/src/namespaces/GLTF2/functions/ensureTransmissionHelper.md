[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / ensureTransmissionHelper

# Function: ensureTransmissionHelper()

> **ensureTransmissionHelper**(`loader`, `babylonMaterial`): `void`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts:525](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/transmissionHelper.ts#L525)

Ensures a TransmissionHelper exists on the scene and has all of the loader's material
implementations registered with it. Creates the helper if one does not yet exist on the
scene, and recreates its render target if it has been disposed. Does nothing when the
loader's parent has `dontUseTransmissionHelper` set.

## Parameters

### loader

[`GLTFLoader`](../classes/GLTFLoader.md)

The glTF loader whose material implementations should be registered

### babylonMaterial

[`Material`](../../../../../core/src/classes/Material.md)

A material belonging to the scene where the helper should live

## Returns

`void`
