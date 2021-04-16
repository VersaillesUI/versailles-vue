import { defineComponent } from 'vue'
import { withStyles } from '../styles'
import FlexBox from '../FlexBox'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import uniq from 'lodash/uniq'
import Paper from 'packages/Paper'
import clsx from 'clsx'

export const styles = (theme) => {
  return {
    root: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column'
    },
    tableHeader: {
      flexShrink: 0
    },
    tableBody: {
      flexShrink: 1,
      flexGrow: 1,
      flexBasis: 'auto',
      overflow: 'hidden'
    },
    fixedLeft: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      zIndex: 10
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

const FIXED = {
  LEFT: 'left',
  RIGHT: 'right'
}

const Table = defineComponent({
  props,
  data () {
    return {
      colgroups: [],
      tableWidth: 0
    }
  },
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
    handleUpdateLeftRightScrollPosition ({ scrollLeft, scrollTop }) {
      this.$refs.header.$el.scrollLeft = scrollLeft
      this.$refs.fixedLeftBody.scrollTo(0, scrollTop)
    },
    handleUpdateRightCenterScrollPosition ({ scrollTop }) {
      this.$refs.body.scrollTo(0, scrollTop)
    },
    calcColWidth (colgroups) {
      if (!this.$el) return 0
      const widthes = colgroups.filter(o => o.width).map(o => o.width)
      const len = colgroups.length - widthes.length
      const exts = uniq(widthes.map(o => o.replace(/([0-9])/g, '')))
      const width = this.$el.scrollWidth
      let colWidth = width
      exts.map(o => {
        return widthes.filter(t => {
          return new RegExp(o).test(t)
        }).forEach(t => {
          const val = t.replace(/[^0-9]/g, '')
          if (o === '%') {
            colWidth -= val * width
          } else {
            colWidth -= val
          }
        })
      })
      return Math.max(colWidth / len, 100) + 'px'
    },
    calcColgroups () {
      let width = 0
      const nodes = []
      this.traverse(this.columns, (item) => {
        if (item.hasOwnProperty('children')) {
          return
        }
        item.width = item.width
        const widthNum = Number(item.width.replace(/[^0-9]/g, ''))
        if (/\%$/.test(item.width)) {
          width += this.$el.scrollWidth * widthNum
        } else {
          width += widthNum
        }
        nodes.push(item)
      })
      const colWidth = this.calcColWidth(nodes)
      this.tableWidth = width
      return nodes.map(o => {
        o.width = o.width || colWidth
        return o
      })
    }
  },
  computed: {
    fixedLeftColgroups () {
      if (!this.colgroups) return []
      return this.colgroups.filter(o => o.fixed === FIXED.LEFT)
    },
    fixedRightColgroups () {
      if (!this.colgroups) return []
      return this.colgroups.filter(o => o.fixed === FIXED.LEFT)
    }
  },
  mounted () {
    this.colgroups = this.calcColgroups()
  },
  render (h) {
    const leftColumns = this.columns.filter(o => o.fixed === FIXED.LEFT)
    return <FlexBox flexDirection="column" class={this.classes.root}>
      <Paper square varientCenter elevation={6} class={clsx([
        this.classes.fixedLeft,
        this.classes.root
      ])}>
        <TableHeader
          width="auto"
          defaultAlign={this.defaultAlign}
          bordered={this.bordered}
          size={this.size}
          colgroups={this.fixedLeftColgroups}
          class={this.classes.tableHeader}
          columns={leftColumns} />
        <TableBody
          ref="fixedLeftBody"
          width="auto"
          hasScroller={false}
          defaultAlign={this.defaultAlign}
          bordered={this.bordered}
          size={this.size}
          onScroll={this.handleUpdateRightCenterScrollPosition}
          colgroups={this.fixedLeftColgroups}
          columns={leftColumns}
          class={this.classes.tableBody}
          dataSource={this.dataSource} />
      </Paper>
      <TableHeader
        ref="header"
        tableWidth={this.tableWidth}
        defaultAlign={this.defaultAlign}
        bordered={this.bordered}
        size={this.size}
        colgroups={this.colgroups}
        class={this.classes.tableHeader}
        columns={this.columns} />
      <TableBody
        ref="body"
        width="100%"
        tableWidth={this.tableWidth}
        defaultAlign={this.defaultAlign}
        bordered={this.bordered}
        size={this.size}
        onScroll={this.handleUpdateLeftRightScrollPosition}
        colgroups={this.colgroups}
        columns={this.columns}
        class={this.classes.tableBody}
        dataSource={this.dataSource} />
    </FlexBox>
  }
})

export default withStyles(styles, 'Table', 'Vui')(Table)