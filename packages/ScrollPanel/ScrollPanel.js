import Vue from 'vue'
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

const ScrollPanel = Vue.extend({
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
      console.log(fontSize)
      this.paddingStyles = {
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        fontSize
      }
    }
  },
  render (h) {
    return <Scroller
      class={this.classes.root}
      options={this.options}
      scrollerStyle={{
        ...this.paddingStyles,
        ...this.contentStyle
      }} {
      ...{
        on: this.$listeners
      }
    } ref="scroller">
      {this.$slots.default}
    </Scroller>
  }
})

export default withStyles(null, 'ScrollPanel', 'Vui')(ScrollPanel)
