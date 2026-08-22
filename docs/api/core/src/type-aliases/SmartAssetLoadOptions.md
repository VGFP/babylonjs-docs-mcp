[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SmartAssetLoadOptions

# Type Alias: SmartAssetLoadOptions

> **SmartAssetLoadOptions** = `SmartAssetRegistrationOptions` & `object`

Defined in: [packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts:66](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/SmartAssets/smartAssetManager.pure.ts#L66)

Optional load-time configuration. Includes the persistable SmartAssetRegistrationOptions
fields (type, extension, metadata) plus a transient `reloadSource` callback used by
[ReloadSmartAssetAsync](../functions/ReloadSmartAssetAsync.md) to fetch fresh bytes from disk for blob-backed assets.

## Type Declaration

### reloadSource?

> `readonly` `optional` **reloadSource?**: () => `Promise`\<`File`\>

Optional callback invoked by [ReloadSmartAssetAsync](../functions/ReloadSmartAssetAsync.md) to obtain a fresh File
for the asset. Use this when the registered URL is a `blob:` URL backed by a
`FileSystemFileHandle` so Reload can re-read the underlying file from disk.

#### Returns

`Promise`\<`File`\>
