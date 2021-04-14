import { withStyles } from 'packages'
import { props, styles as paperStyles } from 'packages/Paper'
import UsageDoc from '!!raw-loader!./Usage.doc.js'
import sortBy from 'lodash/sortBy'
import Doc from '../Doc'
import * as DemoA from './_demos/_A.demo'
import * as DemoB from './_demos/_B.demo'
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
      const classes = paperStyles(this.$theme)
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
      title="Paper 纸张"
      description="在屏幕上展现纸张的物理属性。"
      usageDoc={UsageDoc}
      propDataSource={this.props}
      classNameDataSource={this.classNames}>
      <DemoBackground title="不带轮廓的纸张" module={DemoA} theme="dark" />
      <DemoBackground title="带轮廓的纸张" module={DemoB}></DemoBackground>
    </Doc>
  }
}

export default withStyles(styles)(ComponentDoc)