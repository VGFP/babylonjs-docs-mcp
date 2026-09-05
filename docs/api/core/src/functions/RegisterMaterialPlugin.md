[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RegisterMaterialPlugin

# Function: RegisterMaterialPlugin()

> **RegisterMaterialPlugin**(`pluginName`, `factory`): `void`

Defined in: [packages/dev/core/src/Materials/materialPluginManager.pure.ts:481](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Materials/materialPluginManager.pure.ts#L481)

Registers a new material plugin through a factory, or updates it. This makes the plugin available to all materials instantiated after its registration.
Register side effects for materialPlugin.
Safe to call multiple times; only the first call has an effect.

## Parameters

### pluginName

`string`

The plugin name

### factory

[`PluginMaterialFactory`](../type-aliases/PluginMaterialFactory.md)

The factory function which allows to create the plugin

## Returns

`void`
