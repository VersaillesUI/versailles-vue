import { defineComponent } from 'vue'
import { ThemeProvider } from 'packages'
import defaultTheme from './theme.default'
import App from './App'

export default defineComponent({
  render () {
    return <ThemeProvider ref="themeProvider" theme={defaultTheme}>
      <App />
    </ThemeProvider>
  }
})
