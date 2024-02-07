// import {TypeOrmModuleOptions} from '@nestjs/typeorm'
// export const typeOrmConfig: TypeOrmModuleOptions = {
//     type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'Cubix@123',
//       database: 'nestjs_quiz',
//       entities: [__dirname + '/../**/*.entity.{js,ts}'],
//       synchronize: true,

// }
import { ConfigModule, ConfigService } from '@nestjs/config'
import {TypeOrmModuleAsyncOptions, TypeOrmModuleOptions} from '@nestjs/typeorm'
import 'dotenv/config';
export default class TypeOrmConfig {
  static getOrmConfig(configService: ConfigService) : TypeOrmModuleOptions 
  {
    return {
            type: 'mysql',
            // host: configService.get("DB_HOST"),
            // port: configService.get("DB_PORT"),
            // username: configService.get("DB_USERNAME"),
            // password: configService.get("DB_PASSWORD"),
            // database: configService.get("DB_NAME"),
            host: process.env.DB_HOST,
            port: parseInt(process.env.DB_PORT,10),
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            entities: [__dirname + '/../**/*.entity.{js,ts}'],
            synchronize: true,
    }
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService:ConfigService) : 
  Promise<TypeOrmModuleOptions> => await TypeOrmConfig.getOrmConfig(configService),
  inject: [ConfigService]
}