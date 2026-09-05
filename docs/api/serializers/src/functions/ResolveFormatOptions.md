[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [serializers/src](../README.md) / ResolveFormatOptions

# Function: ResolveFormatOptions()

> **ResolveFormatOptions**(`opts?`): `object`

Defined in: [packages/dev/serializers/src/3MF/core/xml/xml.serializer.format.ts:98](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/serializers/src/3MF/core/xml/xml.serializer.format.ts#L98)

## Parameters

### opts?

[`IXmlSerializerFormatOptions`](../interfaces/IXmlSerializerFormatOptions.md)

## Returns

`object`

### number

> **number**: `Required`\<`Omit`\<[`IXmlSerializerNumberOptions`](../interfaces/IXmlSerializerNumberOptions.md), `"perAttributeEps"` \| `"fixedDecimals"` \| `"maxDecimalsCap"` \| `"trimTrailingZeros"` \| `"allowScientific"` \| `"snapNearZero"` \| `"zeroThreshold"`\>\> & `Pick`\<[`IXmlSerializerNumberOptions`](../interfaces/IXmlSerializerNumberOptions.md), `"perAttributeEps"` \| `"fixedDecimals"`\> & `object`

#### Type Declaration

##### allowScientific

> **allowScientific**: `boolean`

##### maxDecimalsCap

> **maxDecimalsCap**: `number`

##### snapNearZero

> **snapNearZero**: `boolean`

##### trimTrailingZeros

> **trimTrailingZeros**: `boolean`

##### zeroThreshold

> **zeroThreshold**: `number`
