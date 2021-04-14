import { withStyles, Typography, Table, CodeHighlight } from 'packages'

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

const Doc = {
  data () {
    return {
      propColumns: [
        {
          title: '属性',
          dataIndex: 'name',
          width: '200px'
        },
        {
          title: '类型',
          dataIndex: 'type',
          width: '200px'
        },
        {
          title: '默认值',
          dataIndex: 'defaultValue',
          width: '200px'
        },
        {
          title: '描述',
          dataIndex: 'description'
        }
      ],
      styleColumns: [
        {
          title: 'CSS 规则',
          dataIndex: 'name',
          width: '200px'
        },
        {
          title: '样式名称',
          dataIndex: 'globalName'
        }
      ]
    }
  },
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    },
    usageDoc: {
      type: String
    },
    propDataSource: {
      type: Array
    },
    classNameDataSource: {
      type: Array
    }
  },
  render () {
    return <div class={this.classes.root}>
      <Typography textTransform="capitalize" gutterBottom varient="h4">{this.title}</Typography>
      <Typography gutterBottom varient="h5">{this.description}</Typography>
      <CodeHighlight class={this.classes.margin} code={this.usageDoc} />
      <div class={this.classes.margin}>
        {this.$slots.default}
      </div>
      <Typography class={this.classes.margin} gutterBottom varient="h4">API</Typography>
      <Table defaultAlign="left" columns={this.propColumns} dataSource={this.propDataSource}></Table>
      {
        this.classNameDataSource && [
          <Typography class={this.classes.margin} gutterBottom varient="h4">CSS</Typography>,
          <Table defaultAlign="left" columns={this.styleColumns} dataSource={this.classNameDataSource}></Table>
        ]
      }
    </div>
  }
}

export default withStyles(styles)(Doc)