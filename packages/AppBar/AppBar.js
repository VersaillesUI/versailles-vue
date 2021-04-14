import Vue from 'vue'
import withStyles from '../styles/withStyles'
import clsx from 'clsx'
import FlexBox from '../FlexBox'
import Paper from '../Paper'

export const styles = (theme) => {
  return {
    root: {
      backgroundColor: theme.colors.primary.main,
      padding: `0 ${theme.spacing(3)}`,
      color: theme.colors.text.dark.main,
      whiteSpace: 'nowrap',
      width: '100%',
      top: 0,
      left: 0
    },
    medium: {
      height: theme.spacing(8)
    },
    large: {
      height: theme.spacing(10)
    },
    small: {
      height: theme.spacing(6)
    }
  }
}

export const props = {
  position: {
    type: String,
    description: '设置应用栏CSS的 position 属性',
    default () {
      return 'fixed'
    }
  },
  size: {
    type: String,
    description: '设置应用栏高度大小',
    default () {
      return 'medium'
    }
  },
  elevation: {
    type: Number,
    default () {
      return 4
    }
  }
}

const AppBar = Vue.extend({
  props,
  computed: {
    styles () {
      return {
        position: this.position
      }
    }
  },
  render (h) {
    return (
      <Paper {
        ...{
          on: this.$listeners
        }
      } elevation={this.elevation} square style={this.styles} class={clsx([this.classes.root, this.classes[this.size]])}>
        <FlexBox height="100%">
          {this.$slots.default}
        </FlexBox>
      </Paper>
    )
  }
})

export default withStyles(styles, 'AppBar', 'Vui')(AppBar)