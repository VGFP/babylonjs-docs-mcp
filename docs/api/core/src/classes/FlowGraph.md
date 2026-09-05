[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraph

# Class: FlowGraph

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:108](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L108)

**`Experimental`**

Class used to represent a flow graph.
A flow graph is a graph of blocks that can be used to create complex logic.
Blocks can be added to the graph and connected to each other.
The graph can then be started, which will init and start all of its event blocks.

 FlowGraph is still in development and is subject to change.

## Constructors

### Constructor

> **new FlowGraph**(`params`): `FlowGraph`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:229](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L229)

**`Experimental`**

Construct a Flow Graph

#### Parameters

##### params

[`IFlowGraphParams`](../interfaces/IFlowGraphParams.md)

construction parameters. currently only the scene

#### Returns

`FlowGraph`

## Properties

### name

> **name**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:112](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L112)

**`Experimental`**

A human-readable name for this graph.

***

### onStateChangedObservable

> **onStateChangedObservable**: [`Observable`](Observable.md)\<[`FlowGraphState`](../enumerations/FlowGraphState.md)\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:150](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L150)

**`Experimental`**

An observable that is triggered when the state of the graph changes.

***

### uniqueId

> **uniqueId**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:117](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L117)

**`Experimental`**

A unique identifier for this graph. Auto-generated if not provided.

***

### EditorURL

> `static` **EditorURL**: `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:122](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L122)

**`Experimental`**

Define the URL to load the flow graph editor script from.

## Accessors

### contextCount

#### Get Signature

> **get** **contextCount**(): `number`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:346](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L346)

**`Experimental`**

Returns the number of execution contexts currently attached to this graph.

##### Returns

`number`

***

### coordinator

#### Get Signature

> **get** **coordinator**(): [`FlowGraphCoordinator`](FlowGraphCoordinator.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:189](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L189)

**`Experimental`**

The coordinator that owns this flow graph.

##### Returns

[`FlowGraphCoordinator`](FlowGraphCoordinator.md)

***

### scene

#### Get Signature

> **get** **scene**(): [`Scene`](Scene.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:181](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L181)

**`Experimental`**

The scene associated with this flow graph.

##### Returns

[`Scene`](Scene.md)

***

### sceneEventCoordinator

#### Get Signature

> **get** **sceneEventCoordinator**(): `FlowGraphSceneEventCoordinator`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:199](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L199)

**`Experimental`**

The scene event coordinator for this graph.
Provides access to runtime event state such as currently pressed keys.

##### Returns

`FlowGraphSceneEventCoordinator`

***

### state

#### Get Signature

> **get** **state**(): [`FlowGraphState`](../enumerations/FlowGraphState.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:213](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L213)

**`Experimental`**

The state of the graph

##### Returns

[`FlowGraphState`](../enumerations/FlowGraphState.md)

#### Set Signature

> **set** **state**(`value`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:220](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L220)

**`Experimental`**

The state of the graph

##### Parameters

###### value

[`FlowGraphState`](../enumerations/FlowGraphState.md)

##### Returns

`void`

## Methods

### addBlock()

> **addBlock**(`block`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:380](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L380)

**`Experimental`**

Register a block with the graph. This does not wire any connections;
it simply ensures the block is tracked so that serialization, editor
display, and validation see it even when it is not reachable from an
event block.

#### Parameters

##### block

[`FlowGraphBlock`](FlowGraphBlock.md)

the block to register

#### Returns

`void`

***

### addEventBlock()

> **addEventBlock**(`block`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:438](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L438)

**`Experimental`**

Add an event block. When the graph is started, it will start listening to events
from the block and execute the graph when they are triggered.

#### Parameters

##### block

[`FlowGraphEventBlock`](FlowGraphEventBlock.md)

the event block to be added

#### Returns

`void`

***

### createContext()

> **createContext**(): [`FlowGraphContext`](FlowGraphContext.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:328](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L328)

**`Experimental`**

Create a context. A context represents one self contained execution for the graph, with its own variables.

#### Returns

[`FlowGraphContext`](FlowGraphContext.md)

the context, where you can get and set variables

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:570](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L570)

**`Experimental`**

Disposes of the flow graph. Cancels any pending tasks and removes all event listeners.

#### Returns

`void`

***

### edit()

> **edit**(`config?`): `Promise`\<`void`\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:684](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L684)

**`Experimental`**

Launches the flow graph editor for this graph.
The editor is lazy-loaded from [FlowGraph.EditorURL](#editorurl) the first time it is used.

#### Parameters

##### config?

[`IFlowGraphEditorLaunchOptions`](../interfaces/IFlowGraphEditorLaunchOptions.md)

defines the configuration of the editor

#### Returns

`Promise`\<`void`\>

a promise fulfilled when the editor is visible

***

### getAllBlocks()

> **getAllBlocks**(): readonly [`FlowGraphBlock`](FlowGraphBlock.md)[]

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:369](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L369)

**`Experimental`**

Returns all blocks registered in this graph, including disconnected ones.

#### Returns

readonly [`FlowGraphBlock`](FlowGraphBlock.md)[]

a read-only array of all blocks

***

### getContext()

> **getContext**(`index`): [`FlowGraphContext`](FlowGraphContext.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:339](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L339)

**`Experimental`**

Returns the execution context at a given index

#### Parameters

##### index

`number`

the index of the context

#### Returns

[`FlowGraphContext`](FlowGraphContext.md)

the execution context at that index

***

### pause()

> **pause**(): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:483](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L483)

**`Experimental`**

Pauses the flow graph. Cancels pending tasks but keeps execution contexts and event blocks.
Call start() to resume.

#### Returns

`void`

***

### removeBlock()

> **removeBlock**(`block`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:391](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L391)

**`Experimental`**

Remove a block from the graph. Disconnects all of its ports and, if it
is an event block, unregisters it from the event-block lists.

#### Parameters

##### block

[`FlowGraphBlock`](FlowGraphBlock.md)

the block to remove

#### Returns

`void`

***

### removeContext()

> **removeContext**(`index`): [`FlowGraphContext`](FlowGraphContext.md) \| `undefined`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:356](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L356)

**`Experimental`**

Remove an execution context by index. Any pending async blocks on
the context are cleared before removal.

#### Parameters

##### index

`number`

the index of the context to remove

#### Returns

[`FlowGraphContext`](FlowGraphContext.md) \| `undefined`

the removed context, or undefined if the index was out of range

***

### serialize()

> **serialize**(`serializationObject?`, `valueSerializeFunction?`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:649](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L649)

**`Experimental`**

Serializes a graph

#### Parameters

##### serializationObject?

`any` = `{}`

the object to write the values in

##### valueSerializeFunction?

(`key`, `value`, `serializationObject`) => `void`

a function to serialize complex values

#### Returns

`void`

***

### setScene()

> **setScene**(`scene`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:287](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L287)

**`Experimental`**

Sets a new scene for this flow graph, re-wiring all event listeners.
This is useful when the scene the flow graph should listen to changes
(e.g. when a new scene is loaded in an editor preview).
If the graph is currently running, it will be stopped first and must be
restarted manually after calling this method.

#### Parameters

##### scene

[`Scene`](Scene.md)

the new scene to attach to

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:498](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L498)

**`Experimental`**

Starts the flow graph. Initializes the event blocks and starts listening to events.
Can also be called to resume from a paused state.

#### Returns

`void`

***

### stop()

> **stop**(): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:466](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L466)

**`Experimental`**

Stops the flow graph. Cancels all pending tasks and clears execution contexts,
but keeps event blocks so the graph can be restarted.

#### Returns

`void`

***

### validate()

> **validate**(): [`IFlowGraphValidationResult`](../interfaces/IFlowGraphValidationResult.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:640](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L640)

**`Experimental`**

Validates the flow graph and returns all issues found.
Uses the tracked block list for complete validation including unreachable block detection.

#### Returns

[`IFlowGraphValidationResult`](../interfaces/IFlowGraphValidationResult.md)

The validation result containing errors and warnings.

***

### visitAllBlocks()

> **visitAllBlocks**(`visitor`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraph.ts:600](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraph.ts#L600)

**`Experimental`**

Executes a function in all blocks of a flow graph, starting with the event blocks.

#### Parameters

##### visitor

(`block`) => `void`

the function to execute.

#### Returns

`void`
