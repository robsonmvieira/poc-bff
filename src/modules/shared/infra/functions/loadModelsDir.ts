import * as path from 'path'
import * as fs from 'fs'
export function readModelsDir(dir) {
  const files = fs.readdirSync(dir)
  const entities = []
  files.forEach(file => {
    const filePath = path.resolve(dir, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      readModelsDir(filePath)
    } else if (file.endsWith('.model.ts') || file.endsWith('.model.js')) {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const entityModule = require(filePath)
        Object.values(entityModule).forEach(entity => {
          if (typeof entity === 'function') {
            entities.push(entity)
          }
        })
        return entities
      } catch (error) {
        console.error(`Error loading entity from file ${filePath}: `, error)
      }
    }
  })
}
