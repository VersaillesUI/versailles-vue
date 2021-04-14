import Vue from 'vue'
import { withStyles } from '../styles'
import FlexBox from '../FlexBox'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export const styles = (theme) => {
  return {
    root: {
      display: 'flex'
    },
    tableHeader: {
      flexShrink: 0
    },
    tableBody: {
      flexShrink: 1,
      overflow: 'hidden'
    }
  }
}

export const props = {
  dataSource: {
    type: Array
  },
  columns: {
    type: Array
  },
  size: {
    type: String,
    default () {
      return 'medium'
    }
  },
  bordered: {
    type: Boolean
  },
  defaultAlign: {
    type: String,
    default () {
      return 'center'
    }
  }
}

const Table = Vue.extend({
  props,
  methods: {
    traverse (data, callback, deepIndex = 0) {
      data.forEach((o, index) => {
        if (o.hasOwnProperty('children')) {
          callback(o, index, deepIndex, data)
          this.traverse(o.children, callback, deepIndex + 1)
        } else {
          callback(o, index, deepIndex, data)
        }
      })
    },
    handleUpdateScrollLeft (left) {
      this.$refs.header.$el.scrollLeft = left
    }
  },
  computed: {
    colgroups () {
      const nodes = []
      this.traverse(this.columns, (item) => {
        if (item.hasOwnProperty('children')) {
          return
        }
        nodes.push(item)
      })
      return nodes
    }
  },
  render (h) {
    return <FlexBox flexDirection="column" class={this.classes.root}>
      <TableHeader
        ref="header"
        defaultAlign={this.defaultAlign}
        bordered={this.bordered}
        size={this.size}
        colgroups={this.colgroups}
        class={this.classes.tableHeader}
        columns={this.columns} />
      <TableBody
        ref="body"
        defaultAlign={this.defaultAlign}
        bordered={this.bordered}
        size={this.size}
        onScrollLeft={this.handleUpdateScrollLeft}
        colgroups={this.colgroups}
        columns={this.columns}
        class={this.classes.tableBody}
        dataSource={this.dataSource} />
    </FlexBox>
  }
})

export default withStyles(styles, 'Table', 'Vui')(Table)