import { IBaseProps } from '..'

declare namespace JSX {
  interface Element {
      [elemName: string]: any;
  }
}

export interface IProps extends IBaseProps {
  /**
   * #### 设置动画影响的类型
   */
  cssProperty: String,
  /**
   * #### 设置动画时长  
   * 默认：`300`
   */
  transitionDuration?: Number;
  /**
   * #### 设置动画特效  
   * 默认：`cubicBezier(0.4, 0, 0.2, 1)`
   */
  transitionFunction?:
    String |
    'easeInQuad' |
    'easeInCubic' |
    'easeInQuart' |
    'easeInQuint' |
    'easeInSine' |
    'easeInExpo' |
    'easeInCirc' |
    'easeInBack' |
    'easeOutQuad' |
    'easeOutCubic' |
    'easeOutQuart' |
    'easeOutQuint' |
    'easeOutSine' |
    'easeOutExpo' |
    'easeOutCirc' |
    'easeOutBack' |
    'easeInBounce' |
    'easeInOutQuad' |
    'easeInOutCubic' |
    'easeInOutQuart' |
    'easeInOutQuint' |
    'easeInOutSine' |
    'easeInOutExpo' |
    'easeInOutCirc' |
    'easeInOutBack' |
    'easeInOutBounce' |
    'easeOutBounce' |
    'easeOutInQuad' |
    'easeOutInCubic' |
    'easeOutInQuart' |
    'easeOutInQuint' |
    'easeOutInSine' |
    'easeOutInExpo' |
    'easeOutInCirc' |
    'easeOutInBack' |
    'easeOutInBounce' |
    'linear';
  /**
   * #### 设置元素类型  
   * 默认: `div`
   */
  component?: String;
  /**
   * #### 设置动画起始值  
   * `start`仅在组件创建初期生效
   */
  start?: String | Number;
  /**
   * #### 设置动画终点值  
   */
  end?: String | Number;
}

declare function AppBar(props: IProps): JSX.Element

export default AppBar
