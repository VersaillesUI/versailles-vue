import { IBaseProps } from '..'
import { DefineComponent } from 'vue'

interface IProps extends IBaseProps {
  /**
    * @description 设置组件默认尺寸  
    * @default meidum
    */
  size?: 'small' | 'large' | 'medium';
  /**
    * @description 设置组件定位属性  
    * @default fixed
    */
  position?: 'fixed' | 'static' | 'absolute' | 'relative';
  elevation?: Number;
}

/**
 * @description 顶部栏面板
 * @property size - medium
 * @property position - fixed
 * @property elevation
 * 
 */
declare const _default: DefineComponent<IProps>

export default _default