[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CameraInputsMap

# Interface: CameraInputsMap\<Tcamera\>

Defined in: [packages/dev/core/src/Cameras/cameraInputsManager.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/cameraInputsManager.ts#L52)

Represents a map of input types to input instance or input index to input instance.

## Type Parameters

### Tcamera

`Tcamera` *extends* [`Camera`](../classes/Camera.md)

## Indexable

> \[`name`: `string`\]: [`ICameraInput`](ICameraInput.md)\<`Tcamera`\>

Accessor to the input by input type.

> \[`idx`: `number`\]: [`ICameraInput`](ICameraInput.md)\<`Tcamera`\>

Accessor to the input by input index.
