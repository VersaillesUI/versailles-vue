import { defineComponent } from 'vue'
import { withStyles } from '../styles'
import FlexBox from '../FlexBox'

const styles = (theme) => {
  return {
    root: {
      overflow: 'hidden'
    }
  }
}

const Tabs = defineComponent({
  render (h) {
    return <FlexBox flexWrap="nowrap" class={this.classes.root}>
      {this.$slots.default()}
    </FlexBox>
  }
})

export default withStyles(styles, 'Tabs', 'Vui')(Tabs)