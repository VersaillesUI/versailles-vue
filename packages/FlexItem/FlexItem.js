import { defineComponent } from 'vue'
import withStyles from '../styles/withStyles'
import clsx from 'clsx'

export const styles = theme => {
  return {
    ...theme.FlexBox
  }
}

export const props = {
  flexGrow: {
    type: Number,
    default () {
      return 1
    }
  },
  flexBasis: {
    type: String,
    default () {
      return 'auto'
    }
  },
  flexShrink: {
    type: Number,
    default () {
      return 1
    }
  },
  alignSelf: {
    type: String,
    default () {
      return 'initial'
    }
  },
  display: {
    type: String
  },
  overflow: {
    type: String,
    default () {
      return 'initial'
    }
  },
  overflowX: {
    type: String
  },
  overflowY: {
    type: String
  }
}

const FlexBox = defineComponent({
  props,
  computed: {
    styles () {
      return this.$props
    }
  },
  render (h) {
    return <div {...this.$attrs} style={this.styles}>{this.$slots.default()}</div>
  }
})

export default withStyles(styles, 'FlexItem')(FlexBox)