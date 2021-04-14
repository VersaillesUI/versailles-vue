# A themable Vue UI toolkit

## Development

```
git checkout dev    
```

```
npm install  
```

```
npm run dev  
```

## Basic usage
```jsx
import Vue from 'vue'
import { Theme, AppBar } from 'thunisoft-ui'

new Vue({
  render () {
    return <Theme.ThemeProvider theme={{
      overrides: {
        AppBar: {
          medium: {
            height: '70px'
          }
        }
      }
    }}>
      <AppBar size="medium" />
    </Theme.ThemeProvider>
  }
})
```

## Update themes anywhere
```jsx
import { withStyles } from 'thunisoft-ui'

const styles = theme => {
  return {
    root: {
      background: theme.colors.primary.main
    }
  }
}

const Component = {
  mounted () {
    this.$theme.updateWith({
      colors: {
        primary: {
          main: '#00b0da'
        }
      }
    })
  },
  render () {
    return <div class={this.classes.root}></div>
  }
}

export default withStyles(styles)(Component)
```
