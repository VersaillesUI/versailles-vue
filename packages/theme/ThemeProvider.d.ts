import { IBaseProps } from '..'
import Theme from './Theme'

declare namespace JSX {
  interface Element {
      [elemName: string]: any;
  }
}

export interface IProps extends IBaseProps {
  theme?: Theme
}

export default function ThemeProvider(props: IProps): JSX.Element
