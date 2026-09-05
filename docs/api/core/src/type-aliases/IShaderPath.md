[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IShaderPath

# Type Alias: IShaderPath

> **IShaderPath** = `object`

Defined in: [packages/dev/core/src/Materials/effect.pure.ts:30](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effect.pure.ts#L30)

Defines the route to the shader code. The priority is as follows:
 * object: `{ vertexSource: "vertex shader code string", fragmentSource: "fragment shader code string" }` for directly passing the shader code
 * object: `{ vertexElement: "vertexShaderCode", fragmentElement: "fragmentShaderCode" }`, used with shader code in script tags
 * object: `{ vertex: "custom", fragment: "custom" }`, used with `Effect.ShadersStore["customVertexShader"]` and `Effect.ShadersStore["customFragmentShader"]`
 * string: `"./COMMON_NAME"`, used with external files COMMON_NAME.vertex.fx and COMMON_NAME.fragment.fx in index.html folder.

## Properties

### fragment?

> `optional` **fragment?**: `string`

Defined in: [packages/dev/core/src/Materials/effect.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effect.pure.ts#L49)

Used with Effect.ShadersStore. If the `fragment` is set to `"custom`, then
Babylon.js will read from Effect.ShadersStore["customFragmentShader"]

***

### fragmentElement?

> `optional` **fragmentElement?**: `string`

Defined in: [packages/dev/core/src/Materials/effect.pure.ts:57](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effect.pure.ts#L57)

Used with shader code in script tags

***

### fragmentSource?

> `optional` **fragmentSource?**: `string`

Defined in: [packages/dev/core/src/Materials/effect.pure.ts:39](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effect.pure.ts#L39)

Directly pass the shader code

***

### spectorName?

> `optional` **spectorName?**: `string`

Defined in: [packages/dev/core/src/Materials/effect.pure.ts:61](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effect.pure.ts#L61)

Defines the name appearing in spector when framgent/vertex...source are being used

***

### vertex?

> `optional` **vertex?**: `string`

Defined in: [packages/dev/core/src/Materials/effect.pure.ts:44](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effect.pure.ts#L44)

Used with Effect.ShadersStore. If the `vertex` is set to `"custom`, then
Babylon.js will read from Effect.ShadersStore["customVertexShader"]

***

### vertexElement?

> `optional` **vertexElement?**: `string`

Defined in: [packages/dev/core/src/Materials/effect.pure.ts:53](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effect.pure.ts#L53)

Used with shader code in script tags

***

### vertexSource?

> `optional` **vertexSource?**: `string`

Defined in: [packages/dev/core/src/Materials/effect.pure.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/effect.pure.ts#L35)

Directly pass the shader code
