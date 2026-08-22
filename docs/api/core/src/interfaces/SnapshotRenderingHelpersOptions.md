[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / SnapshotRenderingHelpersOptions

# Interface: SnapshotRenderingHelpersOptions

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:29](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L29)

Options for the snapshot rendering helper

## Properties

### morphTargetsNumMaxInfluences?

> `optional` **morphTargetsNumMaxInfluences?**: `number`

Defined in: [packages/dev/core/src/Misc/snapshotRenderingHelper.ts:37](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/core/src/Misc/snapshotRenderingHelper.ts#L37)

Maximum number of influences for morph target managers
In FAST snapshot mode, the number of influences must be fixed and cannot change from one frame to the next.
morphTargetsNumMaxInfluences is the maximum number of non-zero influences allowed in a morph target manager.
The final value defined for a morph target manager is: Math.min(morphTargetManager.numTargets, morphTargetsNumMaxInfluences)
Default: 20
