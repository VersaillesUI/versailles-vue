import Vue from 'vue'
import { withStyles } from '../styles'
import clsx from 'clsx'
import { createPopper } from '@popperjs/core/dist/umd/popper-lite'
import { ThemeProvider } from 'packages/theme'
import Paper from 'packages/Paper'
import cloneDeep from 'lodash/cloneDeep'

export const styles = theme => {
  return {

  }
}

export const props = {
  placement: {
    type: String,
    default () {
      return 'bottom'
    }
  },
  trigger: {
    type: Object
  },
  open: {
    type: Boolean
  }
}

const Popover = Vue.extend({
  props,
  data () {
    return {
      content: null,
      popoverVisible: this.open
    }
  },
  watch: {
    popoverVisible (val) {
      if (val) {
        if (!this.popperInstance) {
          this.renderPopoverContent().then(() => {
            this.createPopperInstance()
          })
        } else {
          this.popperInstance.forceUpdate()
        }
      } else {
        this.popperInstance.destroy()
        this.content.parentNode.removeChild(this.content)
        this.popperInstance = null
      }
    },
    open (val) {
      this.popoverVisible = val
    }
  },
  created () {
    if (!this.popoverVisible) return
    this.renderPopoverContent()
  },
  methods: {
    createPopperInstance () {
      this.popperInstance = createPopper(this.$el, this.content, {
        placement: this.placement
      })
    },
    renderPopoverContent () {
      const me = this
      const node = document.createElement('div')
      node.id = 'popover'
      document.body.appendChild(node)

      const popoverStyles = theme => {
        return {
          root: {
            padding: theme.spacing(2),
            backgroundColor: '#ffffff'
          }
        }
      }

      const Component = {
        methods: {
          handleRootClick (evt) {
            evt.stopPropagation()
          }
        },
        render () {
          return <Paper onClick={this.handleRootClick} class={this.classes.root}>
            {
              me.$slots.default.map(o => {
                if (o.componentOptions) {
                  const { Ctor, propsData, children, listeners } = o.componentOptions
                  const Component = Ctor.sealedOptions
                  return <Component {
                    ...{
                      props: propsData,
                      attrs: o.data.attrs,
                      on: {
                        ...o.data.on,
                        ...listeners
                      }
                    }
                  }>
                    {children}
                  </Component>
                }
                return o
              })
            }
          </Paper>
        }
      }

      return new Promise((resolve) => {
        new Vue({
          el: node,
          data () {
            return {
              Component: withStyles(popoverStyles, 'PopoverWrapper', 'Vui')(Component)
            }
          },
          mounted () {
            me.content = this.$el
            resolve()
          },
          render () {
            return <ThemeProvider theme={cloneDeep(me.$theme)}>
              <this.Component></this.Component>
            </ThemeProvider>
          }
        })
      })
    }
  },
  mounted () {
    if (this.popoverVisible) {
      this.createPopperInstance()
    }

    this.$el.addEventListener('click', (evt) => {
      evt.stopPropagation()
      this.popoverVisible = !this.popoverVisible
    })

    document.addEventListener('click', () => {
      this.popoverVisible = false
    })
  },
  render () {
    return this.trigger
  }
})

export default withStyles(styles, 'Popover', 'Vui')(Popover)