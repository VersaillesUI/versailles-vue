import { VNode, VueConstructor } from 'vue'

interface IStyles {
  root: {

  }
}

type Wrapper = (WrappedComponent: VueConstructor) => VNode

/**
 * @description 用于绑定CSS-IN-JS的高阶组件
 * @param {Object} styles 样式对象
 * @param {string} [name] 空字符串或唯一标识
 * @param {string} [branch=jss] 品牌标识
 */
export default function withStyles (styles: IStyles, name?: String, branch?: String): Wrapper