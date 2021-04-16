import { defineComponent } from 'vue'
import { withStyles } from '../styles'
import clsx from 'clsx'

export const styles = theme => {
  return {
    root: {
      outline: 'none',
      cursor: 'pointer',
      transition: '0.5s',
      transitionProperty: 'color',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent',
      border: 0
    },
    disabled: {
      cursor: 'not-allowed',
      color: 'rgba(0, 0, 0, 0.26)'
    },
    small: {
      fontSize: '1.5rem'
    },
    medium: {
      size: '2rem'
    },
    large: {
      size: '2.5rem'
    },
    primary: {
      color: theme.colors.primary.main,
      '&:hover': {
        color: theme.colors.primary.dark
      }
    },
    secondary: {
      color: theme.colors.secondary.main,
      '&:hover': {
        color: theme.colors.secondary.dark
      }
    },
    inherit: {
      color: 'inherit'
    }
  }
}

export const props = {
  component: {
    type: [String, Object],
    default () {
      return 'button'
    }
  },
  color: {
    type: String,
    default () {
      return 'primary'
    }
  },
  disabled: {
    type: Boolean
  },
  size: {
    type: String,
    default () {
      return 'medium'
    }
  }
}

const IconButton = defineComponent({
  props,
  render () {
    return <this.component {...this.$attrs} disabled={this.disabled} class={clsx([
      this.classes.root,
      this.classes[this.size],
      this.classes[this.color],
      this.disabled && this.classes.disabled
    ])}>
      {this.$slots.default()}
    </this.component>
  }
})

export default withStyles(styles, 'IconButton', 'Vui')(IconButton)