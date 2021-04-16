import { defineComponent } from 'vue'
import { withStyles } from '../styles'
import clsx from 'clsx'

export const styles = theme => {
  return {
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    svg: {
      width: '1em',
      height: '1em',
      fontSize: '1.5rem',
      fill: 'currentColor',
      userSelect: 'none'
    },
    primary: {
      color: theme.colors.primary.main
    },
    secondary: {
      color: theme.colors.secondary.main
    },
    inherit: {
      color: 'inherit'
    }
  }
}

export const props = {
  checked: {
    type: Boolean
  },
  color: {
    type: String,
    default () {
      return 'primary'
    }
  }
}

const Checkbox = defineComponent({
  props,
  watch: {
    checked (val) {
      this.checkedValue = val
    }
  },
  data () {
    return {
      checkedValue: this.checked
    }
  },
  computed: {
    defaultPath () {
      return <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path>
    },
    checkedPath () {
      return <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
    }
  },
  methods: {
    handleToggleChecked () {
      this.$emit('change', !this.checkedValue)
    }
  },
  render () {
    return <div class={clsx([
      this.classes.root,
      this.classes[this.color]
    ])} onClick={this.handleToggleChecked}>
      <svg class={this.classes.svg}>
        {this.checkedValue ? this.checkedPath : this.defaultPath}
      </svg>
    </div>
  }
})

export default withStyles(styles, 'Checkbox', 'Vui')(Checkbox)