import { defineComponent } from 'vue'
import { withStyles } from '../styles'
import Prismjs from 'prismjs'
import 'prismjs/themes/prism.css'

export const styles = (theme) => {
  return {
    root: {
      padding: theme.spacing(2, 2, 2, 2),
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      textAlign: 'left',
      whiteSpace: 'pre-wrap',
      lineHeight: 1.5,
      fontSize: '14px',
      fontFamily: 'Consolas',
      '.token': {
        fontFamily: 'Consolas'
      }
    }
  }
}

const LANG_MAP = {
  jsx: 'javascript'
}

export const props = {
  language: {
    type: String,
    default () {
      return 'jsx'
    }
  },
  code: {
    type: String
  },
  elevation: {
    type: Number,
    default () {
      return 0
    }
  }
}

const CodeHighlight = defineComponent({
  props,
  computed: {
    highlightedCode () {
      const html = Prismjs.highlight(this.code, Prismjs.languages[LANG_MAP[this.language]], this.language)
      return html
    },
    styles () {
      return {
        borderRadius: this.elevation + 'px'
      }
    }
  },
  render (h) {
    return <div style={this.styles} class={this.classes.root} domPropsInnerHTML={this.highlightedCode} />
  }
})

export default withStyles(styles, 'CodeHighlight', 'Vui')(CodeHighlight)