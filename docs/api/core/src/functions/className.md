[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / className

# Function: className()

> **className**(`name`, `module?`): (`target`) => `void`

Defined in: [packages/dev/core/src/Misc/tools.pure.ts:1631](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/tools.pure.ts#L1631)

Use this className as a decorator on a given class definition to add it a name and optionally its module.
You can then use the Tools.getClassName(obj) on an instance to retrieve its class name.
This method is the only way to get it done in all cases, even if the .js file declaring the class is minified

## Parameters

### name

`string`

The name of the class, case should be preserved

### module?

`string`

The name of the Module hosting the class, optional, but strongly recommended to specify if possible. Case should be preserved.

## Returns

a decorator function to apply on the class definition.

(`target`) => `void`
