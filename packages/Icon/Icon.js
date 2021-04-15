import Vue from 'vue'
import { withStyles } from '../styles'
import AtyIcon from '@com.thunisoft.artery/artery-ui/lib/aty-icon'
import '@com.thunisoft.artery/artery-ui/src/components/css/common/iconfont/ionicons.less'

const styles = {
  root: {
    fontFamily: 'Ionicons',
    fontStyle: 'normal',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    lineHeight: 1
  }
}

const Icon = Vue.extend({
  props: {
    type: {
      type: String
    },
    size: {
      type: [Number, String],
      default () {
        return 20
      }
    }
  },
  computed: {
    styles () {
      const isNumber = typeof this.size === 'number' || (typeof this.size === 'string' && !/[^0-9.]/.test(this.size))
      const size = isNumber ? this.size + 'px' : this.size
      return {
        width: size,
        height: size
      }
    }
  },
  render (h) {
    return <AtyIcon style={this.styles} class={this.classes.root} type={this.type} size={this.size} {
      ...{
        on: this.$listeners
      }
    }></AtyIcon>
  }
})

export default withStyles(styles, 'Icon', 'Vui')(Icon)