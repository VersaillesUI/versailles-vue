import Vue from 'vue'
import { merge, isEqual, cloneDeep } from 'lodash'
import { createGlobalStyles } from '../styles/withStyles'
import Theme from './Theme'

export default Vue.extend({
  props: {
    theme: {
      type: Object
    }
  },
  data () {
    return {
      $theme: null
    }
  },
  provide () {
    return {
      $theme: this.$theme
    }
  },
  beforeCreate () {
    this.$theme = new Theme()
  },
  watch: {
    theme: {
      handler (next, prev) {
        if (isEqual(next, prev)) return
        this.$theme.updateWith(next)
      },
      deep: false
    }
  },
  created () {
    this.previousTheme = null
    const { overrides, ...themeConfig } = cloneDeep(this.theme || {})
    this.$theme.overrides = overrides || {}
    this.$theme.updateWith = (theme) => {
      if (isEqual(this.previousTheme, theme)) {
        return
      }
      this.$theme.mergeWith(theme)
      if (theme.scrollbar) {
        this.createScrollerStyle()
      }
      this.$theme.observe.next(this.$theme)
      this.previousTheme = theme
    }
    merge(this.$theme, themeConfig)
  },
  methods: {
    createScrollerStyle () {
      this.$nextTick(() => {
        const { scrollbar } = this.$theme
        const styles = {
          '.scrollbar-track': scrollbar.track,
          '.scrollbar-track-x': scrollbar.trackX,
          '.scrollbar-track-y': scrollbar.trackY,
          '.scrollbar-thumb': scrollbar.thumb,
          '.scrollbar-thumb-x': scrollbar.thumbX,
          '.scrollbar-thumb-y': scrollbar.thumbY
        }
        if (this.$theme.uuid) {
          createGlobalStyles({
            [`Vui-${this.$theme.uuid}-Scroller-root`]: styles
          }, `Vui-${this.$theme.uuid}-Scrollbar`, '', 'Scrollbar')
        } else {
          createGlobalStyles({
            [`Vui-Scroller-root`]: styles
          }, 'Vui-Scrollbar', '', 'Scrollbar')
        }
      })
    }
  },
  mounted () {
    this.createScrollerStyle()
  },
  render (h) {
    return <div>{this.$slots.default || null}</div>
  }
})