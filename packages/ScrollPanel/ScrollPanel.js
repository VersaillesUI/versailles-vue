import { defineComponent } from 'vue'
import Scroller from './Scroller'
import { withStyles } from '../styles'
import PropTypes from '../propTypes'

export const props = {
  alwaysShowTracks: {
    type: PropTypes.boolean,
    description: '是否一直显示滚动条',
    default () {
      return true
    }
  },
  contentStyle: {
    type: Object
  }
}

const ScrollPanel = defineComponent({
  props,
  data () {
    return {
      paddingStyles: {}
    }
  },
  computed: {
    scrollbar () {
      return this.$refs.scroller.scrollbar
    },
    options () {
      return {
        alwaysShowTracks: this.alwaysShowTracks ? true : false
      }
    }
  },
  mounted () {
    if (navigator.userAgent.indexOf('Trident') > -1) {
      this.$nextTick(() => {
        this.initStyle()
      })
    } else {
      this.initStyle()
    }
  },
  methods: {
    initStyle () {
      const { paddingLeft, paddingRight, paddingTop, paddingBottom } = getComputedStyle(this.$el, 'padding')
      const { fontSize } = getComputedStyle(this.$el, 'font')
      this.paddingStyles = {
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        fontSize
      }
    },
    scrollTo (x, y) {
      this.$refs.scroller.scrollTo(x, y)
    }
  },
  render (h) {
    return <Scroller
      class={this.classes.root}
      options={this.options}
      scrollerStyle={{
        ...this.paddingStyles,
        ...this.contentStyle
      }} {...this.$attrs} ref="scroller">
      {this.$slots.default()}
    </Scroller>
  }
})

export default withStyles(null, 'ScrollPanel', 'Vui')(ScrollPanel)
