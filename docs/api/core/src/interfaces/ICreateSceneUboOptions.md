[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICreateSceneUboOptions

# Interface: ICreateSceneUboOptions

Defined in: [packages/dev/core/src/scene.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/scene.pure.ts#L108)

Options for creating a scene uniform buffer

## Properties

### forceMono?

> `optional` **forceMono?**: `boolean`

Defined in: [packages/dev/core/src/scene.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/scene.pure.ts#L112)

When true, always creates a mono (non-multiview) UBO, bypassing any multiview override

***

### trackUBOsInFrame?

> `optional` **trackUBOsInFrame?**: `boolean`

Defined in: [packages/dev/core/src/scene.pure.ts:110](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/scene.pure.ts#L110)

Define if the UBOs should be tracked in the frame (default: undefined - will use the value from Engine._features.trackUbosInFrame)
