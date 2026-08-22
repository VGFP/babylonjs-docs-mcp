[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / VRExperienceHelper

# ~~Class: VRExperienceHelper~~

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:250](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L250)

Helps to quickly add VR support to an existing scene.
See https://doc.babylonjs.com/features/featuresDeepDive/cameras/webVRHelper

## Deprecated

Use WebXR instead!

## Constructors

### Constructor

> **new VRExperienceHelper**(`scene`, `webVROptions?`): `VRExperienceHelper`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:527](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L527)

Instantiates a VRExperienceHelper.
Helps to quickly add VR support to an existing scene.

#### Parameters

##### scene

[`Scene`](Scene.md)

The scene the VRExperienceHelper belongs to.

##### webVROptions?

[`VRExperienceHelperOptions`](../interfaces/VRExperienceHelperOptions.md) = `{}`

Options to modify the vr experience helper's behavior.

#### Returns

`VRExperienceHelper`

## Properties

### ~~enableGazeEvenWhenNoPointerLock~~

> **enableGazeEvenWhenNoPointerLock**: `boolean` = `false`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:273](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L273)

Gets or sets a boolean indicating that gaze can be enabled even if pointer lock is not engage (useful on iOS where fullscreen mode and pointer lock are not supported)

***

### ~~exitVROnDoubleTap~~

> **exitVROnDoubleTap**: `boolean` = `true`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:278](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L278)

Gets or sets a boolean indicating that the VREXperienceHelper will exit VR if double tap is detected

***

### ~~meshSelectionPredicate~~

> **meshSelectionPredicate**: (`mesh`) => `boolean`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:370](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L370)

To be optionally changed by user to define custom selection logic (after ray selection)

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

`boolean`

***

### ~~onAfterCameraTeleport~~

> **onAfterCameraTeleport**: [`Observable`](Observable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:353](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L353)

Observable raised after camera teleportation

***

### ~~onAfterEnteringVRObservable~~

> **onAfterEnteringVRObservable**: [`Observable`](Observable.md)\<[`OnAfterEnteringVRObservableEvent`](OnAfterEnteringVRObservableEvent.md)\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:288](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L288)

Observable raised when entering VR has completed.

***

### ~~onBeforeCameraTeleport~~

> **onBeforeCameraTeleport**: [`Observable`](Observable.md)\<[`Vector3`](Vector3.md)\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:348](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L348)

Observable raised before camera teleportation

***

### ~~onEnteringVRObservable~~

> **onEnteringVRObservable**: [`Observable`](Observable.md)\<`VRExperienceHelper`\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:283](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L283)

Observable raised right before entering VR.

***

### ~~onExitingVRObservable~~

> **onExitingVRObservable**: [`Observable`](Observable.md)\<`VRExperienceHelper`\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:293](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L293)

Observable raised when exiting VR.

***

### ~~onNewMeshPicked~~

> **onNewMeshPicked**: [`Observable`](Observable.md)\<[`PickingInfo`](PickingInfo.md)\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:341](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L341)

Observable raised when a new mesh is picked based on meshSelectionPredicate

***

### ~~onNewMeshSelected~~

> **onNewMeshSelected**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:336](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L336)

Observable raised when a new mesh is selected based on meshSelectionPredicate

***

### ~~onSelectedMeshUnselected~~

> **onSelectedMeshUnselected**: [`Observable`](Observable.md)\<[`AbstractMesh`](AbstractMesh.md)\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:358](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L358)

Observable raised when current selected mesh gets unselected

***

### ~~raySelectionPredicate~~

> **raySelectionPredicate**: (`mesh`) => `boolean`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:365](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L365)

To be optionally changed by user to define custom ray selection

#### Parameters

##### mesh

[`AbstractMesh`](AbstractMesh.md)

#### Returns

`boolean`

***

### ~~requestPointerLockOnFullScreen~~

> **requestPointerLockOnFullScreen**: `boolean` = `true`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:506](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L506)

Defines whether or not Pointer lock should be requested when switching to
full screen.

***

### ~~teleportationEnabled~~

> **teleportationEnabled**: `boolean` = `true`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:375](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L375)

Set teleportation enabled. If set to false camera teleportation will be disabled but camera rotation will be kept.

***

### ~~updateControllerLaserColor~~

> **updateControllerLaserColor**: `boolean` = `true`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:437](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L437)

If the controller laser color should be updated when selecting meshes

***

### ~~updateGazeTrackerColor~~

> **updateGazeTrackerColor**: `boolean` = `true`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:433](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L433)

If the gaze trackers color should be updated when selecting meshes

***

### ~~updateGazeTrackerScale~~

> **updateGazeTrackerScale**: `boolean` = `true`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:429](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L429)

If the gaze trackers scale should be updated to be constant size when pointing at near/far meshes

***

### ~~webVROptions~~

> **webVROptions**: [`VRExperienceHelperOptions`](../interfaces/VRExperienceHelperOptions.md) = `{}`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:530](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L530)

[Empty object] Options to modify the vr experience helper's behavior.

***

### ~~xr~~

> **xr**: [`WebXRDefaultExperience`](WebXRDefaultExperience.md)

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:513](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L513)

If asking to force XR, this will be populated with the default xr experience

***

### ~~xrTestDone~~

> **xrTestDone**: `boolean` = `false`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:519](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L519)

Was the XR test done already. If this is true AND this.xr exists, xr is initialized.
If this is true and no this.xr, xr exists but is not supported, using WebVR.

***

### ~~TELEPORTATIONMODE\_CONSTANTSPEED~~

> `readonly` `static` **TELEPORTATIONMODE\_CONSTANTSPEED**: `1` = `1`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1441](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1441)

Speed Constant Teleportation Mode

***

### ~~TELEPORTATIONMODE\_CONSTANTTIME~~

> `readonly` `static` **TELEPORTATIONMODE\_CONSTANTTIME**: `0` = `0`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1437](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1437)

Time Constant Teleportation Mode

## Accessors

### ~~currentVRCamera~~

#### Get Signature

> **get** **currentVRCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:480](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L480)

Based on the current WebVR support, returns the current VR camera used.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](Camera.md)\>

***

### ~~deviceOrientationCamera~~

#### Get Signature

> **get** **deviceOrientationCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`DeviceOrientationCamera`](DeviceOrientationCamera.md)\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:473](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L473)

The deviceOrientationCamera used as the camera when not in VR.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`DeviceOrientationCamera`](DeviceOrientationCamera.md)\>

***

### ~~displayGaze~~

#### Get Signature

> **get** **displayGaze**(): `boolean`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:442](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L442)

If the ray of the gaze should be displayed.

##### Returns

`boolean`

#### Set Signature

> **set** **displayGaze**(`value`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:449](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L449)

Sets if the ray of the gaze should be displayed.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ~~displayLaserPointer~~

#### Get Signature

> **get** **displayLaserPointer**(): `boolean`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:459](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L459)

If the ray of the LaserPointer should be displayed.

##### Returns

`boolean`

#### Set Signature

> **set** **displayLaserPointer**(`value`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:466](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L466)

Sets if the ray of the LaserPointer should be displayed.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### ~~gazeTrackerMesh~~

#### Get Signature

> **get** **gazeTrackerMesh**(): [`Mesh`](Mesh.md)

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:406](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L406)

The mesh used to display where the user is selecting, this mesh will be cloned and set as the gazeTracker for the left and right controller
when set bakeCurrentTransformIntoVertices will be called on the mesh.
See https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/center_origin/bakingTransforms

##### Returns

[`Mesh`](Mesh.md)

#### Set Signature

> **set** **gazeTrackerMesh**(`value`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:410](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L410)

##### Parameters

###### value

[`Mesh`](Mesh.md)

##### Returns

`void`

***

### ~~isInVRMode~~

#### Get Signature

> **get** **isInVRMode**(): `boolean`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:789](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L789)

Gets a value indicating if we are currently in VR mode.

##### Returns

`boolean`

***

### ~~onEnteringVR~~

#### Get Signature

> **get** **onEnteringVR**(): [`Observable`](Observable.md)\<`VRExperienceHelper`\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:298](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L298)

Return this.onEnteringVRObservable
Note: This one is for backward compatibility. Please use onEnteringVRObservable directly

##### Returns

[`Observable`](Observable.md)\<`VRExperienceHelper`\>

***

### ~~onExitingVR~~

#### Get Signature

> **get** **onExitingVR**(): [`Observable`](Observable.md)\<`VRExperienceHelper`\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:305](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L305)

Return this.onExitingVRObservable
Note: This one is for backward compatibility. Please use onExitingVRObservable directly

##### Returns

[`Observable`](Observable.md)\<`VRExperienceHelper`\>

***

### ~~position~~

#### Get Signature

> **get** **position**(): [`Vector3`](Vector3.md)

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:967](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L967)

The position of the vr experience helper.

##### Returns

[`Vector3`](Vector3.md)

#### Set Signature

> **set** **position**(`value`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:974](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L974)

Sets the position of the vr experience helper.

##### Parameters

###### value

[`Vector3`](Vector3.md)

##### Returns

`void`

***

### ~~teleportationTarget~~

#### Get Signature

> **get** **teleportationTarget**(): [`Mesh`](Mesh.md)

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:386](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L386)

The mesh used to display where the user is going to teleport.

##### Returns

[`Mesh`](Mesh.md)

#### Set Signature

> **set** **teleportationTarget**(`value`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:393](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L393)

Sets the mesh to be used to display where the user is going to teleport.

##### Parameters

###### value

[`Mesh`](Mesh.md)

##### Returns

`void`

***

### ~~vrButton~~

#### Get Signature

> **get** **vrButton**(): [`Nullable`](../type-aliases/Nullable.md)\<`HTMLButtonElement`\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:494](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L494)

The html button that is used to trigger entering into VR.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`HTMLButtonElement`\>

***

### ~~vrDeviceOrientationCamera~~

#### Get Signature

> **get** **vrDeviceOrientationCamera**(): [`Nullable`](../type-aliases/Nullable.md)\<[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md)\>

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:487](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L487)

The deviceOrientationCamera that is used as a fallback when vr device is not connected.

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`VRDeviceOrientationFreeCamera`](VRDeviceOrientationFreeCamera.md)\>

## Methods

### ~~addFloorMesh()~~

> **addFloorMesh**(`floorMesh`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1041](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1041)

Adds a floor mesh to be used for teleportation.

#### Parameters

##### floorMesh

[`Mesh`](Mesh.md)

the mesh to be used for teleportation.

#### Returns

`void`

***

### ~~changeGazeColor()~~

> **changeGazeColor**(`color`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1588](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1588)

Sets the color of the ray from the vr headsets gaze.

#### Parameters

##### color

[`Color3`](Color3.md)

new color for the ray.

#### Returns

`void`

***

### ~~changeLaserColor()~~

> **changeLaserColor**(`_color`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1578](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1578)

Sets the color of the laser ray from the vr controllers.

#### Parameters

##### \_color

[`Color3`](Color3.md)

new color for the ray.

#### Returns

`void`

***

### ~~dispose()~~

> **dispose**(): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1601](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1601)

Exits VR and disposes of the vr experience helper

#### Returns

`void`

***

### ~~enableInteractions()~~

> **enableInteractions**(): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:985](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L985)

Enables controllers and user interactions such as selecting and object or clicking on an object.

#### Returns

`void`

***

### ~~enableTeleportation()~~

> **enableTeleportation**(`vrTeleportationOptions?`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1072](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1072)

Enables interactions and teleportation using the VR controllers and gaze.

#### Parameters

##### vrTeleportationOptions?

[`VRTeleportationOptions`](../interfaces/VRTeleportationOptions.md) = `{}`

options to modify teleportation behavior.

#### Returns

`void`

***

### ~~enterVR()~~

> **enterVR**(): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:823](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L823)

Attempt to enter VR. If a headset is connected and ready, will request present on that.
Otherwise, will use the fullscreen API.

#### Returns

`void`

***

### ~~exitVR()~~

> **exitVR**(): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:890](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L890)

Attempt to exit VR, or fullscreen.

#### Returns

`void`

***

### ~~getClassName()~~

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1650](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1650)

Gets the name of the VRExperienceHelper class

#### Returns

`string`

"VRExperienceHelper"

***

### ~~removeFloorMesh()~~

> **removeFloorMesh**(`floorMesh`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1057](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1057)

Removes a floor mesh from being used for teleportation.

#### Parameters

##### floorMesh

[`Mesh`](Mesh.md)

the mesh to be removed.

#### Returns

`void`

***

### ~~setGazeColor()~~

> **setGazeColor**(`color`, `pickedColor?`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1570](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1570)

Permanently set new colors for the gaze pointer

#### Parameters

##### color

[`Color3`](Color3.md)

the new gaze color

##### pickedColor?

[`Color3`](Color3.md) = `...`

the new gaze color when picked mesh detected

#### Returns

`void`

***

### ~~setLaserColor()~~

> **setLaserColor**(`color`, `pickedColor?`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1553](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1553)

Permanently set new colors for the laser pointer

#### Parameters

##### color

[`Color3`](Color3.md)

the new laser color

##### pickedColor?

[`Color3`](Color3.md) = `...`

the new laser color when picked mesh detected

#### Returns

`void`

***

### ~~setLaserLightingState()~~

> **setLaserLightingState**(`_enabled?`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1561](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1561)

Set lighting enabled / disabled on the laser pointer of both controllers

#### Parameters

##### \_enabled?

`boolean` = `true`

should the lighting be enabled on the laser pointer

#### Returns

`void`

***

### ~~teleportCamera()~~

> **teleportCamera**(`location`): `void`

Defined in: [packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts:1447](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Cameras/VR/vrExperienceHelper.pure.ts#L1447)

Teleports the users feet to the desired location

#### Parameters

##### location

[`Vector3`](Vector3.md)

The location where the user's feet should be placed

#### Returns

`void`
