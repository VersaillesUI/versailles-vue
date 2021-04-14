declare namespace JSX {
  interface Element {
      [elemName: string]: any;
  }
}

export interface IProps {
  /**
   * #### 是否是块级元素  
   */
  block?: true | false;
  /**
   * #### 在DOM中显示的元素名  
   */
  component?: String;
  /**
   * 组件类别
   */
  varient?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'title' | 'subtitle' | 'button' | 'caption' | 'table';
  /**
   * 是否启用下边距  
   */
  gutterBottom?: true | false
}

export default function Paper(props: IProps): JSX.Element
