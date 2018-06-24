const { statSync, mkdirSync } = require('fs')
const { resolve } = require('path')

const paths = require('../config/paths')

module.exports = (path) => {
  let result = true
  let directoriesArray = path.split('/')
  let root = paths.root
  let currentDir = resolve(paths.root, directoriesArray[0])

  directoriesArray.forEach((dir, i) => {
    try {
      statSync(currentDir)
    } catch(error) {
      result = false
      mkdirSync(currentDir)
    } finally {
      if (i < directoriesArray.length - 1) {
        currentDir = resolve(currentDir, directoriesArray[i + 1])
      }
    }
  })

  return result
}
