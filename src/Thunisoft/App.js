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
      padding: theme.spacing(2, 0, 2, 0),
      position: 'fixed',
      bottom: 0,
      top: theme.spacing(7)
    },
    items: {
      color: '#fff',
      fontWeight: 600,
      '&:last-child': {
        paddingBottom: theme.spacing(1)
      }
    },
    dot: {
      display: 'inline-block',
      width: '5px',
      height: '5px',
      borderRadius: '50%',
      background: '#afacac'
    },
    split: {
      display: 'inline-flex',
      alignItems: 'center'
    },
    body: {
      height: '100%',
      padding: theme.spacing(2.5, 2.5, 2.5, 34.5)
    },
    leaf: {
      fontWeight: 400,
      '&:last-child': {
        paddingBottom: theme.spacing(1)
      }
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
          title: '序号',
          dataIndex: 'seq',
          align: 'left',
          fixed: 'left',
          width: '140px',
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
          title: '常规信息项',
          dataIndex: 'field_b',
          width: '300px',
          align: 'left'
        },
        {
          title: '金额信息项',
          dataIndex: 'field_c',
          width: '300px'
        },
        {
          title: '状态',
          dataIndex: 'field_d',
          width: '300px'
        },
        {
          title: '时间信息',
          dataIndex: 'field_e',
          align: 'left',
          width: '300px'
        },
        {
          title: '操作',
          align: 'left',
          width: '300px',
          renderCell: () => {
            return <FlexBox alignItems="center">
              <Link>编辑</Link>
              <Divider orientation="vertical" />
              <Link>删除</Link>
            </FlexBox>
          }
        }
      ],
      tableData: [
        {
          seq: '1',
          field_b: '这是一段文本描述',
          field_c: '375万',
          field_d: '关闭',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '2',
          field_b: '这是一段文本描述',
          field_c: '375万',
          field_d: '关闭',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '3',
          field_b: '这是一段文本描述',
          field_c: '375万',
          field_d: '关闭',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '4',
          field_b: '这是一段文本描述',
          field_c: '375万',
          field_d: '关闭',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '5',
          field_b: '这是一段文本描述',
          field_c: '375万',
          field_d: '关闭',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '6',
          field_b: '这是一段文本描述',
          field_c: '375万',
          field_d: '关闭',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '7',
          field_b: '这是一段文本描述',
          field_c: '375万',
          field_d: '关闭',
          field_e: '2021-08-09 12:09:56'
        },
        {
          seq: '8',
          field_b: '这是一段文本描述',
          field_c: '375万',
          field_d: '关闭',
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
        '1': 3,
        '2': 5,
        '3': 7
      }
      const ICON_MAP = {
        '1': undefined,
        '2': undefined,
        '3': undefined
      }
      return data.map(o => {
        if (o.leaf) return (
          <ListItem
            icon={ICON_MAP[o.level]}
            onClick={this.handleRoute(o)}
            indent={INDENT_MAPS[o.level]}
            class={this.classes.leaf}
            label={o.label}></ListItem>
        )
        return <ListSubheader
          showExpandIcon={o.children && o.children.length > 0}
          icon={ICON_MAP[o.level]}
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
      this.$theme.updateWith(this.theme)
    }
  },
  render () {
    return <div>
      <AppBar elevation={0} size="small">
        <FlexItem flexGrow={0}>
          <Typography varient="title" class={this.classes.title}>华宇皮肤</Typography>
        </FlexItem>
        <FlexItem flexGrow={0}>
          <Typography varient="subtitle" class={this.classes.subitle}>高级主题</Typography>
        </FlexItem>
        <NavBar class={this.classes.nav}>
          <NavBarItem selected icon={<Icon type="planet"></Icon>} label="导航页签"></NavBarItem>
          <NavBarItem icon={<Icon type="planet"></Icon>} label="导航页签"></NavBarItem>
          <NavBarItem icon={<Icon type="planet"></Icon>} label="导航页签"></NavBarItem>
          <NavBarItem icon={<Icon type="planet"></Icon>} label="导航页签"></NavBarItem>
        </NavBar>
        <FlexItem flexGrow={0} class={this.classes.split}>
          <Button class={this.classes.headBtns} color="inherit" varient="text" startIcon={<Icon type="navicon"></Icon>}>更多</Button>
          <Button class={this.classes.headBtns} color="inherit" varient="text" startIcon={<Icon type="person"></Icon>}>用户名</Button>
          <Popover trigger={(
            <IconButton color="inherit">
              <Icon type="android-color-palette"></Icon>
            </IconButton>
          )}>
            <Button onClick={this.handlePalettleClick}>调色</Button>
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
              <FormItem width="100%" label="所属类目">
                <div>
                  <Tag varient="text" color="inherit" class={this.classes.tag} label="全部"></Tag>
                  <Tag class={this.classes.tag} label="类目一"></Tag>
                  <Tag varient="text" color="inherit" class={this.classes.tag} label="类目二"></Tag>
                </div>
              </FormItem>
            </Form>
            <FlexBox>
              <Form disableGutterBottom>
                <FormItem label="普通选择">
                  <Input />
                </FormItem>
                <FormItem label="普通选择">
                  <Input />
                </FormItem>
                <FormItem label="普通选择">
                  <Input />
                </FormItem>
                <FormItem label="普通选择">
                  <Input />
                </FormItem>
                <FormItem label="普通选择">
                  <Input />
                </FormItem>
                <FormItem label="普通选择">
                  <Input />
                </FormItem>
              </Form>
              <FlexItem display="flex" alignSelf="stretch" flexGrow={0} flexShrink={0}>
                <Divider class={this.classes.divider} orientation="vertical"></Divider>
              </FlexItem>
              <FlexItem alignSelf="stretch" flexGrow={0} flexShrink={0}>
                <div>
                  <Button varient="outlined" color="inherit">重置</Button>
                </div>
                <div style={{ marginTop: this.$theme.spacing(2.5) }}>
                  <Button onClick={this.handlePalettleClick}>查询</Button>
                </div>
              </FlexItem>
            </FlexBox>
          </Paper>
          <Paper flexShrink={1} varient="outlined" varientCenter fullWidth class={clsx([
            this.classes.paper,
            this.classes.nextPaper
          ])}>
            <FlexBox class={this.classes.actions} alignItems="center">
              <Button color="secondary">新增</Button>
              <Button class={clsx([
                this.classes.extra,
                this.classes.firstExtra
              ])} color="inherit" varient="text" startIcon={<Icon type="ios-compose"></Icon>}>编辑</Button>
              <Button class={this.classes.extra} varient="text" color="inherit" startIcon={<Icon type="ios-download"></Icon>}>下载</Button>
              <Button class={this.classes.extra} varient="text" color="inherit" startIcon={<Icon type="ios-trash"></Icon>}>删除</Button>
            </FlexBox>
            <Table class={this.classes.table} bordered size="small" dataSource={this.tableData} columns={this.columns} />
          </Paper>
        </FlexBox>
      </div>
    </div>
  }
})

export default withStyles(styles)(Component)