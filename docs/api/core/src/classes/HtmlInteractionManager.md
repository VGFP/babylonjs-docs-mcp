[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HtmlInteractionManager

# Class: HtmlInteractionManager

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInteractionManager.ts:62](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/HTML/htmlInteractionManager.ts#L62)

Overlays the live HTML element of an [HtmlTexture](HtmlTexture.md) on top of the projected face of a planar mesh,
so the browser hit-tests the real DOM element natively (enabling focus, text selection and form input).

Each frame the mesh face is projected to screen space and the element is translated, scaled and rotated
to match. This is best suited to planar, camera-facing surfaces. For arbitrary or curved meshes, use the
UV-based [HtmlRaycastInteractionManager](HtmlRaycastInteractionManager.md) instead.

The overlay is screen-aligned (position, size and in-plane rotation); it does not apply a full
perspective skew, so steeply oblique faces will not be perspective-correct.

## Constructors

### Constructor

> **new HtmlInteractionManager**(`scene`, `texture`, `mesh`, `options?`): `HtmlInteractionManager`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInteractionManager.ts:87](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/HTML/htmlInteractionManager.ts#L87)

Creates an overlay interaction manager.

#### Parameters

##### scene

[`Scene`](Scene.md)

the scene whose camera drives the projection

##### texture

[`HtmlTexture`](HtmlTexture.md)

the HTML texture whose element should be overlaid

##### mesh

[`AbstractMesh`](AbstractMesh.md)

the planar mesh displaying the texture

##### options?

[`IHtmlInteractionManagerOptions`](../interfaces/IHtmlInteractionManagerOptions.md) = `{}`

optional configuration

#### Returns

`HtmlInteractionManager`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlInteractionManager.ts:167](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Materials/Textures/HTML/htmlInteractionManager.ts#L167)

Detaches the manager and stops updating the overlay.

#### Returns

`void`
