import Vue from 'vue'
import { withStyles } from '../styles'
import FlexBox from '../FlexBox'
import FormItem from '../FormItem'
import clsx from 'clsx'

export const styles = (theme) => {
  return {
    root: {
      
    },
    disableGutterBottom: {
      marginBottom: `-${theme.spacing(2.5)}`
    }
  }
}

export const props = {
  orientation: {
    type: String,
    default () {
      return 'horizontal'
    }
  },
  layout: {
    type: Object
  },
  disableGutterBottom: {
    type: Boolean
  }
}

const Form = Vue.extend({
  props,
  render () {
    return <FlexBox flexWrap="wrap" class={clsx([
      this.classes.root,
      this.disableGutterBottom && this.classes.disableGutterBottom
    ])}>
      {
        Array.from(this.$slots.default).map(item => {
          return <FormItem class={this.classes.formItem} {
            ...{
              props: {
                layout: this.layout,
                ...item.componentOptions.propsData
              },
              attrs: item.data.attrs
            }
          }>
            {item.componentOptions.children}
          </FormItem>
        })
      }
    </FlexBox>
  }
})

export default withStyles(styles, 'Form', 'Vui')(Form)