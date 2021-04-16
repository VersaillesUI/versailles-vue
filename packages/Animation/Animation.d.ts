import { IBaseProps } from '..'
import { DefineComponent } from 'vue'

export interface IProps extends IBaseProps {
  cssProperty: String,
  transitionDuration?: Number;
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
  component?: String;
  start?: String | Number;
  end?: String | Number;
}

declare const _default: DefineComponent<IProps>

export default _default
