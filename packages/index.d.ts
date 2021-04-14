import Vue, { VNodeData } from 'vue/types'
import { Theme } from './theme'

export { withStyles } from './styles'
export { Theme, ThemeProvider } from './theme'
export { default as AppBar } from './AppBar'
export { default as FlexBox } from './FlexBox'
export { default as FlexItem } from './FlexItem'
export { default as Typography } from './Typography'
export { default as Paper } from './Paper'
export { default as Icon } from './Icon'
export { default as Button } from './Button'
export { default as List } from './List'
export { default as ListItem } from './ListItem'
export { default as ListSubheader } from './ListSubheader'
export { default as Animation } from './Animation'
export { default as ScrollPanel } from './ScrollPanel'
export { default as Link } from './Link'
export { default as CodeHighlight } from './CodeHighlight'
export { default as Table } from './Table'
export { default as Input } from './Input'
export { default as NavBar } from './NavBar'
export { default as NavBarItem } from './NavBarItem'
export { default as IconButton } from './IconButton'

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    class?: String;
    style?: Object;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    classes: Object;
  }
}

export interface IBaseProps extends VNodeData {
  class?: String;
  style?: Object;
  onClick?: MouseEvent;
  onDblclick?: MouseEvent;
  onMouseenter?: MouseEvent;
  onMouseleave?: MouseEvent;
  onMousemove?: MouseEvent;
  onMouseout?: MouseEvent;
  onMouseover?: MouseEvent;
  onMousewheel?: MouseEvent;
  onWheel?: MouseEvent;
  onKeyup?: KeyboardEvent;
  onKeydown?: KeyboardEvent;
  onKeypress?: KeyboardEvent;
  onCopy?: ClipboardEvent;
  onPaste?: ClipboardEvent;
  onCut?: ClipboardEvent;
  onScroll?: DragEvent;
  onDrag?: DragEvent;
  onDragend?: DragEvent;
  onDragenter?: DragEvent;
  onDragleave?: DragEvent;
  onDragover?: DragEvent;
  onDragstart?: DragEvent;
  onDrop?: DragEvent;
}