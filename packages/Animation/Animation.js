import Vue from 'vue'
import { withStyles } from '../styles'
import anime from 'animejs/lib/anime.es.js'

const styles = (theme) => {
  return {
    root: {
      overflow: 'hidden'
    },
    content: {
      overflow: 'visible'
    }
  }
}

const SKIP_PROPERTIES = ['width', 'height']

const Animation = Vue.extend({
  props: {
    cssProperty: {
      type: String
    },
    transitionDuration: {
      type: Number,
      default () {
        return 300
      }
    },
    transitionFunction: {
      type: String,
      default () {
        return 'cubicBezier(0.4, 0, 0.2, 1)'
      }
    },
    component: {
      type: String,
      default () {
        return 'div'
      }
    },
    start: {
      type: [String, Number],
    },
    end: {
      type: [String, Number]
    }
  },
  watch: {
    end (value, prevValue) {
      if (prevValue === 'auto' && SKIP_PROPERTIES.indexOf(this.cssProperty) > -1) {
        if (this.animation && this.animation.paused) {
          this.$el.style[this.cssProperty] = this.getMaxValue()
        }
      }
      this.$nextTick(() => {
        this.setCssProperty(value)
      })
    }
  },
  computed: {
    property () {
      return this.cssProperty
    }
  },
  methods: {
    handleAnimationProgress ({ progress }) {
      if (progress === 100) {
        this.$emit('end')
        if (this.end === 'auto' && SKIP_PROPERTIES.indexOf(this.cssProperty) > -1) {
          setTimeout(() => {
            this.$el.style.height = 'auto'
          })
        }
      }
    },
    setCssProperty (value) {
      const element = this.$el
      if (this.animation) {
        this.animation.pause()
      }
      if (value === 'auto' && SKIP_PROPERTIES.indexOf(this.cssProperty) > -1) {
        this.animation = anime({
          targets: element,
          [this.cssProperty]: this.getMaxValue(),
          duration: this.transitionDuration,
          easing: 'easeInOutQuad',
          update: this.handleAnimationProgress
        })
      } else {
        this.animation = anime({
          targets: element,
          [this.cssProperty]: value,
          duration: this.transitionDuration,
          easing: 'easeInOutQuad',
          update: this.handleAnimationProgress
        })
      }
    },
    getMaxValue (key) {
      return this.$refs.content ? this.$refs.content.getBoundingClientRect()[key || this.cssProperty] + 'px' : '0'
    }
  },
  render (h) {
    return <div class={this.classes.root}>
      <this.component class={this.classes.content} ref="content">{this.$slots.default}</this.component>
    </div>
  }
})

export default withStyles(styles, 'Animation', 'Vui')(Animation)