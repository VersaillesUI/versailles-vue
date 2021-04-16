import { defineComponent, provide, nextTick } from 'vue'
import { merge, isEqual, cloneDeep } from 'lodash'
import { createGlobalStyles } from '../styles/withStyles'
import Theme from './Theme'

export default defineComponent({
  props: {
    theme: {
      type: Object
    }
  },
  setup () {
    const theme = new Theme()
    provide('theme', theme)
    return {
      themeContext: theme
    }
  },
  watch: {
    theme: {
      handler (next) {
        this.theme.updateWith(next)
      },
      deep: false
    }
  },
  created () {
    this.previousTheme = null
    const { overrides, ...themeConfig } = cloneDeep(this.theme || {})
    this.themeContext.overrides = overrides || {}
    this.themeContext.updateWith = (theme) => {
      if (isEqual(this.previousTheme, theme)) {
        return
      }
      this.themeContext.mergeWith(theme)
      if (theme.scrollbar) {
        this.createScrollerStyle()
      }
      this.themeContext.observe.next(this.themeContext)
      this.previousTheme = theme
    }
    merge(this.themeContext, themeConfig)
  },
  methods: {
    createScrollerStyle () {
      nextTick(() => {
        const { scrollbar } = this.themeContext
        const styles = {
          '.scrollbar-track': scrollbar.track,
          '.scrollbar-track-x': scrollbar.trackX,
          '.scrollbar-track-y': scrollbar.trackY,
          '.scrollbar-thumb': scrollbar.thumb,
          '.scrollbar-thumb-x': scrollbar.thumbX,
          '.scrollbar-thumb-y': scrollbar.thumbY
        }
        if (this.themeContext.uuid) {
          createGlobalStyles({
            [`Vui-${this.themeContext.uuid}-Scroller-root`]: styles
          }, `Vui-${this.themeContext.uuid}-Scrollbar`, '', 'Scrollbar')
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
    return <>{this.$slots.default() || null}</>
  }
})