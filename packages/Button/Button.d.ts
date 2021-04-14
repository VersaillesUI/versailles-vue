import { IBaseProps } from '..'

declare namespace JSX {
  interface Element {
      [elemName: string]: any;
  }
}

export interface IProps extends IBaseProps {
  disabled?: true | false;
  /**
   * #### 设置宽度相对父级元素100%  
   * 默认：`false`
   */
  fullWidth?: true | false;
  /**
   * #### 设置组件尺寸  
   * 默认：`meidum`
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * #### 设置组件样式  
   * 默认：`contained`
   */
  varient?: 'contained' | 'outlined' | 'text';
  /**
   * #### 设置组件主题颜色  
   * 默认：`inherit`
   */
  color?: 'inherit' | 'primary' | 'secondary';
  /**
   * #### 起点位置图标  
   * 值为VNode组件
   */
  startIcon?: Object;
  /**
   * #### 终点位置图标  
   * 值为VNode组件
   */
  endIcon?: Object;
}

export default function Button(props: IProps): JSX.Element
