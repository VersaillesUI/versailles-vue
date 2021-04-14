import { IBaseProps } from '..'

declare namespace JSX {
  interface Element {
      [elemName: string]: any;
  }
}

interface IProps extends IBaseProps {
  defaultOptions?: Object;
  globalOptions?: Object;
  options?: Object;
  scrollerStyle?: Object;
}

export default function Scroller(props: IProps): JSX.Element