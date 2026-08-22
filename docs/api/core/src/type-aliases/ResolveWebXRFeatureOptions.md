[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ResolveWebXRFeatureOptions

# Type Alias: ResolveWebXRFeatureOptions\<T\>

> **ResolveWebXRFeatureOptions**\<`T`\> = `T` *extends* keyof [`IWebXRFeatureNameOptionsMap`](../interfaces/IWebXRFeatureNameOptionsMap.md) ? [`IWebXRFeatureNameOptionsMap`](../interfaces/IWebXRFeatureNameOptionsMap.md)\[`T`\] *extends* `undefined` ? `undefined` : `Expand`\<[`IWebXRFeatureNameOptionsMap`](../interfaces/IWebXRFeatureNameOptionsMap.md)\[`T`\]\> : `any`

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:313](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/XR/webXRFeaturesManager.ts#L313)

Helper type to resolve the options type for a specific feature based on the feature name,
or fallback to any if the feature name is not in the type map.
The Expand utility type flattens the interface to show properties inline in IntelliSense.

## Type Parameters

### T

`T` *extends* [`WebXRFeatureNameType`](WebXRFeatureNameType.md)
