import { defineComponent } from 'vue'
import withStyles from '../styles/withStyles'
import clsx from 'clsx'
import PropTypes from '../propTypes'

export const styles = theme => {
  return {
    root: {
      display: 'flex'
    },
    inline: {
      display: 'inline-flex'
    }
  }
}

export const props = {
  width: {
    type: PropTypes.string
  },
  height: {
    type: PropTypes.string
  },
  inline: {
    type: PropTypes.boolean,
    description: '是否是行内元素'
  },
  flexWrap: {
    type: PropTypes.string,
    description: '换行属性',
    default () {
      return 'auto'
    }
  },
  flexDirection: {
    type: PropTypes.string,
    default () {
      return 'row'
    }
  },
  alignItems: {
    type: PropTypes.string,
    default () {
      return 'center'
    }
  },
  justifyContent: {
    type: PropTypes.string,
    default () {
      return 'flex-start'
    }
  }
}

const FlexBox = defineComponent({
  props,
  computed: {
    className () {
      return this.inline ? 'inline' : 'root'
    },
    styles () {
      const { flexWrap, flexDirection, alignItems, justifyContent, height, width } = this
      return {
        flexWrap, flexDirection, alignItems, justifyContent, height, width
      }
    }
  },
  render (h) {
    return <div {...this.$attrs} class={this.classes[this.className]} style={this.styles}>{this.$slots.default()}</div>
  }
})

export default withStyles(styles, 'FlexBox', 'Vui')(FlexBox)