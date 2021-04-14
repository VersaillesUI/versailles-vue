import Vue from 'vue'
import { withStyles } from '../styles'

const styles = (theme) => {
  return {
    root: {

    }
  }
}

const List = Vue.extend({
  render (h) {
    return <ul {
      ...{
        on: this.$listeners
      }
    } class={this.classes.root}>
      {this.$slots.default}
    </ul>
  }
})

export default withStyles(styles, 'List', 'Vui')(List)