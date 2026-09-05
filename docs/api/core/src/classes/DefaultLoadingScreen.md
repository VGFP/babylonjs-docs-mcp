[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / DefaultLoadingScreen

# Class: DefaultLoadingScreen

Defined in: [packages/dev/core/src/Loading/loadingScreen.pure.ts:36](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/loadingScreen.pure.ts#L36)

Class used for the default loading screen

## See

https://doc.babylonjs.com/features/featuresDeepDive/scene/customLoadingScreen

## Implements

- [`ILoadingScreen`](../interfaces/ILoadingScreen.md)

## Constructors

### Constructor

> **new DefaultLoadingScreen**(`_renderingCanvas`, `_loadingText?`, `_loadingDivBackgroundColor?`): `DefaultLoadingScreen`

Defined in: [packages/dev/core/src/Loading/loadingScreen.pure.ts:60](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/loadingScreen.pure.ts#L60)

Creates a new default loading screen

#### Parameters

##### \_renderingCanvas

`HTMLCanvasElement`

defines the canvas used to render the scene

##### \_loadingText?

`string` = `""`

defines the default text to display

##### \_loadingDivBackgroundColor?

`string` = `"black"`

defines the default background color

#### Returns

`DefaultLoadingScreen`

## Properties

### DefaultLogoUrl

> `static` **DefaultLogoUrl**: `string` = `""`

Defined in: [packages/dev/core/src/Loading/loadingScreen.pure.ts:49](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/loadingScreen.pure.ts#L49)

Gets or sets the logo url to use for the default loading screen

***

### DefaultSpinnerUrl

> `static` **DefaultSpinnerUrl**: `string` = `""`

Defined in: [packages/dev/core/src/Loading/loadingScreen.pure.ts:52](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/loadingScreen.pure.ts#L52)

Gets or sets the spinner url to use for the default loading screen

## Accessors

### loadingUIBackgroundColor

#### Get Signature

> **get** **loadingUIBackgroundColor**(): `string`

Defined in: [packages/dev/core/src/Loading/loadingScreen.pure.ts:284](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/loadingScreen.pure.ts#L284)

Gets or sets the color to use for the background

##### Returns

`string`

#### Set Signature

> **set** **loadingUIBackgroundColor**(`color`): `void`

Defined in: [packages/dev/core/src/Loading/loadingScreen.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/loadingScreen.pure.ts#L288)

Gets or sets the color to use for the background

##### Parameters

###### color

`string`

##### Returns

`void`

Gets or sets the color to use for the background

#### Implementation of

[`ILoadingScreen`](../interfaces/ILoadingScreen.md).[`loadingUIBackgroundColor`](../interfaces/ILoadingScreen.md#loadinguibackgroundcolor)

***

### loadingUIText

#### Get Signature

> **get** **loadingUIText**(): `string`

Defined in: [packages/dev/core/src/Loading/loadingScreen.pure.ts:277](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/loadingScreen.pure.ts#L277)

Gets or sets the text to display while loading

##### Returns

`string`

#### Set Signature

> **set** **loadingUIText**(`text`): `void`

Defined in: [packages/dev/core/src/Loading/loadingScreen.pure.ts:266](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/loadingScreen.pure.ts#L266)

Gets or sets the text to display while loading

##### Parameters

###### text

`string`

##### Returns

`void`

Gets or sets the text to display while loading

#### Implementation of

[`ILoadingScreen`](../interfaces/ILoadingScreen.md).[`loadingUIText`](../interfaces/ILoadingScreen.md#loadinguitext)

## Methods

### displayLoadingUI()

> **displayLoadingUI**(): `void`

Defined in: [packages/dev/core/src/Loading/loadingScreen.pure.ts:69](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/loadingScreen.pure.ts#L69)

Function called to display the loading screen

#### Returns

`void`

#### Implementation of

[`ILoadingScreen`](../interfaces/ILoadingScreen.md).[`displayLoadingUI`](../interfaces/ILoadingScreen.md#displayloadingui)

***

### hideLoadingUI()

> **hideLoadingUI**(): `void`

Defined in: [packages/dev/core/src/Loading/loadingScreen.pure.ts:220](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Loading/loadingScreen.pure.ts#L220)

Function called to hide the loading screen

#### Returns

`void`

#### Implementation of

[`ILoadingScreen`](../interfaces/ILoadingScreen.md).[`hideLoadingUI`](../interfaces/ILoadingScreen.md#hideloadingui)
