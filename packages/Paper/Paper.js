import { defineComponent } from 'vue'
import { withStyles } from '../styles'
import clsx from 'clsx'
import PropTypes from '../propTypes'

export const styles = (theme) => {
  return {
    root: {
      display: 'inline-block',
      background: '#fff'
    },
    outlined: {
      border: '1px solid',
      borderColor: 'rgba(0, 0, 0, 0.12)'
    },
    fullWidth: {
      display: 'block',
      width: '100%'
    }
  }
}

export const props = {
  component: {
    type: PropTypes.string,
    default () {
      return 'div'
    }
  },
  fullWidth: {
    type: Boolean,
    default () {
      return false
    }
  },
  elevation: {
    type: PropTypes.number,
    default() {
      return 4
    }
  },
  square: {
    type: PropTypes.boolean,
    default () {
      return false
    }
  },
  varient: {
    type: PropTypes.string,
    default () {
      return 'default'
    }
  },
  varientCenter: {
    type: PropTypes.boolean,
    default () {
      return false
    }
  }
}

const Paper = defineComponent({
  props,
  computed: {
    styles () {
      return {
        boxShadow: this.varientCenter ? `0 0 ${this.elevation}px rgba(0, 0, 0, 0.2)` : `0 ${this.elevation / 2}px ${this.elevation}px rgba(0, 0, 0, 0.2)`,
        borderRadius: this.square ? 0 : '4px'
      }
    }
  },
  render () {
    return <this.component {...this.$attrs} class={clsx([
      this.classes.root,
      this.classes[this.varient],
      this.fullWidth && this.classes.fullWidth])} style={this.styles}>
      {this.$slots.default()}
    </this.component>
  }
})

export default withStyles(styles, 'Paper', 'Vui')(Paper)