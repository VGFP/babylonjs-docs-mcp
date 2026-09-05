[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / RetryStrategy

# Class: RetryStrategy

Defined in: [packages/dev/core/src/Misc/retryStrategy.ts:6](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/retryStrategy.ts#L6)

Class used to define a retry strategy when error happens while loading assets

## Constructors

### Constructor

> **new RetryStrategy**(): `RetryStrategy`

#### Returns

`RetryStrategy`

## Methods

### ExponentialBackoff()

> `static` **ExponentialBackoff**(`maxRetries?`, `baseInterval?`): (`url`, `request`, `retryIndex`) => `number`

Defined in: [packages/dev/core/src/Misc/retryStrategy.ts:13](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Misc/retryStrategy.ts#L13)

Function used to defines an exponential back off strategy

#### Parameters

##### maxRetries?

`number` = `3`

defines the maximum number of retries (3 by default)

##### baseInterval?

`number` = `500`

defines the interval between retries

#### Returns

the strategy function to use

(`url`, `request`, `retryIndex`) => `number`
