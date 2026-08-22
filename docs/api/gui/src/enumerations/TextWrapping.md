[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [gui/src](../README.md) / TextWrapping

# Enumeration: TextWrapping

Defined in: [packages/dev/gui/src/2D/controls/textBlock.pure.ts:14](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/gui/src/2D/controls/textBlock.pure.ts#L14)

Enum that determines the text-wrapping mode to use.

## Enumeration Members

### Clip

> **Clip**: `0`

Defined in: [packages/dev/gui/src/2D/controls/textBlock.pure.ts:18](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/gui/src/2D/controls/textBlock.pure.ts#L18)

Clip the text when it's larger than Control.width; this is the default mode.

***

### Ellipsis

> **Ellipsis**: `2`

Defined in: [packages/dev/gui/src/2D/controls/textBlock.pure.ts:28](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/gui/src/2D/controls/textBlock.pure.ts#L28)

Ellipsize the text, i.e. shrink with trailing … when text is larger than Control.width.

***

### HTML

> **HTML**: `4`

Defined in: [packages/dev/gui/src/2D/controls/textBlock.pure.ts:38](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/gui/src/2D/controls/textBlock.pure.ts#L38)

Use HTML to wrap the text. This is the only mode that supports east-asian languages.

***

### WordWrap

> **WordWrap**: `1`

Defined in: [packages/dev/gui/src/2D/controls/textBlock.pure.ts:23](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/gui/src/2D/controls/textBlock.pure.ts#L23)

Wrap the text word-wise, i.e. try to add line-breaks at word boundary to fit within Control.width.

***

### WordWrapEllipsis

> **WordWrapEllipsis**: `3`

Defined in: [packages/dev/gui/src/2D/controls/textBlock.pure.ts:33](https://github.com/BabylonJS/Babylon.js/blob/f22fdbe48b108ab1ffb5586a12fa5a7b3060d09d/packages/dev/gui/src/2D/controls/textBlock.pure.ts#L33)

Wrap the text word-wise and clip the text when the text's height is larger than the Control.height, and shrink the last line with trailing … .
