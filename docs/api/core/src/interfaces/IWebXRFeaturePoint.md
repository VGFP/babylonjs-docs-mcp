[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IWebXRFeaturePoint

# Interface: IWebXRFeaturePoint

Defined in: [packages/dev/core/src/XR/features/WebXRFeaturePointSystem.pure.ts:13](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRFeaturePointSystem.pure.ts#L13)

A babylon interface for a "WebXR" feature point.
Represents the position and confidence value of a given feature point.

## Properties

### confidenceValue

> **confidenceValue**: `number`

Defined in: [packages/dev/core/src/XR/features/WebXRFeaturePointSystem.pure.ts:21](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRFeaturePointSystem.pure.ts#L21)

Represents the confidence value of the feature point in world space. 0 being least confident, and 1 being most confident.

***

### position

> **position**: [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/XR/features/WebXRFeaturePointSystem.pure.ts:17](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/features/WebXRFeaturePointSystem.pure.ts#L17)

Represents the position of the feature point in world space.
