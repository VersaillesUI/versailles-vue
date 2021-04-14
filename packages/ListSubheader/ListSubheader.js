import Vue from 'vue'
import { withStyles } from '../styles'
import FlexBox from '../FlexBox'
import FlexItem from '../FlexItem'
import Animation from '../Animation'
import Icon from '../Icon'
import clsx from 'clsx'

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
      cursor: 'pointer',
      transition: '0.3s background',
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
    },
    labelWrapper: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },
    expandIcon: {
      marginRight: theme.spacing(1.5),
      marginLeft: theme.spacing(1.5)
    },
    expanded: {
      transform: 'rotate(90deg)'
    },
    children: {
      
    }
  }
}

const ListSubheader = Vue.extend({
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
    },
    defaultExpanded: {
      type: Boolean,
      default () {
        return true
      }
    },
    showExpandIcon: {
      type: Boolean,
      default () {
        return false
      }
    },
    childrenStyle: {
      type: [Object, Boolean]
    }
  },
  data () {
    return {
      expanded: this.defaultExpanded,
      animationStartExpand: !this.defaultExpanded,
      showContent: this.defaultExpanded
    }
  },
  methods: {
    handleToggleCollapse () {
      this.showContent = true
      this.expanded = !this.expanded
      this.animationStartExpand = !this.animationStartExpand
    },
    endHeight () {
      return !this.expanded ? '0px' : 'auto'
    },
    startHeight () {
      return !this.expanded ? '0px' : 'auto'
    },
    handleAnimationEnd () {
      this.showContent = this.expanded
    },
    transitionDuration () {
      if (this.$refs.animation) {
        const elem = this.$refs.animation.$el
        const height = this.expanded ? Math.abs(elem.scrollHeight - elem.offsetHeight) : elem.offsetHeight
        const value = Math.sqrt(height / 30) * 100
        return value
      }
      return 300
    }
  },
  computed: {
    childrenLength () {
      return this.$slots.default ? this.$slots.default.length : 0
    }
  },
  render (h) {
    const dur = this.transitionDuration()
    return <li data-loaded={this.loaded} {
      ...{
        on: this.$listeners
      }
    } class={this.classes.root}>
      <FlexBox onClick={this.handleToggleCollapse} class={this.classes.content} style={{ paddingLeft: this.$theme.spacing(this.indent).valueOf() }}>
        {this.icon && <FlexItem flexGrow={0} class={this.classes.icon} key="icon">{this.icon}</FlexItem>}
        {this.label && <FlexItem title={this.label} overflow="hidden" class={this.classes.label} key="label">
          <span class={this.classes.labelWrapper}>{this.label}</span>  
        </FlexItem>}
        {this.showExpandIcon && <Icon style={{
          transition: `${dur}ms transform`
        }} class={clsx([this.classes.expandIcon, this.expanded && this.classes.expanded])} type="ios-arrow-right"></Icon>}
      </FlexBox>
      <Animation
        ref="animation"
        transitionDuration={dur}
        cssProperty="height"
        component="ul"
        start={this.startHeight()}
        end={this.endHeight()}
        style={this.childrenStyle}
        class={this.classes.children}
        onEnd={this.handleAnimationEnd}>
        {this.$slots.default}
      </Animation>
    </li>
  }
})

export default withStyles(styles, 'ListSubheader', 'Vui')(ListSubheader)