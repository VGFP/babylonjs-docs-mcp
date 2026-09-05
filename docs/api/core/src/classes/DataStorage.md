[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DataStorage

# Class: DataStorage

Defined in: [packages/dev/core/src/Misc/dataStorage.ts:11](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/dataStorage.ts#L11)

Class for storing data to local storage if available or in-memory storage otherwise

## Constructors

### Constructor

> **new DataStorage**(): `DataStorage`

#### Returns

`DataStorage`

## Methods

### ReadBoolean()

> `static` **ReadBoolean**(`key`, `defaultValue`): `boolean`

Defined in: [packages/dev/core/src/Misc/dataStorage.ts:59](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/dataStorage.ts#L59)

Reads a boolean from the data storage

#### Parameters

##### key

`string`

The key to read

##### defaultValue

`boolean`

The value if the key doesn't exist

#### Returns

`boolean`

The boolean value

***

### ReadJson()

> `static` **ReadJson**\<`T`\>(`key`, `defaultValue`): `T`

Defined in: [packages/dev/core/src/Misc/dataStorage.ts:99](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/dataStorage.ts#L99)

Reads a JSON value from the data storage

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

The key to read

##### defaultValue

`T`

The value if the key doesn't exist

#### Returns

`T`

The JSON value

***

### ReadNumber()

> `static` **ReadNumber**(`key`, `defaultValue`): `number`

Defined in: [packages/dev/core/src/Misc/dataStorage.ts:79](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/dataStorage.ts#L79)

Reads a number from the data storage

#### Parameters

##### key

`string`

The key to read

##### defaultValue

`number`

The value if the key doesn't exist

#### Returns

`number`

The number value

***

### ReadString()

> `static` **ReadString**(`key`, `defaultValue`): `string`

Defined in: [packages/dev/core/src/Misc/dataStorage.ts:39](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/dataStorage.ts#L39)

Reads a string from the data storage

#### Parameters

##### key

`string`

The key to read

##### defaultValue

`string`

The value if the key doesn't exist

#### Returns

`string`

The string value

***

### WriteBoolean()

> `static` **WriteBoolean**(`key`, `value`): `void`

Defined in: [packages/dev/core/src/Misc/dataStorage.ts:69](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/dataStorage.ts#L69)

Writes a boolean to the data storage

#### Parameters

##### key

`string`

The key to write

##### value

`boolean`

The value to write

#### Returns

`void`

***

### WriteJson()

> `static` **WriteJson**\<`T`\>(`key`, `value`): `void`

Defined in: [packages/dev/core/src/Misc/dataStorage.ts:114](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/dataStorage.ts#L114)

Writes a JSON value to the data storage

#### Type Parameters

##### T

`T`

#### Parameters

##### key

`string`

The key to write

##### value

`T`

The JSON value to write

#### Returns

`void`

***

### WriteNumber()

> `static` **WriteNumber**(`key`, `value`): `void`

Defined in: [packages/dev/core/src/Misc/dataStorage.ts:89](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/dataStorage.ts#L89)

Writes a number to the data storage

#### Parameters

##### key

`string`

The key to write

##### value

`number`

The value to write

#### Returns

`void`

***

### WriteString()

> `static` **WriteString**(`key`, `value`): `void`

Defined in: [packages/dev/core/src/Misc/dataStorage.ts:49](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/dataStorage.ts#L49)

Writes a string to the data storage

#### Parameters

##### key

`string`

The key to write

##### value

`string`

The value to write

#### Returns

`void`
