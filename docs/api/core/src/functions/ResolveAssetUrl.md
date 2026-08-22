[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / ResolveAssetUrl

# Function: ResolveAssetUrl()

> **ResolveAssetUrl**(`assetUrl`, `baseUrl`): `string`

Defined in: [packages/dev/core/src/SmartAssets/smartAssetSerializer.ts:86](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/SmartAssets/smartAssetSerializer.ts#L86)

Resolves an asset URL relative to a base URL.
Absolute URLs (http://, https://) and data URIs are returned as-is.

## Parameters

### assetUrl

`string`

The asset URL to resolve.

### baseUrl

`string`

The base URL to resolve against (typically the folder containing the asset map file).

## Returns

`string`

The resolved URL.
