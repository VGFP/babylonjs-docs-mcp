[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ResolveWebXRFeature

# Type Alias: ResolveWebXRFeature\<T\>

> **ResolveWebXRFeature**\<`T`\> = `T` *extends* keyof [`IWebXRFeatureNameTypeMap`](../interfaces/IWebXRFeatureNameTypeMap.md) ? [`IWebXRFeatureNameTypeMap`](../interfaces/IWebXRFeatureNameTypeMap.md)\[`T`\] : [`IWebXRFeature`](../interfaces/IWebXRFeature.md)

Defined in: [packages/dev/core/src/XR/webXRFeaturesManager.ts:315](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/XR/webXRFeaturesManager.ts#L315)

Helper type to resolve the specific feature type based on the feature name,
or fallback to IWebXRFeature if the feature name is not in the type map.

## Type Parameters

### T

`T` *extends* [`WebXRFeatureNameType`](WebXRFeatureNameType.md)
