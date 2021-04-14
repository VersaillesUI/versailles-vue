import Vue from 'vue'
import { withStyles } from '../styles'
import Button from '../Button'
import FlexBox from '../FlexBox'

export const styles = theme => {
  return {
    root: {
      height: '100%'
    }
  }
}

export const props = {
  
}

const NavBar = Vue.extend({
  props,
  render () {
    return <FlexBox alignItems="center" class={this.classes.root}>
      {this.$slots.default}
    </FlexBox>
  }
})

export default withStyles(styles, 'NavBar', 'Vui')(NavBar)