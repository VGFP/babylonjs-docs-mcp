[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GetEditableProperties

# Function: GetEditableProperties()

> **GetEditableProperties**(`target`): [`IPropertyDescriptionForEdition`](../interfaces/IPropertyDescriptionForEdition.md)[]

Defined in: [packages/dev/core/src/Decorators/nodeDecorator.ts:149](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Decorators/nodeDecorator.ts#L149)

Gets the editable properties for a given target using TC39 decorator metadata.
Walks the metadata prototype chain to include properties from parent classes.

## Parameters

### target

`any`

the target object (instance or constructor)

## Returns

[`IPropertyDescriptionForEdition`](../interfaces/IPropertyDescriptionForEdition.md)[]

array of property descriptions
