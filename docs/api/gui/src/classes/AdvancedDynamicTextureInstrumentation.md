[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / AdvancedDynamicTextureInstrumentation

# Class: AdvancedDynamicTextureInstrumentation

Defined in: [packages/dev/gui/src/2D/adtInstrumentation.ts:11](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/gui/src/2D/adtInstrumentation.ts#L11)

This class can be used to get instrumentation data from a AdvancedDynamicTexture object

## Implements

- [`IDisposable`](../../../core/src/interfaces/IDisposable.md)

## Constructors

### Constructor

> **new AdvancedDynamicTextureInstrumentation**(`texture`): `AdvancedDynamicTextureInstrumentation`

Defined in: [packages/dev/gui/src/2D/adtInstrumentation.ts:104](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/gui/src/2D/adtInstrumentation.ts#L104)

Instantiates a new advanced dynamic texture instrumentation.
This class can be used to get instrumentation data from an AdvancedDynamicTexture object

#### Parameters

##### texture

[`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

Defines the AdvancedDynamicTexture to instrument

#### Returns

`AdvancedDynamicTextureInstrumentation`

## Properties

### texture

> **texture**: [`AdvancedDynamicTexture`](AdvancedDynamicTexture.md)

Defined in: [packages/dev/gui/src/2D/adtInstrumentation.ts:108](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/gui/src/2D/adtInstrumentation.ts#L108)

Define the instrumented AdvancedDynamicTexture.

## Accessors

### captureLayoutTime

#### Get Signature

> **get** **captureLayoutTime**(): `boolean`

Defined in: [packages/dev/gui/src/2D/adtInstrumentation.ts:73](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/gui/src/2D/adtInstrumentation.ts#L73)

Enable or disable the layout time capture

##### Returns

`boolean`

#### Set Signature

> **set** **captureLayoutTime**(`value`): `void`

Defined in: [packages/dev/gui/src/2D/adtInstrumentation.ts:77](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/gui/src/2D/adtInstrumentation.ts#L77)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### captureRenderTime

#### Get Signature

> **get** **captureRenderTime**(): `boolean`

Defined in: [packages/dev/gui/src/2D/adtInstrumentation.ts:43](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/gui/src/2D/adtInstrumentation.ts#L43)

Enable or disable the render time capture

##### Returns

`boolean`

#### Set Signature

> **set** **captureRenderTime**(`value`): `void`

Defined in: [packages/dev/gui/src/2D/adtInstrumentation.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/gui/src/2D/adtInstrumentation.ts#L47)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### layoutTimeCounter

#### Get Signature

> **get** **layoutTimeCounter**(): [`PerfCounter`](../../../core/src/classes/PerfCounter.md)

Defined in: [packages/dev/gui/src/2D/adtInstrumentation.ts:36](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/gui/src/2D/adtInstrumentation.ts#L36)

Gets the perf counter used to capture layout time

##### Returns

[`PerfCounter`](../../../core/src/classes/PerfCounter.md)

***

### renderTimeCounter

#### Get Signature

> **get** **renderTimeCounter**(): [`PerfCounter`](../../../core/src/classes/PerfCounter.md)

Defined in: [packages/dev/gui/src/2D/adtInstrumentation.ts:29](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/gui/src/2D/adtInstrumentation.ts#L29)

Gets the perf counter used to capture render time

##### Returns

[`PerfCounter`](../../../core/src/classes/PerfCounter.md)

## Methods

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/gui/src/2D/adtInstrumentation.ts:114](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/gui/src/2D/adtInstrumentation.ts#L114)

Dispose and release associated resources.

#### Returns

`void`

#### Implementation of

[`IDisposable`](../../../core/src/interfaces/IDisposable.md).[`dispose`](../../../core/src/interfaces/IDisposable.md#dispose)
