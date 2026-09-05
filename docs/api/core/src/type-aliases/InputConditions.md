[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / InputConditions

# Type Alias: InputConditions

> **InputConditions** = `object`

Defined in: [packages/dev/core/src/Cameras/inputMapper.ts:137](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/inputMapper.ts#L137)

Flat conditions object passed to resolveInteraction().
Only the fields relevant to the source type need to be set.
Per-source condition types (PointerConditions, KeyboardConditions, etc.) are subtypes
of this and should be used at call sites for clarity.

## Properties

### button?

> `optional` **button?**: `number`

Defined in: [packages/dev/core/src/Cameras/inputMapper.ts:139](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/inputMapper.ts#L139)

Mouse button (0=left, 1=middle, 2=right)

***

### key?

> `optional` **key?**: `number`

Defined in: [packages/dev/core/src/Cameras/inputMapper.ts:145](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/inputMapper.ts#L145)

Key code of the current key being resolved

***

### modifiers?

> `optional` **modifiers?**: [`InputModifiers`](InputModifiers.md)

Defined in: [packages/dev/core/src/Cameras/inputMapper.ts:141](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/inputMapper.ts#L141)

Current modifier key state

***

### touchCount?

> `optional` **touchCount?**: `number`

Defined in: [packages/dev/core/src/Cameras/inputMapper.ts:143](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Cameras/inputMapper.ts#L143)

Number of active touch points
