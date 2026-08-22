[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / setAndStartTimer

# Function: setAndStartTimer()

> **setAndStartTimer**\<`T`\>(`options`): [`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](../classes/Observer.md)\<`T`\>\>

Defined in: [packages/dev/core/src/Misc/timer.ts:97](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/timer.ts#L97)

A simple version of the timer. Will take options and start the timer immediately after calling it

## Type Parameters

### T

`T` = `any`

## Parameters

### options

[`ITimerOptions`](../interfaces/ITimerOptions.md)\<`T`\>

options with which to initialize this timer

## Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Observer`](../classes/Observer.md)\<`T`\>\>

an observer that can be used to stop the timer
