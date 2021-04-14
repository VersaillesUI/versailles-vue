import Vue from 'vue'
import { withStyles } from '../styles'
import ScrollPanel from '../ScrollPanel'
import clsx from 'clsx'

export const styles = (theme) => {
  return {
    root: {
      width: '100%'
    },
    table: {
      tableLayout: 'fixed',
      width: '100%',
      borderCollapse: 'collapse'
    },
    cell: {
      borderBottom: '1px solid',
      borderBottomColor: 'rgba(0, 0, 0, 0.12)'
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
    },
    firstRow: {
      '>td': {
        borderTopWidth: 0
      }
    }
  }
}

export const props = {
  columns: {
    type: Array
  },
  dataSource: {
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
    renderColGroups () {
      return this.colgroups.map(o => {
        return <col width={o.width}></col>
      })
    },
    renderRows (data) {
      if (!data) return
      return data.map((o, index) => {
        return <tr class={clsx([
          this.classes.row,
          this.bordered && index === 0 && this.classes.firstRow
        ])}>
          {
            this.columns.map(col => {
              return <td class={clsx([
                this.classes.cell,
                this.classes[col.align || this.defaultAlign],
                this.classes[this.size],
                this.bordered && this.classes.bordered
              ])}>
                {
                  col.renderCell ? col.renderCell.call(this, o, col, index) : <span class={this.classes.column}>{o[col.dataIndex]}</span>
                }
              </td>
            })
          }
        </tr>
      })
    },
    handleScrollbarPositionUpdate (scrollbar) {
      this.$emit('scrollLeft', scrollbar.scrollLeft)
    }
  },
  render (h) {
    return <ScrollPanel contentStyle={{
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }} onUpdate={this.handleScrollbarPositionUpdate} class={this.classes.root}>
      <table class={this.classes.table}>
        <colgroup>
          {this.renderColGroups()}
        </colgroup>
        <tbody>
          {this.renderRows(this.dataSource)}
        </tbody>
      </table>
    </ScrollPanel>
  }
})

export default withStyles(styles, 'TableBody', 'Vui')(Table)