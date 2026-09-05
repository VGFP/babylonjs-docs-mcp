[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [loaders/src](../README.md) / OBJLoadingOptions

# Type Alias: OBJLoadingOptions

> **OBJLoadingOptions** = `object`

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:6](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L6)

Options for loading OBJ/MTL files

## Properties

### computeNormals

> **computeNormals**: `boolean`

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:37](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L37)

Compute the normals for the model, even if normals are present in the file.

***

### encoding?

> `optional` **encoding?**: `string`

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L12)

Defines the character encoding used to decode OBJ and MTL files.
Use "auto" to detect UTF-8/UTF-16 and fall back to GB18030, or provide an encoding label supported by TextDecoder.
Defaults to "auto".

***

### importVertexColors

> **importVertexColors**: `boolean`

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:33](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L33)

Include in meshes the vertex colors available in some OBJ files.  This is not part of OBJ standard.

***

### invertTextureY

> **invertTextureY**: `boolean`

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:29](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L29)

Invert Y-Axis of referenced textures on load

***

### invertY

> **invertY**: `boolean`

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:25](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L25)

Invert model on y-axis (does a model scaling inversion)

***

### materialLoadingFailsSilently

> **materialLoadingFailsSilently**: `boolean`

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:50](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L50)

When a material fails to load OBJ loader will silently fail and onSuccess() callback will be triggered.

***

### optimizeNormals

> **optimizeNormals**: `boolean`

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:42](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L42)

Optimize the normals for the model. Lighting can be uneven if you use OptimizeWithUV = true because new vertices can be created for the same location if they pertain to different faces.
Using OptimizehNormals = true will help smoothing the lighting by averaging the normals of those vertices.

***

### optimizeWithUV

> **optimizeWithUV**: `boolean`

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:16](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L16)

Defines if UVs are optimized by default during load.

***

### skipMaterials

> **skipMaterials**: `boolean`

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:46](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L46)

Skip loading the materials even if defined in the OBJ file (materials are ignored).

***

### useLegacyBehavior

> **useLegacyBehavior**: `boolean`

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:54](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L54)

Loads assets without handedness conversions. This flag is for compatibility. Use it only if absolutely required. Defaults to false.

***

### UVScaling

> **UVScaling**: [`Vector2`](../../../core/src/classes/Vector2.md)

Defined in: [packages/dev/loaders/src/OBJ/objLoadingOptions.ts:21](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/OBJ/objLoadingOptions.ts#L21)

Defines custom scaling of UV coordinates of loaded meshes.
