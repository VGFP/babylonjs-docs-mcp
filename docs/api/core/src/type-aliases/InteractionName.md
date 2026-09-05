[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InteractionName

# Type Alias: InteractionName\<THandlers\>

> **InteractionName**\<`THandlers`\> = keyof `THandlers` & `string`

Defined in: [packages/dev/core/src/Cameras/inputMapper.ts:153](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/inputMapper.ts#L153)

Extracts the string-typed interaction names from a handlers object type.
Equivalent to `keyof THandlers & string` — filters out symbol/number keys.

## Type Parameters

### THandlers

`THandlers`
