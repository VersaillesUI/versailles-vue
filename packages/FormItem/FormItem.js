import Vue from 'vue'
import { withStyles } from '../styles'
import FlexBox from '../FlexBox'
import FlexItem from '../FlexItem'
import clsx from 'clsx'
import { parseValueToPixel } from '../utils'

export const styles = (theme) => {
  return {
    root: {
      marginBottom: theme.spacing(2.5)
    },
    label: {
      paddingRight: theme.spacing(1),
      textAlign: 'right',
      lineHeight: 1.5
    },
    wrapper: {
      display: 'flex',
      paddingRight: theme.spacing(2.5),
      '>*': {
        width: '100%'
      }
    }
  }
}

export const props = {
  width: {
    type: [String, Number],
    default () {
      return '33.33333%'
    }
  },
  label: {
    type: [String, Object]
  },
  layout: {
    type: Object
  }
}

const FormItem = Vue.extend({
  props,
  computed: {
    styles () {
      return {
        width: parseValueToPixel(this.width)
      }
    },
    labelSpan () {
      if (!this.layout) {
        return 'auto'
      }
      return this.layout.label.span / 24 * 100 + '%'
    },
    wrapperSpan () {
      if (!this.layout) {
        return 'auto'
      }
      return this.layout.wrapper.span / 24 * 100 + '%'
    }
  },
  render () {
    return <FlexBox style={this.styles} class={this.classes.root} alignItems="center">
      <FlexItem class={this.classes.label} flexGrow={0} flexBasis={this.labelSpan}>{this.label}</FlexItem>
      <FlexItem display="flex" class={this.classes.wrapper} flexGrow={1} flexBasis={this.wrapperSpan}>{this.$slots.default}</FlexItem>
    </FlexBox>
  }
})

export default withStyles(styles, 'FormItem', 'Vui')(FormItem)