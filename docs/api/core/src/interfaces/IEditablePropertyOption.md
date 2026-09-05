[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IEditablePropertyOption

# Interface: IEditablePropertyOption

Defined in: [packages/dev/core/src/Decorators/nodeDecorator.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Decorators/nodeDecorator.ts#L52)

Interface that defines the options available for an editable property

## Properties

### embedded?

> `optional` **embedded?**: `boolean`

Defined in: [packages/dev/core/src/Decorators/nodeDecorator.ts:56](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Decorators/nodeDecorator.ts#L56)

Define if the property is displayed inside the source block or in a separate property tab

***

### max?

> `optional` **max?**: `number`

Defined in: [packages/dev/core/src/Decorators/nodeDecorator.ts:60](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Decorators/nodeDecorator.ts#L60)

max value

***

### min?

> `optional` **min?**: `number`

Defined in: [packages/dev/core/src/Decorators/nodeDecorator.ts:58](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Decorators/nodeDecorator.ts#L58)

min value

***

### notifiers?

> `optional` **notifiers?**: `object`

Defined in: [packages/dev/core/src/Decorators/nodeDecorator.ts:62](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Decorators/nodeDecorator.ts#L62)

notifiers: indicates which actions to take when the property is changed

#### activatePreviewCommand?

> `optional` **activatePreviewCommand?**: `boolean`

the onPreviewCommandActivated observer of the preview manager should be triggered

#### callback?

> `optional` **callback?**: (`scene`, `block`) => `boolean` \| `void` \| `undefined`

a callback to trigger

##### Parameters

###### scene

[`Nullable`](../type-aliases/Nullable.md)\<[`Scene`](../classes/Scene.md)\>

###### block

`any`

##### Returns

`boolean` \| `void` \| `undefined`

#### onValidation?

> `optional` **onValidation?**: (`block`, `propertyName`) => `boolean`

a callback to validate the property. Returns true if the property is ok, else false. If false, the rebuild/update/callback events won't be called

##### Parameters

###### block

`any`

###### propertyName

`string`

##### Returns

`boolean`

#### rebuild?

> `optional` **rebuild?**: `boolean`

the entity should be rebuilt

#### update?

> `optional` **update?**: `boolean`

the preview should be updated

***

### options?

> `optional` **options?**: [`IEditablePropertyListOption`](IEditablePropertyListOption.md)[]

Defined in: [packages/dev/core/src/Decorators/nodeDecorator.ts:75](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Decorators/nodeDecorator.ts#L75)

list of the options for a variable of type list
