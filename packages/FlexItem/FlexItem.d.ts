import { IBaseProps } from '..'
import { DefineComponent } from 'vue'

interface IProps extends IBaseProps {
  flexGrow?: Number;
  flexBasis?: String;
  flexShrink?: Number;
  alignSelf?: 'self-start' | 'stretch' | 'self-end' | 'center' | 'start' | 'end';
  display?: 'block' | 'inline-block' | 'flex' | 'inline-flex' | 'table' | 'inline-table';
  overflow: 'hidden' | 'auto' | 'scroll' | 'visible';
  overflowX: 'hidden' | 'auto' | 'scroll' | 'visible';
  overflowY: 'hidden' | 'auto' | 'scroll' | 'visible';
}

declare const _default: DefineComponent<IProps>

export default _default