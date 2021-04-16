import { defineComponent } from 'vue'
import { withStyles } from '../styles'
import { FlexItem } from '../FlexBox'

const styles = (theme) => {
  return {
    root: {
      overflow: 'hidden'
    }
  }
}

const Tabs = defineComponent({
  props: {
    label: {
      type: String
    },
    icon: {
      type: VNode
    },
    value: {
      type: [String, Number]
    }
  },
  render (h) {
    return <FlexItem {...this.$attrs} class={this.classes.root}>
      {this.label}
    </FlexItem>
  }
})

export default withStyles(styles, 'Tabs', 'Vui')(Tabs)