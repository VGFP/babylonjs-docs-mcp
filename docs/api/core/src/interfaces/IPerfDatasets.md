[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IPerfDatasets

# Interface: IPerfDatasets

Defined in: [packages/dev/core/src/Misc/interfaces/iPerfViewer.ts:6](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts#L6)

Defines the shape of a collection of datasets that our graphing service uses for drawing purposes.

## Properties

### data

> **data**: [`DynamicFloat32Array`](../classes/DynamicFloat32Array.md)

Defined in: [packages/dev/core/src/Misc/interfaces/iPerfViewer.ts:15](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts#L15)

The data to be processed by the performance graph. Each slice will be of the form of [timestamp, numberOfPoints, value1, value2...]

***

### ids

> **ids**: `string`[]

Defined in: [packages/dev/core/src/Misc/interfaces/iPerfViewer.ts:10](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts#L10)

The ids of our dataset.

***

### startingIndices

> **startingIndices**: [`DynamicFloat32Array`](../classes/DynamicFloat32Array.md)

Defined in: [packages/dev/core/src/Misc/interfaces/iPerfViewer.ts:20](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/interfaces/iPerfViewer.ts#L20)

A list of starting indices for each slice of data collected. Used for fast access of an arbitrary slice inside the data array.
