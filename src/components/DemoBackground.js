import Vue from 'vue'
import { withStyles } from 'packages/styles'
import clsx from 'clsx'
import Typography from 'packages/Typography'
import CodeHighlight from 'packages/CodeHighlight'
import ScrollPanel from 'packages/ScrollPanel'

const styles = (theme) => {
  return {
    root: {
      marginBottom: theme.spacing(2)
    },
    light: {
      border: '1px solid',
      borderColor: 'rgba(0, 0, 0, 0.08)'
    },
    dark: {
      backgroundColor: 'rgba(0, 0, 0, 0.08)'
    },
    title: {
      fontWeight: 500
    },
    code: {
      marginTop: theme.spacing(2),
      maxHeight: '500px'
    }
  }
}

const DemoBackground = Vue.extend({
  props: {
    dark: {
      type: Boolean
    },
    module: {
      type: Object
    },
    title: {
      type: String
    },
    theme: {
      type: String,
      default () {
        return 'light'
      }
    }
  },
  render () {
    const Demo = this.module.default
    return <div class={clsx([this.classes.root])}>
      <Typography class={this.classes.title} varient="h5" gutterBottom>{this.title}</Typography>
      <div class={this.classes[this.theme]}>
        {Demo && <Demo />}
      </div>
      <ScrollPanel class={this.classes.code}>
        <CodeHighlight code={this.module.__source} />
      </ScrollPanel>
    </div>
  }
})

export default withStyles(styles)(DemoBackground)