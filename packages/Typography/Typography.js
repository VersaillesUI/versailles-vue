import Vue from 'vue'
import withStyles from '../styles/withStyles'
import clsx from 'clsx'

export const styles = (threme) => {
  return {
    root: {
      lineHeight: 1.5,
      letterSpacing: '-0.01562rem'
    },
    gutterBottom: {
      marginBottom: '0.4rem'
    },
    h1: {
      fontSize: '3.5rem',
      fontWeight: 400
    },
    h2: {
      fontSize: '3rem',
      fontWeight: 400
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 400
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 400
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400
    },
    title: {
      fontSize: '1.25rem',
      fontWeight: 600
    },
    subtitle: {
      fontSize: '1.25rem',
      fontWeight: 300
    },
    upperCase: {
      textTransform: 'uppercase'
    },
    lowerCase: {
      textTransform: 'lowercase'
    },
    capitalize: {
      textTransform: 'capitalize'
    },
    inherit: {
      textTransform: 'inherit'
    },
    button: {
      fontWeight: 400,
      fontSize: '0.875rem'
    },
    caption: {
      fontWeight: 300,
      fontSize: '0.75rem'
    },
    fullWidth: {
      display: 'inline-block',
      width: '100%'
    }
  }
}

const types = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'div',
  body2: 'div',
  title: 'div',
  subtitle: 'div',
  button: 'span',
  caption: 'span'
}

export const props = {
  fullWidth: {
    type: Boolean,
    description: '是否宽度撑满整个父级元素',
    default () {
      return false
    }
  },
  component: {
    description: '组件标签名',
    type: String
  },
  varient: {
    type: String,
    description: '文本类型',
    default () {
      return 'body1'
    }
  },
  gutterBottom: {
    description: '是否增加下间距',
    type: Boolean
  },
  textTransform: {
    type: String,
    description: '设置文本CSS中text-transform属性',
    default () {
      return 'inherit'
    }
  }
}

const Typography = Vue.extend({
  props,
  computed: {
    tag () {
      return this.component || types[this.varient]
    }
  },
  render (h) {
    return <this.tag {
      ...{
        on: this.$listeners
      }
    } class={clsx([this.classes.root, 
      this.classes[this.varient], 
      this.gutterBottom && this.classes.gutterBottom,
      this.fullWidth && this.classes.fullWidth,
      this.classes[this.textTransform]])}>{this.$slots.default}</this.tag>
  }
})

export default withStyles(styles, 'Typography', 'Vui')(Typography)