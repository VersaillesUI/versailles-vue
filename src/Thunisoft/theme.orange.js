import hexToRgba from 'hex-to-rgba'

const primaryMain = '#FF5A0D'
const primaryDark = '#FF5A0D'
const primaryLight = '#C51A1A'

const secondaryMain = '#EA0000'
const secondaryDark = '#EA0000'
const secondaryLight = '#EA0000'

export default {
  colors: {
    primary: {
      main: primaryMain,
      dark: primaryDark,
      light: primaryLight
    },
    secondary: {
      main: secondaryMain,
      dark: secondaryDark,
      light: secondaryLight
    }
  },
  overrides: {
    AppBar: {
      root: {
        backgroundImage: 'linear-gradient(90deg, rgba(165,29,40,0.29) 29%, #B71409 64%)'
      }
    },
    ListSubheader: {
      content: {
        borderRadius: '4px',
        '&:hover': {
          background: primaryMain
        }
      }
    },
    ListItem: {
      content: {
        borderRadius: '4px',
        '&:hover': {
          background: primaryMain
        }
      }
    }
  }
}