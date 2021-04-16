import { IBaseProps } from '..'
import { DefineComponent } from 'vue'

export interface IProps extends IBaseProps {
  disabled?: true | false;
  fullWidth?: true | false;
  size?: 'small' | 'medium' | 'large';
  varient?: 'contained' | 'outlined' | 'text';
  color?: 'inherit' | 'primary' | 'secondary';
  startIcon?: Object;
  endIcon?: Object;
}

declare const _default: DefineComponent<IProps>

export default _default
