[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / NodeRenderGraphBuildState

# Class: NodeRenderGraphBuildState

Defined in: [packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBuildState.ts:7](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBuildState.ts#L7)

Class used to store node based render graph build state

## Constructors

### Constructor

> **new NodeRenderGraphBuildState**(): `NodeRenderGraphBuildState`

#### Returns

`NodeRenderGraphBuildState`

## Properties

### buildId

> **buildId**: `number`

Defined in: [packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBuildState.ts:9](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBuildState.ts#L9)

Gets or sets the build identifier

***

### verbose

> **verbose**: `boolean` = `false`

Defined in: [packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBuildState.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBuildState.ts#L12)

Gets or sets a boolean indicating that verbose mode is on

## Methods

### emitErrors()

> **emitErrors**(`errorObservable?`): `boolean`

Defined in: [packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBuildState.ts:25](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FrameGraph/Node/nodeRenderGraphBuildState.ts#L25)

Emits console errors and exceptions if there is a failing check

#### Parameters

##### errorObservable?

[`Nullable`](../type-aliases/Nullable.md)\<[`Observable`](Observable.md)\<`string`\>\> = `null`

defines an Observable to send the error message

#### Returns

`boolean`

true if all checks pass
