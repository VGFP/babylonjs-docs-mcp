[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / captureEquirectangularFromScene

# Function: captureEquirectangularFromScene()

> **captureEquirectangularFromScene**(`scene`, `options`): `Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\> \| `null`\>

Defined in: [packages/dev/core/src/Misc/equirectangularCapture.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/equirectangularCapture.pure.ts#L51)

## Parameters

### scene

[`Scene`](../classes/Scene.md)

This refers to the scene which would be rendered in the given equirectangular capture

### options

[`EquiRectangularCaptureOptions`](../interfaces/EquiRectangularCaptureOptions.md)

This refers to the options for a given equirectangular capture

## Returns

`Promise`\<`ArrayBufferView`\<`ArrayBufferLike`\> \| `null`\>

the requested capture's pixel-data or auto downloads the file if options.filename is specified
