[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICustomShaderNameResolveOptions

# Interface: ICustomShaderNameResolveOptions

Defined in: [packages/dev/core/src/Materials/material.pure.ts:77](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L77)

Options passed when calling customShaderNameResolve

## Properties

### processFinalCode?

> `optional` **processFinalCode?**: [`Nullable`](../type-aliases/Nullable.md)\<`ShaderCustomProcessingFunction`\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/material.pure.ts#L81)

If provided, will be called two times with the vertex and fragment code so that this code can be updated before it is compiled by the GPU
