[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HtmlRaycastInteractionManager

# Class: HtmlRaycastInteractionManager

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts:50](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts#L50)

Routes Babylon pointer events to a live HTML element rendered through an [HtmlTexture](HtmlTexture.md).

On every pointer event the scene is picked; when the configured mesh is hit, the picked UV is mapped to
a pixel inside the source element and an equivalent DOM pointer (and mouse) event is dispatched there.
This works for arbitrary meshes (planes, boxes, curved surfaces) because it relies on UV coordinates
rather than a flat CSS overlay. For a perspective-correct overlay on planar surfaces, see
[HtmlInteractionManager](HtmlInteractionManager.md).

## Constructors

### Constructor

> **new HtmlRaycastInteractionManager**(`scene`, `texture`, `mesh`, `options?`): `HtmlRaycastInteractionManager`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts:72](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts#L72)

Creates a raycast interaction manager.

#### Parameters

##### scene

[`Scene`](Scene.md)

the scene to listen to for pointer events

##### texture

[`HtmlTexture`](HtmlTexture.md)

the HTML texture whose element should receive the forwarded events

##### mesh

[`AbstractMesh`](AbstractMesh.md)

the mesh displaying the texture; only hits on this mesh are forwarded

##### options?

[`IHtmlRaycastInteractionManagerOptions`](../interfaces/IHtmlRaycastInteractionManagerOptions.md) = `{}`

optional configuration

#### Returns

`HtmlRaycastInteractionManager`

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts:244](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/Textures/HTML/htmlRaycastInteractionManager.ts#L244)

Detaches the manager and stops forwarding pointer events.

#### Returns

`void`
