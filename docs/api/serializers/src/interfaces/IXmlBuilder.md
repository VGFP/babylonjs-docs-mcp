[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / IXmlBuilder

# Interface: IXmlBuilder

Defined in: [packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:12](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L12)

Provides a fluent interface for writing XML content.

## Methods

### att()

> **att**(`ns`, `n`, `v`): `IXmlBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:28](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L28)

Writes an XML attribute.

#### Parameters

##### ns

`string` \| `null`

defines the attribute namespace

##### n

`string`

defines the attribute name

##### v

`string`

defines the attribute value

#### Returns

`IXmlBuilder`

the XML builder

***

### dec()

> **dec**(`version`, `encoding?`, `standalone?`): `IXmlBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:20](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L20)

Writes the XML declaration.

#### Parameters

##### version

`string`

defines the XML version

##### encoding?

`string`

defines the optional XML encoding

##### standalone?

`boolean`

defines the optional standalone flag

#### Returns

`IXmlBuilder`

the XML builder

***

### ele()

> **ele**(`ns`, `n`): `IXmlBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L35)

Writes an XML element.

#### Parameters

##### ns

`string` \| `null`

defines the element namespace

##### n

`string`

defines the element name

#### Returns

`IXmlBuilder`

the XML builder

***

### end()

> **end**(): `IXmlBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:46](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L46)

Ends the current XML element.

#### Returns

`IXmlBuilder`

the XML builder

***

### text()

> **text**(`txt`): `IXmlBuilder`

Defined in: [packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts:41](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/xml/xml.interfaces.ts#L41)

Writes text content.

#### Parameters

##### txt

`string`

defines the text to write

#### Returns

`IXmlBuilder`

the XML builder
