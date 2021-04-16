import { defineComponent } from 'vue'
import { Theme, ThemeProvider, AppBar, Typography, ScrollPanel, FlexItem, Icon, Button, withStyles } from 'packages'

const styles = (theme) => {
  return {
    flexBox: {
      textAlign: 'right'
    },
    content: {
      height: '100%',
      paddingTop: theme.spacing(8)
    },
    icon: {
      marginLeft: theme.spacing(2)
    }
  }
}

const App = defineComponent({
  render () {
    return (
      <div>
        <AppBar position="fixed">
          <Typography varient="title">华宇皮肤</Typography>
          <FlexItem class={this.classes.flexBox}>
            <Icon size="24" class={this.classes.icon} type="android-color-palette"></Icon>
            <Icon size="24" class={this.classes.icon} type="android-search"></Icon>
          </FlexItem>
        </AppBar>
        <div class={this.classes.content}>
          <router-view style={this.classes.view}></router-view>
        </div>
      </div>
    )
  }
})

export default defineComponent({
  render () {
    const Body = withStyles(styles)(App)
    return <ThemeProvider>
      <Body />
    </ThemeProvider>
  }
})