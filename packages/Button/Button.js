import { defineComponent } from 'vue'
import withStyles from '../styles/withStyles'
import clsx from 'clsx'
import PropTypes from '../propTypes'
import hexToRgba from 'hex-to-rgba'

export const styles = (theme) => {
  return {
    root: {
      overflow: 'hidden',
      lineHeight: 'inherit',
      borderRadius: '4px',
      outline: 'none',
      fontWeight: 500,
      cursor: 'pointer',
      transition: '0.5s',
      transitionProperty: 'background, border, color',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    small: {
      height: theme.spacing(3.75),
      fontSize: '0.8rem'
    },
    medium: {
      height: theme.spacing(4.5),
      fontSize: '0.875rem'
    },
    large: {
      height: theme.spacing(5.25),
      fontSize: '0.9275rem'
    },
    containedSmall: {
      padding: '4px 10px'
    },
    containedMedium: {
      padding: '6px 16px'
    },
    containedLarge: {
      padding: '8px 22px'
    },
    outlinedSmall: {
      padding: '3px 9px'
    },
    outlinedMedium: {
      padding: '5px 15px'
    },
    outlinedLarge: {
      padding: '7px 21px'
    },
    textSmall: {
      padding: '4px 10px'
    },
    textMedium: {
      padding: '6px 16px'
    },
    textLarge: {
      padding: '8px 22px'
    },
    disabled: {
      cursor: 'not-allowed'
    },
    contained: {
      border: 0
    },
    outlined: {
      border: '1px solid',
      background: 'transparent'
    },
    text: {
      border: 0,
      background: 'transparent'
    },
    containedPrimary: {
      background: theme.colors.primary.main,
      color: theme.colors.text.dark.main,
      '&:not([disabled]):hover': {
        background: theme.colors.primary.dark
      },
      '&[disabled]': {
        color: 'rgba(0, 0, 0, 0.26)',
        background: 'rgba(0, 0, 0, 0.12)'
      }
    },
    outlinedPrimary: {
      color: theme.colors.primary.main,
      borderColor: hexToRgba(theme.colors.primary.main, 0.5),
      '&:not([disabled]):hover': {
        borderColor: hexToRgba(theme.colors.primary.main, 1),
        color: theme.colors.primary.dark,
        background: hexToRgba(theme.colors.primary.main, 0.04)
      },
      '&[disabled]': {
        color: 'rgba(0, 0, 0, 0.26)',
        borderColor: 'rgba(0, 0, 0, 0.12)'
      }
    },
    textPrimary: {
      color: theme.colors.primary.main,
      background: 'transparent',
      border: 0,
      '&:not([disabled]):hover': {
        color: theme.colors.primary.dark
      }
    },
    containedSecondary: {
      background: theme.colors.secondary.main,
      color: theme.colors.text.dark.main,
      border: 0,
      '&:not([disabled]):hover': {
        background: theme.colors.secondary.dark
      },
      '&[disabled]': {
        color: 'rgba(0, 0, 0, 0.26)',
        background: 'rgba(0, 0, 0, 0.12)'
      }
    },
    outlinedSecondary: {
      background: 'transparent',
      color: theme.colors.secondary.main,
      border: '1px solid',
      borderColor: hexToRgba(theme.colors.secondary.main, 0.5),
      '&:not([disabled]):hover': {
        borderColor: hexToRgba(theme.colors.secondary.main, 1),
        color: theme.colors.secondary.dark,
        background: hexToRgba(theme.colors.secondary.main, 0.04)
      },
      '&[disabled]': {
        color: 'rgba(0, 0, 0, 0.26)',
        borderColor: 'rgba(0, 0, 0, 0.12)'
      }
    },
    textSecondary: {
      color: theme.colors.secondary.main,
      background: 'transparent',
      border: 0,
      '&:not([disabled]):hover': {
        color: theme.colors.secondary.dark
      }
    },
    containedInherit: {
      background: 'inherit',
      color: 'inherit',
      border: 0
    },
    outlinedInherit: {
      background: 'transparent',
      color: 'inherit',
      border: '1px solid',
      borderColor: 'rgba(0, 0, 0, 0.2)'
    },
    textInherit: {
      color: 'inherit'
    },
    label: {
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit',
      margin: theme.spacing(0, 1, 0, 1)
    }
  }
}

export const props = {
  component: {
    type: [PropTypes.string, PropTypes.vnode],
    description: '用于设置根节点的组件类型，可以是HTML标签名或者组件',
    default () {
      return 'button'
    }
  },
  color: {
    type: PropTypes.string,
    description: '设置按钮主题色',
    default () {
      return 'primary'
    }
  },
  disabled: {
    description: '按钮失效状态',
    type: PropTypes.boolean
  },
  startIcon: {
    description: '设置按钮起始图标',
    type: PropTypes.vnode
  },
  endIcon: {
    description: '设置按钮终点图标',
    type: PropTypes.vnode
  },
  varient: {
    type: PropTypes.string,
    description: '设置按钮变体类型',
    default () {
      return 'contained'
    }
  },
  size: {
    type: PropTypes.string,
    description: '设置按钮尺寸',
    default () {
      return 'medium'
    }
  },
  fullWidth: {
    description: '设置按钮宽度是否占满容器',
    type: PropTypes.boolean
  }
}

const Button = defineComponent({
  props,
  render (h) {
    return <this.component {...this.$attrs} disabled={this.disabled} class={clsx([
      this.classes.root,
      this.disabled && this.classes.disabled,
      this.fullWidth && this.classes.fullWidth,
      this.classes[this.size],
      this.classes[this.varient],
      this.classes[this.varient + this.color.replace(/^[a-z]/, match => match.toUpperCase())],
      this.classes[this.varient + this.size.replace(/^[a-z]/, match => match.toUpperCase())]
    ])}>
      {this.startIcon}
      <span class={this.classes.label}>{this.$slots.default()}</span>
      {this.endIcon}
    </this.component>
  }
})

export default withStyles(styles, 'Button', 'Vui')(Button)