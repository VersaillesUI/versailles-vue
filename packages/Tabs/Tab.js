import Vue, { VNode } from 'vue'
import { withStyles } from '../styles'
import { FlexItem } from '../FlexBox'

const styles = (theme) => {
  return {
    root: {
      overflow: 'hidden'
    }
  }
}

const Tab = Vue.extend({
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
    return <FlexItem {
      ...{
        on: this.$listeners
      }
    } class={this.classes.root}>
      {this.label}
    </FlexItem>
  }
})

export default withStyles(styles, 'Tabs', 'Vui')(Tabs)