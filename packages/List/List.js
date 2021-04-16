import { defineComponent } from 'vue'
import { withStyles } from '../styles'

const styles = (theme) => {
  return {
    root: {

    }
  }
}

const List = defineComponent({
  render (h) {
    return <ul {...this.$attrs} class={this.classes.root}>
      {this.$slots.default()}
    </ul>
  }
})

export default withStyles(styles, 'List', 'Vui')(List)