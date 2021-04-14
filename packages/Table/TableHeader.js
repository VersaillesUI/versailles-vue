import Vue from 'vue'
import { withStyles } from '../styles'
import ScrollPanel from '../ScrollPanel'
import clsx from 'clsx'

export const styles = (theme) => {
  return {
    root: {
      width: '100%',
      overflow: 'hidden',
      backgroundColor: 'rgba(0, 0, 0, 0.04)',
      position: 'relative'
    },
    table: {
      tableLayout: 'fixed',
      width: '100%',
      borderCollapse: 'collapse'
    },
    cell: {
      padding: theme.spacing(2, 2, 2, 2)
    },
    column: {

    },
    left: {
      textAlign: 'left'
    },
    center: {
      textAlign: 'center'
    },
    right: {
      textAlign: 'right'
    },
    small: {
      padding: theme.spacing(1.5, 2, 1.5, 2),
      fontSize: '0.825rem'
    },
    medium: {
      padding: theme.spacing(2, 2, 2, 2),
      fontSize: '1rem'
    },
    bordered: {
      border: '1px solid',
      borderColor: 'rgba(0, 0, 0, 0.08)'
    }
  }
}

export const props = {
  columns: {
    type: Array
  },
  colgroups: {
    type: Array
  },
  size: {
    type: String
  },
  bordered: {
    type: Boolean
  },
  defaultAlign: {
    type: String
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
    flatten (data) {
      return data.map(o => {
        if (o.children) {
          return this.flatten(o.children)
        }
        return o
      }).flat()
    },
    renderNodes (data) {
      const nodes = []
      const flatten = this.flatten
      this.traverse(data, (item, index, deepIndex) => {
        if (!nodes[deepIndex]) {
          nodes[deepIndex] = []
        }
        if (item.hasOwnProperty('children')) {
          Reflect.defineProperty(item, 'colspan', {
            get () {
              const flatted = flatten(item.children)
              return flatted.length
            }
          })
        } else {
          Reflect.defineProperty(item, 'rowspan', {
            get () {
              return nodes.length - deepIndex
            }
          })
        }
        nodes[deepIndex][index] = item
      })
      return nodes.map(row => {
        return <tr class={this.classes.row}>
          {
            row.map(col => {
              return this.renderNode(col)
            })
          }
        </tr>
      })
    },
    renderNode (data) {
      return <th class={[
        this.classes.cell,
        this.classes[data.align || this.defaultAlign],
        this.classes[this.size],
        this.bordered && this.classes.bordered
      ]} colspan={data.colspan} rowspan={data.rowspan}>
        {
          data.renderHeader ? data.renderHeader(data.title, data) : 
            <span class={this.classes.column}>
              {data.title}
            </span>
        }
      </th>
    },
    renderColGroups () {
      return this.colgroups.map(o => {
        return <col width={o.width}></col>
      })
    }
  },
  render (h) {
    return <div class={this.classes.root}>
      <table class={this.classes.table}>
        <colgroup>
          {this.renderColGroups()}
        </colgroup>
        <thead>
          {this.renderNodes(this.columns)}
        </thead>
      </table>
    </div>
  }
})

export default withStyles(styles, 'TableHeader', 'Vui')(Table)