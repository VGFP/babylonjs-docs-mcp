[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IShadowLight

# Interface: IShadowLight

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:15](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L15)

Interface describing all the common properties and methods a shadow light needs to implement.
This helps both the shadow generator and materials to generate the corresponding shadow maps
as well as binding the different shadow properties to the effects.

## Extends

- [`Light`](../classes/Light.md)

## Properties

### animations

> **animations**: [`Animation`](../classes/Animation.md)[] = `[]`

Defined in: [packages/dev/core/src/node.ts:175](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L175)

Gets a list of Animations associated with the node

#### Inherited from

[`Light`](../classes/Light.md).[`animations`](../classes/Light.md#animations)

***

### customProjectionMatrixBuilder

> **customProjectionMatrixBuilder**: (`viewMatrix`, `renderList`, `result`) => `void`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:65](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L65)

Callback defining a custom Projection Matrix Builder.
This can be used to override the default projection matrix computation.

#### Parameters

##### viewMatrix

[`Matrix`](../classes/Matrix.md)

##### renderList

[`AbstractMesh`](../classes/AbstractMesh.md)[]

##### result

[`Matrix`](../classes/Matrix.md)

#### Returns

`void`

***

### diffuse

> **diffuse**: [`Color3`](../classes/Color3.md)

Defined in: [packages/dev/core/src/Lights/light.ts:116](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L116)

Diffuse gives the basic color to an object.

#### Inherited from

[`ClusteredLightContainer`](../classes/ClusteredLightContainer.md).[`diffuse`](../classes/ClusteredLightContainer.md#diffuse)

***

### direction

> **direction**: [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:27](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L27)

In 2d mode (needCube being false), the direction used to cast the shadow.

***

### falloffType

> **falloffType**: `number` = `Light.FALLOFF_DEFAULT`

Defined in: [packages/dev/core/src/Lights/light.ts:134](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L134)

Defines the falloff type for this light. This lets overriding how punctual light are
falling off base on range or angle.
This can be set to any values in Light.FALLOFF_x.

Note: This is only useful for PBR Materials at the moment. This could be extended if required to
other types of materials.

#### Inherited from

[`ClusteredLightContainer`](../classes/ClusteredLightContainer.md).[`falloffType`](../classes/ClusteredLightContainer.md#fallofftype)

***

### id

> **id**: `string`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:19](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L19)

The light id in the scene (used in scene.getLightById for instance)

#### Overrides

[`Light`](../classes/Light.md).[`id`](../classes/Light.md#id)

***

### inspectableCustomProperties

> **inspectableCustomProperties**: [`IInspectable`](IInspectable.md)[]

Defined in: [packages/dev/core/src/node.ts:129](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L129)

List of inspectable custom properties (used by the Inspector)

#### See

https://doc.babylonjs.com/toolsAndResources/inspector#extensibility

#### Inherited from

[`Light`](../classes/Light.md).[`inspectableCustomProperties`](../classes/Light.md#inspectablecustomproperties)

***

### intensity

> **intensity**: `number` = `1.0`

Defined in: [packages/dev/core/src/Lights/light.ts:142](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L142)

Strength of the light.
Note: By default it is define in the framework own unit.
Note: In PBR materials the intensityMode can be use to chose what unit the intensity is defined in.

#### Inherited from

[`ClusteredLightContainer`](../classes/ClusteredLightContainer.md).[`intensity`](../classes/ClusteredLightContainer.md#intensity)

***

### metadata

> **metadata**: `any` = `null`

Defined in: [packages/dev/core/src/node.ts:115](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L115)

Gets or sets an object used to store user defined information for the node

#### Inherited from

[`Light`](../classes/Light.md).[`metadata`](../classes/Light.md#metadata)

***

### name

> **name**: `string`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:39](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L39)

The friendly name of the light in the scene.

#### Overrides

[`Light`](../classes/Light.md).[`name`](../classes/Light.md#name)

***

### onAccessibilityTagChangedObservable

> **onAccessibilityTagChangedObservable**: [`Observable`](../classes/Observable.md)\<[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>\>

Defined in: [packages/dev/core/src/node.ts:148](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L148)

Observable fired when an accessibility tag is changed

#### Inherited from

[`WebXRCamera`](../classes/WebXRCamera.md).[`onAccessibilityTagChangedObservable`](../classes/WebXRCamera.md#onaccessibilitytagchangedobservable)

***

### onDisposeObservable

> **onDisposeObservable**: [`Observable`](../classes/Observable.md)\<[`Node`](../classes/Node.md)\>

Defined in: [packages/dev/core/src/node.ts:352](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L352)

An event triggered when the mesh is disposed

#### Inherited from

[`WebXRCamera`](../classes/WebXRCamera.md).[`onDisposeObservable`](../classes/WebXRCamera.md#ondisposeobservable)

***

### onReady

> **onReady**: [`Nullable`](../type-aliases/Nullable.md)\<(`node`) => `void`\> = `null`

Defined in: [packages/dev/core/src/node.ts:181](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L181)

Callback raised when the node is ready to be used

#### Inherited from

[`Light`](../classes/Light.md).[`onReady`](../classes/Light.md#onready)

***

### position

> **position**: [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:23](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L23)

The position the shadow will be casted from.

***

### reservedDataStore

> **reservedDataStore**: `any` = `null`

Defined in: [packages/dev/core/src/node.ts:123](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L123)

For internal use only. Please do not use.

#### Inherited from

[`Light`](../classes/Light.md).[`reservedDataStore`](../classes/Light.md#reserveddatastore)

***

### shadowMaxZ

> **shadowMaxZ**: `number`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:47](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L47)

Defines the shadow projection clipping maximum z value.

***

### shadowMinZ

> **shadowMinZ**: `number`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:43](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L43)

Defines the shadow projection clipping minimum z value.

***

### specular

> **specular**: [`Color3`](../classes/Color3.md)

Defined in: [packages/dev/core/src/Lights/light.ts:123](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L123)

Specular produces a highlight color on an object.
Note: This is not affecting PBR materials.

#### Inherited from

[`ClusteredLightContainer`](../classes/ClusteredLightContainer.md).[`specular`](../classes/ClusteredLightContainer.md#specular)

***

### state

> **state**: `string` = `""`

Defined in: [packages/dev/core/src/node.ts:109](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L109)

Gets or sets a string used to store user defined state for the node

#### Inherited from

[`WebXRCamera`](../classes/WebXRCamera.md).[`state`](../classes/WebXRCamera.md#state)

***

### transformedDirection

> **transformedDirection**: [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:35](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L35)

The transformed direction. Direction of the light in world space taking parenting in account.

***

### transformedPosition

> **transformedPosition**: [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:31](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L31)

The transformed position. Position of the light in world space taking parenting in account.

***

### uniqueId

> **uniqueId**: `number`

Defined in: [packages/dev/core/src/node.ts:103](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L103)

Gets or sets the unique id of the node

#### Inherited from

[`Light`](../classes/Light.md).[`uniqueId`](../classes/Light.md#uniqueid)

## Accessors

### accessibilityTag

#### Get Signature

> **get** **accessibilityTag**(): [`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

Defined in: [packages/dev/core/src/node.ts:139](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L139)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

#### Set Signature

> **set** **accessibilityTag**(`value`): `void`

Defined in: [packages/dev/core/src/node.ts:134](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L134)

Gets or sets the accessibility tag to describe the node for accessibility purpose.

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<`IAccessibilityTag`\>

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`accessibilityTag`](../classes/Light.md#accessibilitytag)

***

### animationPropertiesOverride

#### Get Signature

> **get** **animationPropertiesOverride**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](../classes/AnimationPropertiesOverride.md)\>

Defined in: [packages/dev/core/src/node.ts:327](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L327)

Gets or sets the animation properties override

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](../classes/AnimationPropertiesOverride.md)\>

#### Set Signature

> **set** **animationPropertiesOverride**(`value`): `void`

Defined in: [packages/dev/core/src/node.ts:334](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L334)

##### Parameters

###### value

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationPropertiesOverride`](../classes/AnimationPropertiesOverride.md)\>

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`animationPropertiesOverride`](../classes/Light.md#animationpropertiesoverride)

***

### behaviors

#### Get Signature

> **get** **behaviors**(): [`Behavior`](Behavior.md)\<[`Node`](../classes/Node.md)\>[]

Defined in: [packages/dev/core/src/node.ts:485](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L485)

Gets the list of attached behaviors

##### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

##### Returns

[`Behavior`](Behavior.md)\<[`Node`](../classes/Node.md)\>[]

#### Inherited from

[`Light`](../classes/Light.md).[`behaviors`](../classes/Light.md#behaviors)

***

### doNotSerialize

#### Get Signature

> **get** **doNotSerialize**(): `boolean`

Defined in: [packages/dev/core/src/node.ts:153](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L153)

Gets or sets a boolean used to define if the node must be serialized

##### Returns

`boolean`

#### Set Signature

> **set** **doNotSerialize**(`value`): `void`

Defined in: [packages/dev/core/src/node.ts:165](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L165)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`doNotSerialize`](../classes/Light.md#donotserialize)

***

### excludedMeshes

#### Get Signature

> **get** **excludedMeshes**(): [`AbstractMesh`](../classes/AbstractMesh.md)[]

Defined in: [packages/dev/core/src/Lights/light.ts:255](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L255)

Gets the meshes not impacted by this light.

##### Returns

[`AbstractMesh`](../classes/AbstractMesh.md)[]

#### Set Signature

> **set** **excludedMeshes**(`value`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:261](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L261)

Sets the meshes not impacted by this light.

##### Parameters

###### value

[`AbstractMesh`](../classes/AbstractMesh.md)[]

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`excludedMeshes`](../classes/Light.md#excludedmeshes)

***

### excludeWithLayerMask

#### Get Signature

> **get** **excludeWithLayerMask**(): `number`

Defined in: [packages/dev/core/src/Lights/light.ts:272](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L272)

Gets the layer id use to find what meshes are not impacted by the light.
Inactive if 0

##### Returns

`number`

#### Set Signature

> **set** **excludeWithLayerMask**(`value`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:279](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L279)

Sets the layer id use to find what meshes are not impacted by the light.
Inactive if 0

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`excludeWithLayerMask`](../classes/Light.md#excludewithlayermask)

***

### includedOnlyMeshes

#### Get Signature

> **get** **includedOnlyMeshes**(): [`AbstractMesh`](../classes/AbstractMesh.md)[]

Defined in: [packages/dev/core/src/Lights/light.ts:240](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L240)

Gets the only meshes impacted by this light.

##### Returns

[`AbstractMesh`](../classes/AbstractMesh.md)[]

#### Set Signature

> **set** **includedOnlyMeshes**(`value`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:246](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L246)

Sets the only meshes impacted by this light.

##### Parameters

###### value

[`AbstractMesh`](../classes/AbstractMesh.md)[]

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`includedOnlyMeshes`](../classes/Light.md#includedonlymeshes)

***

### includeOnlyWithLayerMask

#### Get Signature

> **get** **includeOnlyWithLayerMask**(): `number`

Defined in: [packages/dev/core/src/Lights/light.ts:290](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L290)

Gets the layer id use to find what meshes are impacted by the light.
Inactive if 0

##### Returns

`number`

#### Set Signature

> **set** **includeOnlyWithLayerMask**(`value`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:297](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L297)

Sets the layer id use to find what meshes are impacted by the light.
Inactive if 0

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`includeOnlyWithLayerMask`](../classes/Light.md#includeonlywithlayermask)

***

### inheritVisibility

#### Get Signature

> **get** **inheritVisibility**(): `boolean`

Defined in: [packages/dev/core/src/node.ts:271](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L271)

If set to true, this node, when renderable, will only be visible if its parent(s) are also visible.

##### Default

```ts
false
```

##### Returns

`boolean`

#### Set Signature

> **set** **inheritVisibility**(`value`): `void`

Defined in: [packages/dev/core/src/node.ts:275](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L275)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`inheritVisibility`](../classes/Light.md#inheritvisibility)

***

### intensityMode

#### Get Signature

> **get** **intensityMode**(): `number`

Defined in: [packages/dev/core/src/Lights/light.ts:177](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L177)

Gets the photometric scale used to interpret the intensity.
This is only relevant with PBR Materials where the light intensity can be defined in a physical way.

##### Returns

`number`

#### Set Signature

> **set** **intensityMode**(`value`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:184](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L184)

Sets the photometric scale used to interpret the intensity.
This is only relevant with PBR Materials where the light intensity can be defined in a physical way.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`intensityMode`](../classes/Light.md#intensitymode)

***

### isVisible

#### Get Signature

> **get** **isVisible**(): `boolean`

Defined in: [packages/dev/core/src/node.ts:283](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L283)

Gets or sets a boolean indicating whether this node is visible, either this node itself when it is renderable or its renderable child nodes when `inheritVisibility` is true.

##### Default

```ts
true
```

##### Returns

`boolean`

#### Set Signature

> **set** **isVisible**(`value`): `void`

Defined in: [packages/dev/core/src/node.ts:291](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L291)

##### Parameters

###### value

`boolean`

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`isVisible`](../classes/Light.md#isvisible)

***

### lightmapMode

#### Get Signature

> **get** **lightmapMode**(): `number`

Defined in: [packages/dev/core/src/Lights/light.ts:307](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L307)

Gets the lightmap mode of this light (should be one of the constants defined by Light.LIGHTMAP_x)

##### Returns

`number`

#### Set Signature

> **set** **lightmapMode**(`value`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:313](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L313)

Sets the lightmap mode of this light (should be one of the constants defined by Light.LIGHTMAP_x)

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`lightmapMode`](../classes/Light.md#lightmapmode)

***

### onClonedObservable

#### Get Signature

> **get** **onClonedObservable**(): [`Observable`](../classes/Observable.md)\<[`Node`](../classes/Node.md)\>

Defined in: [packages/dev/core/src/node.ts:386](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L386)

An event triggered when the node is cloned

##### Returns

[`Observable`](../classes/Observable.md)\<[`Node`](../classes/Node.md)\>

#### Inherited from

[`Light`](../classes/Light.md).[`onClonedObservable`](../classes/Light.md#onclonedobservable)

***

### onDispose

#### Set Signature

> **set** **onDispose**(`callback`): `void`

Defined in: [packages/dev/core/src/node.ts:358](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L358)

Sets a callback that will be raised when the node will be disposed

##### Parameters

###### callback

() => `void`

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`onDispose`](../classes/Light.md#ondispose)

***

### onEffectiveEnabledStateChangedObservable

#### Get Signature

> **get** **onEffectiveEnabledStateChangedObservable**(): [`Observable`](../classes/Observable.md)\<`boolean`\>

Defined in: [packages/dev/core/src/node.ts:379](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L379)

An event triggered when the effective enabled state of the node changes, i.e. whenever the value returned by [isEnabled](../classes/Node.md#isenabled) changes.
Unlike [onEnabledStateChangedObservable](../classes/Node.md#onenabledstatechangedobservable), this fires for changes caused by an ancestor's enabled state as well as this node's own state.
The observable is created on first access, so no cost is incurred for nodes that never observe it.

##### Returns

[`Observable`](../classes/Observable.md)\<`boolean`\>

#### Inherited from

[`Light`](../classes/Light.md).[`onEffectiveEnabledStateChangedObservable`](../classes/Light.md#oneffectiveenabledstatechangedobservable)

***

### onEnabledStateChangedObservable

#### Get Signature

> **get** **onEnabledStateChangedObservable**(): [`Observable`](../classes/Observable.md)\<`boolean`\>

Defined in: [packages/dev/core/src/node.ts:370](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L370)

An event triggered when the enabled state of the node changes.
This only reflects changes to the node's own enabled flag (as set via [setEnabled](../classes/Node.md#setenabled)), not changes inherited from an ancestor.
Use [onEffectiveEnabledStateChangedObservable](../classes/Node.md#oneffectiveenabledstatechangedobservable) to also be notified when an ancestor's enabled state changes the effective enabled state.

##### Returns

[`Observable`](../classes/Observable.md)\<`boolean`\>

#### Inherited from

[`Light`](../classes/Light.md).[`onEnabledStateChangedObservable`](../classes/Light.md#onenabledstatechangedobservable)

***

### parent

#### Get Signature

> **get** **parent**(): [`Nullable`](../type-aliases/Nullable.md)\<[`Node`](../classes/Node.md)\>

Defined in: [packages/dev/core/src/node.ts:263](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L263)

##### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](../classes/Node.md)\>

#### Set Signature

> **set** **parent**(`parent`): `void`

Defined in: [packages/dev/core/src/node.ts:224](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L224)

Gets or sets the parent of the node (without keeping the current position in the scene)

##### See

https://doc.babylonjs.com/features/featuresDeepDive/mesh/transforms/parent_pivot/parent

##### Parameters

###### parent

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](../classes/Node.md)\>

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`parent`](../classes/Light.md#parent)

***

### radius

#### Get Signature

> **get** **radius**(): `number`

Defined in: [packages/dev/core/src/Lights/light.ts:194](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L194)

Gets the light radius used by PBR Materials to simulate soft area lights.

##### Returns

`number`

#### Set Signature

> **set** **radius**(`value`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:200](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L200)

sets the light radius used by PBR Materials to simulate soft area lights.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`radius`](../classes/Light.md#radius)

***

### range

#### Get Signature

> **get** **range**(): `number`

Defined in: [packages/dev/core/src/Lights/light.ts:153](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L153)

Defines how far from the source the light is impacting in scene units.
Note: Unused in PBR material as the distance light falloff is defined following the inverse squared falloff.

##### Returns

`number`

#### Set Signature

> **set** **range**(`value`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:160](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L160)

Defines how far from the source the light is impacting in scene units.
Note: Unused in PBR material as the distance light falloff is defined following the inverse squared falloff.

##### Parameters

###### value

`number`

##### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`range`](../classes/Light.md#range)

***

### renderPriority

Defined in: [packages/dev/core/src/Lights/light.ts:212](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L212)

Defines the rendering priority of the lights. It can help in case of fallback or number of lights
exceeding the number allowed of the materials.

#### Inherited from

[`Light`](../classes/Light.md).[`renderPriority`](../classes/Light.md#renderpriority)

***

### shadowEnabled

#### Get Signature

> **get** **shadowEnabled**(): `boolean`

Defined in: [packages/dev/core/src/Lights/light.ts:220](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L220)

Gets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
the current shadow generator.

##### Returns

`boolean`

#### Set Signature

> **set** **shadowEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:227](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L227)

Sets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
the current shadow generator.

##### Parameters

###### value

`boolean`

##### Returns

`void`

Gets or sets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
the current shadow generator.

#### Inherited from

[`Light`](../classes/Light.md).[`shadowEnabled`](../classes/Light.md#shadowenabled)

***

### worldMatrixFromCache

#### Get Signature

> **get** **worldMatrixFromCache**(): [`Matrix`](../classes/Matrix.md)

Defined in: [packages/dev/core/src/node.ts:529](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L529)

Returns directly the latest state of the mesh World matrix.
A Matrix is returned.

##### Returns

[`Matrix`](../classes/Matrix.md)

#### Inherited from

[`Light`](../classes/Light.md).[`worldMatrixFromCache`](../classes/Light.md#worldmatrixfromcache)

## Methods

### \_bindLight()

> **\_bindLight**(`lightIndex`, `scene`, `effect`, `useSpecular`, `receiveShadows?`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:434](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L434)

Binds the lights information from the scene to the effect for the given mesh.

#### Parameters

##### lightIndex

`number`

Light index

##### scene

[`Scene`](../classes/Scene.md)

The scene where the light belongs to

##### effect

[`Effect`](../classes/Effect.md)

The effect we are binding the data to

##### useSpecular

`boolean`

Defines if specular is supported

##### receiveShadows?

`boolean` = `true`

Defines if the effect (mesh) we bind the light for receives shadows

#### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`_bindLight`](../classes/Light.md#_bindlight)

***

### addBehavior()

> **addBehavior**(`behavior`, `attachImmediately?`): [`Node`](../classes/Node.md)

Defined in: [packages/dev/core/src/node.ts:434](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L434)

Attach a behavior to the node

#### Parameters

##### behavior

[`Behavior`](Behavior.md)\<[`Node`](../classes/Node.md)\>

defines the behavior to attach

##### attachImmediately?

`boolean` = `false`

defines that the behavior must be attached even if the scene is still loading

#### Returns

[`Node`](../classes/Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`Light`](../classes/Light.md).[`addBehavior`](../classes/Light.md#addbehavior)

***

### areLightTexturesReady()

> **areLightTexturesReady**(): `boolean`

Defined in: [packages/dev/core/src/Lights/light.ts:978](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L978)

Returns true when all texture resources used by this light are ready (e.g. projection textures).
Override in subclasses that use texture resources.

#### Returns

`boolean`

true if all light textures are ready

#### Inherited from

[`Light`](../classes/Light.md).[`areLightTexturesReady`](../classes/Light.md#arelighttexturesready)

***

### beginAnimation()

> **beginAnimation**(`name`, `loop?`, `speedRatio?`, `onAnimationEnd?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](../classes/Animatable.md)\>

Defined in: [packages/dev/core/src/node.ts:956](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L956)

Will start the animation sequence

#### Parameters

##### name

`string`

defines the range frames for animation sequence

##### loop?

`boolean`

defines if the animation should loop (false by default)

##### speedRatio?

`number`

defines the speed factor in which to run the animation (1 by default)

##### onAnimationEnd?

() => `void`

defines a function to be executed when the animation ended (undefined by default)

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animatable`](../classes/Animatable.md)\>

the object created for this animation. If range does not exist, it will return null

#### Inherited from

[`Light`](../classes/Light.md).[`beginAnimation`](../classes/Light.md#beginanimation)

***

### canAffectMesh()

> **canAffectMesh**(`mesh`): `boolean`

Defined in: [packages/dev/core/src/Lights/light.ts:563](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L563)

Specifies if the light will affect the passed mesh.

#### Parameters

##### mesh

[`AbstractMesh`](../classes/AbstractMesh.md)

The mesh to test against the light

#### Returns

`boolean`

true the mesh is affected otherwise, false.

#### Inherited from

[`Light`](../classes/Light.md).[`canAffectMesh`](../classes/Light.md#canaffectmesh)

***

### clone()

> **clone**(`name`, `newParent?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Light`](../classes/Light.md)\>

Defined in: [packages/dev/core/src/Lights/light.ts:648](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L648)

Returns a new Light object, named "name", from the current one.

#### Parameters

##### name

`string`

The name of the cloned light

##### newParent?

[`Nullable`](../type-aliases/Nullable.md)\<[`Node`](../classes/Node.md)\> = `null`

The parent of this light, if it has one

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Light`](../classes/Light.md)\>

the new created light

#### Inherited from

[`Light`](../classes/Light.md).[`clone`](../classes/Light.md#clone)

***

### computeTransformedInformation()

> **computeTransformedInformation**(): `boolean`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:53](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L53)

Computes the transformed information (transformedPosition and transformedDirection in World space) of the current light

#### Returns

`boolean`

true if the information has been computed, false if it does not need to (no parenting)

***

### computeWorldMatrix()

> **computeWorldMatrix**(`_force?`): [`Matrix`](../classes/Matrix.md)

Defined in: [packages/dev/core/src/node.ts:991](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L991)

Computes the world matrix of the node

#### Parameters

##### \_force?

`boolean`

defines if the cache version should be invalidated forcing the world matrix to be created from scratch

#### Returns

[`Matrix`](../classes/Matrix.md)

the world matrix

#### Inherited from

[`Light`](../classes/Light.md).[`computeWorldMatrix`](../classes/Light.md#computeworldmatrix)

***

### createAnimationRange()

> **createAnimationRange**(`name`, `from`, `to`): `void`

Defined in: [packages/dev/core/src/node.ts:873](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L873)

Creates an animation range for this node

#### Parameters

##### name

`string`

defines the name of the range

##### from

`number`

defines the starting key

##### to

`number`

defines the end key

#### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`createAnimationRange`](../classes/Light.md#createanimationrange)

***

### deleteAnimationRange()

> **deleteAnimationRange**(`name`, `deleteFrames?`): `void`

Defined in: [packages/dev/core/src/node.ts:890](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L890)

Delete a specific animation range

#### Parameters

##### name

`string`

defines the name of the range to delete

##### deleteFrames?

`boolean` = `true`

defines if animation frames from the range must be deleted as well

#### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`deleteAnimationRange`](../classes/Light.md#deleteanimationrange)

***

### dispose()

> **dispose**(`doNotRecurse?`, `disposeMaterialAndTextures?`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:592](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L592)

Releases resources associated with this node.

#### Parameters

##### doNotRecurse?

`boolean`

Set to true to not recurse into each children (recurse into each children by default)

##### disposeMaterialAndTextures?

`boolean` = `false`

Set to true to also dispose referenced materials and textures (false by default)

#### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`dispose`](../classes/Light.md#dispose)

***

### forceProjectionMatrixCompute()

> **forceProjectionMatrixCompute**(): `void`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:97](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L97)

Forces the shadow generator to recompute the projection matrix even if position and direction did not changed.

#### Returns

`void`

***

### getAbsolutePosition()

> **getAbsolutePosition**(): [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/Lights/light.ts:554](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L554)

Returns a Vector3, the absolute light position in the World.

#### Returns

[`Vector3`](../classes/Vector3.md)

the world space position of the light

#### Inherited from

[`Light`](../classes/Light.md).[`getAbsolutePosition`](../classes/Light.md#getabsoluteposition)

***

### getAnimationByName()

> **getAnimationByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](../classes/Animation.md)\>

Defined in: [packages/dev/core/src/node.ts:855](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L855)

Get an animation by name

#### Parameters

##### name

`string`

defines the name of the animation to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Animation`](../classes/Animation.md)\>

null if not found else the requested animation

#### Inherited from

[`Light`](../classes/Light.md).[`getAnimationByName`](../classes/Light.md#getanimationbyname)

***

### getAnimationRange()

> **getAnimationRange**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](../classes/AnimationRange.md)\>

Defined in: [packages/dev/core/src/node.ts:904](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L904)

Get an animation range by name

#### Parameters

##### name

`string`

defines the name of the animation range to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](../classes/AnimationRange.md)\>

null if not found else the requested animation range

#### Inherited from

[`Light`](../classes/Light.md).[`getAnimationRange`](../classes/Light.md#getanimationrange)

***

### getAnimationRanges()

> **getAnimationRanges**(): [`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](../classes/AnimationRange.md)\>[]

Defined in: [packages/dev/core/src/node.ts:939](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L939)

Gets the list of all animation ranges defined on this node

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`AnimationRange`](../classes/AnimationRange.md)\>[]

an array

#### Inherited from

[`Light`](../classes/Light.md).[`getAnimationRanges`](../classes/Light.md#getanimationranges)

***

### getBehaviorByName()

> **getBehaviorByName**(`name`): [`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](Behavior.md)\<[`Node`](../classes/Node.md)\>\>

Defined in: [packages/dev/core/src/node.ts:495](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L495)

Gets an attached behavior by name

#### Parameters

##### name

`string`

defines the name of the behavior to look for

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Behavior`](Behavior.md)\<[`Node`](../classes/Node.md)\>\>

null if behavior was not found else the requested behavior

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`Light`](../classes/Light.md).[`getBehaviorByName`](../classes/Light.md#getbehaviorbyname)

***

### getChildMeshes()

Get all child-meshes of this node

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getChildMeshes**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [packages/dev/core/src/node.ts:781](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L781)

Get all child-meshes of this node

##### Type Parameters

###### T

`T` *extends* [`AbstractMesh`](../classes/AbstractMesh.md)

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

`T`[]

an array of AbstractMesh

##### Inherited from

[`Light`](../classes/Light.md).[`getChildMeshes`](../classes/Light.md#getchildmeshes)

#### Call Signature

> **getChildMeshes**(`directDescendantsOnly?`, `predicate?`): [`AbstractMesh`](../classes/AbstractMesh.md)[]

Defined in: [packages/dev/core/src/node.ts:789](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L789)

Get all child-meshes of this node

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: false)

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

[`AbstractMesh`](../classes/AbstractMesh.md)[]

an array of AbstractMesh

##### Inherited from

[`Light`](../classes/Light.md).[`getChildMeshes`](../classes/Light.md#getchildmeshes)

***

### getChildren()

Get all direct children of this node

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

#### Call Signature

> **getChildren**\<`T`\>(`predicate?`, `directDescendantsOnly?`): `T`[]

Defined in: [packages/dev/core/src/node.ts:811](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L811)

Get all direct children of this node

##### Type Parameters

###### T

`T` *extends* [`Node`](../classes/Node.md)

##### Parameters

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

##### Returns

`T`[]

an array of Node

##### Inherited from

[`Light`](../classes/Light.md).[`getChildren`](../classes/Light.md#getchildren)

#### Call Signature

> **getChildren**(`predicate?`, `directDescendantsOnly?`): [`Node`](../classes/Node.md)[]

Defined in: [packages/dev/core/src/node.ts:819](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L819)

Get all direct children of this node

##### Parameters

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered (Default: true)

##### Returns

[`Node`](../classes/Node.md)[]

an array of Node

##### Inherited from

[`Light`](../classes/Light.md).[`getChildren`](../classes/Light.md#getchildren)

***

### getClassName()

> **getClassName**(): `string`

Defined in: [packages/dev/core/src/Lights/light.ts:488](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L488)

Returns the string "Light".

#### Returns

`string`

the class name

#### Inherited from

[`Light`](../classes/Light.md).[`getClassName`](../classes/Light.md#getclassname)

***

### getDepthMaxZ()

> **getDepthMaxZ**(`activeCamera`): `number`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:118](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L118)

Gets the maxZ used for shadow according to both the scene and the light.

#### Parameters

##### activeCamera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

The camera we are returning the max for

#### Returns

`number`

the depth max z

***

### getDepthMinZ()

> **getDepthMinZ**(`activeCamera`): `number`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:111](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L111)

Gets the minZ used for shadow according to both the scene and the light.

#### Parameters

##### activeCamera

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>

The camera we are returning the min for

#### Returns

`number`

the depth min z

***

### getDepthScale()

> **getDepthScale**(): `number`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:80](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L80)

Gets the current depth scale used in ESM.

#### Returns

`number`

The scale

***

### getDescendants()

Will return all nodes that have this node as ascendant

#### Param

**directDescendantsOnly**

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

#### Param

**predicate**

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

#### Call Signature

> **getDescendants**\<`T`\>(`directDescendantsOnly?`, `predicate?`): `T`[]

Defined in: [packages/dev/core/src/node.ts:751](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L751)

Will return all nodes that have this node as ascendant

##### Type Parameters

###### T

`T` *extends* [`Node`](../classes/Node.md)

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

###### predicate?

(`node`) => `node is T`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

`T`[]

all children nodes of all types

##### Inherited from

[`Light`](../classes/Light.md).[`getDescendants`](../classes/Light.md#getdescendants)

#### Call Signature

> **getDescendants**(`directDescendantsOnly?`, `predicate?`): [`Node`](../classes/Node.md)[]

Defined in: [packages/dev/core/src/node.ts:759](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L759)

Will return all nodes that have this node as ascendant

##### Parameters

###### directDescendantsOnly?

`boolean`

defines if true only direct descendants of 'this' will be considered, if false direct and also indirect (children of children, an so on in a recursive manner) descendants of 'this' will be considered

###### predicate?

(`node`) => `boolean`

defines an optional predicate that will be called on every evaluated child, the predicate must return true for a given child to be part of the result, otherwise it will be ignored

##### Returns

[`Node`](../classes/Node.md)[]

all children nodes of all types

##### Inherited from

[`Light`](../classes/Light.md).[`getDescendants`](../classes/Light.md#getdescendants)

***

### getEngine()

> **getEngine**(): [`AbstractEngine`](../classes/AbstractEngine.md)

Defined in: [packages/dev/core/src/node.ts:420](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L420)

Gets the engine of the node

#### Returns

[`AbstractEngine`](../classes/AbstractEngine.md)

a Engine

#### Inherited from

[`Light`](../classes/Light.md).[`getEngine`](../classes/Light.md#getengine)

***

### getHierarchyBoundingVectors()

> **getHierarchyBoundingVectors**(`includeDescendants?`, `predicate?`): `object`

Defined in: [packages/dev/core/src/node.ts:1058](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L1058)

Return the minimum and maximum world vectors of the entire hierarchy under current node

#### Parameters

##### includeDescendants?

`boolean` = `true`

Include bounding info from descendants as well (true by default)

##### predicate?

[`Nullable`](../type-aliases/Nullable.md)\<(`abstractMesh`) => `boolean`\> = `null`

defines a callback function that can be customize to filter what meshes should be included in the list used to compute the bounding vectors

#### Returns

`object`

the new bounding vectors

##### max

> **max**: [`Vector3`](../classes/Vector3.md)

##### min

> **min**: [`Vector3`](../classes/Vector3.md)

#### Inherited from

[`Light`](../classes/Light.md).[`getHierarchyBoundingVectors`](../classes/Light.md#gethierarchyboundingvectors)

***

### getProjectionMatrix()

> **getProjectionMatrix**(`_viewMatrix?`, `_renderList?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](../classes/Matrix.md)\>

Defined in: [packages/dev/core/src/Lights/light.ts:338](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L338)

Returns the projection matrix.
Note that viewMatrix and renderList are optional and are only used by lights that calculate the projection matrix from a list of meshes (e.g. directional lights with automatic extents calculation).

#### Parameters

##### \_viewMatrix?

[`Matrix`](../classes/Matrix.md)

The view transform matrix of the light (optional).

##### \_renderList?

[`AbstractMesh`](../classes/AbstractMesh.md)[]

The list of meshes to take into account when calculating the projection matrix (optional).

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](../classes/Matrix.md)\>

The projection matrix. Can be null, if a projection matrix cannot be defined for the type of light considered (as for a hemispherical light, for example).

#### Inherited from

[`Light`](../classes/Light.md).[`getProjectionMatrix`](../classes/Light.md#getprojectionmatrix)

***

### getScaledIntensity()

> **getScaledIntensity**(): `number`

Defined in: [packages/dev/core/src/Lights/light.ts:638](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L638)

Returns the intensity scaled by the Photometric Scale according to the light type and intensity mode.

#### Returns

`number`

the scaled intensity in intensity mode unit

#### Inherited from

[`Light`](../classes/Light.md).[`getScaledIntensity`](../classes/Light.md#getscaledintensity)

***

### getScene()

> **getScene**(): [`Scene`](../classes/Scene.md)

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:59](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L59)

Gets the scene the light belongs to.

#### Returns

[`Scene`](../classes/Scene.md)

The scene

#### Overrides

[`Light`](../classes/Light.md).[`getScene`](../classes/Light.md#getscene)

***

### getShadowDirection()

> **getShadowDirection**(`faceIndex?`): [`Vector3`](../classes/Vector3.md)

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:104](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L104)

Get the direction to use to render the shadow map. In case of cube texture, the face index can be passed.

#### Parameters

##### faceIndex?

`number`

The index of the face we are computed the direction to generate shadow

#### Returns

[`Vector3`](../classes/Vector3.md)

The set direction in 2d mode otherwise the direction to the cubemap face if needCube() is true

***

### getShadowGenerator()

> **getShadowGenerator**(`camera?`): [`Nullable`](../type-aliases/Nullable.md)\<[`IShadowGenerator`](IShadowGenerator.md)\>

Defined in: [packages/dev/core/src/Lights/light.ts:534](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L534)

Returns the Light associated shadow generator if any.

#### Parameters

##### camera?

[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\> = `null`

Camera for which the shadow generator should be retrieved (default: null). If null, retrieves the default shadow generator

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`IShadowGenerator`](IShadowGenerator.md)\>

the associated shadow generator.

#### Inherited from

[`Light`](../classes/Light.md).[`getShadowGenerator`](../classes/Light.md#getshadowgenerator)

***

### getShadowGenerators()

> **getShadowGenerators**(): [`Nullable`](../type-aliases/Nullable.md)\<`Map`\<[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>, [`IShadowGenerator`](IShadowGenerator.md)\>\>

Defined in: [packages/dev/core/src/Lights/light.ts:546](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L546)

Returns all the shadow generators associated to this light

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<`Map`\<[`Nullable`](../type-aliases/Nullable.md)\<[`Camera`](../classes/Camera.md)\>, [`IShadowGenerator`](IShadowGenerator.md)\>\>

#### Inherited from

[`Light`](../classes/Light.md).[`getShadowGenerators`](../classes/Light.md#getshadowgenerators)

***

### getTypeID()

> **getTypeID**(): `number`

Defined in: [packages/dev/core/src/Lights/light.ts:630](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L630)

Returns the light type ID (integer).

#### Returns

`number`

The light Type id as a constant defines in Light.LIGHTTYPEID_x

#### Inherited from

[`Light`](../classes/Light.md).[`getTypeID`](../classes/Light.md#gettypeid)

***

### getViewMatrix()

> **getViewMatrix**(`_faceIndex?`): [`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](../classes/Matrix.md)\>

Defined in: [packages/dev/core/src/Lights/light.ts:327](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L327)

Returns the view matrix.

#### Parameters

##### \_faceIndex?

`number`

The index of the face for which we want to extract the view matrix. Only used for point light types.

#### Returns

[`Nullable`](../type-aliases/Nullable.md)\<[`Matrix`](../classes/Matrix.md)\>

The view matrix. Can be null, if a view matrix cannot be defined for the type of light considered (as for a hemispherical light, for example).

#### Inherited from

[`Light`](../classes/Light.md).[`getViewMatrix`](../classes/Light.md#getviewmatrix)

***

### getWorldMatrix()

> **getWorldMatrix**(): [`Matrix`](../classes/Matrix.md)

Defined in: [packages/dev/core/src/node.ts:509](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L509)

Returns the latest update of the World matrix

#### Returns

[`Matrix`](../classes/Matrix.md)

a Matrix

#### Inherited from

[`Light`](../classes/Light.md).[`getWorldMatrix`](../classes/Light.md#getworldmatrix)

***

### isDescendantOf()

> **isDescendantOf**(`ancestor`): `boolean`

Defined in: [packages/dev/core/src/node.ts:713](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L713)

Is this node a descendant of the given node?
The function will iterate up the hierarchy until the ancestor was found or no more parents defined

#### Parameters

##### ancestor

[`Node`](../classes/Node.md)

defines the parent node to inspect

#### Returns

`boolean`

a boolean indicating if this node is a descendant of the given node

#### Inherited from

[`Light`](../classes/Light.md).[`isDescendantOf`](../classes/Light.md#isdescendantof)

***

### isDisposed()

> **isDisposed**(): `boolean`

Defined in: [packages/dev/core/src/node.ts:216](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L216)

Gets a boolean indicating if the node has been disposed

#### Returns

`boolean`

true if the node was disposed

#### Inherited from

[`Light`](../classes/Light.md).[`isDisposed`](../classes/Light.md#isdisposed)

***

### isEnabled()

> **isEnabled**(`checkAncestors?`): `boolean`

Defined in: [packages/dev/core/src/node.ts:633](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L633)

Is this node enabled?
If the node has a parent, all ancestors will be checked and false will be returned if any are false (not enabled), otherwise will return true

#### Parameters

##### checkAncestors?

`boolean` = `true`

indicates if this method should check the ancestors. The default is to check the ancestors. If set to false, the method will return the value of this node without checking ancestors

#### Returns

`boolean`

whether this node (and its parent) is enabled

#### Remarks

To observe changes to the value returned when calling this with `checkAncestors` set to true (the default, i.e. the effective enabled state), subscribe to [onEffectiveEnabledStateChangedObservable](../classes/Node.md#oneffectiveenabledstatechangedobservable).
To observe changes to the value returned when calling this with `checkAncestors` set to false (i.e. this node's own enabled state only), subscribe to [onEnabledStateChangedObservable](../classes/Node.md#onenabledstatechangedobservable).

#### Inherited from

[`Light`](../classes/Light.md).[`isEnabled`](../classes/Light.md#isenabled)

***

### isReady()

> **isReady**(`_completeCheck?`): `boolean`

Defined in: [packages/dev/core/src/node.ts:609](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L609)

Is this node ready to be used/rendered

#### Parameters

##### \_completeCheck?

`boolean` = `false`

defines if a complete check (including materials and lights) has to be done (false by default)

#### Returns

`boolean`

true if the node is ready

#### Inherited from

[`Light`](../classes/Light.md).[`isReady`](../classes/Light.md#isready)

***

### markAsDirty()

> **markAsDirty**(`_property?`): [`Node`](../classes/Node.md)

Defined in: [packages/dev/core/src/node.ts:618](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L618)

Flag the  node as dirty (Forcing it to update everything)

#### Parameters

##### \_property?

`string`

helps children apply precise "dirtyfication"

#### Returns

[`Node`](../classes/Node.md)

this node

#### Inherited from

[`Light`](../classes/Light.md).[`markAsDirty`](../classes/Light.md#markasdirty)

***

### needCube()

> **needCube**(): `boolean`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:86](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L86)

Returns whether or not the shadow generation require a cube texture or a 2d texture.

#### Returns

`boolean`

true if a cube texture needs to be use

***

### needProjectionMatrixCompute()

> **needProjectionMatrixCompute**(): `boolean`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:92](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L92)

Detects if the projection matrix requires to be recomputed this frame.

#### Returns

`boolean`

true if it requires to be recomputed otherwise, false.

***

### prepareLightSpecificDefines()

> `abstract` **prepareLightSpecificDefines**(`defines`, `lightIndex`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:987](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L987)

Prepares the list of defines specific to the light type.

#### Parameters

##### defines

`any`

the list of defines

##### lightIndex

`number`

defines the index of the light for the effect

#### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`prepareLightSpecificDefines`](../classes/Light.md#preparelightspecificdefines)

***

### removeBehavior()

> **removeBehavior**(`behavior`): [`Node`](../classes/Node.md)

Defined in: [packages/dev/core/src/node.ts:464](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L464)

Remove an attached behavior

#### Parameters

##### behavior

[`Behavior`](Behavior.md)\<[`Node`](../classes/Node.md)\>

defines the behavior to attach

#### Returns

[`Node`](../classes/Node.md)

the current Node

#### See

https://doc.babylonjs.com/features/featuresDeepDive/behaviors

#### Inherited from

[`Light`](../classes/Light.md).[`removeBehavior`](../classes/Light.md#removebehavior)

***

### serialize()

> **serialize**(): `any`

Defined in: [packages/dev/core/src/Lights/light.ts:672](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L672)

Serializes the current light into a Serialization object.

#### Returns

`any`

the serialized object.

#### Inherited from

[`Light`](../classes/Light.md).[`serialize`](../classes/Light.md#serialize)

***

### serializeAnimationRanges()

> **serializeAnimationRanges**(): `any`

Defined in: [packages/dev/core/src/node.ts:970](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/node.ts#L970)

Serialize animation ranges into a JSON compatible object

#### Returns

`any`

serialization object

#### Inherited from

[`Light`](../classes/Light.md).[`serializeAnimationRanges`](../classes/Light.md#serializeanimationranges)

***

### setEnabled()

> **setEnabled**(`value`): `void`

Defined in: [packages/dev/core/src/Lights/light.ts:523](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L523)

Set the enabled state of this node.

#### Parameters

##### value

`boolean`

the new enabled state

#### Returns

`void`

#### Inherited from

[`Light`](../classes/Light.md).[`setEnabled`](../classes/Light.md#setenabled)

***

### setShadowProjectionMatrix()

> **setShadowProjectionMatrix**(`matrix`, `viewMatrix`, `renderList`): `IShadowLight`

Defined in: [packages/dev/core/src/Lights/shadowLight.ts:74](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/shadowLight.ts#L74)

Sets the shadow projection matrix in parameter to the generated projection matrix.

#### Parameters

##### matrix

[`Matrix`](../classes/Matrix.md)

The matrix to update with the projection information

##### viewMatrix

[`Matrix`](../classes/Matrix.md)

The transform matrix of the light

##### renderList

[`AbstractMesh`](../classes/AbstractMesh.md)[]

The list of mesh to render in the map

#### Returns

`IShadowLight`

The current light

***

### toString()

> **toString**(`fullDetails?`): `string`

Defined in: [packages/dev/core/src/Lights/light.ts:500](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L500)

Converts the light information to a readable string for debug purpose.

#### Parameters

##### fullDetails?

`boolean`

Supports for multiple levels of logging within scene loading

#### Returns

`string`

the human readable light info

#### Inherited from

[`Light`](../classes/Light.md).[`toString`](../classes/Light.md#tostring)

***

### transferTexturesToEffect()

> **transferTexturesToEffect**(`effect`, `lightIndex`): [`Light`](../classes/Light.md)

Defined in: [packages/dev/core/src/Lights/light.ts:421](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L421)

Sets the passed Effect "effect" with the Light textures.

#### Parameters

##### effect

[`Effect`](../classes/Effect.md)

The effect to update

##### lightIndex

`string`

The index of the light in the effect to update

#### Returns

[`Light`](../classes/Light.md)

The light

#### Inherited from

[`Light`](../classes/Light.md).[`transferTexturesToEffect`](../classes/Light.md#transfertexturestoeffect)

***

### transferToEffect()

> `abstract` **transferToEffect**(`effect`, `lightIndex`): [`Light`](../classes/Light.md)

Defined in: [packages/dev/core/src/Lights/light.ts:412](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L412)

Sets the passed Effect "effect" with the Light information.

#### Parameters

##### effect

[`Effect`](../classes/Effect.md)

The effect to update

##### lightIndex

`string`

The index of the light in the effect to update

#### Returns

[`Light`](../classes/Light.md)

The light

#### Inherited from

[`Light`](../classes/Light.md).[`transferToEffect`](../classes/Light.md#transfertoeffect)

***

### transferToNodeMaterialEffect()

> `abstract` **transferToNodeMaterialEffect**(`effect`, `lightDataUniformName`): [`Light`](../classes/Light.md)

Defined in: [packages/dev/core/src/Lights/light.ts:482](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Lights/light.ts#L482)

Sets the passed Effect "effect" with the Light information.

#### Parameters

##### effect

[`Effect`](../classes/Effect.md)

The effect to update

##### lightDataUniformName

`string`

The uniform used to store light data (position or direction)

#### Returns

[`Light`](../classes/Light.md)

The light

#### Inherited from

[`Light`](../classes/Light.md).[`transferToNodeMaterialEffect`](../classes/Light.md#transfertonodematerialeffect)
