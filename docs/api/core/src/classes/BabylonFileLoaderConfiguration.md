[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / BabylonFileLoaderConfiguration

# Class: BabylonFileLoaderConfiguration

Defined in: [packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts:48](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts#L48)

Helps setting up some configuration for the babylon file loader.

## Constructors

### Constructor

> **new BabylonFileLoaderConfiguration**(): `BabylonFileLoaderConfiguration`

#### Returns

`BabylonFileLoaderConfiguration`

## Properties

### LoaderInjectedPhysicsEngine

> `static` **LoaderInjectedPhysicsEngine**: `any` = `undefined`

Defined in: [packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts:54](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/Plugins/babylonFileLoader.pure.ts#L54)

The loader does not allow injecting custom physics engine into the plugins.
Unfortunately in ES6, we need to manually inject them into the plugin.
So you could set this variable to your engine import to make it work.
