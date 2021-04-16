import { defineComponent } from 'vue'
import { Button, Typography, FlexBox, FlexItem, Paper, Link, Input, ScrollPanel, withStyles } from 'packages'

const styles = (theme) => {
  return {
    root: {
      padding: theme.spacing(3),
      paddingTop: theme.spacing(2),
      paddingBottom: 0,
      height: 'calc(100vh - 64px)'
    },
    paper: {
      width: theme.spacing(25),
      height: theme.spacing(25)
    },
    colors: {
      width: '100%',
      '>*': {
        height: '50px',
        backgroundColor: '#eee'
      }
    },
    btns: {
      marginRight: theme.spacing(1)
    },
    next: {
      marginLeft: theme.spacing(4)
    },
    selected: {
      position: 'relative',
      '&:after': {
        content: '""',
        position: 'absolute',
        border: '2px solid #000',
        width: '100%',
        height: '100%',
        left: 0,
        right: 0,
        boxSizing: 'border-box'
      }
    },
    content: {
      marginBottom: theme.spacing(4),
      display: 'flex',
      alignItems: 'center'
    }
  }
}

const Palette = defineComponent({
  computed: {
    colors () {
      const colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7',
        '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4',
        '#009688', '#4caf50', '#8bc34a', '#cddc39',
        '#ffeb3b', '#ffc107', '#ff9800', '#ff5722'
      ]
      return colors
    }
  },
  methods: {
    handlePrimaryClick (color) {
      return () => {
        this.primaryColor = color
        this.theme.updateWith({
          colors: {
            primary: {
              main: color
            }
          }
        })
      }
    },
    handleSecondaryClick (color) {
      return () => {
        this.secondaryColor = color
        this.theme.updateWith({
          colors: {
            secondary: {
              main: color
            }
          }
        })
      }
    }
  },
  render () {
    return (
      <ScrollPanel class={this.classes.root}>
        <Typography gutterBottom varient="h4">主题调色</Typography>
        <FlexBox class={this.classes.content}>
          <FlexItem flexGrow={0}>
            <Typography gutterBottom varient="h5">主色：{this.primaryColor}</Typography>
            <Paper variantCenter={true} square elevation={4} class={this.classes.paper}>
              <FlexBox class={this.classes.colors} flexWrap="wrap">
                {
                  this.colors.map(o => {
                    const isSelected = o === this.primaryColor
                    return <FlexItem
                      key={o}
                      onClick={this.handlePrimaryClick(o)}
                      style={{ backgroundColor: o }}
                      flexShrink={0}
                      flexGrow={0}
                      class={isSelected && this.classes.selected}
                      flexBasis="50px"></FlexItem>
                  })
                }
              </FlexBox>
            </Paper>
          </FlexItem>
          <FlexItem flexGrow={0} class={this.classes.next}>
            <Typography gutterBottom varient="h5">副色：{this.secondaryColor}</Typography>
            <Paper variantCenter={true} square elevation={4} class={this.classes.paper}>
              <FlexBox class={this.classes.colors} flexWrap="wrap">
                {
                  this.colors.map(o => {
                    const isSelected = o === this.secondaryColor
                    return <FlexItem
                      key={o}
                      onClick={this.handleSecondaryClick(o)}
                      style={{ backgroundColor: o }}
                      flexShrink={0}
                      flexGrow={0}
                      class={isSelected && this.classes.selected}
                      flexBasis="50px"></FlexItem>
                  })
                }
              </FlexBox>
            </Paper>
          </FlexItem>
        </FlexBox>
        <div class={this.classes.content}>
          <Button startIcon={<div>123</div>} class={this.classes.btns}>DEFAULT</Button>
          <Button class={this.classes.btns} varient="outlined">OUTLINED</Button>
          <Button class={this.classes.btns} varient="outlined" color="inherit">INHERIT</Button>
          <Button class={this.classes.btns} varient="text" color="primary">TEXT PRIMARY</Button>
          <Button class={this.classes.btns} color="secondary">DEFAULT SECONDARY</Button>
          <Button class={this.classes.btns} varient="outlined" color="secondary">OUTLINED SECONDARY</Button>
          <Button class={this.classes.btns} varient="text" color="secondary">TEXT SECONDARY</Button>
          <Button class={this.classes.btns} varient="contained" disabled>CONTAINED DISABLED</Button>
          <Button class={this.classes.btns} varient="outlined" disabled>OUTLINED DISABLED</Button>
        </div>
        <div class={this.classes.content}>
          <Button class={this.classes.btns} size="small">SMALL</Button>
          <Button class={this.classes.btns} size="medium">MEDIUM</Button>
          <Button class={this.classes.btns} varient="outlined" size="small">SMALL</Button>
          <Button class={this.classes.btns} varient="outlined" size="medium">MEDIUM</Button>
          <Button class={this.classes.btns} varient="outlined" size="large">LARGE</Button>
        </div>
        <div class={this.classes.content}>
          <Link class={this.classes.btns} color="primary">PRIMARY LINK</Link>
          <Link class={this.classes.btns} color="secondary">SECONDARY LINK</Link>
          <Link class={this.classes.btns} color="inherit">INHERIT LINK</Link>
        </div>
        <div class={this.classes.content}>
          <Input size="small" class={this.classes.btns} />
          <Button class={this.classes.btns} size="small">搜索</Button>
        </div>
        <div class={this.classes.content}>
          <Input size="medium" class={this.classes.btns} />
          <Button class={this.classes.btns} size="medium">搜索</Button>
        </div>
        <div class={this.classes.content}>
          <Input size="large" class={this.classes.btns} />
          <Button class={this.classes.btns} size="large">搜索</Button>
        </div>
      </ScrollPanel>
    )
  }
})

export default withStyles(styles)(Palette)