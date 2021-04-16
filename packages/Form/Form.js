import { defineComponent } from 'vue'
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

const Form = defineComponent({
  props,
  render () {
    const slots = this.$slots.default()
    return <FlexBox flexWrap="wrap" class={clsx([
      this.classes.root,
      this.disableGutterBottom && this.classes.disableGutterBottom
    ])}>
      {
        Array.from(slots || []).map((item, index) => {
          return <item.type key={index} class={this.classes.formItem} {
            ...{
              layout: this.layout,
              ...item.props
            }
          }>
            {item.children.default()}
          </item.type>
        })
      }
    </FlexBox>
  }
})

export default withStyles(styles, 'Form', 'Vui')(Form)