import Vue from 'vue'
import { withStyles } from '../styles'
import clsx from 'clsx'

export const styles = theme => {
  return {
    root: {
      flexShrink: 0,
      border: 0
    },
    horizontal: {
      height: '1px',
      width: '100%',
      margin: theme.spacing(1, 0),
      flexGrow: 1
    },
    vertical: {
      width: '1px',
      height: 'auto',
      margin: theme.spacing(0, 1),
      alignSelf: 'stretch'
    },
    light: {
      background: 'rgba(0, 0, 0, 0.08)'
    },
    dark: {
      background: 'rgba(0, 0, 0, 0.12)'
    }
  }
}

export const props = {
  component: {
    type: [String, Object],
    default () {
      return 'hr'
    }
  },
  orientation: {
    type: String,
    default () {
      return 'horizontal'
    }
  },
  light: {
    type: Boolean
  }
}

const Divider = Vue.extend({
  props,
  render () {
    return <this.component class={clsx([
      this.classes.root,
      this.classes[this.orientation],
      this.light ? this.classes.light : this.classes.dark
    ])}></this.component>
  }
})

export default withStyles(styles, 'Divider', 'Vui')(Divider)