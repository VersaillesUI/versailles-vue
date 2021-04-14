import { withStyles } from 'packages'
import { props, styles as flexBoxStyles } from 'packages/FlexBox'
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

const ComponentDoc = {
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
      const classes = flexBoxStyles(this.$theme)
      return sortBy(Object.keys(classes)).map(key => {
        return {
          name: key,
          globalName: `.Vui-flex_box-${key}`
        }
      })
    }
  },
  render () {
    return <Doc
      title="FlexBox 弹性盒布局"
      description="弹性盒布局可以让你更轻松的掌控不用尺寸的页面中元素的布局。"
      usageDoc={UsageDoc}
      propDataSource={this.props}
      classNameDataSource={this.classNames}>
    </Doc>
  }
}

export default withStyles(styles)(ComponentDoc)