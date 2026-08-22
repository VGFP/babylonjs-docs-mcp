[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / GPUPicker

# Class: GPUPicker

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:130](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L130)

Class used to perform a picking operation using GPU
GPUPicker can pick meshes, instances and thin instances

## Constructors

### Constructor

> **new GPUPicker**(): `GPUPicker`

#### Returns

`GPUPicker`

## Accessors

### defaultRenderMaterials

#### Get Signature

> **get** **defaultRenderMaterials**(): readonly [`Nullable`](../type-aliases/Nullable.md)\<[`ShaderMaterial`](ShaderMaterial.md)\>[]

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:205](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L205)

Gets the default render materials used by the picker.

index is Material filling mode

##### Returns

readonly [`Nullable`](../type-aliases/Nullable.md)\<[`ShaderMaterial`](ShaderMaterial.md)\>[]

***

### enableDepthPicking

#### Get Signature

> **get** **enableDepthPicking**(): `boolean`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:220](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L220)

Gets or sets a boolean indicating if depth-based pickedPoint and normal reconstruction should be enabled.

When disabled, GPUPicker uses the original single-color render target and shader path. When enabled, GPUPicker
switches to a MultiRenderTarget and compiles the default picking shader with GPUPICKER_DEPTH to output both the
picking id and the depth required to reconstruct the picked point and normal.

Custom picking materials and special picking material plugins should also write the depth attachment. If they do
not, GPUPicker will still try to reconstruct pickedPoint and normal from the depth target, but the returned values
may be missing or incorrect.

##### Returns

`boolean`

#### Set Signature

> **set** **enableDepthPicking**(`value`): `void`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:224](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L224)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### pickingInProgress

#### Get Signature

> **get** **pickingInProgress**(): `boolean`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:196](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L196)

Gets a boolean indicating if the picking is in progress

##### Returns

`boolean`

***

### shaderLanguage

#### Get Signature

> **get** **shaderLanguage**(): [`ShaderLanguage`](../enumerations/ShaderLanguage.md)

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:187](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L187)

Gets the shader language used in this generator.

##### Returns

[`ShaderLanguage`](../enumerations/ShaderLanguage.md)

## Methods

### addPickingList()

> **addPickingList**(`list`): `void`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:520](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L520)

Add array of meshes to the current picking list

#### Parameters

##### list

([`AbstractMesh`](AbstractMesh.md) \| \{ `material`: [`ShaderMaterial`](ShaderMaterial.md); `mesh`: [`AbstractMesh`](AbstractMesh.md); \})[]

defines the array of meshes to add to the current picking list

#### Returns

`void`

***

### boxPickAsync()

> **boxPickAsync**(`x1`, `y1`, `x2`, `y2`, `disposeWhenDone?`): `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUMultiPickingInfo`](../interfaces/IGPUMultiPickingInfo.md)\>\>

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:884](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L884)

Execute a picking operation on box defined by two screen coordinates

#### Parameters

##### x1

`number`

defines the X coordinate of the first corner of the box where to run the pick

##### y1

`number`

defines the Y coordinate of the first corner of the box where to run the pick

##### x2

`number`

defines the X coordinate of the opposite corner of the box where to run the pick

##### y2

`number`

defines the Y coordinate of the opposite corner of the box where to run the pick

##### disposeWhenDone?

`boolean` = `false`

defines a boolean indicating we do not want to keep resources alive (false by default)

#### Returns

`Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUMultiPickingInfo`](../interfaces/IGPUMultiPickingInfo.md)\>\>

A promise with the picking results. Contains one entry for each picked pixel in the box.

***

### clearPickingList()

> **clearPickingList**(): `void`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:457](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L457)

Clear the current picking list and free resources

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:1909](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L1909)

Release the resources

#### Returns

`void`

***

### multiPickAsync()

> **multiPickAsync**(`xy`, `disposeWhenDone?`, `options?`): `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUMultiPickingInfo`](../interfaces/IGPUMultiPickingInfo.md)\>\>

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:788](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L788)

Execute a picking operation on multiple coordinates

#### Parameters

##### xy

`IVector2Like`[]

defines the X,Y coordinates where to run the pick

##### disposeWhenDone?

`boolean` = `false`

defines a boolean indicating we do not want to keep resources alive (false by default)

##### options?

[`IGPUMultiPickOptions`](../interfaces/IGPUMultiPickOptions.md)

defines options used to tune the multi pick readback strategy

#### Returns

`Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUMultiPickingInfo`](../interfaces/IGPUMultiPickingInfo.md)\>\>

A promise with the picking results. Always returns an array with the same length as the number of coordinates. The mesh or null at the index where no mesh was picked.

***

### pickAsync()

> **pickAsync**(`x`, `y`, `disposeWhenDone?`): `Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUPickingInfo`](../interfaces/IGPUPickingInfo.md)\>\>

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:752](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L752)

Execute a picking operation

#### Parameters

##### x

`number`

defines the X coordinates where to run the pick

##### y

`number`

defines the Y coordinates where to run the pick

##### disposeWhenDone?

`boolean` = `false`

defines a boolean indicating we do not want to keep resources alive (false by default)

#### Returns

`Promise`\<[`Nullable`](../type-aliases/Nullable.md)\<[`IGPUPickingInfo`](../interfaces/IGPUPickingInfo.md)\>\>

A promise with the picking results

***

### setPickingList()

> **setPickingList**(`list`): `void`

Defined in: [packages/dev/core/src/Collisions/gpuPicker.ts:438](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Collisions/gpuPicker.ts#L438)

Set the list of meshes to pick from
Set that value to null to clear the list (and avoid leaks)
The module will read and delete from the array provided by reference. Disposing the module or setting the value to null will clear the array.

#### Parameters

##### list

[`Nullable`](../type-aliases/Nullable.md)\<([`AbstractMesh`](AbstractMesh.md) \| \{ `material`: [`ShaderMaterial`](ShaderMaterial.md); `mesh`: [`AbstractMesh`](AbstractMesh.md); \})[]\>

defines the list of meshes to pick from

#### Returns

`void`
