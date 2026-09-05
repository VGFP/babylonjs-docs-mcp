[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / PrepareTextureFunction

# Type Alias: PrepareTextureFunction

> **PrepareTextureFunction** = (`texture`, `extension`, `scene`, `img`, `invertY`, `noMipmap`, `isCompressed`, `processFunction`, `samplingMode`) => `void`

Defined in: [packages/dev/core/src/Engines/abstractEngine.pure.ts:212](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Engines/abstractEngine.pure.ts#L212)

## Parameters

### texture

[`InternalTexture`](../classes/InternalTexture.md)

### extension

`string`

### scene

[`Nullable`](Nullable.md)\<`ISceneLike`\>

### img

`HTMLImageElement` \| `ImageBitmap` \| \{ `height`: `number`; `width`: `number`; \}

### invertY

`boolean`

### noMipmap

`boolean`

### isCompressed

`boolean`

### processFunction

[`PrepareTextureProcessFunction`](PrepareTextureProcessFunction.md)

### samplingMode

`number`

## Returns

`void`
