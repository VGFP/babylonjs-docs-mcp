[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ICustomShaderNameResolveOptions

# Interface: ICustomShaderNameResolveOptions

Defined in: [packages/dev/core/src/Materials/material.pure.ts:77](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L77)

Options passed when calling customShaderNameResolve

## Properties

### processFinalCode?

> `optional` **processFinalCode?**: [`Nullable`](../type-aliases/Nullable.md)\<`ShaderCustomProcessingFunction`\>

Defined in: [packages/dev/core/src/Materials/material.pure.ts:81](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/material.pure.ts#L81)

If provided, will be called two times with the vertex and fragment code so that this code can be updated before it is compiled by the GPU
