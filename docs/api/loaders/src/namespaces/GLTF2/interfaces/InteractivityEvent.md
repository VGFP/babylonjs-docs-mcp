[**@babylonjs/root v1.0.0**](../../../../../README.md)

***

[@babylonjs/root](../../../../../README.md) / [loaders/src](../../../README.md) / [GLTF2](../README.md) / InteractivityEvent

# Interface: InteractivityEvent

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:17](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L17)

Description of a KHR_interactivity custom event, as parsed from the
glTF `events` array. Used by the importer to register the event with the
FlowGraph send/receive event blocks.

## Properties

### eventData?

> `optional` **eventData?**: `object`[]

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:26](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L26)

Optional payload schema for the event. Each entry describes one
value carried by the event: an `id` (the FlowGraph data socket name),
a `type` (glTF interactivity type name) and an optional default
`value`. `eventData` (the boolean) is currently unused.

#### eventData

> **eventData**: `boolean`

#### id

> **id**: `string`

#### type

> **type**: `string`

#### value?

> `optional` **value?**: `any`

***

### eventId

> **eventId**: `string`

Defined in: [packages/dev/loaders/src/glTF/2.0/Extensions/KHR\_interactivity/interactivityGraphParser.ts:19](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/loaders/src/glTF/2.0/Extensions/KHR_interactivity/interactivityGraphParser.ts#L19)

Identifier of the event, used to match send and receive blocks.
