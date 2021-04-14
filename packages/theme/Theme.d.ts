import { Subject } from 'rxjs'

interface Spacing {
  add: Function;
  minus: Function;
  toString: Function;
  valueOf: Function;
}

interface Color {
  light: String;
  main: String;
  dark: String;
}

interface Colors {
  primary: Color;
  secondary: Color;
  text: Color;
}

type padding = (top: Number, right: Number, bottom: Number, left: Number) => String;

export default class Theme {
  spacing: Spacing;
  colors: Colors;
  scrollbar: Object;
  borders: Object;
  presets: WeakMap<any, any>;
  styleIndex: Number;
  observe: Subject<any>;
}
