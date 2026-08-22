[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / InteractivityGraphToFlowGraphParser

# Class: InteractivityGraphToFlowGraphParser

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:60](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L60)

Parses a KHR_interactivity graph definition (the raw glTF JSON object) into
the serialized FlowGraph form consumed by ParseFlowGraphAsync.

The class walks the interactivity types, declarations, variables, events
and nodes in order and emits an [ISerializedFlowGraph](../../../../../core/src/interfaces/ISerializedFlowGraph.md) via
[serializeToFlowGraph](#serializetoflowgraph).

## Constructors

### Constructor

> **new InteractivityGraphToFlowGraphParser**(`_interactivityGraph`, `_gltf`, `_animationTargetFps?`): `InteractivityGraphToFlowGraphParser`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:79](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L79)

#### Parameters

##### \_interactivityGraph

`IKHRInteractivity_Graph`

##### \_gltf

[`IGLTF`](../interfaces/IGLTF.md)

##### \_animationTargetFps?

`number` = `60`

#### Returns

`InteractivityGraphToFlowGraphParser`

## Properties

### \_animationTargetFps

> **\_animationTargetFps**: `number` = `60`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:82](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L82)

## Accessors

### arrays

#### Get Signature

> **get** **arrays**(): `object`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:93](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L93)

##### Returns

`object`

###### events

> **events**: [`InteractivityEvent`](../interfaces/InteractivityEvent.md)[]

###### mappings

> **mappings**: `object`[]

###### nodes

> **nodes**: `object`[]

###### staticVariables

> **staticVariables**: `object`[]

###### types

> **types**: `object`[]

## Methods

### getVariableName()

> **getVariableName**(`index`): `string`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:578](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L578)

Returns the deterministic FlowGraph user-variable name used for the
static variable at the given declaration index.

#### Parameters

##### index

`number`

zero-based index into the interactivity graph's `variables` array.

#### Returns

`string`

the FlowGraph variable name (e.g. `staticVariable_3`).

***

### serializeToFlowGraph()

> **serializeToFlowGraph**(): [`ISerializedFlowGraph`](../../../../../core/src/interfaces/ISerializedFlowGraph.md)

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:588](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L588)

Serializes the parsed interactivity graph into the [ISerializedFlowGraph](../../../../../core/src/interfaces/ISerializedFlowGraph.md)
payload consumed by `ParseFlowGraphAsync`. Performs node-connection wiring
and seeds the execution context with the graph's static variables.

#### Returns

[`ISerializedFlowGraph`](../../../../../core/src/interfaces/ISerializedFlowGraph.md)

the serialized FlowGraph for the parsed KHR_interactivity graph.
