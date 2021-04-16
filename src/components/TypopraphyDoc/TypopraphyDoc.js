import { withStyles } from 'packages'
import { props, styles as paperStyles } from 'packages/Typography'
import UsageDoc from '!!raw-loader!./Usage.doc.js'
import sortBy from 'lodash/sortBy'
import Doc from '../Doc'
import * as DemoA from './_demos/_A.demo'
import DemoBackground from '../DemoBackground'

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
      const classes = paperStyles(this.theme)
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
      title="Typography 文字铸排"
      description="使用文字铸排可以尽可能清晰、高效地展示您的设计和内容。"
      usageDoc={UsageDoc}
      propDataSource={this.props}
      classNameDataSource={this.classNames}>
      <DemoBackground title="文字铸排所有类型" module={DemoA} />
    </Doc>
  }
}

export default withStyles(styles)(ComponentDoc)