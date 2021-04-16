import { IBaseProps } from '..'
import { DefineComponent } from 'vue'

export interface IProps extends IBaseProps {
  fullWidth?: true | false;
  component?: String;
  varient?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'title' | 'subtitle' | 'button' | 'caption';
  gutterBottom?: true | false,
  textTransform?: 'inherit' | 'upperCase' | 'lowerCase' | 'capitalize'
}

declare const _default: DefineComponent<IProps>

export default _default
