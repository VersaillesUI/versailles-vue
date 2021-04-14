import { withStyles } from 'packages'
import { props } from 'packages/ScrollPanel'
import UsageDoc from '!!raw-loader!./Usage.doc.js'
import sortBy from 'lodash/sortBy'
import Doc from '../Doc'

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

const FlexBoxDesc = {
  data () {
    return {
      columns: [
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
    }
  },
  render () {
    return <Doc
      title="Scroll Panel 滚动条面板"
      description="滚动条面板可以让你在不同浏览器使用相同的滚动条样式。"
      usageDoc={UsageDoc}
      propDataSource={this.props} />
  }
}

export default withStyles(styles)(FlexBoxDesc)