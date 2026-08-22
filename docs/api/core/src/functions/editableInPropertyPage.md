[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / editableInPropertyPage

# Function: editableInPropertyPage()

> **editableInPropertyPage**(`displayName`, `propertyType?`, `groupName?`, `options?`): (`_value`, `context`) => `void`

Defined in: [packages/dev/core/src/Decorators/nodeDecorator.ts:105](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Decorators/nodeDecorator.ts#L105)

Decorator that flags a property in a node block as being editable

## Parameters

### displayName

`string`

the display name of the property

### propertyType?

[`PropertyTypeForEdition`](../enumerations/PropertyTypeForEdition.md) = `PropertyTypeForEdition.Boolean`

the type of the property

### groupName?

`string` = `"PROPERTIES"`

the group name of the property

### options?

[`IEditablePropertyOption`](../interfaces/IEditablePropertyOption.md)

the options of the property

## Returns

the decorator

(`_value`, `context`) => `void`
