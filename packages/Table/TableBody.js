import { defineComponent } from 'vue'
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
    },
    bodyWrapper: {
      height: '100%',
      overflow: 'hidden',
      '.scrollbar-track': {
        zIndex: 12
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
  },
  width: {
    type: String
  },
  hasScroller: {
    type: Boolean,
    default () {
      return true
    }
  },
  tableWidth: {
    type: Number
  }
}

const Table = defineComponent({
  props,
  methods: {
    renderColGroups () {
      if (!this.colgroups) return []
      return this.colgroups.map(o => {
        return <col width={o.width}></col>
      })
    },
    renderRows (data, columns) {
      if (!data) return
      return data.map((o, index) => {
        return <tr class={clsx([
          this.classes.row,
          this.bordered && index === 0 && this.classes.firstRow
        ])}>
          {
            columns.map(col => {
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
    handleNativeScrollbarPositionUpdate (evt) {
      this.$emit('scroll', {
        scrollTop: evt.target.scrollTop - evt.wheelDeltaY
      })
    },
    handleScrollbarPositionUpdate (scrollbar) {
      this.$emit('scroll', scrollbar)
    },
    scrollTo (x, y) {
      if (this.hasScroller) {
        this.$refs.scrollPanel.scrollTo(x, y)
      } else {
        this.$refs.scrollPanel.scrollLeft = x
        this.$refs.scrollPanel.scrollTop = y
      }
    }
  },
  computed: {
    ScrollPanel () {
      return this.hasScroller ? ScrollPanel : 'div'
    }
  },
  render (h) {
    return <div class={this.classes.root}>
      <this.ScrollPanel
        ref="scrollPanel"
        class={this.classes.bodyWrapper}
        contentStyle={this.hasScroller && {
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          width: this.tableWidth + 'px'
        }}
        onWheel={this.handleNativeScrollbarPositionUpdate}
        onUpdate={this.handleScrollbarPositionUpdate}>
        <table class={this.classes.table} style={{ width: this.width }}>
          <colgroup>
            {this.renderColGroups()}
          </colgroup>
          <tbody>
            {this.renderRows(this.dataSource, this.columns)}
          </tbody>
        </table>
      </this.ScrollPanel>
    </div>
  }
})

export default withStyles(styles, 'TableBody', 'Vui')(Table)