import { defineComponent } from 'vue'
import { Button, FlexItem, Paper, List, ListItem, ListSubheader, ScrollPanel, withStyles } from 'packages'

const styles = (theme) => {
  return {
    navBar: {
      width: theme.spacing(32),
      position: 'fixed',
      bottom: 0,
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(1),
      top: theme.spacing(8),
      borderRight: '1px solid #eee',
      fontWeight: 500,
      zIndex: 999
    },
    items: {
      fontWeight: 400
    },
    rightPanel: {
      textAlign: 'center',
      paddingLeft: theme.spacing(32),
      height: 'calc(100vh - 64px)'
    },
    content: {
      width: '900px',
      display: 'inline-block',
      paddingTop: theme.spacing(4),
      textAlign: 'left'
    }
  }
}

const NAV_CONFIG = [
  {
    label: '快速开始',
    indent: 3,
    children: [
      {
        label: 'Install 安装',
        leaf: true,
        indent: 5,
        href: '/install'
      },
      {
        label: 'Usage 使用',
        leaf: true,
        indent: 5,
        href: '/usage'
      },
      {
        label: 'Templates 模板',
        leaf: true,
        indent: 5,
        href: '/templates'
      }
    ]
  }, {
    label: 'Components 组件',
    indent: 3,
    children: [
      {
        label: 'Layouts 布局',
        indent: 5,
        children: [
          {
            label: 'FlexBox 弹性盒布局',
            indent: 7,
            leaf: true,
            href: '/components/flex_box'
          }, {
            label: 'Grid 栅格布局',
            indent: 7,
            leaf: true,
            href: '/components/grid'
          }, {
            label: 'Scroll Panel 滚动条面板',
            indent: 7,
            leaf: true,
            href: '/components/scroll_panel'
          }
        ]
      }, {
        label: 'Inputs 表单',
        indent: 5,
        children: [
          {
            label: 'Button 按钮',
            indent: 7,
            leaf: true,
            href: '/components/button'
          },
          {
            label: 'Input 输入框',
            indent: 7,
            leaf: true,
            href: '/components/input'
          },
          {
            label: 'Checkbox 复选框',
            indent: 7,
            leaf: true,
            href: '/components/checkbox'
          },
          {
            label: 'Radio 单选框',
            indent: 7,
            leaf: true,
            href: '/components/radio'
          },
          {
            label: 'Select 下拉框',
            indent: 7,
            leaf: true,
            href: '/components/select'
          },
          {
            label: 'Upload 上传',
            indent: 7,
            leaf: true,
            href: '/components/upload'
          },
          {
            label: 'DatePicker 日期选择',
            indent: 7,
            leaf: true,
            href: '/components/date_picker'
          },
          {
            label: 'Switch 开关',
            indent: 7,
            leaf: true,
            href: '/components/switch'
          },
          {
            label: 'TreeSelect 树选择器',
            indent: 7,
            leaf: true,
            href: '/components/tree_select'
          }
        ]
      }, {
        label: 'Surfaces 表面展示',
        indent: 5,
        children: [
          {
            label: 'Accordion 手风琴',
            indent: 7,
            leaf: true,
            href: '/components/accordion'
          },
          {
            label: 'AppBar 顶部应用栏',
            indent: 7,
            leaf: true,
            href: '/components/app_bar'
          },
          {
            label: 'Paper 纸张',
            indent: 7,
            leaf: true,
            href: '/components/paper'
          },
          {
            label: 'Card 卡片',
            indent: 7,
            leaf: true,
            href: '/components/card'
          }
        ]
      }, {
        label: 'Data 数据展示',
        indent: 5,
        children: [
          {
            label: 'Badge 徽章',
            indent: 7,
            leaf: true,
            href: '/components/badge'
          },
          {
            label: 'Chip 纸片',
            indent: 7,
            leaf: true,
            href: '/components/chip'
          },
          {
            label: 'Divider 分割线',
            indent: 7,
            leaf: true,
            href: '/components/divider'
          },
          {
            label: 'Icons 图标',
            indent: 7,
            leaf: true,
            href: '/components/icon'
          },
          {
            label: 'List 列表',
            indent: 7,
            leaf: true,
            href: '/components/list'
          },
          {
            label: 'Table 表格',
            indent: 7,
            leaf: true,
            href: '/components/table'
          },
          {
            label: 'Typography 文字铸排',
            indent: 7,
            leaf: true,
            href: '/components/typography'
          },
          {
            label: 'Tooltip 文字提示',
            indent: 7,
            leaf: true,
            href: '/components/tooltip'
          },
          {
            label: 'Tree 树形控件',
            indent: 7,
            leaf: true,
            href: '/components/tree'
          },
          {
            label: 'Timeline 时间轴',
            indent: 7,
            leaf: true,
            href: '/components/timeline'
          },
          {
            label: 'Steps 步骤条',
            indent: 7,
            leaf: 7,
            href: '/components/steps'
          },
          {
            label: 'Pagination 分页',
            indent: 7,
            leaf: 7,
            href: '/components/pagination'
          }
        ]
      }
    ]
  }, {
    label: 'Styles 样式表单',
    indent: 3
  }, {
    label: 'Customization 样式个性化',
    indent: 3
  }
]

const Components = defineComponent({
  methods: {
    renderNodes (data) {
      if (!data) return null
      return data.map(o => {
        if (o.leaf) return (
          <ListItem onClick={this.handleRoute(o)} indent={o.indent} class={this.classes.items} label={o.label}></ListItem>
        )
        return <ListSubheader indent={o.indent} label={o.label}>
          {this.renderNodes(o.children)}
        </ListSubheader>
      })
    },
    handleRoute (target) {
      return () => {
        if (this.$route.path === target.href) return
        this.$router.push(target.href)
      }
    }
  },
  render () {
    return <div>
      <ScrollPanel class={this.classes.navBar}>
        <List>
          {
            this.renderNodes(NAV_CONFIG)
          }
        </List>
      </ScrollPanel>
      <ScrollPanel class={this.classes.rightPanel}>
        <div class={this.classes.content}>
          <router-view></router-view>
        </div>
      </ScrollPanel>
    </div>
  }
})

export default withStyles(styles)(Components)