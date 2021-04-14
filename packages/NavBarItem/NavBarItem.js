import Vue from 'vue'
import { withStyles } from '../styles'
import Button from '../Button'
import FlexItem from '../FlexBox'
import clsx from 'clsx'
import hexToRgba from 'hex-to-rgba'

export const styles = theme => {
  return {
    root: {
      height: '100%',
      minWidth: theme.spacing(16),
      display: 'inline-flex',
      cursor: 'pointer',
      transitionDuration: '0.3s',
      transitionProperty: 'background, color',
      color: hexToRgba(theme.colors.text.dark.main, 0.75),
      '&:hover': {
        background: theme.colors.primary.light,
        color: hexToRgba(theme.colors.text.dark.main, 1)
      }
    },
    label: {
      color: theme.colors.text.dark,
      margin: theme.spacing(0, 1, 0, 1)
    },
    selected: {
      background: theme.colors.primary.light,
      color: hexToRgba(theme.colors.text.dark.main, 1)
    }
  }
}

export const props = {
  icon: {
    type: [Boolean, Object]
  },
  selected: {
    type: Boolean
  },
  label: {
    type: String
  }
}

const NavBarItem = Vue.extend({
  props,
  render () {
    return <FlexItem flexGrow={0} alignItems="center" justifyContent="center" class={clsx([
      this.classes.root,
      this.selected && this.classes.selected
    ])}>
      {this.icon}
      <span class={this.classes.label}>{this.label}</span>
    </FlexItem>
  }
})

export default withStyles(styles, 'NavBarItem', 'Vui')(NavBarItem)