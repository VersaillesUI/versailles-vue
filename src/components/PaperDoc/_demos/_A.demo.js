import Vue from 'vue'
import Paper from 'thunisoft-ui/esm/Paper'
import { withStyles } from 'thunisoft-ui/esm/styles'

export const styles = theme => {
  return {
    root: {
      textAlign: 'center',
      padding: theme.spacing(4)
    },
    paper: {
      width: theme.spacing(20),
      height: theme.spacing(20),
      margin: theme.spacing(0, 2, 0, 2)
    }
  }
}

const Component = Vue.extend({
  render () {
    return <div class={this.classes.root}>
      <Paper class={this.classes.paper} elevation={0}></Paper>
      <Paper class={this.classes.paper} elevation={2}></Paper>
      <Paper class={this.classes.paper} elevation={4}></Paper>
      <Paper class={this.classes.paper} elevation={6}></Paper>
    </div>
  }
})

export default withStyles(styles)(Component)