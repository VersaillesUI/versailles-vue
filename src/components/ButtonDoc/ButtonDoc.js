import { withStyles } from 'packages'
import { props, styles as buttonStyles } from 'packages/Button'
import UsageDoc from '!!raw-loader!./Usage.doc.js'
import sortBy from 'lodash/sortBy'
import Doc from '../Doc'
import DemoBackground from '../DemoBackground'
import * as DemoA from './_demos/_A.demo'
import * as DemoB from './_demos/_B.demo'

const styles = theme => {
  return {
    root: {
      paddingBottom: theme.spacing(4)
    },
    margin: {
      marginTop: theme.spacing(3)
    }
  }
}

const ComponentDoc = {
  data () {
    return {
      propColumns: [
        {
          title: '属性',
          dataIndex: 'name'
        },
        {
          title: '类型',
          dataIndex: 'type'
        },
        {
          title: '默认值',
          dataIndex: 'defaultValue'
        },
        {
          title: '描述',
          dataIndex: 'description'
        }
      ],
      styleColumns: [
        {
          title: '规则',
          dataIndex: 'name'
        },
        {
          title: '样式名称',
          dataIndex: 'globalName'
        }
      ]
    }
  },
  computed: {
    props () {
      return sortBy(Object.keys(props)).map(key => {
        const item = props[key]
        const type = Array.isArray(item.type) ? item.type.map(o => o.propType).join(' | ') : item.type.propType
        const defaultValue = typeof item.default === 'function' ? item.default() : item.default
        return {
          name: key,
          type,
          defaultValue: defaultValue !== undefined ? String(defaultValue) : '-',
          description: item.description
        }
      })
    },
    classNames () {
      const classes = buttonStyles(this.$theme)
      return sortBy(Object.keys(classes)).map(key => {
        return {
          name: key,
          globalName: `.Vui-button-${key}`
        }
      })
    }
  },
  render () {
    return <Doc
      title="Button 按钮"
      description="只需点击按钮，用户就可以触发动作或做出选择。"
      usageDoc={UsageDoc}
      propDataSource={this.props}
      classNameDataSource={this.classNames}>
      <DemoBackground theme="dark" title="填充按钮" module={DemoA}></DemoBackground>
      <DemoBackground title="轮廓按钮" module={DemoB}></DemoBackground>
    </Doc>
  }
}

export default withStyles(styles)(ComponentDoc)