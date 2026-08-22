[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InteractionName

# Type Alias: InteractionName\<THandlers\>

> **InteractionName**\<`THandlers`\> = keyof `THandlers` & `string`

Defined in: [packages/dev/core/src/Cameras/inputMapper.ts:153](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/inputMapper.ts#L153)

Extracts the string-typed interaction names from a handlers object type.
Equivalent to `keyof THandlers & string` — filters out symbol/number keys.

## Type Parameters

### THandlers

`THandlers`
