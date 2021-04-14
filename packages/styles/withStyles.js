import Vue from 'vue'
import { Theme } from '..'
import { toLowerCase, styleObjectToKebabCaseObject } from '../utils'
import merge from 'lodash/merge'
import isEmpty from 'lodash/isEmpty'

const NEXT_PREFIX = /^(\&)|(\>)|(\.)|(\#)|(\+)|(\~)/

function insertCSS (styleStr, metaInfo, beforeNodeId, prefix) {
  let style = document.querySelector(`[data-meta="${metaInfo}"]`)
  if (!style) {
    const beforeNode = beforeNodeId && document.querySelector(`[data-meta="${beforeNodeId}"]`)
    style = document.createElement('style')
    style.setAttribute('data-meta', metaInfo)
    style.setAttribute('data-prefix', prefix)
    if (beforeNode) {
      document.head.insertBefore(style, beforeNode)
    } else {
      if (prefix) {
        const noprefixNode = document.querySelector(`[data-prefix=""]`)
        document.head.insertBefore(style, noprefixNode)
      } else {
        document.head.appendChild(style)
      }
    }
  }
  style.innerHTML = styleStr
}

function parse (cssjson, inside = false) {
  const result = {}
  for (const key in cssjson) {
    const cssKey = inside ? key : '.' + key
    const val = cssjson[key]
    const nextJSON = {}
    const currentJSON = {}
    for (let subkey in val) {
      if (NEXT_PREFIX.test(subkey)) {
        const key = subkey
          .replace(/\&/, '')
          .replace(/^(\>)|(\.)|(\#)|(\+)|(\~)([\w]*)/, ' $1$2')
        nextJSON[`${cssKey}${key}`] = val[subkey]
      } else {
        currentJSON[subkey] = val[subkey]
      }
    }
    result[cssKey] = {}
    if (!isEmpty(nextJSON)) {
      Object.assign(result, parse(nextJSON, true))
    }
    if (!isEmpty(currentJSON)) {
      Object.assign(result[cssKey], styleObjectToKebabCaseObject(currentJSON))
    }
  }
  return result
}

export function toCSS (cssjson) {
  if (isEmpty(cssjson)) return ''
  let styleStr = "\n"
  for (let i in cssjson) {
    if (!isEmpty(cssjson[i])) {
      styleStr += i + " {\n"
      for (let j in cssjson[i]) {
        styleStr += "  " + j + ": " + cssjson[i][j] + ";\n"
      }
      styleStr += "}\n"
    }
  }
  return styleStr
}

export function createGlobalStyles (stylesheet, metaInfo, beforeNodeId = '', prefix = '') {
  const inlineCss = toCSS(parse(stylesheet))
  insertCSS(inlineCss, metaInfo, beforeNodeId, prefix)
}

export default (styles, prefix = '', branch = 'jss') => {
  return (WrappedComponent) => {
    return Vue.extend({
      data () {
        return {
          classes: {}
        }
      },
      created () {
        this.$theme.observe.subscribe(() => {
          this.$theme.presets.delete(WrappedComponent)
          this._createClassNames()
        })
        if (navigator.userAgent.indexOf('Trident') > -1) return
        this._createClassNames()
      },
      mounted () {
        if (navigator.userAgent.indexOf('Trident') > -1) {
          this._createClassNames()
        }
      },
      inject: ['$theme'],
      methods: {
        _createClassNames () {
          const { presets } = this.$theme
          const regiserted = presets.has(WrappedComponent)
          if (!regiserted) {
            if (!prefix) {
              this.$theme.styleIndex += 1
            }
            const { overrides } = this.$theme
            const displayPrefix = this.$theme.uuid ? [branch, this.$theme.uuid, prefix || 'element'].join('-') : [branch, prefix || 'element'].join('-')
            const result = {}
            const stylesheet = {}
            const nextStyle = typeof styles === 'function' ? styles(this.$theme) : styles
            this._metaInfoId = WrappedComponent.mid = prefix ? displayPrefix : displayPrefix + '-' + this.$theme.styleIndex
            if (prefix && overrides[prefix]) {
              merge(nextStyle, overrides[prefix])
            }
            for (let key in nextStyle) {
              const classKey = prefix ? `${displayPrefix}-${key}` : `${displayPrefix}-${key}-${this.$theme.styleIndex}`
              result[key] = classKey
              stylesheet[classKey] = nextStyle[key]
            }
            this.classes = result
            this.stylesheet = stylesheet
            presets.set(WrappedComponent, result)
            createGlobalStyles(stylesheet, this._metaInfoId, this.$parent._metaInfoId, prefix)
          } else {
            this.classes = presets.get(WrappedComponent)
          }
        }
      },
      extends: WrappedComponent
    })
  }
}