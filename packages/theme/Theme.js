import merge from 'lodash/merge'
import { Subject } from 'rxjs'

class Spacing {
  constructor (ratio = 0, unit = 'px') {
    this.unit = unit
    this.value = 8 * ratio
  }

  static spacing = function (...args) {
    if (args.length === 1) {
      return new Spacing(args[0])
    }
    return args.map(o => new Spacing(o).valueOf()).join(' ')
  }

  add (value) {
    this.value += value
    return this
  }

  minus(value) {
    this.value -= value
    return this
  }
  toString () {
    return this.valueOf()
  }
  valueOf () {
    return this.value + (this.unit || 'px')
  }
}

const themeIdentifier = {
  uuid: 0
}

export default class Theme {
  constructor (config) {
    this._uuid = themeIdentifier.uuid++
    merge(this, config)
  }
  presets = new WeakMap()
  styleIndex = 0
  observe = new Subject()

  get uuid () {
    return this._uuid
  }
  get spacing () {
    return Spacing.spacing
  }
  borders = {
    radius: '4px'
  }
  scrollbar = {
    track: {
      background: 'transparent'
    },
    thumb: {
      background: '#DCDEE0'
    }
  }
  colors = {
    primary: {
      main: '#1976d2',
      light: '#4791db',
      dark: '#115293'
    },
    secondary: {
      light: '#e33371',
      main: '#dc004e',
      dark: '#9a0036'
    },
    text: {
      dark: {
        main: '#ffffff'
      },
      light: {
        main: '#000'
      }
    }
  }
  mergeWith (theme) {
    merge(this, theme)
    return this
  }
}