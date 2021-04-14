import Vue from 'vue'
import Button from 'thunisoft-ui/esm/Button'
import { withStyles } from 'thunisoft-ui/esm/styles'

export const styles = theme => {
  return {
    root: {
      textAlign: 'center',
      padding: theme.spacing(4)
    },
    button: {
      margin: theme.spacing(0, 2, 0, 2)
    }
  }
}

const Component = Vue.extend({
  render () {
    return <div class={this.classes.root}>
      <Button class={this.classes.button} color="primary">PRIMARY</Button>
      <Button class={this.classes.button} color="secondary">SECONDARY</Button>
      <Button class={this.classes.button} disabled>DISABLED</Button>
    </div>
  }
})

export default withStyles(styles)(Component)