import { IBaseProps } from '..'

declare namespace JSX {
  interface Element {
    [elemName: string]: any;
  }
}

interface IProps extends IBaseProps {
  showScrollbar?: true | false;
}

export default function ScrollPanel(props: IProps): JSX.Element