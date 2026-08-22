[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / FBXFileLoaderOptions

# Interface: FBXFileLoaderOptions

Defined in: [packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts:63](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts#L63)

Defines options for the FBX loader.

## Properties

### normalMapCoordinateSystem?

> `optional` **normalMapCoordinateSystem?**: [`FBXNormalMapCoordinateSystem`](../type-aliases/FBXNormalMapCoordinateSystem.md)

Defined in: [packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/FBX/fbxFileLoader.pure.ts#L69)

Source convention for tangent-space normal maps connected through FBX normal-map slots.
FBX does not standardize this convention, so the loader defaults to the glTF/USD-style Y-up convention.
Set to "y-down" for assets authored with inverted green/Y normal maps.
