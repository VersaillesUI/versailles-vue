import Vue from 'vue'
import { withStyles } from '../styles'
import clsx from 'clsx'
import PropTypes from '../propTypes'
import { parseValueToPixel } from '../utils'

export const styles = theme => {
  return {
    root: {
      borderRadius: theme.borders.radius,
      border: '1px solid',
      borderColor: 'rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      display: 'inline-block',
      transition: '0.5s border',
      '&:hover': {
        borderColor: theme.colors.primary.main
      }
    },
    active: {
      borderColor: theme.colors.primary.main
    },
    input: {
      width: '100%',
      border: 0,
      outline: 'none'
    },
    small: {
      height: theme.spacing(3.75).minus(2),
      padding: theme.spacing(0, 1, 0, 1),
      fontSize: '0.8rem'
    },
    medium: {
      height: theme.spacing(4.5).minus(2),
      padding: theme.spacing(0, 1, 0, 1),
      fontSize: '0.875rem'
    },
    large: {
      height: theme.spacing(5.25).minus(2),
      padding: theme.spacing(0, 1, 0, 1),
      fontSize: '0.9275rem'
    }
  }
}

export const props = {
  size: {
    type: PropTypes.string,
    default () {
      return 'medium'
    }
  },
  width: {
    type: [PropTypes.string, PropTypes.number]
  }
}

const Input = Vue.extend({
  props,
  data () {
    return {
      isBlur: true
    }
  },
  computed: {
    listeners () {
      return {
        'focus': this.handleFocus,
        'blur': this.handleBlur
      }
    },
    styles () {
      return {
        width: parseValueToPixel(this.width)
      }
    }
  },
  methods: {
    handleBlur () {
      this.isBlur = true
    },
    handleFocus () {
      this.isBlur = false
    }
  },
  render (h) {
    return <div style={this.styles} class={clsx([this.classes.root, !this.isBlur && this.classes.active])}>
      <input {
        ...{
          on: this.listeners
        }
      } class={clsx([this.classes.input, this.classes[this.size]])}></input>
    </div>
  }
})

export default withStyles(styles, 'Input', 'Vui')(Input)