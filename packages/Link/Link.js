import Vue from 'vue'
import { withStyles } from '../styles'
import clsx from 'clsx'

const styles = theme => {
  return {
    root: {
      cursor: 'pointer'
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

const Link = Vue.extend({
  props: {
    component: {
      type: String,
      default () {
        return 'a'
      }
    },
    href: {
      type: String
    },
    color: {
      type: String,
      default () {
        return 'primary'
      }
    },
    to: {
      type: String
    }
  },
  methods: {
    handleClick (evt) {
      if (this.to && this.$route.path !== this.to) {
        this.$router.push({
          path: this.to
        })
        evt.preventDefault()
      }
    }
  },
  render (h) {
    return <this.component href={this.href} onClick={this.handleClick} class={clsx([
      this.classes.root,
      this.classes[this.color]
    ])}>{this.$slots.default}</this.component>
  }
})

export default withStyles(styles, 'Link', 'Vui')(Link)