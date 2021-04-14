import { IBaseProps } from '..'

declare namespace JSX {
  interface Element {
      [elemName: string]: any;
  }
}

export interface IProps extends IBaseProps {
  /**
   * #### 设置组件默认尺寸  
   * 默认：`meidum`
   */
  size?: 'small' | 'large' | 'medium';
  /**
   * #### 设置组件定位属性  
   * 默认：`fixed`
   */
  position?: 'fixed' | 'static' | 'absolute' | 'relative';
  elevation?: Number;
}

declare function AppBar(props: IProps): JSX.Element

export default AppBar
