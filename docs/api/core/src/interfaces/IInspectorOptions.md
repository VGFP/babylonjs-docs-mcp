[**@babylonjs/root v1.0.0**](../../../README.md)

***

[@babylonjs/root](../../../README.md) / [core/src](../README.md) / IInspectorOptions

# Interface: IInspectorOptions

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:104](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L104)

Interface used to define the options to use to create the Inspector

## Properties

### additionalNodes?

> `optional` **additionalNodes?**: [`IExplorerAdditionalNode`](IExplorerAdditionalNode.md)[]

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:144](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L144)

Optional list of additional top level nodes

***

### contextMenu?

> `optional` **contextMenu?**: `Partial`\<`Record`\<[`IInspectorContextMenuType`](../type-aliases/IInspectorContextMenuType.md), [`IInspectorContextMenuItem`](IInspectorContextMenuItem.md)[]\>\>

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:160](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L160)

Context menu for inspector tools such as "Post Process", "Nodes", "Materials", etc.

***

### contextMenuOverride?

> `optional` **contextMenuOverride?**: [`IInspectorContextMenuType`](../type-aliases/IInspectorContextMenuType.md)[]

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:164](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L164)

List of context menu items that should be completely overridden by custom items from the contextMenu property.

***

### embedMode?

> `optional` **embedMode?**: `boolean`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:124](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L124)

Display in embed mode (both panes on the right)

***

### enableClose?

> `optional` **enableClose?**: `boolean`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:136](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L136)

Allow the panes to be closed by users (default: true)

***

### enablePopup?

> `optional` **enablePopup?**: `boolean`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:132](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L132)

Allow the panes to popup (default: true)

***

### explorerExtensibility?

> `optional` **explorerExtensibility?**: [`IExplorerExtensibilityGroup`](IExplorerExtensibilityGroup.md)[]

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:140](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L140)

Optional list of extensibility entries

***

### gizmoCamera?

> `optional` **gizmoCamera?**: [`Camera`](../classes/Camera.md)

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:156](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L156)

Optional camera to use to render the gizmos from the inspector (default to the scene.activeCamera or the latest from scene.activeCameras)

***

### globalRoot?

> `optional` **globalRoot?**: `HTMLElement`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:112](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L112)

HTML element to use as root (the parent of the rendering canvas will be used as default value)

***

### handleResize?

> `optional` **handleResize?**: `boolean`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:128](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L128)

let the Inspector handles resize of the canvas when panes are resized (default to true)

***

### initialTab?

> `optional` **initialTab?**: [`DebugLayerTab`](../enumerations/DebugLayerTab.md)

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:152](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L152)

Optional initial tab (default to DebugLayerTab.Properties)

***

### inspectorURL?

> `optional` **inspectorURL?**: `string`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:148](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L148)

Optional URL to get the inspector script from (by default it uses the babylonjs CDN).

***

### overlay?

> `optional` **overlay?**: `boolean`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:108](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L108)

Display in overlay mode (default: false)

***

### showExplorer?

> `optional` **showExplorer?**: `boolean`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:116](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L116)

Display the Scene explorer

***

### showInspector?

> `optional` **showInspector?**: `boolean`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:120](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L120)

Display the property inspector

***

### skipDefaultFontLoading?

> `optional` **skipDefaultFontLoading?**: `boolean`

Defined in: [packages/dev/core/src/Debug/debugLayer.pure.ts:169](https://github.com/BabylonJS/Babylon.js/blob/8fc9bce8645980fefc18c7550fb28469d6da3a62/packages/dev/core/src/Debug/debugLayer.pure.ts#L169)

Should the default font loading be skipped
