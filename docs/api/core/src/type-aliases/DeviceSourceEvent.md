[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DeviceSourceEvent

# Type Alias: DeviceSourceEvent\<T\>

> **DeviceSourceEvent**\<`T`\> = `T` *extends* [`Keyboard`](../enumerations/DeviceType.md#keyboard) ? [`IKeyboardEvent`](../interfaces/IKeyboardEvent.md) : `T` *extends* [`Mouse`](../enumerations/DeviceType.md#mouse) ? [`IWheelEvent`](../interfaces/IWheelEvent.md) \| [`IPointerEvent`](../interfaces/IPointerEvent.md) : `T` *extends* [`Touch`](../enumerations/DeviceType.md#touch) ? [`IPointerEvent`](../interfaces/IPointerEvent.md) : `never`

Defined in: [packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts:10](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/DeviceInput/InputDevices/deviceSource.ts#L10)

Subset of DeviceInput that only handles pointers and keyboard

## Type Parameters

### T

`T` *extends* [`DeviceType`](../enumerations/DeviceType.md)
