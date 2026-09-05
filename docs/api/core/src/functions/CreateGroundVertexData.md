[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / CreateGroundVertexData

# Function: CreateGroundVertexData()

> **CreateGroundVertexData**(`options`): [`VertexData`](../classes/VertexData.md)

Defined in: [packages/dev/core/src/Meshes/Builders/groundBuilder.pure.ts:25](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Meshes/Builders/groundBuilder.pure.ts#L25)

Creates the VertexData for a Ground

## Parameters

### options

an object used to set the following optional parameters for the Ground, required but can be empty
- `width` the width (x direction) of the ground, optional, default 1
- `height` the height (z direction) of the ground, optional, default 1
- `subdivisions` the number of subdivisions per side, optional, default 1
- `subdivisionsX` the number of subdivisions in the x direction, overrides options.subdivisions, optional, default undefined
- `subdivisionsY` the number of subdivisions in the y direction, overrides options.subdivisions, optional, default undefined

#### height?

`number`

#### size?

`number`

#### subdivisions?

`number`

#### subdivisionsX?

`number`

#### subdivisionsY?

`number`

#### width?

`number`

## Returns

[`VertexData`](../classes/VertexData.md)

the VertexData of the Ground
