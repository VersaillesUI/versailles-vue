import Vue from 'vue'
import { withStyles } from '../styles'
import hexToRgba from 'hex-to-rgba'
import clsx from 'clsx'

export const styles = theme => {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.borders.radius,
      lineHeight: 1.1
    },
    small: {
      height: theme.spacing(3),
      padding: theme.spacing(0.5, 1.5)
    },
    medium: {
      height: theme.spacing(3.5),
      padding: theme.spacing(0.5, 2)
    },
    large: {
      height: theme.spacing(4),
      padding: theme.spacing(0.5, 2.5)
    },
    containedPrimary: {
      color: theme.colors.primary.main,
      background: hexToRgba(theme.colors.primary.main, 0.2)
    },
    outlinedPrimary: {
      border: '1px solid',
      borderColor: theme.colors.primary.main
    },
    textPrimary: {
      color: theme.colors.primary.main
    },
    containedSecondary: {
      color: theme.colors.secondary.main,
      background: hexToRgba(theme.colors.secondary.main, 0.2)
    },
    outlinedSecondary: {
      color: theme.colors.secondary.main,
      border: '1px solid',
      borderColor: theme.colors.secondary.main
    },
    textSecondary: {
      color: theme.colors.secondary.main
    },
    containedInherit: {
      color: 'inherit',
      background: 'rgba(0, 0, 0, 0.12)'
    },
    outlinedInherit: {
      color: 'inherit',
      border: '1px solid',
      borderColor: 'rgba(0, 0, 0, 0.12)'
    },
    textInherit: {
      color: 'inherit',
    }
  }
}

export const props = {
  label: {
    type: String
  },
  color: {
    type: String,
    default () {
      return 'primary'
    }
  },
  size: {
    type: String,
    default () {
      return 'medium'
    }
  },
  varient: {
    type: String,
    default () {
      return 'contained'
    }
  }
}

const Tag = Vue.extend({
  props,
  render () {
    return <span class={clsx([
      this.classes.root,
      this.classes[this.varient + this.color.replace(/^[a-z]/, m => m.toUpperCase())],
      this.classes[this.size]
    ])}>
      {this.label}
    </span>
  }
})

export default withStyles(styles, 'Tag', 'Vui')(Tag)