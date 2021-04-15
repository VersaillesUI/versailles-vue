import hexToRgba from 'hex-to-rgba'

const primaryMain = '#FF5A0D'
const primaryDark = '#FF5A0D'
const primaryLight = '#E82621'

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
        backgroundImage: 'linear-gradient(90deg, rgba(168,34,36,0.50) 29%, #A82224 64%)'
      }
    }
  }
}