[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IFlowGraphHostResolver

# Interface: IFlowGraphHostResolver

Defined in: [packages/dev/core/src/FlowGraph/flowGraphHostResolver.ts:37](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphHostResolver.ts#L37)

Lets the environment hosting a flow graph decide how runtime entities are represented as opaque
reference values, so the graph engine itself stays agnostic of the host's object model.

A host (e.g. a glTF loader extension) provides an implementation through
[IFlowGraphCoordinatorConfiguration.hostResolver](IFlowGraphCoordinatorConfiguration.md#hostresolver). Every member is optional; the engine
falls back to a neutral built-in representation for anything the host does not provide.

## Methods

### decodeEventReference()?

> `optional` **decodeEventReference**(`reference`): `string` \| `undefined`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphHostResolver.ts:56](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphHostResolver.ts#L56)

Decodes an event reference produced by [IFlowGraphHostResolver.encodeEventReference](#encodeeventreference)
back into its event source key. Must return `undefined` for values that are not event
references.

#### Parameters

##### reference

`string`

the reference to decode

#### Returns

`string` \| `undefined`

the event source key, or `undefined` when the value is not an event reference

***

### decodeIndexReference()?

> `optional` **decodeIndexReference**(`reference`): `number` \| `undefined`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphHostResolver.ts:65](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphHostResolver.ts#L65)

Decodes the array index denoted by a reference, for cases where a reference addresses an
element of one of the host's collections. Must return `undefined` for values the host does
not recognise as an indexed reference.

#### Parameters

##### reference

`string`

the reference to decode

#### Returns

`number` \| `undefined`

the index the reference denotes, or `undefined` when it does not denote one

***

### encodeEventReference()?

> `optional` **encodeEventReference**(`key`): `string`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphHostResolver.ts:47](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphHostResolver.ts#L47)

Encodes an event source key as the opaque reference exposed by event blocks on their
`event` output.

References must be stable: two calls with the same key must produce equal values so that
equality comparisons of two `event` outputs of the same source succeed.

#### Parameters

##### key

`string`

the event source key

#### Returns

`string`

the reference representing the event source

***

### getObjectReference()?

> `optional` **getObjectReference**(`object`, `hint?`): `string` \| `undefined`

Defined in: [packages/dev/core/src/FlowGraph/flowGraphHostResolver.ts:79](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/FlowGraph/flowGraphHostResolver.ts#L79)

Maps a runtime object to the reference the host addresses it by, for example the JSON
Pointer of the resource a loaded object originates from.

Used when an object value is supplied to a templated path input. Returning `undefined`
means the host cannot address the object, and the value is rejected.

#### Parameters

##### object

`object`

the runtime object to address

##### hint?

`string`

optional disambiguation hint, taken from the path segment preceding the template
parameter being resolved. A single object may be addressable in several ways, and the hint
tells the host which kind of reference the graph is asking for.

#### Returns

`string` \| `undefined`

the reference for the object, or `undefined` when it cannot be addressed
