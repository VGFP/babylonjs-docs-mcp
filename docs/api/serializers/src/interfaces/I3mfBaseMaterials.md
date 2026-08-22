[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / I3mfBaseMaterials

# Interface: I3mfBaseMaterials

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:292](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L292)

Base materials property group.
Triangles or objects can reference this group via pid, and then a specific entry via pindex (or p1/p2/p3).

## Properties

### base

> **base**: [`I3mfBase`](I3mfBase.md)[]

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:297](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L297)

List of base material entries.

***

### id

> **id**: `number`

Defined in: [packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts:294](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/serializers/src/3MF/core/model/3mf.interfaces.ts#L294)

Property group id. Must be unique within resources.
