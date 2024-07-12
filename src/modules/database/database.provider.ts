import { DataSource } from 'typeorm'
import * as path from 'path'
import * as fs from 'fs'
import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'

const rootDir = path.resolve(__dirname, '../')
const entities = []
function readModelsDir(dir) {
  const files = fs.readdirSync(dir)
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
            // Check if the export is a class (function)
            entities.push(entity)
          }
        })
      } catch (error) {
        console.error(`Error loading entity from file ${filePath}: `, error)
      }
    }
  })
}

readModelsDir(rootDir)

@Injectable()
export class DatabaseProvider {
  constructor(private configService: ConfigService) {}

  createDataSource() {
    return new DataSource({
      type: 'postgres',
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USERNAME'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_DATABASE'),
      entities,
      synchronize: true
    })
  }
}

export const databaseProvider = {
  provide: 'dbConnectionTypeOrm',
  useFactory: async (configService: ConfigService) => {
    const dataSource = new DatabaseProvider(configService).createDataSource()
    return dataSource.initialize()
  },
  inject: [ConfigService]
}
