[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FluidRendererSceneComponent

# Class: FluidRendererSceneComponent

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L36)

Defines the fluid renderer scene component responsible to render objects as fluids

## Implements

- [`ISceneComponent`](../interfaces/ISceneComponent.md)

## Constructors

### Constructor

> **new FluidRendererSceneComponent**(`scene`): `FluidRendererSceneComponent`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:51](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L51)

Creates a new instance of the component for the given scene

#### Parameters

##### scene

[`Scene`](Scene.md)

Defines the scene to register the component in

#### Returns

`FluidRendererSceneComponent`

## Properties

### name

> `readonly` **name**: `"FluidRenderer"` = `SceneComponentConstants.NAME_FLUIDRENDERER`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:40](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L40)

The component name helpful to identify the component in the list of scene components.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`name`](../interfaces/ISceneComponent.md#name)

***

### scene

> **scene**: [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:45](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L45)

The scene the component belongs to.

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`scene`](../interfaces/ISceneComponent.md#scene)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L104)

Disposes the component and the associated resources

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`dispose`](../interfaces/ISceneComponent.md#dispose)

***

### rebuild()

> **rebuild**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:79](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L79)

Rebuilds the elements related to this component in case of
context lost for instance.

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`rebuild`](../interfaces/ISceneComponent.md#rebuild)

***

### register()

> **register**(): `void`

Defined in: [packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts:58](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Rendering/fluidRenderer/fluidRenderer.pure.ts#L58)

Registers the component in a given scene

#### Returns

`void`

#### Implementation of

[`ISceneComponent`](../interfaces/ISceneComponent.md).[`register`](../interfaces/ISceneComponent.md#register)
