[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / HavokPluginParameters

# Interface: HavokPluginParameters

Defined in: [packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:329](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L329)

Configuration parameters for the Havok plugin

## Properties

### disableWorldRegions?

> `optional` **disableWorldRegions?**: `boolean`

Defined in: [packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:339](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L339)

Whether to disable Havok world regions when floating origin mode is enabled.
Set this when the application manages physics precision through its own rebasing system.
Default is false.

***

### floatingOriginWorldRadius?

> `optional` **floatingOriginWorldRadius?**: `number`

Defined in: [packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:346](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L346)

Radius of each floating origin world region.
Bodies within this radius of a world region's origin will use that world.
Bodies created outside existing regions will create a new region.
Default is 100000 units.

***

### maxQueryCollectorHits?

> `optional` **maxQueryCollectorHits?**: `number`

Defined in: [packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts:333](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Physics/v2/Plugins/havokPlugin.ts#L333)

Maximum number of raycast hits to process
