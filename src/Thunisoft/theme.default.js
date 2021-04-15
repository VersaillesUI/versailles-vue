import hexToRgba from 'hex-to-rgba'

const primaryMain = '#3D7FFF'
const primaryDark = '#3D7FFF'
const primaryLight = '#1698FF'

const secondaryMain = '#00C2A6'
const secondaryDark = '#00C2A6'
const secondaryLight = '#00C2A6'

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
  scrollbar: {
    thumbY: {
      width: '6px',
      marginLeft: '2px'
    },
    thumbX: {
      height: '6px',
      marginTop: '2px'
    }
  },
  overrides: {
    AppBar: {
      root: {
        backgroundImage: `linear-gradient(90deg, #0064FF 0%, #0084FF 100%)`
      },
      small: {
        height: '56px'
      }
    },
    TableHeader: {
      cell: {
        '&:first-child': {
          borderLeftWidth: 0
        },
        '&:last-child': {
          borderRightWidth: 0
        }
      }
    },
    TableBody: {
      cell: {
        '&:first-child': {
          borderLeftWidth: 0
        },
        '&:last-child': {
          borderRightWidth: 0
        }
      }
    }
  }
}