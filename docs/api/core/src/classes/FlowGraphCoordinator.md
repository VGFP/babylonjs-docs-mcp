[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / FlowGraphCoordinator

# Class: FlowGraphCoordinator

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L52)

**`Experimental`**

This class holds all of the existing flow graphs and is responsible for creating new ones.
It also handles starting/stopping multiple graphs and communication between them through an Event Coordinator
This is the entry point for the flow graph system.
 This class is still in development and is subject to change.

## Constructors

### Constructor

> **new FlowGraphCoordinator**(`config`): `FlowGraphCoordinator`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:115](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L115)

**`Experimental`**

#### Parameters

##### config

[`IFlowGraphCoordinatorConfiguration`](../interfaces/IFlowGraphCoordinatorConfiguration.md)

the configuration of the block

#### Returns

`FlowGraphCoordinator`

## Properties

### config

> **config**: [`IFlowGraphCoordinatorConfiguration`](../interfaces/IFlowGraphCoordinatorConfiguration.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:119](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L119)

**`Experimental`**

the configuration of the block

***

### dispatchEventsSynchronously

> **dispatchEventsSynchronously**: `boolean` = `true`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:92](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L92)

**`Experimental`**

When set to true (default) custom events will be dispatched synchronously.
This means that the events will be dispatched immediately when they are triggered.

***

### MaxEventsPerType

> `static` **MaxEventsPerType**: `number` = `30`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:58](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L58)

**`Experimental`**

The maximum number of events per type.
This is used to limit the number of events that can be created in a single scene.
This is to prevent infinite loops.

***

### MaxEventTypeExecutionPerFrame

> `static` **MaxEventTypeExecutionPerFrame**: `number` = `30`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:63](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L63)

**`Experimental`**

The maximum number of execution of a specific event in a single frame.

## Accessors

### flowGraphs

#### Get Signature

> **get** **flowGraphs**(): [`FlowGraph`](FlowGraph.md)[]

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:226](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L226)

**`Experimental`**

Gets the list of flow graphs

##### Returns

[`FlowGraph`](FlowGraph.md)[]

***

### OnFlowGraphAddedObservable

#### Get Signature

> **get** `static` **OnFlowGraphAddedObservable**(): [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`FlowGraph`](FlowGraph.md)\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:74](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L74)

**`Experimental`**

Observable raised when a flow graph is added to any coordinator. Used by the inspector to keep
the flow graph list in sync. The payload is the newly added flow graph.

##### Returns

[`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`FlowGraph`](FlowGraph.md)\>

***

### OnFlowGraphRemovedObservable

#### Get Signature

> **get** `static` **OnFlowGraphRemovedObservable**(): [`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`FlowGraph`](FlowGraph.md)\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:83](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L83)

**`Experimental`**

Observable raised when a flow graph is removed from any coordinator. Used by the inspector to keep
the flow graph list in sync. The payload is the removed flow graph.

##### Returns

[`IReadonlyObservable`](../interfaces/IReadonlyObservable.md)\<[`FlowGraph`](FlowGraph.md)\>

## Methods

### createGraph()

> **createGraph**(`name?`): [`FlowGraph`](FlowGraph.md)

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:158](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L158)

**`Experimental`**

Creates a new flow graph and adds it to the list of existing flow graphs

#### Parameters

##### name?

`string`

optional name for the new graph. If not provided, an auto-generated name is used.

#### Returns

[`FlowGraph`](FlowGraph.md)

a new flow graph

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:191](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L191)

**`Experimental`**

Disposes all graphs

#### Returns

`void`

***

### getCustomEventObservable()

> **getCustomEventObservable**(`id`): [`Observable`](Observable.md)\<`any`\>

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:235](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L235)

**`Experimental`**

Get an observable that will be notified when the event with the given id is fired.

#### Parameters

##### id

`string`

the id of the event

#### Returns

[`Observable`](Observable.md)\<`any`\>

the observable for the event

***

### notifyCustomEvent()

> **notifyCustomEvent**(`id`, `data`, `async?`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:251](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L251)

**`Experimental`**

Notifies the observable for the given event id with the given data.

#### Parameters

##### id

`string`

the id of the event

##### data

`any`

the data to send with the event

##### async?

`boolean` = `...`

if true, the event will be dispatched asynchronously

#### Returns

`void`

***

### removeGraph()

> **removeGraph**(`graph`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:170](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L170)

**`Experimental`**

Removes a flow graph from the list of existing flow graphs and disposes it

#### Parameters

##### graph

[`FlowGraph`](FlowGraph.md)

the graph to remove

#### Returns

`void`

***

### serialize()

> **serialize**(`serializationObject`, `valueSerializeFunction?`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:213](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L213)

**`Experimental`**

Serializes this coordinator to a JSON object.

#### Parameters

##### serializationObject

`any`

the object to serialize to

##### valueSerializeFunction?

(`key`, `value`, `serializationObject`) => `void`

the function to use to serialize the value

#### Returns

`void`

***

### start()

> **start**(): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:182](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L182)

**`Experimental`**

Starts all graphs

#### Returns

`void`

***

### stopEventPropagation()

> **stopEventPropagation**(`event`, `stopImmediate`): `void`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts:311](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/FlowGraph/flowGraphCoordinator.ts#L311)

**`Experimental`**

Stops the propagation of an in-flight custom event, preventing any event
handler nodes that have not been activated yet from running for the current
dispatch.

The `event` argument is the opaque event reference produced by an event block on its `event`
output. If it does not reference an event that is currently being dispatched, this is a no-op.

Babylon custom events have no scene-graph propagation layer, so there are
no transitive activations to cancel when `stopImmediate` is false. When it
is true, the remaining handlers in the Observable dispatch are skipped.

#### Parameters

##### event

`string`

the event reference to stop propagation for

##### stopImmediate

`boolean`

whether to also stop remaining immediate handlers

#### Returns

`void`
