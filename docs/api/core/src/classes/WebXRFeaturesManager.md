[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / WebXRFeaturesManager

# Class: WebXRFeaturesManager

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:330](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L330)

The WebXR features manager is responsible of enabling or disabling features required for the current XR session.
It is mainly used in AR sessions.

A feature can have a version that is defined by Babylon (and does not correspond with the webxr version).

## Implements

- [`IDisposable`](../interfaces/IDisposable.md)

## Constructors

### Constructor

> **new WebXRFeaturesManager**(`_xrSessionManager`): `WebXRFeaturesManager`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:361](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L361)

constructs a new features manages.

#### Parameters

##### \_xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

an instance of WebXRSessionManager

#### Returns

`WebXRFeaturesManager`

## Methods

### \_extendXRSessionInitObject()

> **\_extendXRSessionInitObject**(`xrSessionInit`): `Promise`\<`XRSessionInit`\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:658](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L658)

This function will extend the session creation configuration object with enabled features.
If, for example, the anchors feature is enabled, it will be automatically added to the optional or required features list,
according to the defined "required" variable, provided during enableFeature call

#### Parameters

##### xrSessionInit

`XRSessionInit`

the xr Session init object to extend

#### Returns

`Promise`\<`XRSessionInit`\>

an extended XRSessionInit object

***

### attachFeature()

> **attachFeature**(`featureName`): `void`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:466](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L466)

Attach a feature to the current session. Mainly used when session started to start the feature effect.
Can be used during a session to start a feature

#### Parameters

##### featureName

`string`

the name of feature to attach

#### Returns

`void`

***

### detachFeature()

> **detachFeature**(`featureName`): `void`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:492](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L492)

Can be used inside a session or when the session ends to detach a specific feature

#### Parameters

##### featureName

`string`

the name of the feature to detach

#### Returns

`void`

***

### disableFeature()

> **disableFeature**(`featureName`): `boolean`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:509](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L509)

Used to disable an already-enabled feature
The feature will be disposed and will be recreated once enabled.

#### Parameters

##### featureName

`string` \| \{ `Name`: `string`; \}

the feature to disable

#### Returns

`boolean`

true if disable was successful

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:525](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L525)

dispose this features manager

#### Returns

`void`

#### Implementation of

[`IDisposable`](../interfaces/IDisposable.md).[`dispose`](../interfaces/IDisposable.md#dispose)

***

### enableFeature()

> **enableFeature**\<`T`\>(`featureName`, `version?`, `moduleOptions?`, `attachIfPossible?`, `required?`): [`ResolveWebXRFeature`](../type-aliases/ResolveWebXRFeature.md)\<`T`\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:543](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L543)

Enable a feature using its name and a version. This will enable it in the scene, and will be responsible to attach it when the session starts.
If used twice, the old version will be disposed and a new one will be constructed. This way you can re-enable with different configuration.

#### Type Parameters

##### T

`T` *extends* [`WebXRFeatureNameType`](../type-aliases/WebXRFeatureNameType.md)

#### Parameters

##### featureName

`T` \| \{ `Name`: `T`; \}

the name of the feature to load or the class of the feature

##### version?

`string` \| `number`

optional version to load. if not provided the latest version will be enabled

##### moduleOptions?

[`ResolveWebXRFeatureOptions`](../type-aliases/ResolveWebXRFeatureOptions.md)\<`T`\> = `...`

options provided to the module. Ses the module documentation / constructor

##### attachIfPossible?

`boolean` = `true`

if set to true (default) the feature will be automatically attached, if it is currently possible

##### required?

`boolean` = `true`

is this feature required to the app. If set to true the session init will fail if the feature is not available.

#### Returns

[`ResolveWebXRFeature`](../type-aliases/ResolveWebXRFeature.md)\<`T`\>

a new constructed feature or throws an error if feature not found or conflicts with another enabled feature.

***

### getEnabledFeature()

> **getEnabledFeature**\<`T`\>(`featureName`): [`ResolveWebXRFeature`](../type-aliases/ResolveWebXRFeature.md)\<`T`\>

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:638](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L638)

get the implementation of an enabled feature.

#### Type Parameters

##### T

`T` *extends* [`WebXRFeatureNameType`](../type-aliases/WebXRFeatureNameType.md)

#### Parameters

##### featureName

`T`

the name of the feature to load

#### Returns

[`ResolveWebXRFeature`](../type-aliases/ResolveWebXRFeature.md)\<`T`\>

the feature class, if found

***

### getEnabledFeatures()

> **getEnabledFeatures**(): `string`[]

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:646](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L646)

Get the list of enabled features

#### Returns

`string`[]

an array of enabled features

***

### AddWebXRFeature()

> `static` **AddWebXRFeature**(`featureName`, `constructorFunction`, `version?`, `stable?`): `void`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:395](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L395)

Used to register a module. After calling this function a developer can use this feature in the scene.
Mainly used internally.

#### Parameters

##### featureName

`string`

the name of the feature to register

##### constructorFunction

[`WebXRFeatureConstructor`](../type-aliases/WebXRFeatureConstructor.md)

the function used to construct the module

##### version?

`number` = `1`

the (babylon) version of the module

##### stable?

`boolean` = `false`

is that a stable version of this module

#### Returns

`void`

***

### ConstructFeature()

> `static` **ConstructFeature**(`featureName`, `version?`, `xrSessionManager`, `options?`): () => [`IWebXRFeature`](../interfaces/IWebXRFeature.md)

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:415](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L415)

Returns a constructor of a specific feature.

#### Parameters

##### featureName

`string`

the name of the feature to construct

##### version?

`number` = `1`

the version of the feature to load

##### xrSessionManager

[`WebXRSessionManager`](WebXRSessionManager.md)

the xrSessionManager. Used to construct the module

##### options?

`any`

optional options provided to the module.

#### Returns

a function that, when called, will return a new instance of this feature

() => [`IWebXRFeature`](../interfaces/IWebXRFeature.md)

***

### GetAvailableFeatures()

> `static` **GetAvailableFeatures**(): `string`[]

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:430](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L430)

Can be used to return the list of features currently registered

#### Returns

`string`[]

an Array of available features

***

### GetAvailableVersions()

> `static` **GetAvailableVersions**(`featureName`): `string`[]

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:439](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L439)

Gets the versions available for a specific feature

#### Parameters

##### featureName

`string`

the name of the feature

#### Returns

`string`[]

an array with the available versions

***

### GetLatestVersionOfFeature()

> `static` **GetLatestVersionOfFeature**(`featureName`): `number`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:448](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L448)

Return the latest unstable version of this feature

#### Parameters

##### featureName

`string`

the name of the feature to search

#### Returns

`number`

the version number. if not found will return -1

***

### GetStableVersionOfFeature()

> `static` **GetStableVersionOfFeature**(`featureName`): `number`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:457](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L457)

Return the latest stable version of this feature

#### Parameters

##### featureName

`string`

the name of the feature to search

#### Returns

`number`

the version number. if not found will return -1
