import Vue from 'vue'
import { withStyles, ThemeProvider } from 'packages'
import NavBar from 'packages/NavBar'
import NavBarItem from 'packages/NavBarItem'
import IconButton from 'packages/IconButton'
import Paper from 'packages/Paper'
import Icon from 'packages/Icon'
import AppBar from 'packages/AppBar'
import FlexBox from 'packages/FlexBox'
import FlexItem from 'packages/FlexItem'
import Button from 'packages/Button'
import ScrollPanel from 'packages/ScrollPanel'
import List from 'packages/List'
import ListItem from 'packages/ListItem'
import ListSubheader from 'packages/ListSubheader'
import Typography from 'packages/Typography'
import Table from 'packages/Table'
import Checkbox from 'packages/Checkbox'
import clsx from 'clsx'
import Divider from 'packages/Divider'
import Link from 'packages/Link'
import Input from 'packages/Input'
import Form from 'packages/Form'
import FormItem from 'packages/FormItem'
import Tag from 'packages/Tag'
import Popover from 'packages/Popover'
import NAV_CONFIG from './nav'
import defaultTheme from './theme.default'
import redTheme from './theme.red'
import orangeTheme from './theme.orange'

const styles = theme => {
  return {
    root: {
      
    },
    title: {
      fontWeight: 600
    },
    subitle: {
      fontWeight: 300,
      marginLeft: theme.spacing(30 / 8),
      fontSize: '1.1rem'
    },
    nav: {
      marginLeft: theme.spacing(200 / 8),
      flexGrow: 1
    },
    tab: {
      height: theme.spacing(7),
      borderRadius: 0,
      width: '130px',
      color: '#fff'
    },
    content: {
      height: '100vh',
      paddingTop: theme.spacing(7),
      background: 'rgba(200, 200, 200, 0.2)',
      overflow: 'hidden'
    },
    leftNav: {
      background: '#2A3444',
      width: theme.spacing(32),
      padding: theme.spacing(2, 1, 2, 1),
      position: 'fixed',
      bottom: 0,
      top: theme.spacing(7)
    },
    items: {
      color: '#fff'
    },
    dot: {
      display: 'inline-block',
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: '#808080'
    },
    split: {
      display: 'inline-flex',
      alignItems: 'center'
    },
    body: {
      height: '100%',
      padding: theme.spacing(2.5, 2.5, 2.5, 34.5)
    },
    paper: {

    },
    table: {
      flexShrink: 1,
      overflow: 'hidden'
    },
    actions: {
      padding: theme.spacing(1.5, 2.5, 1.5, 2.5)
    },
    extra: {
      padding: theme.spacing(1),
      color: '#122538'
    },
    firstExtra: {
      marginLeft: theme.spacing(2)
    },
    seqCol: {
      paddingLeft: theme.spacing(3)
    },
    seqNo: {
      marginLeft: theme.spacing(1.5)
    },
    firstPaper: {
      marginBottom: theme.spacing(2),
      padding: theme.spacing(2.5)
    },
    divider: {
      margin: theme.spacing(0, 2.5, 0, 0)
    },
    headBtns: {
      padding: theme.spacing(1, 1)
    },
    tag: {
      marginRight: theme.spacing(2)
    },
    nextPaper: {
      flexShrink: 1,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    }
  }
}

const Component = Vue.extend({
  data () {
    return {
      columns: [
        {
          title: '??????',
          dataIndex: 'seq',
          align: 'left',
          renderHeader: (text, col) => {
            return <FlexBox alignItems="center" class={this.classes.seqCol}>
              <Checkbox />
              <label class={this.classes.seqNo}>{text}</label>
            </FlexBox>
          },
          renderCell: (row, col, index) => {
            return <FlexBox alignItems="center" class={this.classes.seqCol}>
              <Checkbox onChange={this.handleRowChange(row)} checked={row.checked} />
              <label class={this.classes.seqNo}>{index + 1}</label>
            </FlexBox>
          }
        },
        {
          title: '???????????????',
          dataIndex: 'field_b',
          width: '300px',
          align: 'left'
        },
        {
          title: '???????????????',
          dataIndex: 'field_c'
        },
        {
          title: '??????',
          dataIndex: 'field_d'
        },
        {
          title: '????????????',
          dataIndex: 'field_e',
          align: 'left'
        },
        {
          title: '??????',
          align: 'left',
          renderCell: () => {
            return <FlexBox alignItems="center">
              <Link>??????</Link>
              <Divider orientation="vertical" />
              <Link>??????</Link>
            </FlexBox>
          }
        }
      ],
      tableData: [
        {
          seq: '1',
          field_b: '????????????????????????',
          field_c: '375???',
          field_d: '??????',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '2',
          field_b: '????????????????????????',
          field_c: '375???',
          field_d: '??????',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '3',
          field_b: '????????????????????????',
          field_c: '375???',
          field_d: '??????',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '4',
          field_b: '????????????????????????',
          field_c: '375???',
          field_d: '??????',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '5',
          field_b: '????????????????????????',
          field_c: '375???',
          field_d: '??????',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '6',
          field_b: '????????????????????????',
          field_c: '375???',
          field_d: '??????',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '7',
          field_b: '????????????????????????',
          field_c: '375???',
          field_d: '??????',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '8',
          field_b: '????????????????????????',
          field_c: '375???',
          field_d: '??????',
          field_e: '2021-08-09 12:09:56'
        }
      ],
      theme: defaultTheme,
      themeIndex: 0
    }
  },
  methods: {
    handleRowChange (row) {
      return (val) => {
        this.$set(row, 'checked', val)
      }
    },
    renderNodes (data) {
      if (!data) return null
      const INDENT_MAPS = {
        '1': 2,
        '2': 5.5,
        '3': 5.5
      }
      const ICON_MAP = {
        '1': <Icon type="android-cloud-done"></Icon>,
        '2': undefined,
        '3': <span class={this.classes.dot}></span>
      }
      return data.map(o => {
        const childrenStyle = o.level === 1 && {
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: this.$theme.borders.radius
        }
        if (o.leaf) return (
          <ListItem
            icon={ICON_MAP[o.level]}
            onClick={this.handleRoute(o)}
            indent={INDENT_MAPS[o.level]}
            class={this.classes.items}
            label={o.label}></ListItem>
        )
        return <ListSubheader
          showExpandIcon={o.children && o.children.length > 0}
          icon={ICON_MAP[o.level]}
          childrenStyle={childrenStyle}
          class={this.classes.items}
          indent={INDENT_MAPS[o.level]}
          label={o.label}>
          {this.renderNodes(o.children)}
        </ListSubheader>
      })
    },
    handleRoute (target) {
      return () => {
        if (this.$route.path === target.href) return
        this.$router.push(target.href)
      }
    },
    handlePalettleClick () {
      this.themeIndex = (++this.themeIndex) % 3
      const theme = [defaultTheme, redTheme, orangeTheme]
      this.theme = theme[this.themeIndex]
    }
  },
  render () {
    return <ThemeProvider ref="themeProvider" theme={this.theme}>
      <AppBar elevation={0} size="small">
        <FlexItem flexGrow={0}>
          <Typography varient="title" class={this.classes.title}>????????????</Typography>
        </FlexItem>
        <FlexItem flexGrow={0}>
          <Typography varient="subtitle" class={this.classes.subitle}>????????????</Typography>
        </FlexItem>
        <NavBar class={this.classes.nav}>
          <NavBarItem selected icon={<Icon type="planet"></Icon>} label="????????????"></NavBarItem>
          <NavBarItem icon={<Icon type="planet"></Icon>} label="????????????"></NavBarItem>
          <NavBarItem icon={<Icon type="planet"></Icon>} label="????????????"></NavBarItem>
          <NavBarItem icon={<Icon type="planet"></Icon>} label="????????????"></NavBarItem>
        </NavBar>
        <FlexItem flexGrow={0} class={this.classes.split}>
          <Button class={this.classes.headBtns} color="inherit" varient="text" startIcon={<Icon type="navicon"></Icon>}>??????</Button>
          <Button class={this.classes.headBtns} color="inherit" varient="text" startIcon={<Icon type="person"></Icon>}>?????????</Button>
          <Popover trigger={(
            <IconButton color="inherit">
              <Icon type="android-color-palette"></Icon>
            </IconButton>
          )}>
            <Button onClick={this.handlePalettleClick}>??????</Button>
          </Popover>
          <IconButton color="inherit">
            <Icon type="log-out"></Icon>
          </IconButton>
        </FlexItem>
      </AppBar>
      <div class={this.classes.content}>
        <ScrollPanel
          class={this.classes.leftNav}>
          <List>
            {
              this.renderNodes(NAV_CONFIG)
            }
          </List>
        </ScrollPanel>
        <FlexBox flexDirection="column" class={this.classes.body}>
          <Paper varient="outlined" varientCenter fullWidth class={clsx([
            this.classes.paper,
            this.classes.firstPaper
          ])}>
            <Form>
              <FormItem width="100%" label="????????????">
                <div>
                  <Tag varient="text" color="inherit" class={this.classes.tag} label="??????"></Tag>
                  <Tag class={this.classes.tag} label="?????????"></Tag>
                  <Tag varient="text" color="inherit" class={this.classes.tag} label="?????????"></Tag>
                </div>
              </FormItem>
            </Form>
            <FlexBox>
              <Form disableGutterBottom>
                <FormItem label="????????????">
                  <Input />
                </FormItem>
                <FormItem label="????????????">
                  <Input />
                </FormItem>
                <FormItem label="????????????">
                  <Input />
                </FormItem>
                <FormItem label="????????????">
                  <Input />
                </FormItem>
                <FormItem label="????????????">
                  <Input />
                </FormItem>
                <FormItem label="????????????">
                  <Input />
                </FormItem>
              </Form>
              <FlexItem display="flex" alignSelf="stretch" flexGrow={0} flexShrink={0}>
                <Divider class={this.classes.divider} orientation="vertical"></Divider>
              </FlexItem>
              <FlexItem alignSelf="stretch" flexGrow={0} flexShrink={0}>
                <div>
                  <Button varient="outlined" color="inherit">??????</Button>
                </div>
                <div style={{ marginTop: this.$theme.spacing(2.5) }}>
                  <Button onClick={this.handlePalettleClick}>??????</Button>
                </div>
              </FlexItem>
            </FlexBox>
          </Paper>
          <Paper flexShrink={1} varient="outlined" varientCenter fullWidth class={clsx([
            this.classes.paper,
            this.classes.nextPaper
          ])}>
            <FlexBox class={this.classes.actions} alignItems="center">
              <Button color="secondary">??????</Button>
              <Button class={clsx([
                this.classes.extra,
                this.classes.firstExtra
              ])} color="inherit" varient="text" startIcon={<Icon type="ios-compose"></Icon>}>??????</Button>
              <Button class={this.classes.extra} varient="text" color="inherit" startIcon={<Icon type="ios-download"></Icon>}>??????</Button>
              <Button class={this.classes.extra} varient="text" color="inherit" startIcon={<Icon type="ios-trash"></Icon>}>??????</Button>
            </FlexBox>
            <Table class={this.classes.table} bordered size="small" dataSource={this.tableData} columns={this.columns} />
          </Paper>
        </FlexBox>
      </div>
    </ThemeProvider>
  }
})

export default withStyles(styles)(Component)