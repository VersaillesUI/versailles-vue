import Vue from 'vue'
import Typography from 'thunisoft-ui/esm/Typography'
import { withStyles } from 'thunisoft-ui/esm/styles'

export const styles = theme => {
  return {
    root: {
      textAlign: 'left',
      padding: theme.spacing(4)
    }
  }
}

const Component = Vue.extend({
  render () {
    return <div class={this.classes.root}>
      <Typography gutterBottom varient="h1">H1. Heading 1</Typography>
      <Typography gutterBottom varient="h2">H2. Heading 2</Typography>
      <Typography gutterBottom varient="h3">H3. Heading 3</Typography>
      <Typography gutterBottom varient="h4">H4. Heading 4</Typography>
      <Typography gutterBottom varient="h5">H5. Heading 5</Typography>
      <Typography gutterBottom varient="h6">H6. Heading 6</Typography>
      <Typography gutterBottom varient="title">
        Title. Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. 
        Quos blanditiis tenetur</Typography>
      <Typography gutterBottom varient="subtitle">
        Subtitle. Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit. 
        Quos blanditiis tenetur</Typography>
      <Typography gutterBottom varient="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quos blanditiis tenetur unde suscipit, 
        quam beatae rerum inventore consectetur, 
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? 
        Eum quasi quidem quibusdam.</Typography>
      <Typography gutterBottom varient="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Quos blanditiis tenetur unde suscipit, 
        quam beatae rerum inventore consectetur, neque doloribus, 
        cupiditate numquam dignissimos laborum fugiat deleniti? 
        Eum quasi quidem quibusdam.</Typography>
      <Typography fullWidth gutterBottom varient="button">Button</Typography>
      <Typography fullWidth gutterBottom varient="caption">Caption</Typography>
    </div>
  }
})

export default withStyles(styles)(Component)