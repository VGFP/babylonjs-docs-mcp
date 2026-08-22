[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / GLTFLoaderCoordinateSystemMode

# Enumeration: GLTFLoaderCoordinateSystemMode

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:75](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L75)

Mode that determines the coordinate system to use.

## Enumeration Members

### AUTO

> **AUTO**: `0`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L79)

Automatically convert the glTF right-handed data to the appropriate system based on the current coordinate system mode of the scene.

***

### FORCE\_RIGHT\_HANDED

> **FORCE\_RIGHT\_HANDED**: `1`

Defined in: [packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts:84](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/glTFFileLoader.pure.ts#L84)

Sets the useRightHandedSystem flag on the scene.
