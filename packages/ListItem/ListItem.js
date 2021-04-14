import Vue from 'vue'
import { withStyles } from '../styles'
import FlexBox from '../FlexBox'
import FlexItem from '../FlexItem'

const styles = (theme) => {
  return {
    root: {
      listStyle: 'none'
    },
    icon: {
      marginRight: theme.spacing(1),
      display: 'inline-flex',
      alignItems: 'center'
    },
    content: {
      userSelect: 'none',
      padding: theme.spacing(1, 0, 1, 0),
      transition: '0.3s background',
      cursor: 'pointer',
      lineHeight: 1.5,
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.08)'
      }
    },
    label: {
      minHeight: '1.75em',
      lineHeight: 'inherit',
      display: 'inline-flex',
      alignItems: 'center'
    }
  }
}

const ListItem = Vue.extend({
  props: {
    icon: {
      type: [Boolean, Object]
    },
    label: {
      type: [String, Object]
    },
    indent: {
      type: Number,
      default () {
        return 1
      }
    }
  },
  methods: {
    handleStopPropagation (evt) {
      evt.stopPropagation()
    }
  },
  render (h) {
    return <li {
      ...{
        on: this.$listeners
      }
    } class={this.classes.root}>
      <FlexBox onTransitionstart={this.handleStopPropagation} onTransitionend={this.handleStopPropagation} class={this.classes.content} style={{ paddingLeft: this.$theme.spacing(this.indent).valueOf() }}>
        {this.icon && <FlexItem flexGrow={0} class={this.classes.icon} key="icon">{this.icon}</FlexItem>}
        {this.label && <FlexItem class={this.classes.label} key="label">{this.label}</FlexItem>}
      </FlexBox>
    </li>
  }
})

export default withStyles(styles, 'ListItem', 'Vui')(ListItem)