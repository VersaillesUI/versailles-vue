declare namespace JSX {
  interface Element {
      [elemName: string]: any;
  }
}

export interface IProps {
  /**
   * #### 是否使用直角
   * 默认：`false`
   */
  square?: true | false;
  /**
   * #### 阴影的高度  
   * 默认：`4px`
   */
  elevation?: Number;
  /**
   * #### 自定义纸张的元素名  
   * 默认：`div`
   */
  component?: String;
  /**
   * #### 纸张样式  
   * 默认：`default`
   */
  varient?: 'default' | 'outlined';
  /**
   * #### 阴影是否居中  
   * 默认：`false`
   */
  varientCenter?: true | false
  /**
   * #### 设置宽度相对父级元素100%  
   * 默认：`false`
   */
  fullWidth?: true | false
}

export default function Paper(props: IProps): JSX.Element
