const defaultExtPattern = /\.demo\.jsx?$/
const name = '__source'

module.exports = function ({ types: t }) {
  return {
    visitor: {
      Program: {
        exit(path, state) {
          state.opts.pattern = state.opts.pattern ? new RegExp(state.opts.pattern) : defaultExtPattern
          const filename = state.file.opts.filename
          if (!defaultExtPattern.test(filename)) return
          const program = path.scope.getProgramParent().path
          const exportNode = t.variableDeclaration('var', [
            t.variableDeclarator(t.identifier(name), t.StringLiteral(state.file.code))
          ])

          program.node.body.push(exportNode)
          
          program.node.body.push(
            t.exportNamedDeclaration(
              null,
              [ t.exportSpecifier(t.identifier(name), t.identifier(name)) ],
              null
            )
          )
        }
      }
    }
  }
}