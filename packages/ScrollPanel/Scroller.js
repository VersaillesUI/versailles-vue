import { defineComponent } from 'vue'
import SmoothScrollbar, { ScrollbarPlugin } from 'smooth-scrollbar'
import { withStyles } from '../styles'

const options = {
  alwaysShowTracks: true,
  thumbMinSize: 60,
  continuousScrolling: true,
  damping: 0.5,
  renderByPixels: true
}

export const styles = (theme) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      boxSizing: 'border-box',
      '.scroll-content': {
        fontSize: 0
      }
    },
    wrapper: {
      flexGrow: 1,
      flexBasis: 'auto',
      width: '100%',
      height:'100%'
    }
  }
}

const ScrollPanel = defineComponent({
  props: {
    defaultOptions: {
      type: Object,
      required: false,
      default: () => options
    },
    globalOptions: {
      type: Object,
      required: false,
      default: () => ({})
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    },
    scrollerStyle: {
      type: Object
    }
  },
  watch: {
    scrollerStyle: {
      handler () {
        this.scrollbar.update()
      },
      deep: true
    }
  },
  data () {
    return {
      styles: null
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.styles = {
        padding: 0
      }
    })
    
    class Plugin extends ScrollbarPlugin {
      static pluginName = 'scroll-plugin'

      onRender () {
        this.scrollbar.update()
      }
    }
    
    SmoothScrollbar.use(Plugin)

    this.scrollbar = SmoothScrollbar.init(
      this.$refs.scrollbar,
      Object.assign({}, this.defaultOptions, this.globalOptions, this.options)
    )

    this.scrollbar.addListener(this.handleScroll)
  },
  methods: {
    scrollTo (...args) {
      this.scrollbar.setPosition(...args)
    },
    handleScroll () {
      this.$emit('update', this.scrollbar)
    }
  },
  unmounted () {
    if (this.scrollbar) {
      this.scrollbar.removeListener(this.handleScroll)
      this.scrollbar.destroy()
    }
    this.scrollbar = null
  },
  render (h) {
    return <div style={this.styles} class={this.classes.root} {...this.$attrs}>
      <div class={this.classes.wrapper} ref="scrollbar">
        <div style={{
          width: '100%',
          overflow: 'hidden',
          ...this.scrollerStyle
        }}>
          {this.$slots.default()}
        </div>
      </div>
    </div>
  }
})

export default withStyles(styles, 'Scroller', 'Vui')(ScrollPanel)