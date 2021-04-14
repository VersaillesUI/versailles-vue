import { IBaseProps } from '..'

declare namespace JSX {
  interface Element {
      [elemName: string]: any;
  }
}

interface IProps extends IBaseProps {
  block?: true | false;
  type?: true | false;
  flexWrap: 'nowrap' | 'revert' | 'wrap' | 'wrap-reverse';
  flexDirection: 'column' | 'column-reverse' | 'row' | 'row-reverse' | 'revert';
  alignItems: 'flex-start' | 'center' | 'flex-end' | 'baseline' | 'self-start' | 'self-end' | 'stretch' | 'revert';
  justifyContent: 'flex-start' | 'center' | 'flex-end' | 'space-round' | 'space-between' | 'space-evenly' | 'stretch' | 'revert';
}

export default function List(props: IProps): JSX.Element