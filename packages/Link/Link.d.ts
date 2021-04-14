import { IBaseProps } from '..'

declare namespace JSX {
  interface Element {
    [elemName: string]: any;
  }
}

interface IProps extends IBaseProps {
  component?: Number;
  href?: String;
  color?: Number;
  to: String;
}

export default function FlexItem(props: IProps): JSX.Element