const { resolve } = require('path')

const root = resolve(process.cwd())

module.exports = {
  root,
  logs: resolve(root, 'db/logs'),
  data: resolve(root, 'db/data')
}
